let roomsB  = JSON.parse(localStorage.getItem('roomsB'))
console.log(roomsB);
let drawCard = (roomName, roomClass, roomsCount, roomsPrice, card_img) => {
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
                <input type="number" name="ot" class="ot" placeholder="год месяц день(слитно/без точек)">
                <input type="number" name="do" class="doc" placeholder="год месяц день(слитно/без точек)">
                <button class="startRent btn">продлить</button>
            </div>
        </div>
    `)
}
for (let i = 0; i < roomsB.length; i++) {
    drawCard(roomsB[i].roomName, roomsB[i].roomClass, roomsB[i].roomsCount, roomsB[i].roomsPrice, roomsB[i].card_img)
    
}