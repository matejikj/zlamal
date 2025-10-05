(() => {
  "use strict";

  const teamsData = window.teamsData;

  const ALL_LEAGUES_VALUE = "__ALL__";

  // ---- utils & elementy ---------------------------------------------
  const qs = (s, r = document) => r.querySelector(s);

  const els = {
    // meta / podklad
    backgroundImage: () => qs("#backgroundImage"),
    backgroundInfo: () => qs("#backgroundInfo"),
    removeBackground: () => qs("#removeBackground"),

    // form
    aspectRatio: () => qs("#aspectRatio"),
    league: () => qs("#league"),
    useHomeCustom: () => qs("#useHomeCustom"),
    useAwayCustom: () => qs("#useAwayCustom"),
    homeTeamSelect: () => qs("#homeTeamSelect"),
    awayTeamSelect: () => qs("#awayTeamSelect"),
    homeTeamName: () => qs("#homeTeamName"),
    awayTeamName: () => qs("#awayTeamName"),
    homeColor: () => qs("#homeColor"),
    awayColor: () => qs("#awayColor"),
    homeScore: () => qs("#homeScore"),
    awayScore: () => qs("#awayScore"),
    eventType: () => qs("#eventType"),
    eventTeam: () => qs("#eventTeam"),
    eventPlayer: () => qs("#eventPlayer"),
    eventMinute: () => qs("#eventMinute"),
    eventExtra: () => qs("#eventExtra"),
    addEventBtn: () => qs("#addEventBtn"),
    eventsContainer: () => qs("#eventsContainer"),
    useShortNames: () => qs("#useShortNames"),
    statusText: () => qs("#statusText"),
    resetBtn: () => qs("#resetBtn"),

    // json náhled / stažení
    jsonPreview: () => qs("#jsonPreview"),
    downloadJsonBtn: () => qs("#downloadJsonBtn"),

    // import json
    importJsonFile: () => qs("#importJsonFile"),
    importJsonText: () => qs("#importJsonText"),
    importJsonFromTextBtn: () => qs("#importJsonFromTextBtn"),
    importJsonError: () => qs("#importJsonError"),
  };

  // ---- malý store ---------------------------------------------------
  const createStore = (initial) => {
    let state = structuredClone(initial);
    const subs = new Set();
    return {
      getState: () => state,
      subscribe: (fn) => (subs.add(fn), () => subs.delete(fn)),
      setState: (patch) => { state = { ...state, ...patch }; subs.forEach((fn) => fn(state)); },
      replace: (next) => { state = structuredClone(next); subs.forEach((fn) => fn(state)); },
    };
  };

  const initialState = {
    // meta
    backgroundDataUrl: "",
    backgroundName: "",
    aspectRatio: "9:16",

    // výchozí liga = ALL (pro přáteláky)
    league: ALL_LEAGUES_VALUE,

    // týmy
    useHomeCustom: false,
    useAwayCustom: false,
    homeTeamName: "",
    awayTeamName: "",
    homeColor: "#ffffff",
    awayColor: "#ffffff",

    // skóre a stav
    homeScore: 0,
    awayScore: 0,
    statusText: "",

    // ostatní
    events: [],           // {id, type, team("home"|"away"), player, minute, extra}
    useShortNames: false,
  };

  const store = createStore(initialState);

  // ---- helpers: týmy & vyhledávání ---------------------------------
  function getAllTeamsFlat() {
    const out = [];
    for (const [lg, arr] of Object.entries(teamsData)) {
      (arr || []).forEach(t => out.push({ ...t, __league: lg }));
    }
    return out;
  }

  function getTeamsForLeague(league) {
    if (league === ALL_LEAGUES_VALUE) return getAllTeamsFlat();
    return (teamsData[league] || []).map(t => ({ ...t, __league: league }));
  }

  function findTeamByName(league, name) {
    if (!name) return null;
    const pool = getTeamsForLeague(league);
    return pool.find(t => t.name === name) || null;
  }

  function getDisplayName({ league, useCustom, customName, selectedName, useShort }) {
    if (useCustom && customName.trim()) return customName.trim();
    const team = findTeamByName(league, selectedName);
    if (!team) return selectedName || "";
    return useShort && team.short ? team.short : team.name;
  }

  // ---- barvy dle výběru týmu ---------------------------------------
  function updateSideColor(side /* "home" | "away" */) {
    const s = store.getState();
    const selectEl = side === "home" ? els.homeTeamSelect() : els.awayTeamSelect();
    const colorEl = side === "home" ? els.homeColor() : els.awayColor();
    const selected = selectEl.value || "";
    const teamObj = findTeamByName(s.league, selected);
    if (teamObj && teamObj.color) {
      colorEl.value = teamObj.color;
      store.setState({
        [side === "home" ? "homeColor" : "awayColor"]: teamObj.color
      });
      renderJsonPreview();
    }
  }

  function applyDefaultColors() {
    updateSideColor("home");
    updateSideColor("away");
  }

  // ---- selecty: liga & týmy ----------------------------------------
  const fillLeagueSelect = () => {
    const sel = els.league();
    sel.innerHTML = "";

    const allOpt = document.createElement("option");
    allOpt.value = ALL_LEAGUES_VALUE;
    allOpt.textContent = "Všechny (všechny ligy)";
    sel.appendChild(allOpt);

    for (const league of Object.keys(teamsData)) {
      const opt = document.createElement("option");
      opt.value = league;
      opt.textContent = league;
      sel.appendChild(opt);
    }

    if (!store.getState().league) {
      store.setState({ league: ALL_LEAGUES_VALUE });
    }
    sel.value = store.getState().league || ALL_LEAGUES_VALUE;
  };

  const fillTeamSelects = () => {
    const league = store.getState().league || ALL_LEAGUES_VALUE;
    const teams = getTeamsForLeague(league);
    teams.sort((a, b) => a.name.localeCompare(b.name, "cs"));

    const homeSel = els.homeTeamSelect();
    const awaySel = els.awayTeamSelect();

    const prevHome = homeSel.value;
    const prevAway = awaySel.value;

    const mkOptions = (sel) => {
      sel.innerHTML = "";
      teams.forEach((t) => {
        const opt = document.createElement("option");
        opt.value = t.name;
        const lgSuffix = league === ALL_LEAGUES_VALUE ? ` — ${t.__league}` : "";
        opt.textContent = `${t.name}${t.short ? ` (${t.short})` : ""}${lgSuffix}`;
        sel.appendChild(opt);
      });
    };

    mkOptions(homeSel);
    mkOptions(awaySel);

    if (prevHome && teams.some(t => t.name === prevHome)) {
      homeSel.value = prevHome;
    } else if (teams[0]) {
      homeSel.value = teams[0].name;
    }

    if (prevAway && teams.some(t => t.name === prevAway)) {
      awaySel.value = prevAway;
    } else if (teams[1]) {
      awaySel.value = teams[1].name;
    } else if (teams[0]) {
      awaySel.value = teams[0].name;
    }

    applyDefaultColors();
  };

  // ---- viditelnost custom polí (globální, ať to jde volat i z importu)
  function setCustomVisibilityFromState() {
    const s = store.getState();
    els.homeTeamName().style.display = s.useHomeCustom ? "" : "none";
    els.homeTeamSelect().style.display = s.useHomeCustom ? "none" : "";
    els.awayTeamName().style.display = s.useAwayCustom ? "" : "none";
    els.awayTeamSelect().style.display = s.useAwayCustom ? "none" : "";
  }

  // ---- render: seznam událostí -------------------------------------
  const renderEventsList = () => {
    const root = els.eventsContainer();
    root.innerHTML = "";
    const { events } = store.getState();
    if (!events.length) {
      root.innerHTML = `<div class="muted">Zatím žádné události.</div>`;
      return;
    }
    events.forEach((e) => {
      const line = document.createElement("div");
      line.className = "event-row";
      const minute = e.extra && e.extra.trim() ? `${e.minute}${e.extra}` : `${e.minute}'`;
      const side = e.team === "home" ? "DOM" : "HOS";
      line.innerHTML = `
      <span class="tag">${side}</span>
      <span class="mono">${minute}</span>
      <span>${e.type}</span>
      <span class="grow">${e.player || ""}</span>
      <button class="btn btn--sm btn--ghost" data-id="${e.id}" title="Smazat">×</button>
    `;
      root.appendChild(line);
    });

    root.querySelectorAll("button[data-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        store.setState({ events: store.getState().events.filter((x) => x.id !== id) });
        renderEventsList();
        renderJsonPreview();
      });
    });
  };

  // ---- JSON: build + preview + download -----------------------------
  function buildJson() {
    const s = store.getState();

    const homeSelected = els.homeTeamSelect().value || "";
    const awaySelected = els.awayTeamSelect().value || "";

    const homeTeamObj = findTeamByName(s.league, homeSelected);
    const awayTeamObj = findTeamByName(s.league, awaySelected);

    const payload = {
      meta: {
        generatedAt: new Date().toISOString(),
        aspectRatio: s.aspectRatio,
        league: s.league === ALL_LEAGUES_VALUE ? "ALL" : s.league,
        background: s.backgroundDataUrl
          ? { name: s.backgroundName, dataUrl: s.backgroundDataUrl }
          : null
      },
      teams: {
        home: {
          selectedName: homeSelected || null,
          fromDb: !!homeTeamObj,
          db: homeTeamObj ? {
            name: homeTeamObj.name,
            short: homeTeamObj.short || null,
            color: homeTeamObj.color || null,
            logoPath: homeTeamObj.path || null,
            league: homeTeamObj.__league || (s.league === ALL_LEAGUES_VALUE ? null : s.league)
          } : null,
          useCustom: s.useHomeCustom,
          customName: s.homeTeamName || null,
          displayName: getDisplayName({
            league: s.league,
            useCustom: s.useHomeCustom,
            customName: s.homeTeamName || "",
            selectedName: homeSelected,
            useShort: s.useShortNames
          }),
          color: s.homeColor
        },
        away: {
          selectedName: awaySelected || null,
          fromDb: !!awayTeamObj,
          db: awayTeamObj ? {
            name: awayTeamObj.name,
            short: awayTeamObj.short || null,
            color: awayTeamObj.color || null,
            logoPath: awayTeamObj.path || null,
            league: awayTeamObj.__league || (s.league === ALL_LEAGUES_VALUE ? null : s.league)
          } : null,
          useCustom: s.useAwayCustom,
          customName: s.awayTeamName || null,
          displayName: getDisplayName({
            league: s.league,
            useCustom: s.useAwayCustom,
            customName: s.awayTeamName || "",
            selectedName: awaySelected,
            useShort: s.useShortNames
          }),
          color: s.awayColor
        }
      },
      score: { home: s.homeScore, away: s.awayScore },
      statusText: s.statusText || "",
      options: { useShortNames: s.useShortNames },
      events: s.events.map(e => ({
        id: e.id,
        type: e.type,
        team: e.team,
        player: e.player || "",
        minute: e.minute,
        extra: e.extra || ""
      }))
    };

    return payload;
  }

  function renderJsonPreview() {
    const json = buildJson();
    const preview = structuredClone(json);
    if (preview.meta.background?.dataUrl) {
      const du = preview.meta.background.dataUrl;
      preview.meta.background.dataUrl =
        du.length > 120 ? du.slice(0, 60) + " … " + du.slice(-40) : du;
    }
    els.jsonPreview().textContent = JSON.stringify(preview, null, 2);
  }

  function downloadJson() {
    const json = buildJson();
    const blob = new Blob([JSON.stringify(json, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const home = json.teams.home.displayName || "HOME";
    const away = json.teams.away.displayName || "AWAY";
    a.download = `match-${home}-vs-${away}.json`.replace(/\s+/g, "_");
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // ---- Import JSON --------------------------------------------------
  function normalizeLeagueValue(metaLeague, teams) {
    // pokud JSON tvrdí konkrétní ligu a oba týmy z ní pochází, použij ji,
    // pokud jsou z různých lig => ALL
    if (!metaLeague || metaLeague === "ALL") return ALL_LEAGUES_VALUE;
    try {
      const uniq = new Set();
      if (teams?.home?.db?.league) uniq.add(teams.home.db.league);
      if (teams?.away?.db?.league) uniq.add(teams.away.db.league);
      if (uniq.size <= 1 && (uniq.size === 0 || uniq.has(metaLeague))) return metaLeague;
      return ALL_LEAGUES_VALUE;
    } catch { return ALL_LEAGUES_VALUE; }
  }

  function safeNum(n, def = 0) {
    const v = Number(n);
    return Number.isFinite(v) ? v : def;
  }

  function applyImportedJson(data) {
    // 1) meta
    const aspectRatio = (data?.meta?.aspectRatio === "4:5") ? "4:5" : "9:16";
    let leagueValue = normalizeLeagueValue(data?.meta?.league, data?.teams);

    // 2) připrav UI pro novou ligu
    store.setState({ aspectRatio, league: leagueValue });
    els.aspectRatio().value = aspectRatio;
    els.league().value = leagueValue;
    fillTeamSelects(); // naplní ALL/ligové options + nastaví barvy defaultně

    // 3) Pozadí
    if (data?.meta?.background?.dataUrl) {
      store.setState({
        backgroundDataUrl: String(data.meta.background.dataUrl),
        backgroundName: String(data.meta.background.name || "background"),
      });
      els.backgroundInfo().textContent = `Nahráno: ${store.getState().backgroundName} (uloženo jako metadata)`;
      els.removeBackground().disabled = false;
    } else {
      store.setState({ backgroundDataUrl: "", backgroundName: "" });
      els.backgroundImage().value = "";
      els.backgroundInfo().textContent = "Žádný soubor nenahrán.";
      els.removeBackground().disabled = true;
    }

    // 4) Týmy (home/away)
    const sides = ["home", "away"];
    sides.forEach(side => {
      const t = data?.teams?.[side] || {};
      const useCustom = !!t.useCustom;
      const customName = String(t.customName || "");
      const selected = String(t.selectedName || t.db?.name || "");
      const color = String(t.color || t.db?.color || (side === "home" ? "#ffffff" : "#ffffff"));

      // pokud týmy z JSONu pochází z různých lig => přepneme na ALL, ať jdou vybrat
      if (t?.db?.league && leagueValue !== ALL_LEAGUES_VALUE) {
        // když není z meta ligy, přepneme na ALL
        if (t.db.league !== leagueValue) {
          leagueValue = ALL_LEAGUES_VALUE;
          store.setState({ league: leagueValue });
          els.league().value = leagueValue;
          fillTeamSelects();
        }
      }

      // vlastní vs databázový název
      store.setState({
        [side === "home" ? "useHomeCustom" : "useAwayCustom"]: useCustom,
        [side === "home" ? "homeTeamName" : "awayTeamName"]: customName,
        [side === "home" ? "homeColor" : "awayColor"]: color,
      });

      // UI toggle custom
      setCustomVisibilityFromState();

      // nastav select / input
      if (useCustom) {
        (side === "home" ? els.homeTeamName() : els.awayTeamName()).value = customName;
      } else {
        // vyber z listu (v ALL tam položka bude vždy, pokud ji známe)
        const selEl = side === "home" ? els.homeTeamSelect() : els.awayTeamSelect();
        if (selected) {
          // pokud v aktuálním poolu neexistuje, přepneme ALL a naplníme znovu
          const pool = getTeamsForLeague(store.getState().league);
          if (!pool.some(ti => ti.name === selected)) {
            store.setState({ league: ALL_LEAGUES_VALUE });
            els.league().value = ALL_LEAGUES_VALUE;
            fillTeamSelects();
          }
          selEl.value = selected;
        }
      }

      // barva z JSONu (přepíše automatickou)
      const colorEl = side === "home" ? els.homeColor() : els.awayColor();
      colorEl.value = color;
    });

    // 5) Skóre + status + možnost zkrácených názvů
    const homeScore = safeNum(data?.score?.home, 0);
    const awayScore = safeNum(data?.score?.away, 0);
    const statusText = String(data?.statusText || "");
    const useShortNames = !!(data?.options?.useShortNames);

    store.setState({ homeScore, awayScore, statusText, useShortNames });
    els.homeScore().value = homeScore;
    els.awayScore().value = awayScore;
    els.statusText().value = statusText;
    els.useShortNames().checked = useShortNames;

    // 6) Události
    const importedEvents = Array.isArray(data?.events) ? data.events : [];
    const norm = importedEvents.map((e) => ({
      id: e.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2)),
      type: String(e.type || "goal"),
      team: (e.team === "away" ? "away" : "home"),
      player: String(e.player || ""),
      minute: safeNum(e.minute, 0),
      extra: String(e.extra || "")
    }));
    store.setState({ events: norm });
    renderEventsList();

    // 7) Automatická barva podle vybraných týmů, pokud JSON neobsahoval barvu
    // (import už barvu nastavil; tohle jen doplní chybějící)
    if (!data?.teams?.home?.color && !data?.teams?.home?.useCustom) updateSideColor("home");
    if (!data?.teams?.away?.color && !data?.teams?.away?.useCustom) updateSideColor("away");

    // 8) Hotovo – vygeneruj náhled JSONu
    renderJsonPreview();
  }

  // ---- podklad: nahrání/odebrání -----------------------------------
  const wireBackground = () => {
    const info = els.backgroundInfo();
    const btnRemove = els.removeBackground();

    const updateInfo = () => {
      const { backgroundName, backgroundDataUrl } = store.getState();
      if (!backgroundDataUrl) {
        info.textContent = "Žádný soubor nenahrán.";
        btnRemove.disabled = true;
        return;
      }
      info.textContent = `Nahráno: ${backgroundName || "obrázek"} (uloženo jako metadata)`;
      btnRemove.disabled = false;
    };

    els.backgroundImage().addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) {
        store.setState({ backgroundDataUrl: "", backgroundName: "" });
        updateInfo();
        renderJsonPreview();
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        store.setState({ backgroundDataUrl: String(reader.result), backgroundName: file.name });
        updateInfo();
        renderJsonPreview();
      };
      reader.readAsDataURL(file);
    });

    btnRemove.addEventListener("click", () => {
      store.setState({ backgroundDataUrl: "", backgroundName: "" });
      els.backgroundImage().value = "";
      updateInfo();
      renderJsonPreview();
    });

    updateInfo();
  };

  // ---- napojení formuláře ------------------------------------------
  const wireForm = () => {
    // liga
    els.league().addEventListener("change", (e) => {
      store.setState({ league: e.target.value || ALL_LEAGUES_VALUE });
      fillTeamSelects();     // znovu naplní options + barvy
      renderJsonPreview();
    });

    // přepínání custom názvů
    els.useHomeCustom().addEventListener("change", (e) => {
      store.setState({ useHomeCustom: e.target.checked });
      setCustomVisibilityFromState();
      renderJsonPreview();
    });
    els.useAwayCustom().addEventListener("change", (e) => {
      store.setState({ useAwayCustom: e.target.checked });
      setCustomVisibilityFromState();
      renderJsonPreview();
    });

    // výběr konkrétních týmů => barva z DB + JSON
    els.homeTeamSelect().addEventListener("change", () => {
      updateSideColor("home");
      renderJsonPreview();
    });
    els.awayTeamSelect().addEventListener("change", () => {
      updateSideColor("away");
      renderJsonPreview();
    });

    // ruční názvy týmů
    els.homeTeamName().addEventListener("input", renderJsonPreview);
    els.awayTeamName().addEventListener("input", renderJsonPreview);

    // skóre
    els.homeScore().addEventListener("input", (e) => {
      store.setState({ homeScore: Number(e.target.value) || 0 });
      renderJsonPreview();
    });
    els.awayScore().addEventListener("input", (e) => {
      store.setState({ awayScore: Number(e.target.value) || 0 });
      renderJsonPreview();
    });

    // barvy (ruční přepsání)
    els.homeColor().addEventListener("input", (e) => {
      store.setState({ homeColor: e.target.value });
      renderJsonPreview();
    });
    els.awayColor().addEventListener("input", (e) => {
      store.setState({ awayColor: e.target.value });
      renderJsonPreview();
    });

    // status + zkrácené názvy
    els.statusText().addEventListener("input", (e) => {
      store.setState({ statusText: e.target.value });
      renderJsonPreview();
    });
    els.useShortNames().addEventListener("change", (e) => {
      store.setState({ useShortNames: e.target.checked });
      renderJsonPreview();
    });

    // události
    els.addEventBtn().addEventListener("click", () => {
      const type = els.eventType().value;
      const team = els.eventTeam().value;
      const player = els.eventPlayer().value.trim();
      const minute = Math.max(0, Number(els.eventMinute().value) || 0);
      const extra = els.eventExtra().value || "";
      const id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2);
      store.setState({ events: [...store.getState().events, { id, type, team, player, minute, extra }] });
      els.eventPlayer().value = "";
      els.eventExtra().value = "";
      renderEventsList();
      renderJsonPreview();
    });

    // reset
    els.resetBtn().addEventListener("click", () => {
      store.replace(initialState);

      // UI resety
      els.aspectRatio().value = initialState.aspectRatio;

      fillLeagueSelect();
      els.league().value = store.getState().league;
      fillTeamSelects();

      els.useHomeCustom().checked = false;
      els.useAwayCustom().checked = false;
      els.homeTeamName().value = "";
      els.awayTeamName().value = "";
      els.homeColor().value = initialState.homeColor;
      els.awayColor().value = initialState.awayColor;
      els.homeScore().value = initialState.homeScore;
      els.awayScore().value = initialState.awayScore;
      els.useShortNames().checked = false;
      els.statusText().value = "";

      // podklad
      els.backgroundImage().value = "";
      els.backgroundInfo().textContent = "Žádný soubor nenahrán.";
      els.removeBackground().disabled = true;

      renderEventsList();
      setCustomVisibilityFromState();
      renderJsonPreview();
    });

    // JSON download
    els.downloadJsonBtn().addEventListener("click", downloadJson);
  };

  // ---- napojení importu --------------------------------------------
  function wireImportJson() {
    const showError = (msg) => { els.importJsonError().textContent = msg || ""; };

    // Soubor .json
    els.importJsonFile().addEventListener("change", (e) => {
      showError("");
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        try {
          const obj = JSON.parse(String(reader.result));
          applyImportedJson(obj);
        } catch (err) {
          showError("Neplatný JSON v souboru.");
          console.error(err);
        }
      };
      reader.onerror = () => showError("Soubor se nepodařilo načíst.");
      reader.readAsText(file);
    });

    // Textarea
    els.importJsonFromTextBtn().addEventListener("click", () => {
      showError("");
      const txt = els.importJsonText().value;
      if (!txt.trim()) { showError("Vlož JSON do textového pole."); return; }
      try {
        const obj = JSON.parse(txt);
        applyImportedJson(obj);
      } catch (err) {
        showError("Neplatný JSON v textu.");
        console.error(err);
      }
    });
  }

  // Vytvoří (pokud není) a vrátí element pro chybovou hlášku pod náhledem
  function ensurePreviewErrorEl() {
    const wrap = document.getElementById("previewWrap");
    if (!wrap) return null;
    let errEl = document.getElementById("previewError");
    if (!errEl) {
      errEl = document.createElement("div");
      errEl.id = "previewError";
      // základní inline styl (není třeba sahat do CSS)
      errEl.style.marginTop = "8px";
      errEl.style.color = "#ef4444";    // červená
      errEl.style.fontSize = "0.9rem";
      errEl.style.fontWeight = "600";
      errEl.style.display = "none";
      wrap.insertAdjacentElement("afterend", errEl);
    }
    return errEl;
  }

  // Zobrazí/skrývá chybovou zprávu podle výsledku validace
  function updatePreviewError(errors) {
    const el = ensurePreviewErrorEl();
    if (!el) return;
    if (errors && errors.length) {
      el.textContent = "JSON je neplatný: " + errors.join(" • ");
      el.style.display = "block";
    } else {
      el.textContent = "";
      el.style.display = "none";
    }
  }


  // Live aktualizace <img id="exportPreview"> při každé změně stavu/JSONu
  function setupLivePreview() {
    const wrap = document.getElementById("previewWrap");
    const img = document.getElementById("exportPreview");
    const frame = document.getElementById("previewFrame");
    if (!wrap || !img || !frame) return;

    const refresh = debounce(async () => {
      try {
        // 1) Postav aktuální JSON a zvaliduj
        const data = buildJson();
        const errs = validateJson(data);
        updatePreviewError(errs);

        // 2) Pokud je JSON neplatný, náhled klidně ponecháme,
        //    jen zobrazíme červenou hlášku. (Případně by šlo i
        //    náhled skrýt, když errs.length > 0.)
        await showPreview();
      } catch (e) {
        console.error("Chyba při generování náhledu:", e);
        updatePreviewError(["Nepodařilo se vygenerovat náhled PNG."]);
      }
    }, 350);

    store.subscribe(() => {
      refresh();
    });

    // první vykreslení po startu
    refresh();
  }



  // --- Debounce util pro náhled: ať to nespouští render při každém keypressu
  function debounce(fn, wait = 300) {
    let t = null;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  // --- Jednoduchá validační pravidla pro náš JSON
  function validateJson(payload) {
    const errs = [];
    // meta.aspectRatio
    const ar = payload?.meta?.aspectRatio;
    if (ar !== "9:16" && ar !== "4:5") {
      errs.push("Neplatný poměr stran (meta.aspectRatio musí být 9:16 nebo 4:5).");
    }
    // názvy týmů (displayName)
    const hName = payload?.teams?.home?.displayName?.trim();
    const aName = payload?.teams?.away?.displayName?.trim();
    if (!hName) errs.push("Chybí název domácího týmu.");
    if (!aName) errs.push("Chybí název hostujícího týmu.");
    // skóre
    const hs = payload?.score?.home, as = payload?.score?.away;
    const isInt = (v) => Number.isInteger(v) && v >= 0;
    if (!isInt(hs) || !isInt(as)) {
      errs.push("Skóre musí být nezáporná celá čísla.");
    }
    // events
    const ev = Array.isArray(payload?.events) ? payload.events : [];
    ev.forEach((e, i) => {
      if (!e || (e.team !== "home" && e.team !== "away")) {
        errs.push(`Událost #${i + 1}: team musí být 'home' nebo 'away'.`);
      }
      if (!e.type || typeof e.type !== "string") {
        errs.push(`Událost #${i + 1}: chybí typ.`);
      }
      const minuteOk = Number.isInteger(e.minute) && e.minute >= 0;
      if (!minuteOk) {
        errs.push(`Událost #${i + 1}: minuta musí být nezáporné celé číslo.`);
      }
    });
    return errs;
  }


  // ---- init ---------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    fillLeagueSelect();         // naplní ligy (včetně ALL)
    fillTeamSelects();          // naplní oba selecty týmů + barvy
    wireBackground();           // nahrání/odebrání podkladu (jen metadata)
    wireForm();                 // handlery formuláře
    wireImportJson();           // import JSONu (soubor i text)
    setCustomVisibilityFromState();
    renderEventsList();         // prázdný seznam / existující state
    renderJsonPreview();        // první JSON

    setupLivePreview();

  });

  /* ====================== PNG EXPORT – vše pod DOMContentLoaded ====================== */

  /** 1) Konfigurace – nezávislé pro 9:16 i 4:5 */
  const PNG_916_CFG = Object.freeze({
    W: 1080, H: 1920,
    padding: 72,
    logos: { size: 180, y: 130, inset: 110 },
    names: { y: 360, size: 64, weight: 700, shadow: true },
    score: { y: 640, sizeHome: 260, sizeAway: 260, dashSize: 140, gap: 60 },
    events: { yStart: 820, lineH: 64, icon: 26, textSize: 36, colGap: 140 },
    footer: { textSize: 44, y: 1830 },
    overlay: { enabled: true, opacity: 0.35 }
  });

  const PNG_45_CFG = Object.freeze({
    W: 1080, H: 1350,
    padding: 72,
    logos: { size: 160, y: 110, inset: 90 },
    names: { y: 300, size: 58, weight: 700, shadow: true },
    score: { y: 520, sizeHome: 220, sizeAway: 220, dashSize: 120, gap: 56 },
    events: { yStart: 700, lineH: 58, icon: 24, textSize: 34, colGap: 120 },
    footer: { textSize: 42, y: 1250 },
    overlay: { enabled: true, opacity: 0.35 }
  });

  /** 2) Pevný canvas font (TTF vedle main.js) */
  const CANVAS_FONT_FAMILY = "JakubUI";
  const CANVAS_FONT_URL = "./Roboto-MediumItalic.ttf";
  let __fontReady = false;















  
  /** 3) Vykreslení PNG podle pravidel – vrací HTMLCanvasElement */
  async function renderMatchPNG(cfg) {
    // --- helpers -----------------------------------------------------
    const j = buildJson();

    // Font – načteme TTF pouze jednou
    async function ensureCanvasFont() {
      if (window.__canvasFontReady) return;
      if (typeof FontFace !== "undefined") {
        const ff = new FontFace(CANVAS_FONT_FAMILY, `url(${CANVAS_FONT_URL})`, { style: "normal", weight: "700" });
        await ff.load();
        document.fonts.add(ff);
      }
      window.__canvasFontReady = true;
    }

    function createCanvas(w, h) {
      const c = document.createElement("canvas");
      c.width = w; c.height = h;
      return c;
    }

    function loadImage(src) {
      return new Promise((resolve, reject) => {
        if (!src) return resolve(null);
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src;
      });
    }

    function fitContain(w, h, boxW, boxH) {
      const r = Math.min(boxW / w, boxH / h);
      return { w: w * r, h: h * r };
    }

    function setFont(ctx, size, weight = 700) {
      ctx.font = `${weight} ${Math.max(1, size)}px ${CANVAS_FONT_FAMILY}, system-ui, Arial`;
    }

    function drawShadowedText(ctx, text, x, y, align = "left") {
      ctx.save();
      ctx.textAlign = align;
      ctx.textBaseline = "alphabetic";
      // jemný stín kvůli čitelnosti
      ctx.shadowColor = "rgba(0,0,0,0.35)";
      ctx.shadowBlur = 6;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 2;
      ctx.fillText(text, x, y);
      ctx.restore();
    }

    function wrapWordsToLines(ctx, text, maxWidth) {
      const words = String(text || "").split(/\s+/).filter(Boolean);
      const lines = [];
      let line = "";
      for (const w of words) {
        const test = line ? `${line} ${w}` : w;
        if (ctx.measureText(test).width <= maxWidth) {
          line = test;
        } else {
          if (line) lines.push(line);
          // slova nedělíme uvnitř – když je samo o sobě delší než maxWidth, prostě ho dáme na samostatný řádek
          line = w;
        }
      }
      if (line) lines.push(line);
      return lines;
    }

    function measureWrappedHeight(ctx, text, maxWidth, lineHeightPx) {
      const lines = wrapWordsToLines(ctx, text, maxWidth);
      return { lines, height: lines.length * lineHeightPx };
    }

    function truncate(str, max) {
      const s = String(str || "");
      return s.length > max ? s.slice(0, max - 1) + "…" : s;
    }

    function eventSymbol(type) {
      const t = (type || "").toLowerCase();
      if (t.includes("goal") || t.includes("gól")) return "⚽";
      if (t.includes("yellow") || t.includes("žlut")) return "🟨";
      if (t.includes("red") || t.includes("červen")) return "🟥";
      if (t.includes("sub") || t.includes("stříd")) return "🔁";
      if (t.includes("var")) return "🎥";
      return "•";
    }

    await ensureCanvasFont();

    // --- canvas & podklad --------------------------------------------
    const W = cfg.W, H = cfg.H;
    const pad = cfg.padding ?? 64;

    const canvas = createCanvas(W, H);
    const ctx = canvas.getContext("2d");

    // Pozadí (cover)
    // --- helpers pro gradient pozadí -----------------------------------
    function hexToRGBA(hex, alpha = 1) {
      const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || "");
      if (!m) return `rgba(0,0,0,${alpha})`;
      const r = parseInt(m[1], 16);
      const g = parseInt(m[2], 16);
      const b = parseInt(m[3], 16);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    function drawDualLightGradient(ctx, W, H, leftColor, rightColor) {
      // základ
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, W, H);

      // levé "světlo"
      let gL = ctx.createRadialGradient(W * 0.18, H * 0.5, 0, W * 0.18, H * 0.5, Math.max(W, H) * 0.65);
      gL.addColorStop(0.00, hexToRGBA(leftColor, 0.95));
      gL.addColorStop(0.35, hexToRGBA(leftColor, 0.40));
      gL.addColorStop(0.80, hexToRGBA(leftColor, 0.10));
      gL.addColorStop(1.00, "rgba(0,0,0,0)");
      ctx.fillStyle = gL;
      ctx.fillRect(0, 0, W, H);

      // pravé "světlo"
      let gR = ctx.createRadialGradient(W * 0.82, H * 0.5, 0, W * 0.82, H * 0.5, Math.max(W, H) * 0.65);
      gR.addColorStop(0.00, hexToRGBA(rightColor, 0.95));
      gR.addColorStop(0.35, hexToRGBA(rightColor, 0.40));
      gR.addColorStop(0.80, hexToRGBA(rightColor, 0.10));
      gR.addColorStop(1.00, "rgba(0,0,0,0)");
      ctx.fillStyle = gR;
      ctx.fillRect(0, 0, W, H);

      // jemná vinětace pro čitelnost okrajů
      const gv = ctx.createRadialGradient(W * 0.5, H * 0.55, Math.min(W, H) * 0.2, W * 0.5, H * 0.5, Math.max(W, H) * 0.9);
      gv.addColorStop(0.00, "rgba(0,0,0,0)");
      gv.addColorStop(1.00, "rgba(0,0,0,0.45)");
      ctx.fillStyle = gv;
      ctx.fillRect(0, 0, W, H);
    }

    // --- Pozadí (cover nebo fallback gradient) --------------------------
    if (j.meta?.background?.dataUrl) {
      const bg = await loadImage(j.meta.background.dataUrl);
      if (bg) {
        const r = Math.max(W / bg.width, H / bg.height);
        const dw = Math.round(bg.width * r);
        const dh = Math.round(bg.height * r);
        const dx = Math.round((W - dw) / 2);
        const dy = Math.round((H - dh) / 2);
        ctx.drawImage(bg, dx, dy, dw, dh);
      } else {
        const cHome = j.teams?.home?.color || j.teams?.home?.db?.color || "#ff6a00";
        const cAway = j.teams?.away?.color || j.teams?.away?.db?.color || "#4b6cff";
        drawDualLightGradient(ctx, W, H, cHome, cAway);
      }
    } else {
      // žádné nahrané pozadí → gradient z barev týmů
      const cHome = j.teams?.home?.color || j.teams?.home?.db?.color || "#ff6a00";
      const cAway = j.teams?.away?.color || j.teams?.away?.db?.color || "#4b6cff";
      drawDualLightGradient(ctx, W, H, cHome, cAway);
    }


    // Překryv kvůli čitelnosti
    if (cfg.overlay?.enabled) {
      ctx.fillStyle = `rgba(0,0,0,${cfg.overlay.opacity ?? 0.35})`;
      ctx.fillRect(0, 0, W, H);
    }

    // --- layout výšek podle pravidel --------------------------------
    const logosH = Math.floor(H / 6);
    const namesH = Math.floor(H / 6);
    const scoreH = Math.floor(H / 8);
    const statusH = Math.floor(H / 10);
    const eventsTop = logosH + namesH + scoreH;
    const eventsH = Math.max(0, H - statusH - eventsTop);

    // Oblasti
    const areas = {
      logos: { x: 0, y: 0, w: W, h: logosH },
      names: { x: 0, y: logosH, w: W, h: namesH },
      score: { x: 0, y: logosH + namesH, w: W, h: scoreH },
      events: { x: 0, y: eventsTop, w: W, h: eventsH },
      status: { x: 0, y: H - statusH, w: W, h: statusH },
    };

    // --- loga --------------------------------------------------------
    const homeLogoPath = j.teams?.home?.db?.logoPath || null;
    const awayLogoPath = j.teams?.away?.db?.logoPath || null;
    const [homeLogo, awayLogo] = await Promise.all([loadImage(homeLogoPath), loadImage(awayLogoPath)]);

    const halfW = W / 2;
    const logoPad = Math.max(8, pad * 0.3);
    const boxH = Math.max(0, areas.logos.h - 2 * logoPad);
    const boxW = Math.max(0, halfW - 2 * logoPad);

    if (homeLogo) {
      const s = fitContain(homeLogo.width, homeLogo.height, boxW, boxH);
      const x = Math.round((halfW - s.w) / 2 + logoPad);
      const y = Math.round(areas.logos.y + (areas.logos.h - s.h) / 2);
      ctx.drawImage(homeLogo, x, y, s.w, s.h);
    }
    if (awayLogo) {
      const s = fitContain(awayLogo.width, awayLogo.height, boxW, boxH);
      const x = Math.round(halfW + (halfW - s.w) / 2 - logoPad);
      const y = Math.round(areas.logos.y + (areas.logos.h - s.h) / 2);
      ctx.drawImage(awayLogo, x, y, s.w, s.h);
    }

    // --- názvy týmů (stejný výsledný font) --------------------------
    const homeName = j.teams?.home?.displayName || j.teams?.home?.selectedName || "";
    const awayName = j.teams?.away?.displayName || j.teams?.away?.selectedName || "";

    const namesPad = pad;
    const colW = halfW - 2 * namesPad;
    const lineGap = 0.18; // 18% velikosti fontu
    // horní aproximace výchozí velikosti
    let testSize = Math.floor(Math.min(cfg?.names?.size ?? 64, areas.names.h * 0.5));
    if (testSize < 16) testSize = 16;

    function canFitSameSize(size) {
      setFont(ctx, size, cfg?.names?.weight ?? 700);
      const lh = Math.ceil(size * (1 + lineGap));
      const mHome = measureWrappedHeight(ctx, homeName, colW, lh);
      const mAway = measureWrappedHeight(ctx, awayName, colW, lh);
      return mHome.height <= areas.names.h - 2 * namesPad && mAway.height <= areas.names.h - 2 * namesPad;
    }

    // snižujeme, dokud se nevejdou oba
    while (testSize > 12 && !canFitSameSize(testSize)) testSize -= 1;

    setFont(ctx, testSize, cfg?.names?.weight ?? 700);
    ctx.fillStyle = "#ffffff";

    const lh = Math.ceil(testSize * (1 + lineGap));
    const homeLines = wrapWordsToLines(ctx, homeName, colW);
    const awayLines = wrapWordsToLines(ctx, awayName, colW);

    // vertikální centrování v rámci names area
    const homeBlockH = homeLines.length * lh;
    const awayBlockH = awayLines.length * lh;
    const baseY = areas.names.y;

    // HOME (levá půlka)
    let yHome = baseY + Math.round((areas.names.h - homeBlockH) / 2) + testSize; // první řádek baseline
    for (const line of homeLines) {
      drawShadowedText(ctx, line, namesPad + colW, yHome, "right");
      yHome += lh;
    }

    // AWAY (pravá půlka)
    let yAway = baseY + Math.round((areas.names.h - awayBlockH) / 2) + testSize;
    for (const line of awayLines) {
      drawShadowedText(ctx, line, halfW + namesPad, yAway, "left");
      yAway += lh;
    }

    // --- skóre (prostředek, 1/8 výšky) ------------------------------
    const homeScore = String(j.score?.home ?? "0");
    const awayScore = String(j.score?.away ?? "0");

    // zkusíme font tak, aby se vešla trojice: HOME  gap  "-" gap  AWAY
    const scorePadX = pad;
    const scoreAvailW = W - 2 * scorePadX;
    const dash = "–";
    let scoreSize = Math.floor(Math.min(cfg?.score?.sizeHome ?? 240, areas.score.h * 0.8));
    if (scoreSize < 32) scoreSize = 32;

    function scoreWidth(size) {
      setFont(ctx, size, 800);
      const wHome = ctx.measureText(homeScore).width;
      const wAway = ctx.measureText(awayScore).width;
      const wDash = ctx.measureText(dash).width;
      const gap = Math.max(24, cfg?.score?.gap ?? 48);
      return wHome + gap + wDash + gap + wAway;
    }
    while (scoreSize > 24 && scoreWidth(scoreSize) > scoreAvailW) scoreSize -= 1;

    setFont(ctx, scoreSize, 800);
    ctx.fillStyle = "#ffffff";

    const yScore = areas.score.y + Math.round((areas.score.h + scoreSize) / 2);
    const gapX = Math.max(24, cfg?.score?.gap ?? 48);
    const totalW = scoreWidth(scoreSize);
    let xStart = (W - totalW) / 2;

    drawShadowedText(ctx, homeScore, xStart + ctx.measureText(homeScore).width, yScore, "right");
    xStart += ctx.measureText(homeScore).width + gapX;

    drawShadowedText(ctx, dash, xStart, yScore, "left");
    xStart += ctx.measureText(dash).width + gapX;

    drawShadowedText(ctx, awayScore, xStart, yScore, "left");

    // --- events (zbytek, jednotná velikost, 1 řádek/událost) --------
    // strategie: sloupec HOME zarovnaný doprava k centru, AWAY doleva od centra; vertikálně podle pořadí (čas).
    const events = Array.isArray(j.events) ? [...j.events] : [];
    // seřadíme podle času (minute, extra)
    events.sort((a, b) => {
      const ma = Number(a.minute || 0), mb = Number(b.minute || 0);
      if (ma !== mb) return ma - mb;
      const ea = Number(a.extra || 0), eb = Number(b.extra || 0);
      return ea - eb;
    });

    const n = Math.max(1, events.length);
    // spočítáme velikost tak, aby se vše vešlo na výšku (line-height ~ 1.35)
    let evSize = Math.floor(cfg?.events?.textSize ?? 36);
    const minEvSize = 14;
    function totalHeightFor(size) {
      const lh = Math.ceil(size * 1.35);
      return n * lh;
    }
    while (evSize > minEvSize && totalHeightFor(evSize) > areas.events.h - 2 * pad) evSize -= 1;

    const evLH = Math.ceil(evSize * 1.35);
    setFont(ctx, evSize, 700);
    ctx.fillStyle = "#ffffff";

    const midX = Math.floor(W / 2);
    // základ: ~3 % šířky plátna (na 1080px ≈ 32 px).
    const baseColGap = Math.max(8, Math.floor(W * 0.03));
    const colGap = Math.max(8, cfg?.events?.colGap ?? baseColGap);
    const startY = areas.events.y + Math.max(pad, Math.round((areas.events.h - totalHeightFor(evSize)) / 2)) + evSize;

