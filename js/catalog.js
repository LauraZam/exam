
class room{
    roomName;
    roomClass;
    roomsCount;
    roomsPrice;
    card_img;
    price;
    stat
    roomStat
    constructor(newRoomName, newRoomClass, newRoomsCount, newRoomsPrice, newCardImg, price, stat, roomStat){
        this.roomName = newRoomName
        this.roomClass = newRoomClass
        this.roomsCount = newRoomsCount
        this.roomsPrice = newRoomsPrice
        this.card_img = newCardImg
        this.price = price
        this.stat = stat
        this.roomStat = roomStat
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
    get roomStat(){
        return this.roomStat
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
    set roomStat(roomStat){
        this.roomStat = roomStat
    }
}
class roomInfo extends room{
    ot;
    doc;
    constructor(newRoomName, newRoomClass, newRoomsCount, newRoomsPrice, newCardImg, price, stat, roomStat, newOt, newDoc){
        super(newRoomName, newRoomClass, newRoomsCount, newRoomsPrice, newCardImg, price, stat, roomStat)
        this.ot = newOt
        this.doc = newDoc
    }
    get ot(){
        return this.ot
    }
    get doc(){
        return this.doc
    }
    set ot(newOt){
        this.ot = newOt
    }
    set doc(newDoc){
        this.doc = newDoc
    }
}
let imgs = [
    'https://bonhotel.dp.ua/image/Standart%20Classic%20202%20203/9.jpg',
    'https://www.avalaresort.com/images/Guest-room/Avala-Resort/standard-guest-room/2018/Standard_double-002.JPG',
    'https://www.discoveryshoresboracay.com/files/2019/01/Junior-Suite.jpg',
    'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/96/2016/12/27025150/3-Superior-Room.jpg',
    'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-zabeel-saray/room/6-4-room_jumeirah-zabeel-saray-superior-king_landscape.jpg?h=1920&w=2880'
]
let rooms = [
    new room('Standard Room', 'Standard', '1', '50000 kzt', imgs[0], 50000, false, 'Занято'),
    new room('Standard room', 'Standard', '1', '30000 kzt', imgs[1], 30000, false, 'Занято'),
    new room('Junior room', 'Junior', '2', '50000 kzt', imgs[2], 50000, false, 'Занято'),
    new room('Superior room', 'Superior', '3', '80000 kzt', imgs[3], 80000, false, 'Занято'),
    new room('King room', 'King', '4', '110000 kzt', imgs[4], 110000, false, 'Свободно')
]





let drawCard = (roomName, roomClass, roomsCount, roomsPrice, card_img, roomStat) => {
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
                <input type="number" name="ot" class="ot" placeholder="год месяц день(слитно/без точек)" value="20210525">
                <input type="number" name="do" class="doc" placeholder="год месяц день(слитно/без точек)" value="20210529">
                <button class="startRent btn" onclick="check()">${roomStat}</button>
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
                $('.cards').empty()
                console.log(rooms[i]);
                drawCard(rooms[i].roomName, rooms[i].roomClass, rooms[i].roomsCount, rooms[i].roomsPrice, rooms[i].card_img)
            }else if(rooms[i].roomClass === category3){
                $('.cards').empty()
                console.log(rooms[i]);
                drawCard(rooms[i].roomName, rooms[i].roomClass, rooms[i].roomsCount, rooms[i].roomsPrice, rooms[i].card_img)
            }
        }
            
            
        }
    
})
// drawCard()
for (let i = 0; i < rooms.length; i++) {
    drawCard(rooms[i].roomName, rooms[i].roomClass, rooms[i].roomsCount, rooms[i].roomsPrice, rooms[i].card_img, rooms[i].roomStat)
    
}
let startRent = $('.startRent')

// let doc = $('.doc').val()
let count = 0
let roomsB = []
let bronBtn = document.getElementsByClassName('startRent')

let uName = localStorage.getItem('uName')
let uLastName = localStorage.getItem('uLastName')

    for (let i = 0; i < rooms.length; i++) {
        // let ot = $('.ot')
        // let doc = $('.doc')
        
        // else{
            function check() {
                if (uName === '' || uLastName === '') {
            alert('Зарегестрируйтесь')
            location.href = 'registration.html'
        }
                    rooms[i].stat = true
                    console.log(rooms);
                    if (rooms[i].stat === true) {
                        let room = new roomInfo(rooms[i].roomName, rooms[i].roomClass, rooms[i].roomsCount, rooms[i].roomsPrice, rooms[i].card_img, rooms[i].price)
                        count = Number($('.doc').val() - $('.ot').val())
                        console.log(count);
                        roomsB.push(room)
                        localStorage.setItem('roomsB', JSON.stringify(roomsB))
                        localStorage.setItem('count', JSON.stringify(count))
                        console.log(roomsB);
                    }
                
                
                
            }
                
                    
                
            
        // }
    }   

for (let i = 0; i < $('.cards').length; i++) {
    
    console.log($('.cards')[i]);
        
    
    
}