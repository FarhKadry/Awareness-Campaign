// PRELOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preLoader").style.display = "none";
  }, 800);
});

let localLang = localStorage.getItem("language") || "EN";

function updateLanguageContent() {
    let heroPara = document.getElementById("heroPara");
    if (heroPara) {
        let title = localStorage.getItem("title" + localLang);
        if (title) {
            heroPara.innerHTML = title;
        }
    }
}

function changeLang(lang) {
    localStorage.setItem("language", lang);
    window.location.reload();
}
window.addEventListener("load", () => {
    updateLanguageContent();
});

// LOGINFUNC
function login(){
    let  Uname = document.getElementById("Uname").value;
    let  Upass = document.getElementById("Upass").value;
    
    let localUsers = JSON.parse(localStorage.getItem("localUsers"))
    for(let i = 0; i<localUsers.length; i++){
        if( Uname == localUsers[i].Uname && Upass == localUsers[i].Upass ){
        window.location="index.html"
        alert("login successful!")
    }
    else{
        document.getElementById("err").innerHTML=`<h6>the password and email combination are incorrect!!</h6>`
        document.getElementById("err").style.display="inline-block"
        document.getElementById("err").style.color="var(--mainAccent)"
    }
    }
    localStorage.setItem("localName", Uname);
    localStorage.setItem("localPass", Upass);
}

// MODE TOGGLE
let lightModeBtn = document.getElementById('lightModeBtn');

lightModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('lightMode');
});

// NAV ARRAY
let navItems = [
    {
        id: "Home",
        name: "Home",
    },
    {
        id: "About",
        name: "About",
    },
    {
        id: "Why",
        name: "Why It's Fading",
    },
    {
        id: "Gallery",
        name: "Gallery",
    },
    {
        id: "Action",
        name: "Take Action",
    }
];
let navUl = document.getElementById('navArray').querySelector('ul');
for (let i = 0; i < navItems.length; i++) {
    navUl.innerHTML += `
    <li>
        <a href="#${navItems[i].id}">
            ${navItems[i].name}
        </a>
    </li>
    `;
}
//READMOREFUNC
function readMore() {
    let moreText = document.getElementById('moreText2');
    let button = document.getElementById('moreBtn');

    moreText.classList.toggle('open');

    if (moreText.classList.contains('open')) {
        button.textContent = 'Read Less';
    } else {
        button.textContent = 'Read More';
    }
}


// FORM
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('msg').value;
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    return false;
    }
    return true;
}
function showSuccessSendMsg() {
    alert('form filled successfully!');
    document.getElementById('form1').reset();
}
function formSubmission() {
    if (validateForm()) {
        saveFormData();
        showSuccessSendMsg();
    }
    return false; 
}

// FACTSRANDOM
let randFacts = [
    {
        title: "Napoleon’s Description de l’Égypte documented Khayyamiyya workshops in the early 1800s, proving the craft’s long-standing cultural value.",
        factRef: "— Description de l’Égypte"
    },
    {
        title: "Khayamiyya panels were traditionally hand-stitched near Bab Zuweila in Cairo, a street still dedicated to the craft today.",
        factRef: "— Historic Cairo records"
    },
    {
        title: "The art of Khayyamiyya was originally used to decorate ceremonial tents for festivals, weddings, and royal events.",
        factRef: "— Egyptian folk traditions"
    },
    {
        title: "Khayamiyya designs are inspired by Islamic geometry, floral motifs, and stories from daily Egyptian life.",
        factRef: "— Visual heritage studies"
    },
    {
        title: "Despite industrial printing, Khayyamiyya remains entirely handmade, with some panels taking weeks to complete.",
        factRef: "— Artisan accounts"
    }
];
let randomFacts = Math.floor(Math.random() * randFacts.length);
let factsSec = document.getElementById("factsSec");

factsSec.innerHTML = `
    <h3 class="messiri">Did You Know?</h3>
    <p >${randFacts[randomFacts].title}</p>
    <h6>${randFacts[randomFacts].factRef}</h6>
`;
let cardsData = [
  {
    iconClass: "cardIcon1",
    title: "Economic Pressure",
    desc: "Rising costs and low returns make it hard for artisans to sustain the craft."
  },
  {
    iconClass: "cardIcon2",
    title: "Aging Artisans",
    desc: "Few young people are learning the craft, risking generational knowledge loss."
  },
  {
    iconClass: "cardIcon3",
    title: "Declining Demand",
    desc: "Modern alternatives are replacing traditional handmade textiles."
  },
  {
    iconClass: "cardIcon4",
    title: "Time-Intensive",
    desc: "Each piece requires months of painstaking work, making it economically challenging."
  }
];
let cardsFlex = document.getElementById("cardsFlex");
for (let i = 0; i < cardsData.length; i++) {
  cardsFlex.innerHTML += `
    <div class="card1">
      <img class="card1Deco" src="public/images/darkMainShape.svg" alt="">
      <div class="card1Icon ${cardsData[i].iconClass} centeredBg"></div>
      <div class="card1Title">
        ${cardsData[i].title}
      </div>
      <h6>${cardsData[i].desc}</h6>
    </div>
  `;
}
