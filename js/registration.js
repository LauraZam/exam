let userName = document.getElementById('userName')
let userLastName = document.getElementById('userLastName')
let userPassword = document.getElementById('userPassword')
let userPasswordR = document.getElementById('userPasswordR')

let registration = () => {
    if (userName.value.length < 3 && userLastName.value.length < 1) {
        userName.style.border = '3px solid red'
        userLastName.style.border = '3px solid red'
        alert('Введите полное имя (фамилию)')
    }else if (userPassword.value.length > 6 && userPasswordR.value.length > 6) {
        userPassword.style.border = '3px solid red'
        userPassswordR.style.border = '3px solid red'
        alert('Пароль должен быть длиннее 6 символов')
    }else if(userPassword.value !== userPasswordR.value){
        userPassword.style.border = '3px solid red'
        userPasswordR.style.border = '3px solid red'
        alert('Пароли не совпадают')
    }else{
        // let user = {
        //     uName: userName.value,
        //     uLastName: userLastName.value,
        //     uPassword: userPassword.value
        // }
        // localStorage.setItem('user', JSON.stringify(user))
        // console.log(user);
        let uName = userName.value
        let uLastName = userLastName.value
        let uPassword = userPassword.value
        localStorage.setItem('uName', uName)
        localStorage.setItem('uLastName', uLastName)
        localStorage.setItem('uPassword', uPassword)
        location.href = 'login.html'
    }
}