events.forEach((ev, idx) => {
  const minute = String(ev.minute ?? "");
  const extra = ev.extra ? `+${ev.extra}` : "";
  const mm = minute ? `${minute}'${extra}` : "";
  const pName = truncate(ev.player || ev.playerName || "", 20);
  const sym = eventSymbol(ev.type || ev.kind);

  const txt = [mm, sym, pName].filter(Boolean).join("  ");
  const y = startY + idx * evLH;

  // změř skutečnou šířku řádku
  const wTxt = ctx.measureText(txt).width;

  // kotevní body s garancí, že text zůstane v [pad, W - pad]
  const minX = pad;
  const maxX = W - pad;

  const isHome = (ev.side || ev.team || "").toLowerCase().startsWith("h");
  const isAway = (ev.side || ev.team || "").toLowerCase().startsWith("a");

  if (isHome) {
    // pravé zarovnání – text jde doleva od kotvy
    // kotva musí splnit: anchor - wTxt >= minX  =>  anchor >= minX + wTxt
    const anchorDefault = midX - colGap;
    const anchor = Math.max(anchorDefault, minX + wTxt);
    drawShadowedText(ctx, txt, anchor, y, "right");
  } else if (isAway) {
    // levé zarovnání – text jde doprava od kotvy
    // kotva musí splnit: anchor + wTxt <= maxX  =>  anchor <= maxX - wTxt
    const anchorDefault = midX + colGap;
    const anchor = Math.min(anchorDefault, maxX - wTxt);
    drawShadowedText(ctx, txt, anchor, y, "left");
  } else {
    // fallback – do středu
    drawShadowedText(ctx, txt, midX, y, "center");
  }
});


    // --- status (spodní 1/10, centrovaně) ----------------------------
    const statusText = j.statusText || "";
    if (statusText) {
      let stSize = Math.floor(cfg?.footer?.textSize ?? 42);
      if (stSize > areas.status.h * 0.8) stSize = Math.floor(areas.status.h * 0.8);
      if (stSize < 16) stSize = 16;
      setFont(ctx, stSize, 700);
      ctx.fillStyle = "#ffffff";
      const y = areas.status.y + Math.round((areas.status.h + stSize) / 2);
      drawShadowedText(ctx, statusText, Math.floor(W / 2), y, "center");
    }

    return canvas;
  }














  /** 8) Stažení PNG */
  function downloadCanvas(canvas, ratioLabel, homeName, awayName) {
    const toSlug = (s) => String(s).trim().replace(/\s+/g, '-').replace(/[^A-Za-z0-9\-]/g, '');
    const file = `fotbal-${ratioLabel}-${toSlug(homeName)}-vs-${toSlug(awayName)}.png`;
    canvas.toBlob((blob) => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = file;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    }, "image/png");
  }

  /** 9) Veřejné funkce pro tlačítka */
  async function generatePNG916() {
    const c = await renderMatchPNG(PNG_916_CFG);
    const j = buildJson();
    downloadCanvas(c, "9_16", j.teams.home.displayName || j.teams.home.selectedName, j.teams.away.displayName || j.teams.away.selectedName);
  }
  async function generatePNG45() {
    const c = await renderMatchPNG(PNG_45_CFG);
    const j = buildJson();
    downloadCanvas(c, "4_5", j.teams.home.displayName || j.teams.home.selectedName, j.teams.away.displayName || j.teams.away.selectedName);
  }

  /** 10) Napojení tlačítek – rozšíření stávajícího DOMContentLoaded bloku
   * (pokud už máš ten blok výše, tohle jen připojí handlery)
   */
  (() => {
    const b916 = document.getElementById("btnExport916");
    const b45 = document.getElementById("btnExport45");
    if (b916) b916.addEventListener("click", async (e) => { e.preventDefault(); await generatePNG916(); });
    if (b45) b45.addEventListener("click", async (e) => { e.preventDefault(); await generatePNG45(); });
  })();

  // Vybere správný konfig podle aktuálního "Poměru stran" z UI/JSON
  function getCurrentCfgByAspect() {
    const j = buildJson();
    const ar = (j.meta?.aspectRatio || "").trim();
    return ar === "4:5" ? PNG_45_CFG : PNG_916_CFG; // default 9:16
  }

  // Vykreslí na canvas a vrátí dataURL (PNG)
  async function renderCurrentToDataURL() {
    const cfg = getCurrentCfgByAspect();
    const canvas = await renderMatchPNG(cfg);
    return { url: canvas.toDataURL("image/png"), cfg };
  }

  // Zobrazit náhled pod kartou "Export PNG"
  async function showPreview() {
    const { url, cfg } = await renderCurrentToDataURL();
    const wrap = document.getElementById("previewWrap");
    const frame = document.getElementById("previewFrame");
    const img = document.getElementById("exportPreview");
    if (!wrap || !img || !frame) return;

    // přepnutí poměru rámečku podle aktuálního JSON/meta.aspectRatio
    frame.classList.remove("ratio-916", "ratio-45");
    const ar = (buildJson().meta?.aspectRatio || "").trim();
    frame.classList.add(ar === "4:5" ? "ratio-45" : "ratio-916");

    img.src = url;
    img.width = Math.min(cfg.W, 1080); // jen hint pro layout; skutečný rozměr drží PNG
    wrap.style.display = "flex";
  }


  // Napojení tlačítka náhledu
  (() => {
    const bPrev = document.getElementById("btnPreview");
    if (bPrev) bPrev.addEventListener("click", async (e) => {
      e.preventDefault();
      await showPreview();
    });
  })();

})();
