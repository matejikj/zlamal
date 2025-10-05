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
  async function ensureCanvasFont() {
    if (__fontReady) return;
    try {
      const ff = new FontFace(CANVAS_FONT_FAMILY, `url(${CANVAS_FONT_URL})`, {
        style: "normal", weight: "400", stretch: "normal"
      });
      const loaded = await ff.load();
      document.fonts.add(loaded);
    } catch (e) {
      console.warn("Font load failed, using system fallback:", e);
    } finally {
      __fontReady = true;
    }
  }
  function fontStr(weight, sizePx) {
    return `${weight} ${sizePx}px ${CANVAS_FONT_FAMILY}, system-ui, -apple-system, Segoe UI, Roboto, Arial`;
  }

  /** 3) Loader s jednoduchou cache (loga / bg) */
  const __imgCache = new Map();
  function loadImage(src) {
    if (!src) return Promise.resolve(null);
    if (__imgCache.has(src)) return __imgCache.get(src);
    const p = new Promise((res, rej) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => res(img);
      img.onerror = rej;
      img.src = src;
    });
    __imgCache.set(src, p);
    return p;
  }

  /** 4) Utility – stín, text fit, rounded rect, RGB a gradientové pozadí */
  function setShadow(ctx, on) {
    if (!on) { ctx.shadowColor = "transparent"; ctx.shadowBlur = 0; return; }
    ctx.shadowColor = "rgba(0,0,0,.55)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;
  }
  function fitText(ctx, text, maxWidth, basePx) {
    let size = basePx;
    ctx.font = fontStr("700", size);
    while (ctx.measureText(text).width > maxWidth && size > 8) {
      size -= 1;
      ctx.font = fontStr("700", size);
    }
    return size;
  }
  function drawRoundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    const rr = Math.min(r, w / 2, h / 2);
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }
  function hexToRgb(hex) {
    const m = String(hex).trim().replace('#', '');
    const v = m.length === 3
      ? m.split('').map(c => parseInt(c + c, 16))
      : [m.slice(0, 2), m.slice(2, 4), m.slice(4, 6)].map(h => parseInt(h, 16));
    return { r: v[0] ?? 0, g: v[1] ?? 0, b: v[2] ?? 0 };
  }
  function rgbaStr({ r, g, b }, a = 1) { return `rgba(${r | 0},${g | 0},${b | 0},${a})`; }
  function drawTeamGradientBackground(ctx, W, H, homeHex, awayHex, opts = {}) {
    const pad = opts.pad ?? 0;
    const vignette = opts.vignette ?? 0.45;
    const intensity = opts.intensity ?? 0.95;
    const spread = opts.spread ?? 0.9;

    const home = hexToRgb(homeHex || "#cc3344");
    const away = hexToRgb(awayHex || "#f2b705");

    ctx.fillStyle = "#0f0f12";
    ctx.fillRect(0, 0, W, H);

    // left light
    {
      const cx = pad + W * 0.18, cy = H * 0.38;
      const r0 = Math.min(W, H) * 0.12, r1 = Math.max(W, H) * spread;
      const g = ctx.createRadialGradient(cx, cy, r0, cx, cy, r1);
      g.addColorStop(0.0, rgbaStr(home, intensity));
      g.addColorStop(0.45, rgbaStr(home, 0.35));
      g.addColorStop(1.0, rgbaStr(home, 0.0));
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    }
    // right light
    {
      const cx = W - (pad + W * 0.18), cy = H * 0.38;
      const r0 = Math.min(W, H) * 0.12, r1 = Math.max(W, H) * spread;
      const g = ctx.createRadialGradient(cx, cy, r0, cx, cy, r1);
      g.addColorStop(0.0, rgbaStr(away, intensity));
      g.addColorStop(0.45, rgbaStr(away, 0.35));
      g.addColorStop(1.0, rgbaStr(away, 0.0));
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    }
    // vignette
    {
      const cx = W / 2, cy = H / 2;
      const r0 = Math.min(W, H) * 0.2, r1 = Math.max(W, H) * 0.85;
      const g = ctx.createRadialGradient(cx, cy, r0, cx, cy, r1);
      g.addColorStop(0.0, "rgba(0,0,0,0.0)");
      g.addColorStop(1.0, `rgba(0,0,0,${vignette})`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    }
  }

  /** 5) Ikonky událostí */
  function drawEventIcon(ctx, type, x, y, cfg) {
    ctx.save();
    const r = cfg.icon;
    if (["yellow_card", "second_yellow"].includes(type)) {
      ctx.fillStyle = "#FFD400";
      drawRoundedRect(ctx, x, y - r * 0.85, r * 0.9, r * 1.25, 4); ctx.fill();
      if (type === "second_yellow") { ctx.translate(r * 0.35, 0); drawRoundedRect(ctx, x, y - r * 0.85, r * 0.9, r * 1.25, 4); ctx.fill(); }
    } else if (type === "red_card") {
      ctx.fillStyle = "#E10600";
      drawRoundedRect(ctx, x, y - r * 0.85, r * 0.9, r * 1.25, 4); ctx.fill();
    } else if (type === "substitution") {
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#20C997";            // up
      ctx.beginPath(); ctx.moveTo(x, y + 6); ctx.lineTo(x + r * 0.8, y + 6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + r * 0.8, y + 6); ctx.lineTo(x + r * 0.55, y - 10);
      ctx.moveTo(x + r * 0.8, y + 6); ctx.lineTo(x + r * 1.05, y - 10); ctx.stroke();
      ctx.strokeStyle = "#E10600";            // down
      ctx.beginPath(); ctx.moveTo(x + r * 1.5, y - 6); ctx.lineTo(x + r * 2.3, y - 6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + r * 1.5, y - 6); ctx.lineTo(x + r * 1.75, y + 10);
      ctx.moveTo(x + r * 2.3, y - 6); ctx.lineTo(x + r * 2.05, y + 10); ctx.stroke();
    } else {
      ctx.fillStyle = "rgba(255,255,255,.92)";  // ball
      ctx.beginPath(); ctx.arc(x + r * 0.7, y, r * 0.7, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,.35)"; ctx.lineWidth = 2; ctx.stroke();
    }
    ctx.restore();
  }

  /** 6) „Contain“ kreslení log bez deformace */
  function drawLogoContain(ctx, img, boxX, boxY, boxSize) {
    if (!img) return;
    const ratio = img.width / img.height;
    let w, h;
    if (ratio >= 1) { w = boxSize; h = Math.round(boxSize / ratio); }
    else { h = boxSize; w = Math.round(boxSize * ratio); }
    const dx = Math.round(boxX + (boxSize - w) / 2);
    const dy = Math.round(boxY + (boxSize - h) / 2);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, dx, dy, w, h);
  }

  /** 7) Hlavní renderer pro daný formát */
  async function renderMatchPNG(cfg) {
    await ensureCanvasFont();

    const data = buildJson();
    const W = cfg.W, H = cfg.H;
    const canvas = document.createElement('canvas'); canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');

    const home = data.teams.home;
    const away = data.teams.away;
    const homeColor = home.color || "#DD3648";
    const awayColor = away.color || "#F2B705";

    // Pozadí: obrázek (cover) nebo gradient z týmových barev
    if (data.meta?.background?.dataUrl) {
      const bg = await loadImage(data.meta.background.dataUrl);
      if (bg) {
        const scale = Math.max(W / bg.width, H / bg.height);
        const bw = Math.floor(bg.width * scale), bh = Math.floor(bg.height * scale);
        const bx = Math.floor((W - bw) / 2), by = Math.floor((H - bh) / 2);
        ctx.drawImage(bg, bx, by, bw, bh);
      } else {
        drawTeamGradientBackground(ctx, W, H, homeColor, awayColor, { pad: cfg.padding });
      }
    } else {
      drawTeamGradientBackground(ctx, W, H, homeColor, awayColor, { pad: cfg.padding });
    }
    if (cfg.overlay?.enabled) {
      ctx.fillStyle = `rgba(0,0,0,${cfg.overlay.opacity ?? 0.35})`;
      ctx.fillRect(0, 0, W, H);
    }

    // Loga (contain + posun ke středu)
    const homeLogo = await loadImage(home.db?.logoPath);
    const awayLogo = await loadImage(away.db?.logoPath);
    const logoY = cfg.logos.y;
    const boxSize = cfg.logos.size;
    const inset = cfg.logos.inset || 0;
    if (homeLogo) {
      const boxX = Math.max(cfg.padding, inset);
      drawLogoContain(ctx, homeLogo, boxX, logoY, boxSize);
    }
    if (awayLogo) {
      const boxX = W - Math.max(cfg.padding, inset) - boxSize;
      drawLogoContain(ctx, awayLogo, boxX, logoY, boxSize);
    }

    // Názvy týmů
    setShadow(ctx, cfg.names.shadow);
    ctx.fillStyle = homeColor; ctx.textAlign = "left";
    const nameMaxW = W / 2 - cfg.padding * 1.8;
    let nameSizeHome = fitText(ctx, (home.displayName || home.selectedName || "Home"), nameMaxW, cfg.names.size);
    ctx.font = fontStr("700", nameSizeHome);
    ctx.fillText((home.displayName || home.selectedName || "Home"), cfg.padding, cfg.names.y);

    ctx.fillStyle = awayColor; ctx.textAlign = "right";
    let nameSizeAway = fitText(ctx, (away.displayName || away.selectedName || "Away"), nameMaxW, cfg.names.size);
    ctx.font = fontStr("700", nameSizeAway);
    ctx.fillText((away.displayName || away.selectedName || "Away"), W - cfg.padding, cfg.names.y);
    setShadow(ctx, false);

    // Skóre
    const scoreY = cfg.score.y;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center"; ctx.fillStyle = "rgba(255,255,255,.92)"; ctx.font = fontStr("800", cfg.score.dashSize);
    ctx.fillText("–", W / 2, scoreY);
    ctx.textAlign = "right"; ctx.fillStyle = homeColor; ctx.font = fontStr("900", cfg.score.sizeHome);
    ctx.fillText(String(data.score.home ?? 0), W / 2 - cfg.score.gap, scoreY);
    ctx.textAlign = "left"; ctx.fillStyle = awayColor; ctx.font = fontStr("900", cfg.score.sizeAway);
    ctx.fillText(String(data.score.away ?? 0), W / 2 + cfg.score.gap, scoreY);

    // Události
    ctx.font = fontStr("600", cfg.events.textSize);
    ctx.fillStyle = "rgba(255,255,255,.92)";
    ctx.textBaseline = "alphabetic";
    const leftX = cfg.padding, rightX = W - cfg.padding;
    let ly = cfg.events.yStart, ry = cfg.events.yStart;

    const events = (data.events || []).slice().sort((a, b) => {
      const ma = Number(a.minute) || 0, mb = Number(b.minute) || 0;
      return ma - mb;
    });
    for (const ev of events) {
      const isHome = ev.team === "home";
      const xIcon = isHome ? leftX : rightX;
      const y = isHome ? ly : ry;
      const iconX = isHome ? xIcon : xIcon - cfg.events.icon * 2.3;

      drawEventIcon(ctx, ev.type, iconX, y - cfg.events.icon / 6, cfg.events);

      const minute = ev.extra ? `${ev.minute}+${ev.extra}` : `${ev.minute}`;
      const txt = `${ev.player || ""} ${minute}'`;
      ctx.textAlign = isHome ? "left" : "right";
      setShadow(ctx, true);
      ctx.fillText(txt, isHome ? (leftX + cfg.events.icon * 2.6) : (rightX - cfg.events.icon * 2.6), y);
      setShadow(ctx, false);

      if (isHome) ly += cfg.events.lineH; else ry += cfg.events.lineH;
    }

    // Footer (status)
    if (data.statusText) {
      ctx.textAlign = "center"; ctx.textBaseline = "alphabetic";
      setShadow(ctx, true);
      ctx.fillStyle = "rgba(255,255,255,.98)";
      ctx.font = fontStr("800", cfg.footer.textSize);
      ctx.fillText(String(data.statusText).toUpperCase(), W / 2, cfg.footer.y);
      setShadow(ctx, false);
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
