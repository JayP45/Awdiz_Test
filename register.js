const register = (event) => {
    event.preventDefault()
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value

    if (!name || !password || !email) {
        return alert("All fields are is required")
    }

    let existingData = localStorage.getItem('ALL USERS DATA');

    let userData = [];

    if (existingData) {
        userData = JSON.parse(existingData);
    }

    let newUser = {
        Name: name,
        Password: password,
        Email: email
    }

    userData.push(newUser);
    
    localStorage.setItem('ALL USERS DATA', JSON.stringify(userData))

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    alert('Registration successfull!');
    window.location.href='login.html';
}