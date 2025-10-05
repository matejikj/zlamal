(() => {
  "use strict";

  const teamsData = Object.freeze(
    {
      "Premier League": [
        {
          "name": "AFC Bournemouth",
          "path": "logos/England - Premier League/AFC Bournemouth.png",
          "color": "#DA291C",
          "short": "BOU"
        },
        {
          "name": "Arsenal FC",
          "path": "logos/England - Premier League/Arsenal FC.png",
          "color": "#EF0107",
          "short": "ARS"
        },
        {
          "name": "Aston Villa",
          "path": "logos/England - Premier League/Aston Villa.png",
          "color": "#670E36",
          "short": "AVL"
        },
        {
          "name": "Brentford FC",
          "path": "logos/England - Premier League/Brentford FC.png",
          "color": "#E30613",
          "short": "BRE"
        },
        {
          "name": "Brighton & Hove Albion",
          "path": "logos/England - Premier League/Brighton & Hove Albion.png",
          "color": "#0057B8",
          "short": "BHA"
        },
        {
          "name": "Burnley FC",
          "path": "logos/England - Premier League/Burnley FC.png",
          "color": "#6C1D45",
          "short": "BUR"
        },
        {
          "name": "Chelsea FC",
          "path": "logos/England - Premier League/Chelsea FC.png",
          "color": "#034694",
          "short": "CHE"
        },
        {
          "name": "Crystal Palace",
          "path": "logos/England - Premier League/Crystal Palace.png",
          "color": "#1B458F",
          "short": "CRY"
        },
        {
          "name": "Everton FC",
          "path": "logos/England - Premier League/Everton FC.png",
          "color": "#003399",
          "short": "EVE"
        },
        {
          "name": "Fulham FC",
          "path": "logos/England - Premier League/Fulham FC.png",
          "color": "#000000",
          "short": "FUL"
        },
        {
          "name": "Leeds United",
          "path": "logos/England - Premier League/Leeds United.png",
          "color": "#1D428A",
          "short": "LEE"
        },
        {
          "name": "Liverpool FC",
          "path": "logos/England - Premier League/Liverpool FC.png",
          "color": "#C8102E",
          "short": "LIV"
        },
        {
          "name": "Manchester City",
          "path": "logos/England - Premier League/Manchester City.png",
          "color": "#6CABDD",
          "short": "MCI"
        },
        {
          "name": "Manchester United",
          "path": "logos/England - Premier League/Manchester United.png",
          "color": "#DA020E",
          "short": "MUN"
        },
        {
          "name": "Newcastle United",
          "path": "logos/England - Premier League/Newcastle United.png",
          "color": "#241F20",
          "short": "NEW"
        },
        {
          "name": "Nottingham Forest",
          "path": "logos/England - Premier League/Nottingham Forest.png",
          "color": "#DD0000",
          "short": "NFO"
        },
        {
          "name": "Sunderland AFC",
          "path": "logos/England - Premier League/Sunderland AFC.png",
          "color": "#E41B17",
          "short": "SUN"
        },
        {
          "name": "Tottenham Hotspur",
          "path": "logos/England - Premier League/Tottenham Hotspur.png",
          "color": "#132257",
          "short": "TOT"
        },
        {
          "name": "West Ham United",
          "path": "logos/England - Premier League/West Ham United.png",
          "color": "#7A263A",
          "short": "WHU"
        },
        {
          "name": "Wolverhampton Wanderers",
          "path": "logos/England - Premier League/Wolverhampton Wanderers.png",
          "color": "#FDB913",
          "short": "WOL"
        }
      ],
      "Ligue 1": [
        {
          "name": "AJ Auxerre",
          "path": "logos/France - Ligue 1/AJ Auxerre.png",
          "color": "#1B6ED0",
          "short": "AJA"
        },
        {
          "name": "Angers SCO",
          "path": "logos/France - Ligue 1/Angers SCO.png",
          "color": "#000000",
          "short": "ANG"
        },
        {
          "name": "AS Monaco",
          "path": "logos/France - Ligue 1/AS Monaco.png",
          "color": "#E60026",
          "short": "ASM"
        },
        {
          "name": "FC Lorient",
          "path": "logos/France - Ligue 1/FC Lorient.png",
          "color": "#F36F21",
          "short": "FCL"
        },
        {
          "name": "FC Metz",
          "path": "logos/France - Ligue 1/FC Metz.png",
          "color": "#7A0026",
          "short": "MET"
        },
        {
          "name": "FC Nantes",
          "path": "logos/France - Ligue 1/FC Nantes.png",
          "color": "#FFD800",
          "short": "FCN"
        },
        {
          "name": "FC Toulouse",
          "path": "logos/France - Ligue 1/FC Toulouse.png",
          "color": "#512D6D",
          "short": "TOU"
        },
        {
          "name": "Le Havre AC",
          "path": "logos/France - Ligue 1/Le Havre AC.png",
          "color": "#1E2E5B",
          "short": "HAC"
        },
        {
          "name": "LOSC Lille",
          "path": "logos/France - Ligue 1/LOSC Lille.png",
          "color": "#D00027",
          "short": "LIL"
        },
        {
          "name": "OGC Nice",
          "path": "logos/France - Ligue 1/OGC Nice.png",
          "color": "#000000",
          "short": "NCE"
        },
        {
          "name": "Olympique Lyon",
          "path": "logos/France - Ligue 1/Olympique Lyon.png",
          "color": "#002B5C",
          "short": "OL"
        },
        {
          "name": "Olympique Marseille",
          "path": "logos/France - Ligue 1/Olympique Marseille.png",
          "color": "#0093D0",
          "short": "OM"
        },
        {
          "name": "Paris FC",
          "path": "logos/France - Ligue 1/Paris FC.png",
          "color": "#002E6D",
          "short": "PFC"
        },
        {
          "name": "Paris Saint-Germain",
          "path": "logos/France - Ligue 1/Paris Saint-Germain.png",
          "color": "#004170",
          "short": "PSG"
        },
        {
          "name": "RC Lens",
          "path": "logos/France - Ligue 1/RC Lens.png",
          "color": "#F6D417",
          "short": "RCL"
        },
        {
          "name": "RC Strasbourg Alsace",
          "path": "logos/France - Ligue 1/RC Strasbourg Alsace.png",
          "color": "#0055A4",
          "short": "RCS"
        },
        {
          "name": "Stade Brestois 29",
          "path": "logos/France - Ligue 1/Stade Brestois 29.png",
          "color": "#E5202A",
          "short": "BRE"
        },
        {
          "name": "Stade Rennais FC",
          "path": "logos/France - Ligue 1/Stade Rennais FC.png",
          "color": "#D20000",
          "short": "REN"
        }
      ],
      "Bundesliga": [
        {
          "name": "1.FC Heidenheim 1846",
          "path": "logos/Germany - Bundesliga/1.FC Heidenheim 1846.png",
          "color": "#D00027",
          "short": "FCH"
        },
        {
          "name": "1.FC Köln",
          "path": "logos/Germany - Bundesliga/1.FC Koln.png",
          "color": "#E30613",
          "short": "KOE"
        },
        {
          "name": "1.FC Union Berlin",
          "path": "logos/Germany - Bundesliga/1.FC Union Berlin.png",
          "color": "#DD0000",
          "short": "FCU"
        },
        {
          "name": "1.FSV Mainz 05",
          "path": "logos/Germany - Bundesliga/1.FSV Mainz 05.png",
          "color": "#C30C2B",
          "short": "M05"
        },
        {
          "name": "Bayer 04 Leverkusen",
          "path": "logos/Germany - Bundesliga/Bayer 04 Leverkusen.png",
          "color": "#E32219",
          "short": "B04"
        },
        {
          "name": "Bayern Munich",
          "path": "logos/Germany - Bundesliga/Bayern Munich.png",
          "color": "#DC052D",
          "short": "FCB"
        },
        {
          "name": "Borussia Dortmund",
          "path": "logos/Germany - Bundesliga/Borussia Dortmund.png",
          "color": "#FDE100",
          "short": "BVB"
        },
        {
          "name": "Borussia Mönchengladbach",
          "path": "logos/Germany - Bundesliga/Borussia Monchengladbach.png",
          "color": "#00A652",
          "short": "BMG"
        },
        {
          "name": "Eintracht Frankfurt",
          "path": "logos/Germany - Bundesliga/Eintracht Frankfurt.png",
          "color": "#E1000F",
          "short": "SGE"
        },
        {
          "name": "FC Augsburg",
          "path": "logos/Germany - Bundesliga/FC Augsburg.png",
          "color": "#006F35",
          "short": "FCA"
        },
        {
          "name": "FC St. Pauli",
          "path": "logos/Germany - Bundesliga/FC St. Pauli.png",
          "color": "#4E3B31",
          "short": "STP"
        },
        {
          "name": "Hamburger SV",
          "path": "logos/Germany - Bundesliga/Hamburger SV.png",
          "color": "#00539F",
          "short": "HSV"
        },
        {
          "name": "RB Leipzig",
          "path": "logos/Germany - Bundesliga/RB Leipzig.png",
          "color": "#D41D12",
          "short": "RBL"
        },
        {
          "name": "SC Freiburg",
          "path": "logos/Germany - Bundesliga/SC Freiburg.png",
          "color": "#C00000",
          "short": "SCF"
        },
        {
          "name": "SV Werder Bremen",
          "path": "logos/Germany - Bundesliga/SV Werder Bremen.png",
          "color": "#1C8D36",
          "short": "SVW"
        },
        {
          "name": "TSG 1899 Hoffenheim",
          "path": "logos/Germany - Bundesliga/TSG 1899 Hoffenheim.png",
          "color": "#24549F",
          "short": "TSG"
        },
        {
          "name": "VfB Stuttgart",
          "path": "logos/Germany - Bundesliga/VfB Stuttgart.png",
          "color": "#E30B17",
          "short": "VFB"
        },
        {
          "name": "VfL Wolfsburg",
          "path": "logos/Germany - Bundesliga/VfL Wolfsburg.png",
          "color": "#49A942",
          "short": "WOB"
        }
      ],
      "Fortuna Liga": [
        {
          "name": "1.FC Slovacko",
          "path": "logos/Czech Republic - Chance Liga/1.FC Slovacko.png",
          "color": "#002B5C",
          "short": "SLO"
        },
        {
          "name": "AC Sparta Prague",
          "path": "logos/Czech Republic - Chance Liga/AC Sparta Prague.png",
          "color": "#6E0A1E",
          "short": "SPA"
        },
        {
          "name": "Bohemians Prague 1905",
          "path": "logos/Czech Republic - Chance Liga/Bohemians Prague 1905.png",
          "color": "#00A859",
          "short": "BOH"
        },
        {
          "name": "FC Banik Ostrava",
          "path": "logos/Czech Republic - Chance Liga/FC Banik Ostrava.png",
          "color": "#00AEEF",
          "short": "BAN"
        },
        {
          "name": "FC Hradec Kralove",
          "path": "logos/Czech Republic - Chance Liga/FC Hradec Kralove.png",
          "color": "#000000",
          "short": "HKR"
        },
        {
          "name": "FC Slovan Liberec",
          "path": "logos/Czech Republic - Chance Liga/FC Slovan Liberec.png",
          "color": "#0054A6",
          "short": "LIB"
        },
        {
          "name": "FC Viktoria Plzen",
          "path": "logos/Czech Republic - Chance Liga/FC Viktoria Plzen.png",
          "color": "#0056A3",
          "short": "PLZ"
        },
        {
          "name": "FC Zlin",
          "path": "logos/Czech Republic - Chance Liga/FC Zlin.png",
          "color": "#FFD200",
          "short": "ZLN"
        },
        {
          "name": "FK Dukla Prague",
          "path": "logos/Czech Republic - Chance Liga/FK Dukla Prague.png",
          "color": "#7B1E22",
          "short": "DUK"
        },
        {
          "name": "FK Jablonec",
          "path": "logos/Czech Republic - Chance Liga/FK Jablonec.png",
          "color": "#0B9444",
          "short": "JAB"
        },
        {
          "name": "FK Mlada Boleslav",
          "path": "logos/Czech Republic - Chance Liga/FK Mlada Boleslav.png",
          "color": "#00A0E3",
          "short": "MBA"
        },
        {
          "name": "FK Pardubice",
          "path": "logos/Czech Republic - Chance Liga/FK Pardubice.png",
          "color": "#E10600",
          "short": "PAR"
        },
        {
          "name": "FK Teplice",
          "path": "logos/Czech Republic - Chance Liga/FK Teplice.png",
          "color": "#FFD600",
          "short": "TEP"
        },
        {
          "name": "MFK Karvina",
          "path": "logos/Czech Republic - Chance Liga/MFK Karvina.png",
          "color": "#008F4B",
          "short": "KAR"
        },
        {
          "name": "SK Sigma Olomouc",
          "path": "logos/Czech Republic - Chance Liga/SK Sigma Olomouc.png",
          "color": "#0054A6",
          "short": "OLO"
        },
        {
          "name": "SK Slavia Prague",
          "path": "logos/Czech Republic - Chance Liga/SK Slavia Prague.png",
          "color": "#D22630",
          "short": "SLA"
        }
      ],
      "La Liga": [
        {
          "name": "Athletic Bilbao",
          "path": "logos/Spain - LaLiga/Athletic Bilbao.png",
          "color": "#EE2737",
          "short": "ATH"
        },
        {
          "name": "Atlético de Madrid",
          "path": "logos/Spain - LaLiga/Atletico de Madrid.png",
          "color": "#C72C2C",
          "short": "ATM"
        },
        {
          "name": "CA Osasuna",
          "path": "logos/Spain - LaLiga/CA Osasuna.png",
          "color": "#D0021B",
          "short": "OSA"
        },
        {
          "name": "Celta de Vigo",
          "path": "logos/Spain - LaLiga/Celta de Vigo.png",
          "color": "#8ECEF2",
          "short": "CEL"
        },
        {
          "name": "Deportivo Alavés",
          "path": "logos/Spain - LaLiga/Deportivo Alaves.png",
          "color": "#1E6BD6",
          "short": "ALA"
        },
        {
          "name": "Elche CF",
          "path": "logos/Spain - LaLiga/Elche CF.png",
          "color": "#0B6E3B",
          "short": "ELC"
        },
        {
          "name": "FC Barcelona",
          "path": "logos/Spain - LaLiga/FC Barcelona.png",
          "color": "#A50044",
          "short": "BAR"
        },
        {
          "name": "Getafe CF",
          "path": "logos/Spain - LaLiga/Getafe CF.png",
          "color": "#005CB9",
          "short": "GET"
        },
        {
          "name": "Girona FC",
          "path": "logos/Spain - LaLiga/Girona FC.png",
          "color": "#E50021",
          "short": "GIR"
        },
        {
          "name": "Levante UD",
          "path": "logos/Spain - LaLiga/Levante UD.png",
          "color": "#1B3A68",
          "short": "LEV"
        },
        {
          "name": "Rayo Vallecano",
          "path": "logos/Spain - LaLiga/Rayo Vallecano.png",
          "color": "#D50032",
          "short": "RAY"
        },
        {
          "name": "RCD Espanyol Barcelona",
          "path": "logos/Spain - LaLiga/RCD Espanyol Barcelona.png",
          "color": "#00529F",
          "short": "ESP"
        },
        {
          "name": "RCD Mallorca",
          "path": "logos/Spain - LaLiga/RCD Mallorca.png",
          "color": "#D6001C",
          "short": "MLL"
        },
        {
          "name": "Real Betis Balompié",
          "path": "logos/Spain - LaLiga/Real Betis Balompie.png",
          "color": "#128A2E",
          "short": "RBB"
        },
        {
          "name": "Real Madrid",
          "path": "logos/Spain - LaLiga/Real Madrid.png",
          "color": "#FEBE10",
          "short": "RMA"
        },
        {
          "name": "Real Oviedo",
          "path": "logos/Spain - LaLiga/Real Oviedo.png",
          "color": "#0032A0",
          "short": "OVI"
        },
        {
          "name": "Real Sociedad",
          "path": "logos/Spain - LaLiga/Real Sociedad.png",
          "color": "#006BB6",
          "short": "RSO"
        },
        {
          "name": "Sevilla FC",
          "path": "logos/Spain - LaLiga/Sevilla FC.png",
          "color": "#DC0000",
          "short": "SEV"
        },
        {
          "name": "Valencia CF",
          "path": "logos/Spain - LaLiga/Valencia CF.png",
          "color": "#F19A1A",
          "short": "VAL"
        },
        {
          "name": "Villarreal CF",
          "path": "logos/Spain - LaLiga/Villarreal CF.png",
          "color": "#FDE100",
          "short": "VIL"
        }
      ],
      "Serie A": [
        {
          "name": "AC Milan",
          "path": "logos/Italy - Serie A/AC Milan.png",
          "color": "#AC1A2F",
          "short": "MIL"
        },
        {
          "name": "ACF Fiorentina",
          "path": "logos/Italy - Serie A/ACF Fiorentina.png",
          "color": "#582C83",
          "short": "FIO"
        },
        {
          "name": "AS Roma",
          "path": "logos/Italy - Serie A/AS Roma.png",
          "color": "#8E1F1E",
          "short": "ROM"
        },
        {
          "name": "Atalanta BC",
          "path": "logos/Italy - Serie A/Atalanta BC.png",
          "color": "#00539F",
          "short": "ATA"
        },
        {
          "name": "Bologna FC 1909",
          "path": "logos/Italy - Serie A/Bologna FC 1909.png",
          "color": "#001A4B",
          "short": "BOL"
        },
        {
          "name": "Cagliari Calcio",
          "path": "logos/Italy - Serie A/Cagliari Calcio.png",
          "color": "#1E3050",
          "short": "CAG"
        },
        {
          "name": "Como 1907",
          "path": "logos/Italy - Serie A/Como 1907.png",
          "color": "#004D9D",
          "short": "COM"
        },
        {
          "name": "Genoa CFC",
          "path": "logos/Italy - Serie A/Genoa CFC.png",
          "color": "#AE0000",
          "short": "GEN"
        },
        {
          "name": "Hellas Verona",
          "path": "logos/Italy - Serie A/Hellas Verona.png",
          "color": "#F7D117",
          "short": "VER"
        },
        {
          "name": "Inter Milan",
          "path": "logos/Italy - Serie A/Inter Milan.png",
          "color": "#0066B1",
          "short": "INT"
        },
        {
          "name": "Juventus FC",
          "path": "logos/Italy - Serie A/Juventus FC.png",
          "color": "#000000",
          "short": "JUV"
        },
        {
          "name": "Parma Calcio 1913",
          "path": "logos/Italy - Serie A/Parma Calcio 1913.png",
          "color": "#FFD100",
          "short": "PAR"
        },
        {
          "name": "Pisa Sporting Club",
          "path": "logos/Italy - Serie A/Pisa Sporting Club.png",
          "color": "#003DA5",
          "short": "PIS"
        },
        {
          "name": "SS Lazio",
          "path": "logos/Italy - Serie A/SS Lazio.png",
          "color": "#55C0EB",
          "short": "LAZ"
        },
        {
          "name": "SSC Napoli",
          "path": "logos/Italy - Serie A/SSC Napoli.png",
          "color": "#0055A5",
          "short": "NAP"
        },
        {
          "name": "Torino FC",
          "path": "logos/Italy - Serie A/Torino FC.png",
          "color": "#7A1E24",
          "short": "TOR"
        },
        {
          "name": "Udinese Calcio",
          "path": "logos/Italy - Serie A/Udinese Calcio.png",
          "color": "#000000",
          "short": "UDI"
        },
        {
          "name": "US Cremonese",
          "path": "logos/Italy - Serie A/US Cremonese.png",
          "color": "#D0021B",
          "short": "CRE"
        },
        {
          "name": "US Lecce",
          "path": "logos/Italy - Serie A/US Lecce.png",
          "color": "#D00027",
          "short": "LEC"
        },
        {
          "name": "US Sassuolo",
          "path": "logos/Italy - Serie A/US Sassuolo.png",
          "color": "#009739",
          "short": "SAS"
        }
      ]
    }
  );

// ---- utils ----
const qs = (s, r = document) => r.querySelector(s);

const els = {
  // meta / podklad
  backgroundImage: () => qs("#backgroundImage"),
  backgroundInfo:  () => qs("#backgroundInfo"),
  removeBackground:() => qs("#removeBackground"),

  // form
  aspectRatio:   () => qs("#aspectRatio"),
  league:        () => qs("#league"),
  useHomeCustom: () => qs("#useHomeCustom"),
  useAwayCustom: () => qs("#useAwayCustom"),
  homeTeamSelect:() => qs("#homeTeamSelect"),
  awayTeamSelect:() => qs("#awayTeamSelect"),
  homeTeamName:  () => qs("#homeTeamName"),
  awayTeamName:  () => qs("#awayTeamName"),
  homeColor:     () => qs("#homeColor"),
  awayColor:     () => qs("#awayColor"),
  homeScore:     () => qs("#homeScore"),
  awayScore:     () => qs("#awayScore"),
  eventType:     () => qs("#eventType"),
  eventTeam:     () => qs("#eventTeam"),
  eventPlayer:   () => qs("#eventPlayer"),
  eventMinute:   () => qs("#eventMinute"),
  eventExtra:    () => qs("#eventExtra"),
  addEventBtn:   () => qs("#addEventBtn"),
  eventsContainer:() => qs("#eventsContainer"),
  useShortNames: () => qs("#useShortNames"),
  statusText:    () => qs("#statusText"),
  resetBtn:      () => qs("#resetBtn"),
};

// ---- tiny store ----
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
  backgroundDataUrl: "",  // uložíme jen jako metadata (bez náhledu)
  backgroundName: "",
  aspectRatio: "9:16",

  // hlavní
  league: Object.keys(teamsData)[0] || "",
  useHomeCustom: false,
  useAwayCustom: false,
  homeTeamName: "",
  awayTeamName: "",
  homeColor: "#ffffff",
  awayColor: "#ffffff",
  homeScore: 0,
  awayScore: 0,
  events: [], // {id, type, team, player, minute, extra}
  useShortNames: false,
  statusText: "",
};

const store = createStore(initialState);

// ---- form helpers ----
const fillLeagueSelect = () => {
  const sel = els.league();
  sel.innerHTML = "";
  for (const league of Object.keys(teamsData)) {
    const opt = document.createElement("option");
    opt.value = league;
    opt.textContent = league;
    sel.appendChild(opt);
  }
};

const fillTeamSelects = () => {
  const league = store.getState().league;
  const teams = teamsData[league] || [];
  const homeSel = els.homeTeamSelect();
  const awaySel = els.awayTeamSelect();
  const mkOptions = (sel) => {
    sel.innerHTML = "";
    teams.forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t.name;
      opt.textContent = `${t.name}${t.short ? ` (${t.short})` : ""}`;
      sel.appendChild(opt);
    });
  };
  mkOptions(homeSel);
  mkOptions(awaySel);
  if (teams[0]) homeSel.value = teams[0].name;
  if (teams[1]) awaySel.value = teams[1].name;
};

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
    });
  });
};

