  const apiKey = "9c03b663541144bbb5214830251009";
    const city = "Ubay";
    let forecastData = null; 
  document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ceb' : 'en';
  document.querySelector('label[for="plantingDate"]').innerText = texts[currentLang].plantingDate;
  document.querySelector('#Q').previousSibling.textContent = texts[currentLang].waterLevel;
  document.querySelector('.buttonsagwapo').innerText = texts[currentLang].calculateBtn;
  document.getElementById('instructionBtn').innerText = texts[currentLang].instructionBtn;
  document.getElementById('langToggle').innerText = currentLang === 'en' ? 'Cebuano' : 'English';
});
   const texts = {
  en: {
    plantingDate: "Planting Date:",
    waterLevel: "Water level (cm):",
    calculateBtn: "Calculate Scheduling",
    loadingForecast: "Loading forecast...",
    weatherHeader: "14-Day Weather Forecast",
    errorWater: "Please enter a valid water level (> 0).",
    errorDate: "Please enter a planting date.",
    errorNoForecast: "No forecast available for scheduling.",
    errorDAP: "DAP out of range (1-120 days).",
    errorInsufficient: "Water level is insufficient for the selected crop stage.",
    dapBoxPrefix: "Day",
    stageNames: ["Early Growth", "Mid Growth (shallow)", "Mid Growth", "Late Growth"],
    scheduleBefore: "Schedule Irrigation Before:",
    showETc: "Show ETc Details",
    hideETc: "Hide ETc Details",
    instructionBtn: "Click for Instructions",
    backBtn: "⬅ Back to Irri-Go",
    showDetails: "Show Details",
    resultPrefix: "Schedule Irrigation Before:",
     instructions: `
      <h1>How to Measure Water Level in a Rice Field</h1>
      <div class="container">
        <div class="image-slot">
          <img src="https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/542750969_771324822477851_3483205525976661854_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHHl1XZrkQFxAvuiFgNHqvVxxZp6r7m-QXHFmnqvub5BT23LIWiSsU6r_SB2tKTQIbbAnTM2y11P7FHvN0jA3Bs&_nc_ohc=AwMRCIB2piMQ7kNvwFOlsq0&_nc_oc=Adn4nzf6Q580G80NbExYeWhjCzomeLuk-0UWyjKoIfxzPqLcWshtA2KuFPOzMblCNqM&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=TrOu1lUaUqWFTF0rvRAZAA&oh=00_AfaGTl55p65mf2EvYY4G7wO0HrRPjyBDCf5-fyGkD-O3SQ&oe=68CFE479">
        </div>
        <div class="text-box">
          <ul>
           <li>Step 1: Gently place the ruler straight down into the water, with the zero (0) mark touching the soil at the bottom. Make sure the ruler is standing upright, not slanted.</li>
           <li>Step 2: Look at where the surface of the water reaches on the ruler. The number that lines up with the water is the water depth in centimeters. For example, if the water reaches the line marked “3” the water level is 3 cm deep.</li>
           <li>Step 3: Be careful to look at the ruler from the side, at the same level as the water, so you can read it correctly.</li>
          </ul>
        </div>
      </div>
      <button class="back-btn" onclick="window.close()">⬅ Back to Irri-Go</button>
    `
  },
  ceb: {
    plantingDate: "Petsa sa Pagpananom:",
    waterLevel: "Kalawmon sa Tubig (cm):",
    calculateBtn: "Kwenta sa Patubig",
    loadingForecast: "Nag-load sa panahon...",
    weatherHeader: "14-ka Adlaw nga Forecast sa Panahon",
    errorWater: "Palihug isulod ang hustong lebel sa tubig (> 0).",
    errorDate: "Palihug isulod ang petsa sa pagpananom.",
    errorNoForecast: "Walay forecast nga available para sa scheduling.",
    errorDAP: "Ang DAP wala sa range (1-120 ka adlaw).",
    errorInsufficient: "Kulang ang tubig para sa napiling stage sa tanom.",
    dapBoxPrefix: "Adlaw",
    stageNames: ["Sayong Pagtubo", "Tunga-tungang Pagtubo (shallow)", "Tunga-tungang Pagtubo", "Ubang Pagtubo"],
    scheduleBefore: "Pagplano sa Patubig sa Wala Pa:",
    showETc: "Ipakita ang Detalye sa ETc",
    hideETc: "Tago ang Detalye sa ETc",
    instructionBtn: "I-klik para sa Instruksyon",
    backBtn: "⬅ Balik sa Irri-Go",
    resultPrefix: "Pagpatubig una sa:",
    showDetails: "Ipakita ang Detalye",
    instructions: `
      <h1>Unsaon Pagsukod sa Kahimtang sa Tubig sa Humay</h1>
      <div class="container">
        <div class="image-slot">
          <img src="https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/542750969_771324822477851_3483205525976661854_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHHl1XZrkQFxAvuiFgNHqvVxxZp6r7m-QXHFmnqvub5BT23LIWiSsU6r_SB2tKTQIbbAnTM2y11P7FHvN0jA3Bs&_nc_ohc=AwMRCIB2piMQ7kNvwFOlsq0&_nc_oc=Adn4nzf6Q580G80NbExYeWhjCzomeLuk-0UWyjKoIfxzPqLcWshtA2KuFPOzMblCNqM&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=TrOu1lUaUqWFTF0rvRAZAA&oh=00_AfaGTl55p65mf2EvYY4G7wO0HrRPjyBDCf5-fyGkD-O3SQ&oe=68CFE479">
        </div>
        <div class="text-box">
          <ul>
           <li>Unang Buhaton: Hinay-hinay nga ibutang ang ruler nga tuwid ngadto sa tubig, nga ang zero (0) mark nag-atang sa yuta sa ubos. Siguraduhon nga ang ruler nagtindog nga tarong, dili nagtakilid.</li>
           <li>Ikaduhang Buhaton: Tan-awa kung asa naabot ang nawong sa tubig sa ruler. Ang numero nga nagtupong sa tubig mao ang giladmon sa tubig sa sentimetro. Pananglitan, kung ang tubig moabot sa linya nga naay marka nga “3”, ang tubig kay 3 cm ang giladmon.</li>
           <li>Ikatulong Buhaton: Pagmatngon sa pagbasa sa ruler gikan sa kilid, sa parehas nga lebel sa tubig, aron imong mabasa kini nga sakto.</li>
            </ul>
        </div>
      </div>
      <button class="back-btn" onclick="window.close()">⬅ Balik sa Irri-Go</button>
    `
  }
};

