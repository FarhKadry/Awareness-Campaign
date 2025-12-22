// PRELOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preLoader").style.display = "none";
  }, 2000);
});

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
// function showSuccessSendMsg() {
//     const successMessage = document.getElementById('successMessage');
//     successMessage.style.display = "block";

//     setTimeout(() => {
//         successMessage.style.display = "none";
//     }, 10000);

//     document.getElementById('form1').reset();
// }
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