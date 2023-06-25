//API KEY-9f3436bf65c47b3988484cb92d3cb3be

const getBets = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7c01195a20mshbc9188a6ca4f5a5p1ce61cjsn5e640810eca6",
    "X-RapidAPI-Host": "betigolo-predictions.p.rapidapi.com",
  },
};

function AddNoDataTxt(){
    return `<div style="color:white;width: 100%; height: 1%; padding-top: 30px; text-align: center; display: inline-block; font-size: 2vh;">Sorry, no data is available, please check back later!</div>`
}

async function getBetData(url) {
  try {
    let res = await fetch(url, getBets);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

function getEventDay(epochTIS) {
  let milliseconds = epochTIS * 1000;
  let date = new Date(milliseconds);
  date.setHours(date.getHours() - 5);
  return date.getDate();
}

function getCurrentDay() {
  let currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 5);
  return currentDate.getDate();
}

function getCurrentDate() {
  let currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 5);
  let date = currentDate.toISOString();
  date = date.substring(0, 10);
  return date;
}

function getDatePlusOne() {
  let currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 5);
  currentDate.setDate(currentDate.getDate() + 1);
  let date = currentDate.toISOString();
  date = date.substring(0, 10);
  return date;
}

async function showNBABets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();
  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" style="color:black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/basketball/" + currentDate
    ),
    "containerNBA"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/basketball/" + nextDay
    ),
    "containerNBA"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" style="color:black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showMLBBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();
  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" style="color:black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/baseball/" + currentDate
    ),
    "containerMLB"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/baseball/" + nextDay
    ),
    "containerMLB"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" style="color:black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showNFLBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();
  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" style="color:black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;
 
  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/football/" + currentDate
    ),
    "containerNFL"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/football/" + nextDay
    ),
    "containerNFL"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" style="color:black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showNHLBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();

  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" style="color:black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + currentDate
    ),
    "containerNHL"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + nextDay
    ),
    "containerNHL"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" style="color:black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showCFBBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();

  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" style="color:black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/football/" + currentDate
    ),
    "containerNHL"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/football/" + nextDay
    ),
    "containerCFB"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" style="color:black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showCBBBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();

  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" style="color:black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/basketball/" + currentDate
    ),
    "containerCBB"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/basketball/" + nextDay
    ),
    "containerCBB"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" style="color:black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showCBaseballBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();

  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" style="color:black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/baseball/" + currentDate
    ),
    "containerCBaseball"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/baseball/" + nextDay
    ),
    "containerCBaseball"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" style="color:black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showPremBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();

  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" style="color:black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + currentDate
    ),
    "containerPrem"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + nextDay
    ),
    "containerPrem"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" style="color:black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showLaligaBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();

  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" style="color:black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + currentDate
    ),
    "containerLaliga"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + nextDay
    ),
    "containerLaliga"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" style="color:black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showSerieABets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();

  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" style="color:black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + currentDate
    ),
    "containerSerieA"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + nextDay
    ),
    "containerSerieA"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" style="color:black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showLigue1Bets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();

  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" style="color:black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + currentDate
    ),
    "containerLigue1"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + nextDay
    ),
    "containerLigue1"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" style="color:black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showBundesligaBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();

  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" style="color:black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + currentDate
    ),
    "containerBundesliga"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + nextDay
    ),
    "containerBundesliga"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" style="color:black">Bundesliga</a>
  <a onclick=showMLSBets() href="" class="w3-hover-text-black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showMLSBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();

  let html = `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" style="color:black">MLS</a>

  </div>
  </div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + currentDate
    ),
    "containerMLS"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + nextDay
    ),
    "containerMLS"
  );

  if(html == `<div class="container" style="width: 100%; align-content:center"><div class="scrollmenu mobileScroll">
  <a onclick=showNBABets() href="" class="w3-hover-text-black">NBA</a>
  <a onclick=showMLBBets() href="" class="w3-hover-text-black">MLB</a>
  <a onclick=showNHLBets() href="" class="w3-hover-text-black">NHL</a>
  <a onclick=showNFLBets() href="" class="w3-hover-text-black">NFL</a>
  <a onclick=showCFBBets() href="" class="w3-hover-text-black">College Football</a>
  <a onclick=showCBBBets() href="" class="w3-hover-text-black">College Basketball</a>
  <a onclick=showCBaseballBets() href="" class="w3-hover-text-black">College Baseball</a>
  <a onclick=showPremBets() href="" class="w3-hover-text-black">Premier League</a>
  <a onclick=showLaligaBets() href="" class="w3-hover-text-black">LaLiga</a>
  <a onclick=showSerieABets() href="" class="w3-hover-text-black">Serie A</a>
  <a onclick=showLigue1Bets() href="" class="w3-hover-text-black">Ligue 1</a>
  <a onclick=showBundesligaBets() href="" class="w3-hover-text-black">Bundesliga</a>
  <a onclick=showMLSBets() href="" style="color:black">MLS</a>

  </div>
  </div>`){
    html += AddNoDataTxt();
  }

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}



function round(value) {
  let temp = Math.ceil(value * 100) / 100;
  let returnValue = temp.toString().substring(0, 4);
  returnValue = returnValue * 100;
  let newVal = returnValue.toString().substring(0, 2);
  return newVal;
}

function buildBestBetBoard(allOdds, containerName) {
  let html = "";
  allOdds.forEach((currentGame) => {
    let homeTeam = 0;
    let awayTeam = 0;
    let homeMoneylineVal = 0;
    let awayMoneylineVal = 0;
    let currentLeague = currentGame.league_name;
    let currentDay = getCurrentDay();
    let eventDay = getEventDay(currentGame.match_dat);
    if (
      containerName === "containerMLB" &&
      currentGame.country_name === "USA" &&
      currentLeague === "MLB" &&
      currentDay === eventDay
    ) {
      homeTeam = currentGame.home_team_name;
      awayTeam = currentGame.away_team_name;
      homeMoneylineVal = round(currentGame.rank_htw_nt, 2);
      awayMoneylineVal = round(currentGame.rank_atw_nt, 2);
      firstOver = round(currentGame.rank_to_65_nt, 2);
      secondOver = round(currentGame.rank_to_75_nt, 2);
      thirdOver = round(currentGame.rank_to_85_nt, 2);
      fourthOver = round(currentGame.rank_to_95_nt, 2);
      fifthOver = round(currentGame.rank_to_105_nt, 2);
      html += generateMLBBestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal,
        firstOver,
        secondOver,
        thirdOver,
        fourthOver,
        fifthOver
      );
    }

    if (
      containerName === "containerCBaseball" &&
      currentGame.country_name === "USA" &&
      currentLeague === "NCAA" &&
      currentDay === eventDay
    ) {
      homeTeam = currentGame.home_team_name;
      awayTeam = currentGame.away_team_name;
      homeMoneylineVal = round(currentGame.rank_htw_nt, 2);
      awayMoneylineVal = round(currentGame.rank_atw_nt, 2);
      firstOver = round(currentGame.rank_to_65_nt, 2);
      secondOver = round(currentGame.rank_to_75_nt, 2);
      thirdOver = round(currentGame.rank_to_85_nt, 2);
      fourthOver = round(currentGame.rank_to_95_nt, 2);
      fifthOver = round(currentGame.rank_to_105_nt, 2);
      html += generateMLBBestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal,
        firstOver,
        secondOver,
        thirdOver,
        fourthOver,
        fifthOver
      );
    }

    if (
      containerName === "containerNHL" &&
      currentGame.country_name === "USA" &&
      currentLeague === "NHL" &&
      currentDay === eventDay
    ) {
      homeTeam = currentGame.home_team_name;
      awayTeam = currentGame.away_team_name;
      homeMoneylineVal = round(currentGame.rank_htw_nt, 2);
      awayMoneylineVal = round(currentGame.rank_atw_nt, 2);
      firstOver = round(currentGame.rank_to_35_nt, 2);
      secondOver = round(currentGame.rank_to_45_nt, 2);
      thirdOver = round(currentGame.rank_to_55_nt, 2);
      fourthOver = round(currentGame.rank_to_65_nt, 2);
      fifthOver = round(currentGame.rank_to_75_nt, 2);
      html += generateNHLBestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal,
        firstOver,
        secondOver,
        thirdOver,
        fourthOver,
        fifthOver
      );
    }

    if (
      containerName != "containerNHL" &&
      containerName != "containerMLB" &&
      currentGame.country_name === "USA" &&
      currentDay === eventDay &&
      currentLeague === "NBA"
    ) {
      homeTeam = currentGame.home_team_name;
      awayTeam = currentGame.away_team_name;
      homeMoneylineVal = round(currentGame.rank_htw_nt, 2);
      awayMoneylineVal = round(currentGame.rank_atw_nt, 2);
      firstOver = round(currentGame.rank_to_lvl1_nt, 2);
      secondOver = round(currentGame.rank_to_lvl2_nt, 2);
      thirdOver = round(currentGame.rank_to_lvl3_nt, 2);
      fourthOver = round(currentGame.rank_to_lvl4_nt, 2);
      fifthOver = round(currentGame.rank_to_lvl5_nt, 2);
      html += generateNBABestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal,
        firstOver,
        secondOver,
        thirdOver,
        fourthOver,
        fifthOver
      );
    }

    if (
      containerName === "containerCBB" &&
      currentGame.country_name === "USA" &&
      currentLeague === "NCAA" &&
      currentDay === eventDay
    ) {
      homeTeam = currentGame.home_team_name;
      awayTeam = currentGame.away_team_name;
      homeMoneylineVal = round(currentGame.rank_htw_nt, 2);
      awayMoneylineVal = round(currentGame.rank_atw_nt, 2);
      firstOver = round(currentGame.rank_to_lvl1_nt, 2);
      secondOver = round(currentGame.rank_to_lvl2_nt, 2);
      thirdOver = round(currentGame.rank_to_lvl3_nt, 2);
      fourthOver = round(currentGame.rank_to_lvl4_nt, 2);
      fifthOver = round(currentGame.rank_to_lvl5_nt, 2);
      html += generateNBABestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal,
        firstOver,
        secondOver,
        thirdOver,
        fourthOver,
        fifthOver
      );
    }
    
  });
  return html;
}

function generateNBABestBetsBoard(
  currentGame,
  homeTeam,
  awayTeam,
  homeMoneylineVal,
  awayMoneylineVal,
  firstOver,
  secondOver,
  thirdOver,
  fourthOver,
  fifthOver
) {
  let htmlSegment = `<div class="outerBestBets mobileScreen"><div class="bestBets">`;

  htmlSegment += `<div class="header" style="height:12.5%">
        <div class="headerElement-team">Team Name</div>
        <div class="headerElement-best">Moneyline</div>
      </div>
      <div class="team divider" style="border-left: none; border-top:none; border-right:none; height:25%">
        <div class="bestBetTeam">${awayTeam}</div>
        <div class="bestBetElement">${awayMoneylineVal}%</div>
      </div>
     
      <div class="team" style="height:25%">
        <div class="bestBetTeam">${homeTeam}</div>
        <div class="bestBetElement">${homeMoneylineVal}%</div>
      </div>
      
      <div class="header" style="height:17.5%">
        <div class="headerElement-over">Over 197.5</div>
        <div class="headerElement-over">Over 205.5</div>
        <div class="headerElement-over">Over 213.5</div>
        <div class="headerElement-over">Over 221.5</div>
        <div class="headerElement-over">Over 229.5</div>
      </div>
      
      <div class="team" style="height:20%">
        <div class="bestBetOver">${firstOver}%</div>
        <div class="bestBetOver">${secondOver}%</div>
        <div class="bestBetOver">${thirdOver}%</div>
        <div class="bestBetOver">${fourthOver}%</div>
        <div class="bestBetOver">${fifthOver}%</div>

      </div>`;

  htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}

function generateMLBBestBetsBoard(
  currentGame,
  homeTeam,
  awayTeam,
  homeMoneylineVal,
  awayMoneylineVal,
  firstOver,
  secondOver,
  thirdOver,
  fourthOver,
  fifthOver
) {
  let htmlSegment = `<div class="outerBestBets mobileScreen"><div class="bestBets">`;

  htmlSegment += `<div class="header" style="height:12.5%">
        <div class="headerElement-team">Team Name</div>
        <div class="headerElement-best">Moneyline</div>
      </div>
      <div class="team divider" style="border-left: none; border-top:none; border-right:none; height:25%"">
        <div class="bestBetTeam">${awayTeam}</div>
        <div class="bestBetElement">${awayMoneylineVal}%</div>
      </div>
     
      <div class="team" style="height:25%">
        <div class="bestBetTeam">${homeTeam}</div>
        <div class="bestBetElement">${homeMoneylineVal}%</div>
      </div> 

      <div class="header" style="height:17.5%">
      <div class="headerElement-over">Over 6.5</div>
      <div class="headerElement-over">Over 7.5</div>
      <div class="headerElement-over">Over 8.5</div>
      <div class="headerElement-over">Over 9.5</div>
      <div class="headerElement-over">Over 10.5</div>
      </div>
      
      <div class="team" style="height:20%">
        <div class="bestBetOver">${firstOver}%</div>
        <div class="bestBetOver">${secondOver}%</div>
        <div class="bestBetOver">${thirdOver}%</div>
        <div class="bestBetOver">${fourthOver}%</div>
        <div class="bestBetOver">${fifthOver}%</div>

      </div>`;

  htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}

function generateNHLBestBetsBoard(
  currentGame,
  homeTeam,
  awayTeam,
  homeMoneylineVal,
  awayMoneylineVal,
  firstOver,
  secondOver,
  thirdOver,
  fourthOver,
  fifthOver
) {
  let htmlSegment = `<div class="outerBestBets mobileScreen"><div class="bestBets">`;

  htmlSegment += `<div class="header" style="height:12.5%">
        <div class="headerElement-team">Team Name</div>
        <div class="headerElement-best">Moneyline</div>
      </div>
      <div class="team divider" style="border-left: none; border-top:none; border-right:none; height:25%"">
        <div class="bestBetTeam">${awayTeam}</div>
        <div class="bestBetElement">${awayMoneylineVal}%</div>
      </div>
     
      <div class="team" style="height:25%">
        <div class="bestBetTeam">${homeTeam}</div>
        <div class="bestBetElement">${homeMoneylineVal}%</div>
      </div> 
      
    <div class="header" style="height:17.5%">
      <div class="headerElement-over">Over 3.5</div>
      <div class="headerElement-over">Over 4.5</div>
      <div class="headerElement-over">Over 5.5</div>
      <div class="headerElement-over">Over 6.5</div>
      <div class="headerElement-over">Over 7.5</div>
    </div>
    
    <div class="team" style="height:20%">
      <div class="bestBetOver">${firstOver}%</div>
      <div class="bestBetOver">${secondOver}%</div>
      <div class="bestBetOver">${thirdOver}%</div>
      <div class="bestBetOver">${fourthOver}%</div>
      <div class="bestBetOver">${fifthOver}%</div>

    </div>`;

  htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}


function generateFootballBestBetsBoard(
  currentGame,
  homeTeam,
  awayTeam,
  homeMoneylineVal,
  awayMoneylineVal,
  firstOver,
  secondOver,
  thirdOver,
  fourthOver,
  fifthOver
) {
  let htmlSegment = `<div class="outerBestBets mobileScreen"><div class="bestBets">`;

  htmlSegment += `<div class="header" style="height:12.5%">
        <div class="headerElement-team">Team Name</div>
        <div class="headerElement-best">Moneyline</div>
      </div>
      <div class="team divider" style="border-left: none; border-top:none; border-right:none; height:25%"">
        <div class="bestBetTeam">${awayTeam}</div>
        <div class="bestBetElement">${awayMoneylineVal}%</div>
      </div>
     
      <div class="team" style="height:25%">
        <div class="bestBetTeam">${homeTeam}</div>
        <div class="bestBetElement">${homeMoneylineVal}%</div>
      </div> 
      
    <div class="header" style="height:17.5%">
      <div class="headerElement-over">Over 3.5</div>
      <div class="headerElement-over">Over 4.5</div>
      <div class="headerElement-over">Over 5.5</div>
      <div class="headerElement-over">Over 6.5</div>
      <div class="headerElement-over">Over 7.5</div>
    </div>
    
    <div class="team" style="height:20%">
      <div class="bestBetOver">${firstOver}%</div>
      <div class="bestBetOver">${secondOver}%</div>
      <div class="bestBetOver">${thirdOver}%</div>
      <div class="bestBetOver">${fourthOver}%</div>
      <div class="bestBetOver">${fifthOver}%</div>

    </div>`;

  htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}

function generatesSoccerBestBetsBoard(
  currentGame,
  homeTeam,
  awayTeam,
  homeMoneylineVal,
  awayMoneylineVal,
  firstOver,
  secondOver,
  thirdOver,
  fourthOver,
  fifthOver
) {
  let htmlSegment = `<div class="outerBestBets mobileScreen"><div class="bestBets">`;

  htmlSegment += `<div class="header" style="height:12.5%">
        <div class="headerElement-team">Team Name</div>
        <div class="headerElement-best">Moneyline</div>
      </div>
      <div class="team divider" style="border-left: none; border-top:none; border-right:none; height:25%"">
        <div class="bestBetTeam">${awayTeam}</div>
        <div class="bestBetElement">${awayMoneylineVal}%</div>
      </div>
     
      <div class="team" style="height:25%">
        <div class="bestBetTeam">${homeTeam}</div>
        <div class="bestBetElement">${homeMoneylineVal}%</div>
      </div> 
      
    <div class="header" style="height:17.5%">
      <div class="headerElement-over">Over 3.5</div>
      <div class="headerElement-over">Over 4.5</div>
      <div class="headerElement-over">Over 5.5</div>
      <div class="headerElement-over">Over 6.5</div>
      <div class="headerElement-over">Over 7.5</div>
    </div>
    
    <div class="team" style="height:20%">
      <div class="bestBetOver">${firstOver}%</div>
      <div class="bestBetOver">${secondOver}%</div>
      <div class="bestBetOver">${thirdOver}%</div>
      <div class="bestBetOver">${fourthOver}%</div>
      <div class="bestBetOver">${fifthOver}%</div>

    </div>`;

  htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}