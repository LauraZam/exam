let userName = document.getElementById('userName')
let userLastName = document.getElementById('userLastName')
let userPassword = document.getElementById('userPassword')
let uName = localStorage.getItem('uName')
let uLastName = localStorage.getItem('uLastName')
let uPassword = localStorage.getItem('uPassword')
let login = () => {
    
    if (userName.value === uName && userLastName.value === uLastName && userPassword.value === uPassword) {
        
        location.href = 'index.html'
    }else{
        console.log();
    }
}