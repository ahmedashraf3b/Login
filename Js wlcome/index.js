var username = JSON.parse(localStorage.getItem('x'))

console.log(username);

    document.getElementById('username').innerHTML = 'Welcome ' + username[JSON.parse(sessionStorage.getItem("num"))].name    