// ---- wiring ----
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
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      store.setState({ backgroundDataUrl: String(reader.result), backgroundName: file.name });
      updateInfo();
    };
    reader.readAsDataURL(file);
  });

  btnRemove.addEventListener("click", () => {
    store.setState({ backgroundDataUrl: "", backgroundName: "" });
    els.backgroundImage().value = "";
    updateInfo();
  });

  updateInfo();
};

const wireForm = () => {
  // liga + výběry týmů
  els.league().addEventListener("change", (e) => {
    store.setState({ league: e.target.value });
    fillTeamSelects();
  });

  // custom vs databáze
  const onToggleCustom = () => {
    const s = store.getState();
    els.homeTeamName().style.display = s.useHomeCustom ? "" : "none";
    els.homeTeamSelect().style.display = s.useHomeCustom ? "none" : "";
    els.awayTeamName().style.display = s.useAwayCustom ? "" : "none";
    els.awayTeamSelect().style.display = s.useAwayCustom ? "none" : "";
  };

  els.useHomeCustom().addEventListener("change", (e) => { store.setState({ useHomeCustom: e.target.checked }); onToggleCustom(); });
  els.useAwayCustom().addEventListener("change", (e) => { store.setState({ useAwayCustom: e.target.checked }); onToggleCustom(); });

  // skóre
  els.homeScore().addEventListener("input", (e) => store.setState({ homeScore: Number(e.target.value) || 0 }));
  els.awayScore().addEventListener("input", (e) => store.setState({ awayScore: Number(e.target.value) || 0 }));

  // barvy a status
  els.homeColor().addEventListener("input", (e) => store.setState({ homeColor: e.target.value }));
  els.awayColor().addEventListener("input", (e) => store.setState({ awayColor: e.target.value }));
  els.statusText().addEventListener("input", (e) => store.setState({ statusText: e.target.value }));
  els.useShortNames().addEventListener("change", (e) => store.setState({ useShortNames: e.target.checked }));

  // ruční názvy
  els.homeTeamName().addEventListener("input", (e) => store.setState({ homeTeamName: e.target.value }));
  els.awayTeamName().addEventListener("input", (e) => store.setState({ awayTeamName: e.target.value }));

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
  });
};

// ---- init ----
document.addEventListener("DOMContentLoaded", () => {
  fillLeagueSelect();
  fillTeamSelects();
  wireBackground();
  wireForm();
  renderEventsList();
});


})();
