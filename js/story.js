let roomsB  = JSON.parse(localStorage.getItem('roomsB'))
let count = JSON.parse(localStorage.getItem('count'))
console.log(roomsB);
let drawCard = (roomName, roomClass, roomsCount, roomsPrice, card_img, count) => {
    $('.cards').append(`
        <div class="card">
            <div class="dCard_img">
            <img src="${card_img}" alt="" class="card_img">
            </div>
            <div class="dCardText">
                <h2 class="roomName">Name: ${roomName}</h2>
                <p class="roomClass">Class: ${roomClass}</p>
                <p class="roomsCount">Rooms count: ${roomsCount}</p>
                <p class="roomsPrice">Price: ${roomsPrice}</p>
                <p>Days: ${count}</p>

                <button class="oplata btn">оплатить</button>
            </div>
        </div>
    `)
}
for (let i = 0; i < roomsB.length; i++) {
    drawCard(roomsB[i].roomName, roomsB[i].roomClass, roomsB[i].roomsCount, roomsB[i].roomsPrice, roomsB[i].card_img, count)
    
}
let oBtn = $('.oplata')
oBtn.click(function () {
    for (let i = 0; i < roomsB.length; i++) {
        
        alert('Вы оплатили ' + roomsB[i].price * count)
        
    }
    
})
let dBtn = $('.dBtn')
dBtn.click(function () {
    localStorage.removeItem('roomsB')
    location.reload()
})