class rooms{
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
let categories = [
    {
        name: 'price',
        value: 'price'
    },
    {
        name: 'rooms',
        value: 'rooms'
    },
    {
        name: 'class',
        value: 'class'
    }
]
let podcategories  =[
    [
        {
            name: 'от 30000 kzt',
            value: 'от 30000 kzt'
        },
        {
            name: 'от 50000 kzt',
            value: 'от 50000 kzt'
        },
        {
            name: 'от 80000 kzt',
            value: 'от 80000 kzt'
        },
        {
            name: 'от 110000 kzt',
            value: 'от 110000 kzt'
        }

    ],
    [
        {
            name: '1',
            value: '1'
        },
        {
            name: '2',
            value: '2'
        },
        {
            name: '3',
            value: '3'
        },
        {
            name: '4',
            value: '4'
        }
    ],
    [
        {
            name: 'Standard',
            value: 'Standard'
        },
        {
            name: 'Junior',
            value: 'Junior'
        },
        {
            name: 'Superior',
            value: 'Superior'
        },
        {
            name: 'King',
            value: 'King'
        }
    ]
]

let giveCategories = () => {
    for (let i = 0; i < 1; i++) {
        $('#category1').append(`
            <option name='${categories[0].name}' value='${categories[0].value}'>${categories[0].value}</option>
        `)
    }
    for (let i = 0; i < 1; i++) {
        $('#category2').append(`
            <option name='${categories[1].name}' value='${categories[2].value}'>${categories[1].value}</option>
        `)
    }
    for (let i = 0; i < 1; i++) {
        $('#category3').append(`
            <option name='${categories[2].name}' value='${categories[2].value}'>${categories[2].value}</option>
        `)
    }

}
giveCategories()
let givPodCategories = () => {
    for (let i = 0; i < 4; i++) {
        $('#category1').append(`
            <option name='${podcategories[0][i].name}' value='${podcategories[0][i].value}'>${podcategories[0][i].name}
        `)
        
    }
    for (let i = 0; i < 4; i++) {
        $('#category2').append(`
            <option name='${podcategories[1][i].name}' value='${podcategories[1][i].value}'>${podcategories[1][i].name}
        `)
        
    }
    for (let i = 0; i < 4; i++) {
        $('#category3').append(`
            <option name='${podcategories[2][i].name}' value='${podcategories[2][i].value}'>${podcategories[2][i].name}
        `)
        
    }
}
givPodCategories()

let drawCard = (roomName, roomClass, roomsCount, roomsPrice, card_img) => {
    $('.cards').append(`
        <div class="card">
            <div class="dCard_img">
                <igm class="card_img">${card_img}</igm>
            </div>
            <div class="dCardText">
                <h2 class="roomName">${roomName}</h2>
                <p class="roomClass">${roomClass}</p>
                <p class="roomsCount">${roomsCount}</p>
                <p class="roomsPrice">${roomsPrice}</p>
                <input type="date" name="ot" id="">
                <input type="date" name="do" id="">
                <button class="startRent btn">забронировать</button>
            </div>
        </div>
    `)
}
// drawCard()
for (let i = 0; i < rooms.length; i++) {
    drawCard(rooms[i].roomName, rooms[i].roomClass, rooms[i].roomsCount, rooms[i].roomsPrice, rooms[i].card_img)
    
}