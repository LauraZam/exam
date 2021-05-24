let rooms  = JSON.parse(localStorage.getItem('rooms'))
console.log(rooms);
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
                <button class="startRent btn">забронировать</button>
            </div>
        </div>
    `)
}
for (let i = 0; i < rooms.length; i++) {
    drawCard(rooms.roomName, rooms.roomClass, rooms.roomsCount, rooms.roomsPrice, rooms.card_img)
    
}