const login=(event)=>{
    event.preventDefault()
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if (!name || !password) {
        return alert("All fields are mandatory")
    }

    var users = JSON.parse(localStorage.getItem("ALL USERS DATA"));
    // console.log(users)

    for (var i = 0; i < users.length; i++) {
        console.log(users[i],"users[i]")
        if (users[i].Name === name && users[i].Password === password) {
            document.getElementById("name").value = "";
            document.getElementById("password").value = "";
            window.location.href = "Home.html";
            return alert("Login successfull.")
        }
    }

    return alert("Please check your name & password.")

}