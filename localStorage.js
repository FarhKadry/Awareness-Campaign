function saveFormData() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('msg').value.trim();

    let formData = {
        name,
        email,
        message,
    };

    let submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    submissions.push(formData);

    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
}
