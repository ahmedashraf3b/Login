var username = (JSON.parse(localStorage.getItem("x", 1))[0].name)

// console.log(username);

    document.getElementById('username').innerHTML = 'Welcome ' + username
