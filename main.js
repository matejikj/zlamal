(() => {
  "use strict";

  const GOOGLE_FONTS_CSS_URL =
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Oswald:wght@400;700&display=swap";

  const FONT_FAMILIES = ["Montserrat", "Oswald", "Arial"];

  const loadGoogleFonts = (url) => {
    const id = "dynamic-google-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = url;
      document.head.appendChild(link);
    }
  };



  const eventIcons = Object.freeze({
    goal: "⚽",
    ownGoal: "🔴⚽",
    yellow: "🟨",
    red: "🟥",
    twoYellow: "🟨🟥",
    default: "•",
  });

  const DEFAULTS = Object.freeze({
    league: "Premier League",
    homeScore: 2,
    awayScore: 1,
    statusText: "FULL TIME",
    aspectRatio: "9:16",
    maxEvents: 15,
  });
  const DEFAULT_LEAGUE = 'England - Premier League';
  const DEFAULT_HOME_TEAM = 'West Ham United';
  const DEFAULT_AWAY_TEAM = 'Wolverhampton Wanderers';

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

  const qs = (sel) => document.querySelector(sel);
  const qsa = (sel) => [...document.querySelectorAll(sel)];

  const els = Object.freeze({
    homeLogoDisplay: () => document.querySelector(".home-logo"),
    awayLogoDisplay: () => document.querySelector(".away-logo"),


    fontFamily: () => qs("#fontFamily"),

    backgroundInput: () => qs("#backgroundImage"),
    removeBackgroundBtn: () => qs("#removeBackground"),
    backgroundCanvas: () => qs("#backgroundCanvas"),
    aspectRatioSelect: () => qs("#aspectRatio"),
    leagueSelect: () => qs("#league"),
    homeCustomCheckbox: () => qs("#homeCustom"),
    awayCustomCheckbox: () => qs("#awayCustom"),
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
    addEventBtn: () => qs("#addEvent"),
    eventsContainer: () => qs("#eventsContainer"),
    statusText: () => qs("#statusText"),
    useShortNames: () => qs("#useShortNames"),
    matchPreview: () => qs("#matchPreview"),
    homeNameDisplay: () => qs(".home-name"),
    awayNameDisplay: () => qs(".away-name"),
    homeScoreDisplay: () => qs(".home-score"),
    awayScoreDisplay: () => qs(".away-score"),
    homeEventsDisplay: () => qs(".home-events"),
    awayEventsDisplay: () => qs(".away-events"),
    statusDisplay: () => qs(".status-text"),
    downloadBtn: () => qs("#downloadBtn"),
    resetBtn: () => qs("#resetBtn"),
    exportCanvas: () => qs("#exportCanvas"),
  });



  const setHidden = (el, hidden) => el?.classList?.toggle("hidden", !!hidden);
  const setText = (el, text) => { if (el) el.textContent = text; };
  const setHTML = (el, html) => { if (el) el.innerHTML = html; };
  const append = (el, child) => { if (el && child) el.appendChild(child); };
  const create = (tag, props = {}) => Object.assign(document.createElement(tag), props);

  const notify = (message, type = "info") => {
    const n = create("div", { className: `notification notification--${type}`, textContent: message });
    document.body.appendChild(n);
    requestAnimationFrame(() => n.classList.add("show"));
    setTimeout(() => { n.classList.remove("show"); setTimeout(() => n.remove(), 300); }, 3000);
  };

  const initialState = Object.freeze({
    logoSize: 110,

    fontFamily: "Montserrat",
    fontSizes: {
      team: 22,
      score: 40,
      event: 12,
      status: 14,
    },

    isInitialized: false,
    teamsData: {},
    league: DEFAULTS.league,
    homeCustom: false,
    awayCustom: false,
    homeTeamSelect: "",
    awayTeamSelect: "",
    homeTeamName: "",
    awayTeamName: "",
    homeColor: "#000000",
    awayColor: "#000000",
    homeScore: String(DEFAULTS.homeScore),
    awayScore: String(DEFAULTS.awayScore),
    statusText: DEFAULTS.statusText,
    useShortNames: false,
    aspectRatio: DEFAULTS.aspectRatio,
    events: [],
    backgroundImage: null,
  });

  const createStore = (preloaded = {}) => {
    let state = { ...initialState, ...preloaded };
    const listeners = new Set();
    return {
      getState: () => state,
      subscribe: (fn) => (listeners.add(fn), () => listeners.delete(fn)),
      setState: (updater) => {
        const next = typeof updater === "function" ? updater(state) : updater;
        state = Object.freeze(next);
        listeners.forEach((l) => l(state));
      },
    };
  };

  // Zmenšuje font-size na elementu tak dlouho, dokud se text vejde do jeho šířky.
  // Vrací skutečně použitou velikost (px).
  function shrinkTextToFit(el, minPx = 10) {
    // vychozi velikost bere z inline nebo computed
    const cs = window.getComputedStyle(el);
    let size = parseFloat(el.style.fontSize || cs.fontSize || "16") || 16;

    // jistota: element musí mít vlastní šířku k měření
    el.style.width = "100%";

    // v některých enginech je potřeba nejdřív přimět layout
    // (hlavně když přidáváme více řádků najednou)
    // proto měříme v rAF níže při volání
    const fit = () => {
      // bezpečnostní pojistka proti nekonečnu
      let guard = 200;
      while (guard-- > 0 && el.scrollWidth > el.clientWidth && size > minPx) {
        size -= 1;
        el.style.fontSize = `${size}px`;
      }
      return size;
    };

    return fit();
  }


  const ALL_LEAGUES_VALUE = "__ALL__";

  const allTeams = (s) =>
    Object.values(s.teamsData || {}).flat();

  const selectTeams = (s) =>
    s.league === ALL_LEAGUES_VALUE ? allTeams(s) : (s.teamsData[s.league] ?? []);

  const selectTeamOptionByName = (s, name) =>
    allTeams(s).find((t) => t.name === name);

  const getEventIcon = (type) => eventIcons[type] ?? eventIcons.default;

  const getDisplayedTeamName = (s, side) => {
    const isCustom = side === "home" ? s.homeCustom : s.awayCustom;
    if (isCustom) {
      const custom = side === "home" ? s.homeTeamName : s.awayTeamName;
      return custom.trim() || (side === "home" ? "Domácí" : "Hosté");
    }
    const selected = side === "home" ? s.homeTeamSelect : s.awayTeamSelect;
    if (!selected) return side === "home" ? "Domácí" : "Hosté";
    const opt = selectTeamOptionByName(s, selected);
    if (!opt) return selected;
    return s.useShortNames ? (opt.short ?? opt.name) : opt.name;
  };

  const reducers = {
    setFontFamily: (family) => (s) => ({ ...s, fontFamily: family }),

    setFontSize: (key, value) => (s) => ({
      ...s,
      fontSizes: { ...s.fontSizes, [key]: Math.max(1, Number(value) || 1) },
    }),

    setTeamsData: (payload) => (s) => ({ ...s, teamsData: payload }),
    setLeague: (league) => (s) => ({ ...s, league }),
    setAspectRatio: (aspectRatio) => (s) => ({ ...s, aspectRatio }),
    setUseShortNames: (useShortNames) => (s) => ({ ...s, useShortNames }),
    setCustomToggle: (side, checked) => (s) =>
      side === "home" ? { ...s, homeCustom: checked } : { ...s, awayCustom: checked },
    setTeamFromSelect: (side, name) => (s) => {
      const opt = selectTeamOptionByName(s, name);
      const color = opt?.color ?? "#000000";
      return side === "home"
        ? { ...s, homeTeamSelect: name, homeColor: color }
        : { ...s, awayTeamSelect: name, awayColor: color };
    },
    setTeamCustomName: (side, value) => (s) =>
      side === "home" ? { ...s, homeTeamName: value } : { ...s, awayTeamName: value },
    setTeamColor: (side, color) => (s) =>
      side === "home" ? { ...s, homeColor: color } : { ...s, awayColor: color },
    setScore: (side, value) => (s) =>
      side === "home" ? { ...s, homeScore: value } : { ...s, awayScore: value },
    setStatusText: (value) => (s) => ({ ...s, statusText: value }),
    addEvent: ({ type, team, player, minute, extra }) => (s) => {
      if (!player || !minute) return s;
      if (s.events.length >= DEFAULTS.maxEvents) return s;
      const id = Date.now() + Math.random();
      const extraNum = extra ? parseInt(extra, 10) : 0;
      const minuteNum = parseInt(minute, 10);
      const timeText = extraNum ? `${minuteNum}+${extraNum}'` : `${minuteNum}'`;
      const fullText = `${player} ${timeText}`;
      const next = [
        ...s.events,
        { id, type, team, player, minute: minuteNum, extra: extraNum, timeText, fullText },
      ].sort((a, b) => (a.minute - b.minute) || (a.extra - b.extra));
      return { ...s, events: next };
    },
    removeEvent: (id) => (s) => ({ ...s, events: s.events.filter((e) => e.id !== id) }),
    setBackgroundImage: (imgOrNull) => (s) => ({ ...s, backgroundImage: imgOrNull }),
    setInitialized: (value) => (s) => ({ ...s, isInitialized: value }),
    reset: () => (s) => ({ ...structuredClone(initialState), teamsData: s.teamsData }),
  };

  const wrapTeamName = (name, maxApproxWidth = 120) => {
    const words = name.split(" ");
    if (words.length <= 1) return [name];
    const lines = [];
    let cur = "";
    for (const w of words) {
      const test = cur ? `${cur} ${w}` : w;
      if (test.length * 7 > maxApproxWidth && cur !== "") {
        lines.push(cur);
        cur = w;
      } else {
        cur = test;
      }
    }
    if (cur) lines.push(cur);
    return lines.slice(0, 2);
  };

  const calculateEventScale = (count) =>
    count <= 3 ? "large" : count <= 6 ? "medium" : "small";

  const applyAspectRatioClass = (ratio) => {
    const preview = els.matchPreview();
    if (!preview) return;
    preview.className = preview.className.replace(/aspect-\w+-\w+/g, "");
    preview.classList.add(`aspect-${ratio.replace(":", "-")}`);
  };

  const renderTeamLogos = (s) => {
    const apply = (side) => {
      const img = side === "home" ? els.homeLogoDisplay() : els.awayLogoDisplay();
      if (!img) return;
      const isCustom = side === "home" ? s.homeCustom : s.awayCustom;

      if (isCustom) {
        img.src = "";
        img.style.visibility = "hidden";
        return;
      }

      const selectedName = side === "home" ? s.homeTeamSelect : s.awayTeamSelect;
      const team = selectTeamOptionByName(s, selectedName);
      if (team && team.path) {
        img.src = team.path;
        img.style.visibility = "visible";
      } else {
        img.src = "";
        img.style.visibility = "hidden";
      }
    };

    apply("home");
    apply("away");

    const root = els.matchPreview();
    if (root) root.style.setProperty("--logo-size", `${s.logoSize}px`);
  };


  const renderTeamNamesAndColors = (state, { homeName, awayName }) => {
    setHTML(els.homeNameDisplay(), wrapTeamName(homeName).join("<br>"));
    setHTML(els.awayNameDisplay(), wrapTeamName(awayName).join("<br>"));
    const hs = els.homeScoreDisplay();
    const as = els.awayScoreDisplay();
    const home = els.homeNameDisplay();
    const away = els.awayNameDisplay();
    if (home) home.style.color = state.homeColor;
    if (away) away.style.color = state.awayColor;
    if (hs) hs.style.color = state.homeColor;
    if (as) as.style.color = state.awayColor;
  };

  const renderScoresStatus = (state) => {
    setText(els.homeScoreDisplay(), state.homeScore || "0");
    setText(els.awayScoreDisplay(), state.awayScore || "0");
    setText(els.statusDisplay(), state.statusText || "FULL TIME");
  };

  const renderEventsListPanel = (state) => {
    const container = els.eventsContainer();
    if (!container) return;
    if (state.events.length === 0) {
      setHTML(container, '<p class="no-events">Zatím žádné události</p>');
      return;
    }
    container.innerHTML = "";
    for (const ev of state.events) {
      const row = create("div", { className: "event-item-manager" });
      row.innerHTML = `
        <div class="event-info">
          <div class="event-icon-display">${getEventIcon(ev.type)}</div>
          <div class="event-details">
            <div class="event-player">${ev.player}</div>
            <div class="event-time">${ev.timeText}</div>
          </div>
          <div class="event-team-badge ${ev.team}">${ev.team === "home" ? "D" : "H"}</div>
        </div>
        <button class="event-remove" data-event-id="${ev.id}">×</button>
      `;
      append(container, row);
    }
  };


  function renderEventsPreviewSingleLine(state) {
    const section = document.querySelector(".events-section-centered");
    const homeBox = document.querySelector(".home-events");
    const awayBox = document.querySelector(".away-events");
    if (!section || !homeBox || !awayBox) return;

    homeBox.innerHTML = "";
    awayBox.innerHTML = "";

    const events = state.events ?? [];
    const homes = events.filter(e => e.team === "home");
    const aways = events.filter(e => e.team === "away");

    const icon = (t) =>
      ({ goal: "⚽", yellow: "🟨", red: "🟥", sub: "🔁", pen: "●" }[t] || "•");

    const basePx = (state.fontSizes && state.fontSizes.event) || 18;
    const minPx = 10;

    const mkText = (e, side) => {
      const minute = e.minute ? `${e.minute}’ ` : "";
      const body = e.fullText ?? e.text ?? "";
      return side === "home"
        ? `${icon(e.type)} ${body}`        // HOME: ikona vlevo
        : `${body} ${icon(e.type)}`;      // AWAY: ikona vpravo
    };

    const addLine = (parent, text, align) => {
      const div = document.createElement("div");
      div.className = "event-line";
      div.style.fontSize = "6px";
      div.style.textAlign = align;
      div.style.whiteSpace = "nowrap";    // jistota 1 řádku
      div.textContent = text;
      parent.appendChild(div);

      // iOS fix: shrink až PO načtení fontů a 1 frame po vložení do DOMu
      (document.fonts?.ready ? document.fonts.ready : Promise.resolve()).then(() => {
        requestAnimationFrame(() => shrinkTextToFit(div, 10));
      });
    };


    // HOME (v levé polovině, zarovnáno doprava)
    homes.forEach((e) => addLine(homeBox, mkText(e, "home"), "right"));
    // AWAY (v pravé polovině, zarovnáno doleva)
    aways.forEach((e) => addLine(awayBox, mkText(e, "away"), "left"));
  }


  const applyEventsScaleClass = (state) => {
    const preview = els.matchPreview();
    if (!preview) return;
    preview.className = preview.className.replace(/team-scale-\w+/g, "");
    preview.className = preview.className.replace(/events-scale-\d+/g, "");
    preview.classList.add(`team-scale-${calculateEventScale(state.events.length)}`);
    preview.classList.add(`events-scale-${Math.min(state.events.length, 15)}`);
  };

  const cropAndPaintBackground = (img, ratio) => {
    const canvas = els.backgroundCanvas();
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const cw = canvas.offsetWidth;
    const ch = canvas.offsetHeight;
    canvas.width = cw;
    canvas.height = ch;
    const imgRatio = img.width / img.height;
    const canRatio = cw / ch;
    let sx, sy, sw, sh;
    if (imgRatio > canRatio) {
      sh = img.height;
      sw = img.height * canRatio;
      sx = (img.width - sw) / 2;
      sy = 0;
    } else {
      sw = img.width;
      sh = img.width / canRatio;
      sx = 0;
      sy = (img.height - sh) / 2;
    }
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(0, 0, cw, ch);
  };


  function computeLayoutFromPreview(state) {
    const preview =
      document.querySelector(".match-graphic") ||
      document.querySelector("#matchPreview") ||
      document.querySelector(".match-preview");

    const get = (sel) => preview?.querySelector(sel) || null;

    const homeLogoEl = get(".home .team-logo img, .home .team-logo, .home-logo img, .home-logo");
    const awayLogoEl = get(".away .team-logo img, .away .team-logo, .away-logo img, .away-logo");
    const homeNameEl = get(".home .team-name, .home-name, .team-name.home");
    const awayNameEl = get(".away .team-name, .away-name, .team-name.away");
    const scoreEl = get(".score, .scoreline, .match-score");
    const eventsHome = get(".events-home, .home .events, .home-events");
    const eventsAway = get(".events-away, .away .events, .away-events");
    const statusEl = get(".status, .match-status, .footer-status, .game-status");

    if (!preview) {
      return {
        width: 1080,
        height: state.aspectRatio === "9:16" ? 1920 : 1350,
        scaleFactor: 2,
        yTop: 24, gapSm: 12, gapMd: 16, gapLg: 24,
        nameFontPx: state.fontSizes.team,
        scoreFontPx: state.fontSizes.score,
        eventFontPx: state.fontSizes.event,
        statusFontPx: state.fontSizes.status,
        logoH: state.logoSize ?? 110,
        previewRects: null,
      };
    }

    const pRect = preview.getBoundingClientRect();
    const previewW = pRect.width || 540;
    const exportW = 1080;
    const exportH = state.aspectRatio === "9:16" ? 1920 : 1350;
    const scaleFactor = exportW / previewW;
    const minTopPad = Math.round(exportH * 0.02);

    const rectOf = (el) => (el ? el.getBoundingClientRect() : null);
    const relTop = (r) => (r ? (r.top - pRect.top) * scaleFactor : null);
    const relLeft = (r) => (r ? (r.left - pRect.left) * scaleFactor : null);
    const relW = (r) => (r ? r.width * scaleFactor : null);
    const relH = (r) => (r ? r.height * scaleFactor : null);

    const rHomeLogo = rectOf(homeLogoEl);
    const rAwayLogo = rectOf(awayLogoEl);
    const rHomeName = rectOf(homeNameEl);
    const rAwayName = rectOf(awayNameEl);
    const rScore = rectOf(scoreEl);
    const rEvHome = rectOf(eventsHome);
    const rEvAway = rectOf(eventsAway);
    const rStatus = rectOf(statusEl);

    const px = (el, prop, fallback) => {
      if (!el) return fallback;
      const cs = getComputedStyle(el);
      const val = parseFloat(cs.getPropertyValue(prop));
      return Number.isFinite(val) ? val : fallback;
    };

    const nameFontPx = Math.max(10, px(homeNameEl || awayNameEl, "font-size", state.fontSizes.team));
    const scoreFontPx = Math.max(10, px(scoreEl, "font-size", state.fontSizes.score));
    const eventFontPx = Math.max(8, px(eventsHome || eventsAway, "font-size", state.fontSizes.event));
    const statusFontPx = Math.max(10, px(statusEl, "font-size", state.fontSizes.status));

    const logoHPreview =
      (rHomeLogo && rHomeLogo.height) ||
      (rAwayLogo && rAwayLogo.height) ||
      (state.logoSize ?? 110);
    const logoH = Math.round(logoHPreview * scaleFactor);

    const yLogo = Math.round(
      Math.max(relTop(rHomeLogo) ?? 0, relTop(rAwayLogo) ?? 0, minTopPad)
    );


    const padCoef = state.aspectRatio === "9:16" ? 18 : 30;


    let yName = Math.round(
      Math.max(
        relTop(rHomeName) ?? (yLogo + logoH + 12 * scaleFactor),
        relTop(rAwayName) ?? (yLogo + logoH + 12 * scaleFactor)
      )
    );

    yName = yName + padCoef;

    const yScore = Math.round(
      relTop(rScore) ?? (yName + nameFontPx * 1.2 * scaleFactor + 16 * scaleFactor)
    );

    const yEvents = Math.round(
      Math.min(
        relTop(rEvHome) ?? Infinity,
        relTop(rEvAway) ?? Infinity,
        (yScore + scoreFontPx * scaleFactor + 16 * scaleFactor)
      )
    );

    const yStatus = Math.round(
      relTop(rStatus) ?? (exportH - 64 * scaleFactor)
    );

    const cx = exportW / 2;

    const evHomeX = (rEvHome ? relLeft(rEvHome) + relW(rEvHome) : cx - 220 * scaleFactor) - 50 * scaleFactor;
    const evAwayX = (rEvAway ? relLeft(rEvAway) : cx + 220 * scaleFactor) + 50 * scaleFactor;

    const homeNameX = rHomeName ? (relLeft(rHomeName) + relW(rHomeName) / 2) : (cx - 220 * scaleFactor);
    const awayNameX = rAwayName ? (relLeft(rAwayName) + relW(rAwayName) / 2) : (cx + 220 * scaleFactor);

    const homeNameMaxW = Math.floor(relW(rHomeName) || 320 * scaleFactor);
    const awayNameMaxW = Math.floor(relW(rAwayName) || 320 * scaleFactor);

    const scoreHalf = (relW(rScore) || 240 * scaleFactor) / 2;
    const scoreOffsetX = Math.max(36 * scaleFactor, scoreHalf * 0.50);

    const gapSm = Math.round(12 * scaleFactor);
    const gapMd = Math.round(16 * scaleFactor);
    const gapLg = Math.round(24 * scaleFactor);

    return {
      width: exportW,
      height: exportH,
      scaleFactor,
      yLogo, yName, yScore, yEvents, yStatus,
      cx, evHomeX, evAwayX, homeNameX, awayNameX, homeNameMaxW, awayNameMaxW, scoreOffsetX,
      nameFontPx: nameFontPx * scaleFactor,
      scoreFontPx: scoreFontPx * scaleFactor,
      eventFontPx: eventFontPx * scaleFactor,
      statusFontPx: statusFontPx * scaleFactor,
      logoH,
      gapSm, gapMd, gapLg,
      previewRects: { rHomeLogo, rAwayLogo, rHomeName, rAwayName, rScore, rEvHome, rEvAway, rStatus, pRect }
    };
  }

  const drawExport = async (state, names) => {
    const canvas = els.exportCanvas();
    const ctx = canvas.getContext("2d");
    const L = computeLayoutFromPreview(state);

    canvas.width = L.width;
    canvas.height = L.height;
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    if (state.backgroundImage) {
      const img = state.backgroundImage;
      const imgRatio = img.width / img.height;
      const canRatio = L.width / L.height;
      let sx, sy, sw, sh;
      if (imgRatio > canRatio) {
        sh = img.height; sw = img.height * canRatio; sx = (img.width - sw) / 2; sy = 0;
      } else {
        sw = img.width; sh = img.width / canRatio; sx = 0; sy = (img.height - sh) / 2;
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, L.width, L.height);
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.fillRect(0, 0, L.width, L.height);
    } else {
      const g = ctx.createLinearGradient(0, 0, L.width, L.height);
      g.addColorStop(0, "rgba(59,130,246,0.1)");
      g.addColorStop(1, "rgba(245,158,11,0.1)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, L.width, L.height);
    }

    await document.fonts.ready.catch(() => { });
    const fam = state.fontFamily || "Arial";

    ctx.textBaseline = "top";
    ctx.strokeStyle = "rgba(0,0,0,0.85)";
    ctx.lineWidth = 2;


    function drawSingleLineShrink(text, x, y, maxW, px, weight = 400, color = "white", align = "left") {
      ctx.textAlign = align;
      let fontPx = px;
      ctx.font = `${weight} ${fontPx}px ${fam}, Arial, sans-serif`;

      // shrink-to-fit
      let w = ctx.measureText(text).width;
      while (w > maxW && fontPx > 10) {
        fontPx -= 1;
        ctx.font = `${weight} ${fontPx}px ${fam}, Arial, sans-serif`;
        w = ctx.measureText(text).width;
      }

      ctx.fillStyle = color;
      ctx.fillText(text, x, y);
      return fontPx; // vrací skutečně použitou velikost (pro line height)
    }

    const drawWrapped = (text, x, y, maxW, fontPx, weight = 700, color = "white", align = "center", lineH = 1.2) => {
      ctx.font = `${weight} ${Math.round(fontPx)}px ${fam}, Arial, sans-serif`;
      ctx.fillStyle = color;
      ctx.textAlign = align;

      const words = (text || "").split(/\s+/).filter(Boolean);

      // 1) předfit: zmenšíme jednotně tak, aby se NEJDELŠÍ slovo vešlo do maxW
      if (words.length) {
        const longest = Math.max(...words.map(w => ctx.measureText(w).width));
        if (longest > maxW) {
          const scale = maxW / longest;
          fontPx = Math.max(8, Math.floor(fontPx * scale));
          ctx.font = `${weight} ${Math.round(fontPx)}px ${fam}, Arial, sans-serif`;
        }
      }

      const lh = Math.round(fontPx * lineH);
      const lines = [];
      let cur = "";
      const w = (t) => ctx.measureText(t).width;

      // 2) zalamujeme jen mezi slovy (žádné řezání tokenů)
      for (const token of (words.length ? words : [""])) {
        const test = cur ? `${cur} ${token}` : token;
        if (w(test) <= maxW) cur = test;
        else { if (cur) lines.push(cur); cur = token; }
      }
      if (cur) lines.push(cur);

      // 3) vykreslení
      lines.forEach((s, i) => {
        const yy = y + i * lh;
        ctx.strokeText(s, x, yy);
        ctx.fillText(s, x, yy);
      });
      return lines.length * lh;
    };



    const loadImg = (src) => new Promise((resolve) => {
      if (!src) return resolve(null);
      const im = new Image();
      im.crossOrigin = "anonymous";
      im.onload = () => resolve(im);
      im.onerror = () => resolve(null);
      im.src = src;
    });

    const getLogoPath = (side) => {
      const isCustom = side === "home" ? state.homeCustom : state.awayCustom;
      if (isCustom) return null;
      const selected = side === "home" ? state.homeTeamSelect : state.awayTeamSelect;
      const opt = selected ? selectTeamOptionByName(state, selected) : null;
      return opt?.path ?? null;
    };
    const [homeLogo, awayLogo] = await Promise.all([
      loadImg(getLogoPath("home")),
      loadImg(getLogoPath("away")),
    ]);

    const logoH = Math.round(L.logoH);
    const drawLogo = (img, centerX, topY) => {
      if (!img) return;
      const w = Math.round((img.width / img.height) * logoH);
      ctx.drawImage(img, Math.round(centerX - w / 2), Math.round(topY), w, logoH);
    };

    const homeLogoX =
      (L.previewRects?.rHomeLogo ? ((L.previewRects.rHomeLogo.left - L.previewRects.pRect.left) * L.scaleFactor + (L.previewRects.rHomeLogo.width * L.scaleFactor) / 2)
        : (L.cx - 220 * L.scaleFactor));
    const awayLogoX =
      (L.previewRects?.rAwayLogo ? ((L.previewRects.rAwayLogo.left - L.previewRects.pRect.left) * L.scaleFactor + (L.previewRects.rAwayLogo.width * L.scaleFactor) / 2)
        : (L.cx + 220 * L.scaleFactor));

    drawLogo(homeLogo, homeLogoX, L.yLogo);
    drawLogo(awayLogo, awayLogoX, L.yLogo);

    const nameColorHome = state.homeColor || "white";
    const nameColorAway = state.awayColor || "white";
    const nameLH = 1.2;

    const hNameH = drawWrapped(names.homeName, L.homeNameX, L.yName, L.homeNameMaxW, L.nameFontPx, 700, nameColorHome, "center", nameLH);
    const aNameH = drawWrapped(names.awayName, L.awayNameX, L.yName, L.awayNameMaxW, L.nameFontPx, 700, nameColorAway, "center", nameLH);

    ctx.font = `700 ${Math.round(L.scoreFontPx)}px ${fam}, Arial, sans-serif`;
    ctx.lineWidth = 3;

    ctx.textAlign = "right";
    ctx.fillStyle = nameColorHome;
    ctx.strokeText(String(state.homeScore ?? "0"), L.cx - L.scoreOffsetX, L.yScore);
    ctx.fillText(String(state.homeScore ?? "0"), L.cx - L.scoreOffsetX, L.yScore);

    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.strokeText("-", L.cx, L.yScore);
    ctx.fillText("-", L.cx, L.yScore);

    ctx.textAlign = "left";
    ctx.fillStyle = nameColorAway;
    ctx.strokeText(String(state.awayScore ?? "0"), L.cx + L.scoreOffsetX, L.yScore);
    ctx.fillText(String(state.awayScore ?? "0"), L.cx + L.scoreOffsetX, L.yScore);


    // --- helper: stejné chování jako drawWrapped, ale jen MĚŘÍ (nebo vrátí i zalomené řádky)
    const measureWrapped = (text, maxW, fontPx, weight = 400, align = "left", lineH = 1.2) => {
      ctx.font = `${weight} ${Math.round(fontPx)}px ${fam}, Arial, sans-serif`;
      const words = (text || "").split(/\s+/).filter(Boolean);

      // předfit — nejdelší slovo se musí vejít do maxW
      if (words.length) {
        const longest = Math.max(...words.map(w => ctx.measureText(w).width));
        if (longest > maxW) {
          const scale = maxW / longest;
          fontPx = Math.max(8, Math.floor(fontPx * scale));
          ctx.font = `${weight} ${Math.round(fontPx)}px ${fam}, Arial, sans-serif`;
        }
      }

      const lh = Math.round(fontPx * lineH);
      const lines = [];
      let cur = "";
      const w = (t) => ctx.measureText(t).width;

      for (const token of (words.length ? words : [""])) {
        const test = cur ? `${cur} ${token}` : token;
        if (w(test) <= maxW) cur = test;
        else { if (cur) lines.push(cur); cur = token; }
      }
      if (cur) lines.push(cur);

      return { lines, lineHeight: lh, fontPx, height: lines.length * lh };
    };

    // === EVENTS RENDERING (auto-wrap + auto-shrink per half) ===
    const events = state.events ?? [];
    const homes = events.filter(e => e.team === "home");
    const aways = events.filter(e => e.team === "away");

    // základní velikost písma pro eventy vychází z layoutu
    let evPx = L.eventFontPx;

    // sloupce: bezpečné okraje uvnitř poloviny
    const pad = Math.round(24 * L.scaleFactor);
    const homeLeft = pad;
    const homeRight = Math.round(L.cx - pad);
    const awayLeft = Math.round(L.cx + pad);
    const awayRight = Math.round(L.width - pad);

    const homeMaxW = Math.max(32, homeRight - homeLeft);
    const awayMaxW = Math.max(32, awayRight - awayLeft);

    // dostupná výška pro sloupce událostí
    const availTop = L.yEvents;
    const availBottom = Math.min(L.yStatus, L.height - Math.round(72 * L.scaleFactor));
    const availableH = Math.max(0, availBottom - availTop);

    // mezera mezi událostmi
    const gap = Math.round(8 * L.scaleFactor);

    // funkce spočítá celkovou výšku sloupce pro daný font
    const columnHeight = (items, maxW, px) => {
      let h = 0;
      for (const it of items) {
        const txt = it.team === "home"
          ? `${({ goal: "⚽", yellow: "🟨", red: "🟥", sub: "🔁", pen: "●" }[it.type] || "•")} ${it.fullText ?? it.text ?? ""}`
          : `${it.fullText ?? it.text ?? ""} ${({ goal: "⚽", yellow: "🟨", red: "🟥", sub: "🔁", pen: "●" }[it.type] || "•")}`;
        const m = measureWrapped(txt, maxW, px, 400, "left", 1.2);
        h += m.height + gap;
      }
      return h ? h - gap : 0; // poslední už bez mezery
    };

    // iterativně zmenšuj font, dokud se obě poloviny nevejdou
    const minPx = Math.max(10, Math.floor(10 * L.scaleFactor));
    while (
      (columnHeight(homes, homeMaxW, evPx) > availableH ||
        columnHeight(aways, awayMaxW, evPx) > availableH) &&
      evPx > minPx
    ) {
      evPx -= 1; // plynulé zmenšování
    }

    // teď vykresli sloupce s nalezeným px
    ctx.lineWidth = 1;
    ctx.fillStyle = "white";

    // HOME (zarovnání doprava v levé polovině)
    let yH = availTop;
    ctx.textAlign = "right";
    for (const e of homes) {
      const txt = `${({ goal: "⚽", yellow: "🟨", red: "🟥", sub: "🔁", pen: "●" }[e.type] || "•")} ${e.minute ? "" + "’ " : ""}${e.fullText ?? e.text ?? ""}`;
      const usedPx = drawSingleLineShrink(txt, homeRight, yH, homeMaxW, evPx, 400, "white", "right");
      yH += Math.round(usedPx * 1.2) + gap;
    }

    // AWAY (zarovnání doleva v pravé polovině)
    let yA = availTop;
    ctx.textAlign = "left";
    for (const e of aways) {
      const txt = `${e.minute ? "" + "’ " : ""}${e.fullText ?? e.text ?? ""} ${({ goal: "⚽", yellow: "🟨", red: "🟥", sub: "🔁", pen: "●" }[e.type] || "•")}`;
      const usedPx = drawSingleLineShrink(txt, awayLeft, yA, awayMaxW, evPx, 400, "white", "left");
      yA += Math.round(usedPx * 1.2) + gap;
    }



    ctx.textAlign = "center";
    ctx.font = `700 ${Math.round(L.statusFontPx)}px ${fam}, Arial, sans-serif`;
    ctx.fillStyle = "white";
    const statusY = Math.min(L.yStatus, L.height - Math.round(64 * L.scaleFactor));
    const statusText = state.statusText || "FULL TIME";
    ctx.strokeText(statusText, L.cx, statusY);
    ctx.fillText(statusText, L.cx, statusY);
  };

  const bootstrap = () => {
    loadGoogleFonts(GOOGLE_FONTS_CSS_URL);

    const store = createStore({ teamsData });

    const fullRender = (s) => {
      applyAspectRatioClass(s.aspectRatio);
      const names = {
        homeName: getDisplayedTeamName(s, "home"),
        awayName: getDisplayedTeamName(s, "away"),
      };
      renderTeamNamesAndColors(s, names);
      renderTeamLogos(s);
      renderScoresStatus(s);
      renderEventsPreviewSingleLine(s);
      applyEventsScaleClass(s);
      renderEventsListPanel(s);

      const previewRoot = els.matchPreview();
      if (previewRoot) previewRoot.style.fontFamily = `${s.fontFamily}, Arial, sans-serif`;

      const homeNameEl = els.homeNameDisplay();
      const awayNameEl = els.awayNameDisplay();

      const homeScoreEl = els.homeScoreDisplay();
      const awayScoreEl = els.awayScoreDisplay();

      const homeEventsEl = els.homeEventsDisplay();
      const awayEventsEl = els.awayEventsDisplay();

      const statusEl = els.statusDisplay();
    };

    const fontSel = els.fontFamily();
    if (fontSel) {
      fontSel.innerHTML = "";
      FONT_FAMILIES.forEach((f) => {
        const o = document.createElement("option");
        o.value = f; o.textContent = f;
        fontSel.appendChild(o);
      });
      fontSel.value = store.getState().fontFamily;
      fontSel.addEventListener("change", (e) => {
        store.setState(reducers.setFontFamily(e.target.value));
      });
    }

    store.subscribe(fullRender);
    fullRender(store.getState());

    const populateTimeSelectorsIfNeeded = () => {
      const minute = els.eventMinute();
      const extra = els.eventExtra();
      if (minute && minute.options.length <= 1) {
        setHTML(minute, '<option value="">Min</option>');
        for (let i = 1; i <= 90; i++) {
          const o = create("option"); o.value = String(i); o.textContent = String(i); append(minute, o);
        }
      }
      if (extra && extra.options.length <= 1) {
        setHTML(extra, '<option value="">+čas</option>');
        for (let i = 1; i <= 13; i++) {
          const o = create("option"); o.value = String(i); o.textContent = `+${i}`; append(extra, o);
        }
      }
    };

    const populateLeagues = () => {
      const sel = els.leagueSelect();
      if (!sel) return;
      const leagues = Object.keys(store.getState().teamsData);
      if (leagues.length === 0) return;

      sel.innerHTML = "";
      const all = create("option");
      all.value = ALL_LEAGUES_VALUE;
      all.textContent = "Všechny ligy";
      append(sel, all);

      leagues.forEach((league) => {
        const o = create("option");
        o.value = league; o.textContent = league;
        append(sel, o);
      });
    };

    const populateTeamOptions = () => {
      const s = store.getState();
      const homeSel = els.homeTeamSelect();
      const awaySel = els.awayTeamSelect();
      if (!homeSel || !awaySel) return;

      const resetSelect = (sel) => {
        setHTML(sel, '<option value="">Vyberte tým...</option>');
      };
      resetSelect(homeSel); resetSelect(awaySel);

      if (s.league === ALL_LEAGUES_VALUE) {
        Object.entries(s.teamsData).forEach(([league, teams]) => {
          const groupH = create("optgroup", { label: league });
          const groupA = create("optgroup", { label: league });
          teams.forEach((t) => {
            const mk = () => {
              const o = create("option");
              o.value = t.name;
              o.textContent = t.name;
              o.dataset.color = t.color;
              o.dataset.short = t.short ?? "";
              return o;
            };
            groupH.appendChild(mk());
            groupA.appendChild(mk());
          });
          homeSel.appendChild(groupH);
          awaySel.appendChild(groupA);
        });
      } else {
        const teams = selectTeams(s);
        teams.forEach((t) => {
          const o = create("option");
          o.value = t.name; o.textContent = t.name;
          o.dataset.color = t.color; o.dataset.short = t.short ?? "";
          append(homeSel, o.cloneNode(true));
          append(awaySel, o);
        });
      }
      if (!s.isInitialized && s.league === "Premier League") {
        const hasMU = [...homeSel.querySelectorAll("option")].some((o) => o.value === "Manchester United");
        const hasLIV = [...awaySel.querySelectorAll("option")].some((o) => o.value === "Liverpool");
        if (hasMU) store.setState(reducers.setTeamFromSelect("home", "Manchester United"));
        if (hasLIV) store.setState(reducers.setTeamFromSelect("away", "Liverpool"));
        store.setState(reducers.setInitialized(true));
      }
    };

    const toggleCustomTeam = (side) => {
      const checkbox = side === "home" ? els.homeCustomCheckbox() : els.awayCustomCheckbox();
      const database = document.getElementById(`${side}TeamDatabase`);
      const custom = document.getElementById(`${side}TeamCustom`);
      setHidden(database, checkbox?.checked);
      setHidden(custom, !checkbox?.checked);
    };

    const setDefaults = () => {
      store.setState(reducers.setLeague(ALL_LEAGUES_VALUE));

      populateTeamOptions();
      store.setState(reducers.setScore("home", String(DEFAULTS.homeScore)));
      store.setState(reducers.setScore("away", String(DEFAULTS.awayScore)));
      store.setState(reducers.setStatusText(DEFAULTS.statusText));
      store.setState(reducers.setAspectRatio(DEFAULTS.aspectRatio));
      els.homeCustomCheckbox() && (els.homeCustomCheckbox().checked = false);
      els.awayCustomCheckbox() && (els.awayCustomCheckbox().checked = false);
      toggleCustomTeam("home"); toggleCustomTeam("away");
    };

    els.backgroundInput()?.addEventListener("change", (e) => {
      const file = e.target.files?.[0]; if (!file) return;
      const img = new Image();
      img.onload = () => {
        store.setState(reducers.setBackgroundImage(img));
        cropAndPaintBackground(img, store.getState().aspectRatio);
        els.removeBackgroundBtn()?.classList.remove("hidden");
      };
      img.src = URL.createObjectURL(file);
    });

    els.removeBackgroundBtn()?.addEventListener("click", () => {
      store.setState(reducers.setBackgroundImage(null));
      const canvas = els.backgroundCanvas();
      if (canvas) { const ctx = canvas.getContext("2d"); ctx.clearRect(0, 0, canvas.width, canvas.height); }
      const input = els.backgroundInput(); if (input) input.value = "";
      els.removeBackgroundBtn()?.classList.add("hidden");
    });

    els.aspectRatioSelect()?.addEventListener("change", () => {
      store.setState(reducers.setAspectRatio(els.aspectRatioSelect().value));
      const img = store.getState().backgroundImage;
      if (img) cropAndPaintBackground(img, store.getState().aspectRatio);
    });

    els.leagueSelect()?.addEventListener("change", () => {
      store.setState(reducers.setLeague(els.leagueSelect().value));
      populateTeamOptions();
    });

    els.homeCustomCheckbox()?.addEventListener("change", (e) => {
      store.setState(reducers.setCustomToggle("home", e.target.checked));
      toggleCustomTeam("home");
    });

    els.awayCustomCheckbox()?.addEventListener("change", (e) => {
      store.setState(reducers.setCustomToggle("away", e.target.checked));
      toggleCustomTeam("away");
    });

    els.homeTeamSelect()?.addEventListener("change", (e) => {
      store.setState(reducers.setTeamFromSelect("home", e.target.value));
    });
    els.awayTeamSelect()?.addEventListener("change", (e) => {
      store.setState(reducers.setTeamFromSelect("away", e.target.value));
    });

    [
      [els.homeTeamName, (v) => reducers.setTeamCustomName("home", v)],
      [els.awayTeamName, (v) => reducers.setTeamCustomName("away", v)],
      [els.homeColor, (v) => reducers.setTeamColor("home", v)],
      [els.awayColor, (v) => reducers.setTeamColor("away", v)],
      [els.homeScore, (v) => reducers.setScore("home", v)],
      [els.awayScore, (v) => reducers.setScore("away", v)],
      [els.statusText, (v) => reducers.setStatusText(v)],
    ].forEach(([getter, toReducer]) => {
      getter()?.addEventListener("input", (e) => store.setState(toReducer(e.target.value)));
    });

    els.useShortNames()?.addEventListener("change", (e) => {
      store.setState(reducers.setUseShortNames(!!e.target.checked));
    });

    els.addEventBtn()?.addEventListener("click", (e) => {
      e.preventDefault();
      const type = els.eventType()?.value;
      const team = els.eventTeam()?.value;
      const player = els.eventPlayer()?.value.trim();
      // const player = "emerick-aubameyang";
      const minute = els.eventMinute()?.value;
      // const minute = 20;
      const extra = els.eventExtra()?.value;
      if (!player || !minute) { notify("Vyplňte jméno hráče a minutu!", "error"); return; }
      if (store.getState().events.length >= DEFAULTS.maxEvents) {
        notify(`Maximálně ${DEFAULTS.maxEvents} událostí!`, "error"); return;
      }
      store.setState(reducers.addEvent({ type, team, player, minute, extra }));
      if (els.eventPlayer()) els.eventPlayer().value = "";
      if (els.eventMinute()) els.eventMinute().value = "";
      if (els.eventExtra()) els.eventExtra().value = "";
      notify("Událost přidána!", "success");
    });

    els.eventMinute()?.addEventListener("focus", () => {
      setTimeout(populateTimeSelectorsIfNeeded, 100);
    });

    els.eventsContainer()?.addEventListener("click", (e) => {
      const btn = e.target.closest(".event-remove"); if (!btn) return;
      const id = Number(btn.dataset.eventId);
      store.setState(reducers.removeEvent(id));
    });

    els.downloadBtn()?.addEventListener("click", async () => {
      const btn = els.downloadBtn();
      btn.disabled = true; btn.textContent = "Generuji...";
      try {
        const s = store.getState();
        const names = {
          homeName: getDisplayedTeamName(s, "home"),
          awayName: getDisplayedTeamName(s, "away"),
        };
        await drawExport(s, names);
        const ratio = s.aspectRatio;
        const homeNameSlug = names.homeName.replace(/\s+/g, "-");
        const awayNameSlug = names.awayName.replace(/\s+/g, "-");
        const link = document.createElement("a");
        link.download = `fotbal-${ratio}-${homeNameSlug}-vs-${awayNameSlug}.png`;
        link.href = els.exportCanvas().toDataURL("image/png", 1.0);
        document.body.appendChild(link);
        link.click();
        link.remove();
        notify("Obrázek stažen!", "success");
      } catch (err) {
        console.error("Chyba při stahování:", err);
        notify("Chyba při stahování", "error");
      } finally {
        btn.disabled = false; btn.textContent = "Stáhnout PNG";
      }
    });

    els.resetBtn()?.addEventListener("click", () => {
      if (!confirm("Resetovat celou aplikaci?")) return;
      store.setState(reducers.reset());
      els.removeBackgroundBtn()?.classList.add("hidden");
      setDefaults();
      notify("Aplikace resetována", "info");
    });

    document.addEventListener("dragover", (e) => e.preventDefault());
    document.addEventListener("drop", (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files.length > 0 && files[0].type?.startsWith("image/")) {
        const input = els.backgroundInput(); if (input) input.files = files;
        const file = files[0];
        const img = new Image();
        img.onload = () => {
          store.setState(reducers.setBackgroundImage(img));
          cropAndPaintBackground(img, store.getState().aspectRatio);
          els.removeBackgroundBtn()?.classList.remove("hidden");
        };
        img.src = URL.createObjectURL(file);
      }
    });

    populateLeagues();
    populateTimeSelectorsIfNeeded();
    setDefaults();

    // // --- PŘEDVÝBĚR LIGY A TÝMŮ (vložit přesně sem) ---
    // store.setState(reducers.setLeague(DEFAULT_LEAGUE));
    // populateTeamOptions();                // znovu naplní <select> podle ligy

    // // jistota: nepoužíváme "vlastní názvy"
    // store.setState(reducers.setCustomToggle("home", false));
    // store.setState(reducers.setCustomToggle("away", false));
    // toggleCustomTeam("home");
    // toggleCustomTeam("away");

    // // nastav konkrétní týmy z databáze
    // store.setState(reducers.setTeamFromSelect("home", DEFAULT_HOME_TEAM));
    // store.setState(reducers.setTeamFromSelect("away", DEFAULT_AWAY_TEAM));

    // // okamžitě překresli
    // fullRender(store.getState());
    // // --- konec předvýběru ---






    window.addEventListener("resize", () => {
      const img = store.getState().backgroundImage;
      if (img) cropAndPaintBackground(img, store.getState().aspectRatio);
    });
  };

  document.addEventListener("DOMContentLoaded", bootstrap);
})();
