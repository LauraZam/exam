class room{
    roomName;
    roomClass;
    roomsCount;
    roomsPrice;
    card_img;
    constructor(newRoomName, newRoomClass, newRoomsCount, newRoomsPrice, newCardImg){
        this.roomName = newRoomName
        this.roomClass = newRoomClass
        this.roomsCount = newRoomsCount
        this.roomsPrice = newRoomsPrice
        this.card_img = newCardImg
    }
    get roomName(){
        return this.roomName
    }
    get roomClass(){
        return this.roomClass
    }
    get roomsCount(){
        return this.roomsCount
    }
    get roomsPrice(){
        return this.roomsPrice
    }
    get card_img(){
        return this.card_img
    }
    set roomName(newRoomName){
        this.roomName = newRoomName
    }
    set roomClass(newRoomClass){
        this.roomClass = newRoomClass
    }
    set roomsCount(newRoomsCount){
        this.roomsCount = newRoomsCount
    }
    set roomsPrice(newRoomsPrice){
        this.roomsPrice = newRoomsPrice
    }
    
    set card_img(newcardImg){
        this.card_img = newcardImg
    }
}
let imgs = [
    'https://bonhotel.dp.ua/image/Standart%20Classic%20202%20203/9.jpg',
    '',
    ''
]
let rooms = [
    new room('Standard Room', 'Standard', 1, '50000 kzt', imgs[0]),
    new room('Standard room', 'Standard', 1, '30000 kzt', imgs[1]),
    new room('Junior room', 'Junior', 2, '50000 kzt', imgs[2]),
    new room('Superior room', 'Superior', 3, '80000 kzt', imgs[3]),
    new room('King room', 'King', 4, '110000 kzt', imgs[4])
]

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
                <input type="date" name="ot" id="">
                <input type="date" name="do" id="">
                <button class="startRent btn">забронировать</button>
            </div>
        </div>
    `)
}
$('#startFilters').click(function () {
    let category1 = $('#category1').val()
    let category2 = $('#category2').val()
    let category3 = $('#category3').val()
    if (category1 === 'price(все)' && category2 === 'rooms count(все)' && category3 === 'class(все)') {
        location.reload()
    }else{
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].roomsPrice === category1) {
                $('.cards').empty()
                console.log(rooms[i]);                
                drawCard(rooms[i].roomName, rooms[i].roomClass, rooms[i].roomsCount, rooms[i].roomsPrice, rooms[i].card_img)
            }
            else if (rooms[i].roomsCount === category2) {
                drawCard(rooms[i].roomName, rooms[i].roomClass, rooms[i].roomsCount, rooms[i].roomsPrice, rooms[i].card_img)
            }else if(rooms[i].roomClass === category3){
                drawCard(rooms[i].roomName, rooms[i].roomClass, rooms[i].roomsCount, rooms[i].roomsPrice, rooms[i].card_img)
            }
        }
            
            
        }
    
})

// drawCard()
for (let i = 0; i < rooms.length; i++) {
    drawCard(rooms[i].roomName, rooms[i].roomClass, rooms[i].roomsCount, rooms[i].roomsPrice, rooms[i].card_img)
    
}