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
