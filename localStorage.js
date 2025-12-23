if(localStorage.getItem("loaded")){}
else{
let loaded= true;
let titleAR = "في قلب القاهرة، يحافظ الحرفيون المهرة على حرفة عريقة. لكن الوقت ينفد. كل غرزة تحكي قصة لا ينبغي نسيانها.";
let titleEN = "In the heart of Cairo, master artisans preserve an ancient craft. But time is running out. Every stitch tells a story that shouldn't be forgotten.";
let language = "EN";
localStorage.setItem("titleAR", titleAR);
localStorage.setItem("titleEN", titleEN);
localStorage.setItem("language", language);
localStorage.setItem("loaded", loaded);
};

// FORMFUNC
function saveFormData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('msg').value;
    let formData = {
    name,
    email,
    message,
};
    let submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    submissions.push(formData);

    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
}
function getSavedData() {
    let submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    if (submissions.length === 0) {
        console.log('No contact messages found.');
        return [];
    }
    else{
    console.table(submissions);
    return submissions;
    }
}
getSavedData();

let users = [
    {
    Uname: "farh",
    email: "farh@gmail.com",
    Upass: "123" 
},
    {
    Uname: "Mohamed Ahmed", 
    email: "Mohamed@gmail.com",
    Upass: "123"  
    }
];
localStorage.setItem("localUsers", JSON.stringify(users));
