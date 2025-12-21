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
function readMore(){
    let moreText = document.getElementById('moreText');
    let button = document.querySelector('.button1.button2');
    
    if(moreText.style.height === '0px'){
        moreText.style.height = moreText.scrollHeight + 'px';
        moreText.style.opacity = '1';
        button.textContent = 'Read Less';
    } else {
        moreText.style.height = '0px';
        moreText.style.opacity = '0';
        button.textContent = 'Read More';
    }
}