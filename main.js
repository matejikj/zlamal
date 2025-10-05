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

  // ==============================
  // Match Form – Lite (form-only)
  // ==============================

  // ==============================
  // Match Form – Lite (form-only)
  // ==============================

  const ALL_LEAGUES_VALUE = "__ALL__";

  // ---- teamsData ----------------------------------------------------
  // ⚠️ DOPLŇ si prosím kompletní teamsData z tvého původního souboru.
  // Struktura jedné položky: { name, short?, color?, path? }


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
  });

})();
