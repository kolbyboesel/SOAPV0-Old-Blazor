//API KEY-9f3436bf65c47b3988484cb92d3cb3be

function clear(elementID) {
  let container = document.querySelector("." + elementID);
  container.innerHTML = "";
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7c01195a20mshbc9188a6ca4f5a5p1ce61cjsn5e640810eca6",
    "X-RapidAPI-Host": "odds.p.rapidapi.com",
  },
};

async function getData(url) {
  try {
    let res = await fetch(url, options);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function showNBAScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">NBA Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/basketball_nba/scores?daysFrom=1"
    ),
    "containerNBA"
  );

  let container = document.querySelector("." + "containerNBA");
  container.innerHTML = html;
}

async function showMLBScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">MLB Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores?daysFrom=1"
    ),
    "containerMLB"
  );

  let container = document.querySelector("." + "containerMLB");
  container.innerHTML = html;
}

async function showNFLScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">NFL Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores?daysFrom=1"
    ),
    "containerNFL"
  );

  let container = document.querySelector("." + "containerNFL");
  container.innerHTML = html;
}
 
async function showCFBScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">College Football Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/americanfootball_ncaaf/scores?daysFrom=1"
    ),
    "containeCFB"
  );

  let container = document.querySelector("." + "containeCFB");
  container.innerHTML = html;
}

async function showCollegeBaseballScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">College Baseball Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/baseball_ncaa/scores?daysFrom=1"
    ),
    "containerCBaseball"
  );

  let container = document.querySelector("." + "containerCBaseball");
  container.innerHTML = html;
}

async function showCBBScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">College Basketball Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/basketball_ncaab/scores?daysFrom=1"
    ),
    "containerNCAAB"
  );

  let container = document.querySelector("." + "containerNCAAB");
  container.innerHTML = html;
}

async function showPremScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">Premier League Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_epl/scores?daysFrom=1"
    ),
    "containerPrem"
  );

  let container = document.querySelector("." + "containerPrem");
  container.innerHTML = html;
}

async function showLigue1Scores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">Ligue 1 Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_france_ligue_one/scores?daysFrom=1"
    ),
    "containerLigue1"
  );

  let container = document.querySelector("." + "containerLigue1");
  container.innerHTML = html;
}

async function showBundesligaScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">Bundesliga Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_germany_bundesliga/scores?daysFrom=1"
    ),
    "containerNFL"
  );

  let container = document.querySelector("." + "containerBundesliga");
  container.innerHTML = html;
}

async function showSerieAScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">Serie A Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_italy_serie_a/scores?daysFrom=1"
    ),
    "containerSerieA"
  );

  let container = document.querySelector("." + "containerSerieA");
  container.innerHTML = html;
}

async function showLaligaScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">LaLiga Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_spain_la_liga/scores?daysFrom=1"
    ),
    "containerLaLiga"
  );

  let container = document.querySelector("." + "containerLaLiga");
  container.innerHTML = html;
}

async function showMLSScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">MLS Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_usa_mls/scores?daysFrom=1"
    ),
    "containerMLS"
  );

  let container = document.querySelector("." + "containerMLS");
  container.innerHTML = html;
}