let currentLang = "en";

   document.getElementById('instructionBtn').addEventListener('click', () => {
  const instructionHtml = `
    <!DOCTYPE html>
    <html lang="${currentLang}">
    <head>
      <meta charset="UTF-8">
      <title>${texts[currentLang].instructionBtn}</title>
      <style>
        body {
          font-family: 'Times New Roman', Times, serif;
          align-items: center;
          display: flex;
          flex-direction: column;
          margin: 40px;
          background-color: #000000;
          background-image: url('https://media.istockphoto.com/photos/ripe-rice-and-beautiful-sky-in-daylight-picture-id1183896276?k=6&m=1183896276&s=612x612&w=0&h=Ph2NhP_pO-fgV9EIGoAZGCDePBFpefm8LP6MLp0BqNY=');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          position: relative;
        }
        body::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.9); 
          z-index: -1;
        }
        h1 { 
        text-align: center; 
        color: #2a5d84;
        margin-bottom: 30px;
       }
        .container {
         display: flex;     
         gap: 10px;           
         align-items: flex-start;   
         background: rgba(255, 255, 255, 0.9);
         padding: 20px;
         border-radius: 12px;
         box-shadow: 0 4px 12px rgba(0,0,0,0.15); 
        }
        .image-slot img {
         width: 250px;
         height: auto;
         border-radius: 12px;
         box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .text-box {
         flex: 2
         text-align: justify;
         font-size: 25px;
         line-height: 1.6;
         }
        .back-btn {
         display: block;
         margin: 40px auto 0 auto;
         background-color: #3592e4;
         color: #fff;
         border: none;
         padding: 15px 25px;
         border-radius: 8px;
         cursor: pointer;
         font-size: 16px;
         font-weight: bold;
         box-shadow: 0 4px 8px rgba(0,0,0,0.2);
         transition: 0.2s ease;
         }
        .back-btn:hover {
         background-color: #3f7eb3;
         transform: scale(1.05);
         }
      </style>
    </head>
    <body>
      ${texts[currentLang].instructions}
    </body>
    </html>
  `;

  const win = window.open('', '_blank');
  win.document.write(instructionHtml);
  win.document.close();
});

    async function fetchForecast() {
      const container = document.getElementById('forecast');
      container.innerHTML = '<p class="loading">Loading forecast...</p>';
      try {
        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(city)}&days=14&aqi=no&alerts=no`);
        if (!res.ok) throw new Error('WeatherAPI fetch failed: ' + res.status);
        const data = await res.json();
        if (!data.forecast || !Array.isArray(data.forecast.forecastday)) throw new Error('Invalid forecast response');
        forecastData = data.forecast.forecastday; 


        container.innerHTML = '';
        forecastData.forEach(day => {
          const card = document.createElement('div');
          card.className = 'day-card';
          const dateStr = new Date(day.date).toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
          card.innerHTML = `
            <h4 style="margin:6px 0;">${dateStr}</h4>
            <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}" />
            <p style="margin:6px 0;"><strong>${day.day.condition.text}</strong></p>
            <p style="margin:4px 0;">🌡️ Max: ${Number(day.day.maxtemp_c).toFixed(1)}°C</p>
            <p style="margin:4px 0;">🌡️ Min: ${Number(day.day.mintemp_c).toFixed(1)}°C</p>
            <p style="margin:4px 0;">💧 Rain(mm): ${Number(day.day.totalprecip_mm || 0).toFixed(1)}</p>
            <p style="margin:4px 0;">💦 Humidity(avg): ${Number(day.day.avghumidity || 0).toFixed(0)}%</p>
            <p style="margin:4px 0;">💨 Wind(max): ${Number(day.day.maxwind_kph || 0).toFixed(0)} kph</p>
          `;
          container.appendChild(card);
        });
      } catch (err) {
        container.innerHTML = `<p style="color:red;">Failed to load forecast.</p>`;
        console.error(err);
      }
    }


    fetchForecast();

  
    async function calculateScheduling() {
      const errorEl = document.getElementById('error');
      const resultEl = document.getElementById('result');
      errorEl.innerText = '';
      resultEl.innerText = '';

      const Qraw = document.getElementById('Q').value;
      const plantingDate = document.getElementById('plantingDate').value;


      const Q = parseFloat(Qraw);
      if (isNaN(Q) || Q <= 0) {
        errorEl.innerText = "Please enter a valid water level (> 0).";
        return;
      }
      if (!plantingDate) {
        errorEl.innerText = "Please enter a planting date.";
        return;
      }


      if (!forecastData) {
        await fetchForecast();
        if (!forecastData) {
          errorEl.innerText = "No forecast available for scheduling.";
          return;
        }
      }
    

      function getDAP(plantDateStr) {
        const today = new Date();
        const planted = new Date(plantDateStr);
        const diffTime = today - planted;
        return Math.floor(diffTime / (1000 * 60 * 60 * 24) + 1);
      }
      const dap = getDAP(plantingDate);

      function getMinWaterDepth(dap) {
        if (dap >= 1 && dap <= 30) return 3;
        if (dap >= 31 && dap <= 33) return 1;
        if (dap >= 34 && dap <= 95) return 5;
        if (dap >= 96 && dap <= 120) return 5;
        return null;
      }
      const Qn = getMinWaterDepth(dap);
      if (Qn === null) {
        errorEl.innerText = "DAP out of range (1-120 days).";
        return;
      }
      function getStageName(dap) {
        if (dap >= 1 && dap <= 30) return "Early Growth";
        if (dap >= 31 && dap <= 33) return "Mid Growth (shallow)";
        if (dap >= 34 && dap <= 95) return "Mid Growth";
        if (dap >= 96 && dap <= 120) return "Late Growth";
        return "Out of range";
      }
      document.getElementById('dapBox').innerText = `Day ${dap} after planting → Stage: ${getStageName(dap)} \n Min depth: ${Qn} cm`;

      const Qi = Qn;
      let Qw = Q - Qi;
      if (Qw < 0) {
        errorEl.innerText = "Water level is insufficient for the selected crop stage.";
        return;
      }
     

      const daysToUse = forecastData.slice(0, 14); // up to 14 days
      const temps = [], humidities = [], winds = [], rains = [];
      for (let i = 0; i < daysToUse.length; i++) {
        const d = daysToUse[i];
        temps.push({ min: Number(d.day.mintemp_c), max: Number(d.day.maxtemp_c) });
        humidities.push(Number(d.day.avghumidity || 0));
        // convert kph to m/s
        winds.push((Number(d.day.maxwind_kph || 0)) / 3.6);
        rains.push(Number(d.day.totalprecip_mm || 0));
      }
      
      const select = document.getElementById('cropSelect');
      const locationValue = select.value; 
      const elev = Number(locationValue);

      const Today = new Date();
      const J = Math.floor((Today - new Date(Today.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24));
      const lat = 9.8 * Math.PI / 180;
      const Kc = 1.06;
      const FC = 0.35;
      const WP = 0.205;
      const Zr = 0.5;
      const TAW = 100 * (FC - WP) * Zr;
      const adf = 0.5, Drt = 0;
      const Ks = (TAW - Drt) / ((1 - adf) * TAW); 
      const P = 101.3 * Math.pow((293 - 0.0065 * elev) / 293, 5.26);
      const psy = 0.000665 * P;
      const sigma = 4.903 * Math.pow(10, -9);

      const ETcs = [];
      for (let i = 0; i < temps.length; i++) {
        const Tmin = temps[i].min;
        const Tmax = temps[i].max;
        const T = (Tmin + Tmax) / 2;
        const RHmax = humidities[i];
        const RHmin = humidities[i];
        const U1 = winds[i];
        const rain = rains[i];
        const rain1 = rain / 10;

        const U3 = U1;
        const U2 = U3 * (4.87 / Math.log(67.8 * 10 - 5.42));
        const Jd = J + i;
        const dr = 1 + 0.033 * Math.cos((2 * Math.PI * Jd) / 365);
        const dec = 0.409 * Math.sin((2 * Math.PI / 365) * Jd - 1.39);
        const ws = Math.acos(-Math.tan(lat) * Math.tan(dec));
        const Ra = ((24 * 60) / Math.PI) * 0.0820 * dr *
          (ws * Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.sin(ws));
        const N = (24 / Math.PI) * ws;
        const Rs = 0.74 * (5.5 / N) * Ra;
        const Rns = (1 - 0.23) * Rs;

        const e0tmin = 0.6108 * Math.exp((17.27 * Tmin) / (Tmin + 237.3));
        const e0tmax = 0.6108 * Math.exp((17.27 * Tmax) / (Tmax + 237.3));
        const ea = (e0tmin * RHmax / 100 + e0tmax * RHmin / 100) / 2;
        const es = (e0tmin + e0tmax) / 2;

        const Rso = (0.75 + 0.00002 * elev) * Ra;
        const Rnl = sigma * (((Tmax + 273.16) ** 4 + (Tmin + 273.16) ** 4) / 2) * (0.34 - 0.14 * Math.sqrt(Math.max(0, ea))) * (1.35 * (Rs / Rso) - 0.35);
        const Rn = Rns - Rnl;
        const G = 0.1 * Rn;
        const delta = (4098 * (0.6108 * Math.exp((17.27 * T) / (T + 237.3)))) / ((T + 237.3) ** 2);
        const VPD = es - ea;

        const Eto = (0.408 * delta * (Rn - G) + psy * (900 / (T + 273)) * U2 * VPD) / (delta + psy * (1 + 0.34 * U2));
        const Etc = ((Eto * Kc * Ks) / 10); 
        ETcs.push(Etc);
      }

            let remainingQ = Qw;
            let depletedOnDay = null;
         for (let i = 0; i < ETcs.length; i++) {
          const rain1 = rains[i] / 10;  // mm → cm
           remainingQ = remainingQ - ETcs[i] + rain1; 
          if (remainingQ <= 0) {
         depletedOnDay = i;
          break;
        }
      }

      let irrigationDateText = '';
      let lastDayToShow = ETcs.length;
      if (depletedOnDay !== null) {
        const irrigationDate = new Date();
        irrigationDate.setDate(irrigationDate.getDate() + depletedOnDay);
        irrigationDateText = irrigationDate.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
        lastDayToShow = depletedOnDay;
      } else {
        irrigationDateText = `No depletion within ${ETcs.length} days (>= ${ETcs.length} days)`;
      }

      let rem = Qw;
      let etcLines = [];
      for (let i = 0; i < lastDayToShow; i++) {
        const dateLabel = new Date(daysToUse[i].date).toLocaleDateString('en-US', { month:'short', day:'numeric' });
        const etcVal = ETcs[i];
        const rain1 = rains[i] / 10;
        rem = rem - etcVal + rain1;
        etcLines.push(`${i+1}. ${dateLabel} — ETc: ${etcVal.toFixed(2)} cm | Remaining: ${Math.max(rem, 0).toFixed(2)} cm`);
      }

      let summary = `${texts[currentLang].resultPrefix}<br> ${irrigationDateText}`;

resultEl.innerHTML = `
  <div>${summary}</div>
  <button class="collapsible">${texts[currentLang].showDetails}</button>
  <div class="content" style="display:none;">${etcLines.join("<br>")}</div>
`;

const coll = resultEl.querySelector(".collapsible");
const content = resultEl.querySelector(".content");
coll.addEventListener("click", function () {
  this.classList.toggle("active");
  if (content.style.display === "block") {
    content.style.display = "none";
    coll.textContent = texts[currentLang].showETc;
  } else {
    content.style.display = "block";
    coll.textContent = texts[currentLang].hideETc;
  }
});

    }

