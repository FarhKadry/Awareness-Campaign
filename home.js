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
function readMore(more){
    
}