async function showNHLScores() {
  $("body").removeClass("offcanvas-menu");
  let html = "";
  html += `<div class="pageHeader containerPad">NHL Scores</div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/icehockey_nhl/scores?daysFrom=1"
    ),
    "containerNHL"
  );

  let container = document.querySelector("." + "containerNHL");
  container.innerHTML = html;
}

async function showLiveMLB() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href="" style="color:black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData("https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores"),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

async function showLiveNBA() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" style="color:black">NBA</a>
  <a onclick=showLiveMLB() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/basketball_nba/scores"
    ),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

async function showLiveNHL() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" style="color:black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData("https://odds.p.rapidapi.com/v4/sports/icehockey_nhl/scores"),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

async function showLiveNFL() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href=""class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" style="color:black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores"
    ),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}


async function showLiveCFB() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" style="color:black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/americanfootball_ncaaf/scores"
    ),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

async function showLiveCBB() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" style="color:black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/basketball_ncaab/scores"
    ),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

async function showLiveCBaseball() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" style="color:black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/baseball_ncaa/scores"
    ),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

async function showLivePrem() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" style="color:black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_epl/scores"
    ),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

async function showLiveBundesliga() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" style="color:black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_germany_bundesliga/scores"
    ),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

async function showLiveLigue1() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" style="color:black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_france_ligue_one/scores"
    ),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

async function showLiveLaliga() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" style="color:black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_spain_la_liga/scores"
    ),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

async function showLiveSerieA() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" style="color:black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" class="w3-hover-text-black">MLS</a>
  </div></div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_italy_serie_a/scores"
    ),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

async function showLiveMLS() {
  let html = `<div class="container" style="width: 100%; align-content:center">
  <div class="scrollmenu mobileScroll">
  <a onclick=showLiveNBA() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showLiveMLB() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showLiveNHL() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showLiveNFL() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showLiveCBB() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showLiveCFB() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showLiveCBaseball() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showLivePrem() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLiveBundesliga() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showLiveLaliga() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showLiveSerieA() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLiveLigue1() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showLiveMLS() href="" style="color:black">MLS</a>

  </div></div>`;
  html += buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/soccer_usa_mls/scores"
    ),
    "liveScoresContainer"
  );

  let container = document.querySelector(".liveScoresContainer");
  container.innerHTML = html;
}

function buildScoreboard(allScores, containerName) {
  let html = "";
  allScores.forEach((currentScore) => {
    let awayScore = 0;
    let homeScore = 0;

    try {
      let awayScoreRaw = currentScore.scores[1].score;
      let homeScoreRaw = currentScore.scores[0].score;

      awayScoreRaw === null
        ? (awayScore = 0)
        : (awayScore = Number(awayScoreRaw));
      homeScoreRaw === null
        ? (homeScore = 0)
        : (homeScore = Number(homeScoreRaw));
    } catch (error) {
      homeScore = 0;
      awayScore = 0;
    }

    let winningTeam =
      awayScore < homeScore ? currentScore.home_team : currentScore.away_team;
    let completedDate = formatDate(currentScore.commence_time);

    html += generateScoreboard(
      currentScore,
      awayScore,
      homeScore,
      winningTeam,
      completedDate,
      containerName
    );
  });
  return html;
}

function formatDate(rawDate) {
  let dateTimeValue = Date.parse(rawDate);
  let dateRaw = new Date(dateTimeValue);

  return (
    dateRaw.toLocaleDateString() +
    " Start Time: " +
    dateRaw.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
}

function generateScoreboard(
  currentScore,
  awayScore,
  homeScore,
  winningTeam,
  dateTimeValue,
  containerName
) {
  let htmlSegment = `<div class="outer mobileScreen"><div class="scoreboard">`;
  let gameStatus;

  if (currentScore.completed) {
    gameStatus = "FINAL";
  } else {
    gameStatus = "INP/TBD";
  }

  if (winningTeam === currentScore.away_team) {
    htmlSegment += `<div class="header">
    <div class="headerDate" style="width: 75%; justify-content: left">${dateTimeValue}</div>
    <div class="headerElement" style="width: 5%; justify-content: center; margin: 10%"">${gameStatus}</div>
  </div>
      <div class="team win divider" style="border-left: none; border-top:none; border-right:none;">
        <div class="team">${currentScore.away_team}</div>
        <div class="score">${awayScore}</div>
      </div>
      <div class="team lose">
        <div class="team">${currentScore.home_team}</div>
        <div class="score">${homeScore}</div>
      </div>`;
  } else {
    htmlSegment += `<div class="header">
    <div class="headerDate" style="width: 75%; justify-content: left">${dateTimeValue}</div>
    <div class="headerElement" style="width: 5%; justify-content: center; margin: 10%">${gameStatus}</div>
  </div>
      <div class="team lose divider" style="border-left: none; border-top:none; border-right:none;">
        <div class="team">${currentScore.away_team}</div>
        <div class="score">${awayScore}</div>
      </div>
      <div class="team win">
        <div class="team">${currentScore.home_team}</div>
        <div class="score">${homeScore}</div>
      </div>`;
  }

  htmlSegment += `</div>
  </div>`;

  return htmlSegment;
}
