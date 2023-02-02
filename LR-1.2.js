class User {
    name = "name"
    password = "password"

    nickname = "nickname"
    surname = "surname"
    age = "age"

    constructor(name, password, nickname, surname, age) {
        this.name = name
        this.password = password
///////
        this.nickname = nickname
        this.surname = surname
        this.age = age 
    }
}

let users = []

btn1.onclick = function() {
    register()  
}
btn2.onclick = function() {
    login()  
}

btn3.onclick = function() {
    console.log(users)  
}



function register() {
    let name = document.getElementById("lg").value
    let password = document.getElementById("pwd").value
///////
    let nickname = document.getElementById("nick").value
    let surname = document.getElementById("surn").value
    let age = document.getElementById("age").value
///////
    let nametf = 1
    let passtf = 0
    
    for(let i = 0; i <=users.length; i++) 
    {
        if(name == users[i]?.name) {
            nametf = 0
        }
    }
    
    if(password.length>=4 && password.length<=12 )
        passtf = 1
        else alert("Error - пароль должен состоять из 4-12 символов")
     
    if(nametf == 1 && passtf == 1) {
        const user = new User(name, password, nickname, surname, age)
        
        users.push(user)
        //////
        
    }
        else  alert("Ошибка регистрации")

    if(nametf == 0 && passtf == 1) {
        alert("Этот пользователь уже зарегестрирован")
    }
    
        console.log(users)

    
    }

function login() {
    let name = document.getElementById("lg").value
    let password = document.getElementById("pwd").value
    let tf = 0 
      
    for(let i = 0; i <= users.length; i++)
    {
        let userCheck = users[i]
        if (name == userCheck?.name && password == userCheck?.password)
            tf = 1      
        }

        if(tf === 1)
            alert("Вход выполнен")
        else
            alert("неверный логин или пароль")
    }
    

    // name.value = localStorage.getItem('name');
    // name.oninput = () => {
    //   localStorage.setItem('name', name.value)
    // };
    // password.value = localStorage.getItem('password');
    // password.oninput = () => {
    //   localStorage.setItem('password', password.value)
    // };

    // for(let i=0; i<localStorage.length; i++) {
    //     let name = localStorage.name(i);
    //     alert(`${name}: ${localStorage.getItem(name)}`);
    //     }

    // for(let i=0; i<localStorage.length; i++) {
    //     let password = localStorage.password(i);
    //     alert(`${password}: ${localStorage.getItem(password)}`);
    //     }