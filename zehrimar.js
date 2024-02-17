const hiddenbars = document.querySelector(".hiddenbars");
const xmark = document.querySelector(".fa-xmark");
const bars = document.querySelector(".bars");
const inputt = document.querySelector(".input");
const inputaxtar = document.querySelector(".inputaxtar");
const container = document.querySelector(".container");
const flags = document.querySelector(".flagshere");
const boxs = document.querySelector(".boxs");
const content = document.querySelector(".content");
const addBtn = document.querySelector(".addBtn");
const main = document.querySelector("main");
const randomelem = document.querySelector("#randomelem");

// let x = [];

// dark mode ama with toggle
function darkMode() {
  let elements = document.querySelectorAll(".navbar, .footer, body");
  elements.forEach((element) => {
    element.classList.toggle("dark-mode");
  });
}

let flag = false;
// burger menyunu acir
function OpenBars() {
  if (flag == false) {
    hiddenbars.style.display = "block";
    bars.style.display = "none";
    xmark.style.display = "block";
    flag = true;
  } else {
    hiddenbars.style.display = "none";
    bars.style.display = "block";
    xmark.style.display = "none";
    flag = false;
  }
}
// inputu acir
function Inputla() {
  if (inputt.style.display == "flex") {
    inputt.style.display = "none";
  } else {
    inputt.style.display = "flex";
  }
  inputaxtar.focus();
}

let data;

fetch(
  "https://raw.githubusercontent.com/TheOksigen/purfect_data/main/country.json"
)
  .then((res) => res.json())
  .then((resJson) => {
    data = resJson;
    randomla();
    showBoxs();

    console.log(data);
  });

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomla() {
  let obj = data[rand(0, 249)];
  obj = `
            <div class="rand-card">
                <div class="card-img">
                    <img src="${obj.flags.png}" alt="">
                </div>
                <div class="card-text">
                    <h1>${obj.name}</h1>
                    <p>Capital: ${obj.capital}</p><br>
                    <p>Region: ${obj.region}</p><br>
                    <p>Area: ${obj.area} km<sup>2<sup></p><br>
                    <p>Population: ${obj.population}</p>
                </div>
            </div>
        `;
        randomelem.innerHTML = obj;
  // console.log(obj);
}

let say = 12;

//Boxlari ekrana cixaran zehrimarimiz
function showBoxs() {
  let cardCodes = "";
  data.slice(0, say).map((item) => {
    cardCodes += ` 
                    <div class="box">
                        <div class="box-img">
                            <img src="${item.flags.png}" alt="">
                        </div>
                        <div class="box-text">
                            <h2>${item.name}</h2>
                            <p>${item.capital}</p>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.</p>
                        </div>
                    </div>
                `;
  });
  boxs.innerHTML = cardCodes;
}

function load() {
  say += 12;
  showBoxs();
}

function input() {
  content.style.display = inputaxtar.value ? "none" : "block";
  addBtn.style.display = inputaxtar.value ? "none" : "block";
  container.style.display = inputaxtar.value ? "none" : "block";

  let kod = "";
  data
    .filter((item) =>
      item.name.toLowerCase().startsWith(inputaxtar.value.toLowerCase())
    )
    .map((item) => {
      kod += `
                <a href="#"> 
                    <div class="box">
                        <div class="box-img">
                            <img src="${item.flags.png}" alt="">
                        </div>
                        <div class="box-text">
                            <h2>${item.name}</h2>
                            <p>${item.capital}</p>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                        </div>
                    </div>
                </a>`;
    });
  boxs.innerHTML = kod;
}

function go(arg) {
  main.innerHTML = `<h1 id="basliq"> All countries in ${arg} continent</h1>`;
  showBoxs();
}
