let uName = localStorage.getItem('uName')
let uLastName = localStorage.getItem('uLastName')
let voyti = document.getElementById('voyti')
if (uName === '' || uLastName === '') {
    voyti.innerText = 'войти'
}else{
    voyti.innerText = 'Выйти'
}