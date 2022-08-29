const sq0 = document.querySelector('.square0')
const sq1 = document.querySelector('.square1')
const sq2 = document.querySelector('.square2')
const sq3 = document.querySelector('.square3')
const sq4 = document.querySelector('.square4')
const sq5 = document.querySelector('.square5')
const sq6 = document.querySelector('.square6')
const sq7 = document.querySelector('.square7')
const sq8 = document.querySelector('.square8')

let player1 = []
let player2 = []

let turn = -1

function clearError () {
    document.querySelector('.error').innerText = ''
}

const winCons  = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]



class Square0 {
    
    constructor(sqNumImg){
        this.sqNumImg = sqNumImg
    }
    click(){
        turn++
        if(turn % 2 === 0){
            if(player1.includes(0) || player2.includes(0)) {
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image0`).src = 'images/x-image.png'
            player1.push(0)
            }
        }
        else if(turn % 2 === 1) {
            if(player1.includes(0) || player2.includes(0)){
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image0`).src = 'images/o-image.png'
            player2.push(0)
            }
        }
        
      
        const player1Win = winCons.some(con => {
            return con.every(n => player1.includes(n))
        })
        const player2Win =  winCons.some(con => {
            return con.every(n => player2.includes(n))
        })
        if(turn > 7 && (!player1Win) && (!player2Win)){
            document.querySelector('h1').innerText = 'Tie'
        }
        else if(player1Win) {
            document.querySelector('h1').innerText = 'Player 1 Wins'
        }
        else if(player2Win) {
            document.querySelector('h1').innerText = 'Player 2 Wins'
        }
    }
}
class Square1 {
    
    constructor(sqNumImg){
        this.sqNumImg = sqNumImg
    }
    click(){
        turn++
        if(turn % 2 === 0){
            if(player1.includes(1) || player2.includes(1)) {
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image1`).src = 'images/x-image.png'
            player1.push(1)
            }
        }
        else if(turn % 2 === 1) {
            if(player1.includes(1) || player2.includes(1)){
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image1`).src = 'images/o-image.png'
            player2.push(1)
            }
        }
        
        const player1Win = winCons.some(con => {
            return con.every(n => player1.includes(n))
        })
        const player2Win =  winCons.some(con => {
            return con.every(n => player2.includes(n))
        })
        if(turn > 7 && (!player1Win) && (!player2Win)){
            document.querySelector('h1').innerText = 'Tie'
        }
        else if(player1Win) {
            document.querySelector('h1').innerText = 'Player 1 Wins'
        }
        else if(player2Win) {
            document.querySelector('h1').innerText = 'Player 2 Wins'
        }
    }
}
class Square2 {
    
    constructor(sqNumImg){
        this.sqNumImg = sqNumImg
    }
    click(){
        turn++
        if(turn % 2 === 0){
            if(player1.includes(2) || player2.includes(2)) {
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image2`).src = 'images/x-image.png'
            player1.push(2)
            }
        }
        else if(turn % 2 === 1) {
            if(player1.includes(2) || player2.includes(2)){
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image2`).src = 'images/o-image.png'
            player2.push(2)
            }
        }
      
        const player1Win = winCons.some(con => {
            return con.every(n => player1.includes(n))
        })
        const player2Win =  winCons.some(con => {
            return con.every(n => player2.includes(n))
        })
        if(turn > 7 && (!player1Win) && (!player2Win)){
            document.querySelector('h1').innerText = 'Tie'
        }
        else if(player1Win) {
            document.querySelector('h1').innerText = 'Player 1 Wins'
        }
        else if(player2Win) {
            document.querySelector('h1').innerText = 'Player 2 Wins'
        }
      
    }
}
class Square3 {
    
    constructor(sqNumImg){
        this.sqNumImg = sqNumImg
    }
    click(){
        turn++
        if(turn % 2 === 0){
            if(player1.includes(3) || player2.includes(3)) {
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image3`).src = 'images/x-image.png'
            player1.push(3)
            }
        }
        else if(turn % 2 === 1) {
            if(player1.includes(3) || player2.includes(3)){
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image3`).src = 'images/o-image.png'
            player2.push(3)
            }
        }
        
        const player1Win = winCons.some(con => {
            return con.every(n => player1.includes(n))
        })
        const player2Win =  winCons.some(con => {
            return con.every(n => player2.includes(n))
        })
        if(turn > 7 && (!player1Win) && (!player2Win)){
            document.querySelector('h1').innerText = 'Tie'
        }
        else if(player1Win) {
            document.querySelector('h1').innerText = 'Player 1 Wins'
        }
        else if(player2Win) {
            document.querySelector('h1').innerText = 'Player 2 Wins'
        }
      
    }
}
class Square4 {
    
    constructor(sqNumImg){
        this.sqNumImg = sqNumImg
    }
    click(){
        turn++
        if(turn % 2 === 0){
            if(player1.includes(4) || player2.includes(4)) {
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image4`).src = 'images/x-image.png'
            player1.push(4)
            }
        }
        else if(turn % 2 === 1) {
            if(player1.includes(4) || player2.includes(4)){
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image4`).src = 'images/o-image.png'
            player2.push(4)
            }
        }
        
        const player1Win = winCons.some(con => {
            return con.every(n => player1.includes(n))
        })
        const player2Win =  winCons.some(con => {
            return con.every(n => player2.includes(n))
        })
        if(turn > 7 && (!player1Win) && (!player2Win)){
            document.querySelector('h1').innerText = 'Tie'
        }
        else if(player1Win) {
            document.querySelector('h1').innerText = 'Player 1 Wins'
        }
        else if(player2Win) {
            document.querySelector('h1').innerText = 'Player 2 Wins'
        }
       
    }
}
class Square5 {
    
    constructor(sqNumImg){
        this.sqNumImg = sqNumImg
    }
    click(){
        turn++
        if(turn % 2 === 0){
            if(player1.includes(5) || player2.includes(5)) {
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image5`).src = 'images/x-image.png'
            player1.push(5)
            }
        }
        else if(turn % 2 === 1) {
            if(player1.includes(5) || player2.includes(5)){
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image5`).src = 'images/o-image.png'
            player2.push(5)
            }
        }
       
        const player1Win = winCons.some(con => {
            return con.every(n => player1.includes(n))
        })
        const player2Win =  winCons.some(con => {
            return con.every(n => player2.includes(n))
        })
        if(turn > 7 && (!player1Win) && (!player2Win)){
            document.querySelector('h1').innerText = 'Tie'
        }
        else if(player1Win) {
            document.querySelector('h1').innerText = 'Player 1 Wins'
        }
        else if(player2Win) {
            document.querySelector('h1').innerText = 'Player 2 Wins'
        }
      
    }
}
class Square6 {
    
    constructor(sqNumImg){
        this.sqNumImg = sqNumImg
    }
    click(){
        turn++
        if(turn % 2 === 0){
            if(player1.includes(6) || player2.includes(6)) {
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image6`).src = 'images/x-image.png'
            player1.push(6)
            }
        }
        else if(turn % 2 === 1) {
            if(player1.includes(6) || player2.includes(6)){
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image6`).src = 'images/o-image.png'
            player2.push(6)
            }
        }
        
        const player1Win = winCons.some(con => {
            return con.every(n => player1.includes(n))
        })
        const player2Win =  winCons.some(con => {
            return con.every(n => player2.includes(n))
        })
        if(turn > 7 && (!player1Win) && (!player2Win)){
            document.querySelector('h1').innerText = 'Tie'
        }
        else if(player1Win) {
            document.querySelector('h1').innerText = 'Player 1 Wins'
        }
        else if(player2Win) {
            document.querySelector('h1').innerText = 'Player 2 Wins'
        }
       
    }
}
class Square7 {
    
    constructor(sqNumImg){
        this.sqNumImg = sqNumImg
    }
    click(){
        turn++
        if(turn % 2 === 0){
            if(player1.includes(7) || player2.includes(7)) {
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image7`).src = 'images/x-image.png'
            player1.push(7)
            }
        }
        else if(turn % 2 === 1) {
            if(player1.includes(7) || player2.includes(7)){
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image7`).src = 'images/o-image.png'
            player2.push(7)
            }
        }
        
        const player1Win = winCons.some(con => {
            return con.every(n => player1.includes(n))
        })
        const player2Win =  winCons.some(con => {
            return con.every(n => player2.includes(n))
        })
        if(turn > 7 && (!player1Win) && (!player2Win)){
            document.querySelector('h1').innerText = 'Tie'
        }
        else if(player1Win) {
            document.querySelector('h1').innerText = 'Player 1 Wins'
        }
        else if(player2Win) {
            document.querySelector('h1').innerText = 'Player 2 Wins'
        }
        
    }
}
class Square8 {
    
    constructor(sqNumImg){
        this.sqNumImg = sqNumImg
    }
    click(){
        turn++
        if(turn % 2 === 0){
            if(player1.includes(8) || player2.includes(8)) {
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image8`).src = 'images/x-image.png'
            player1.push(8)
            }
        }
        else if(turn % 2 === 1) {
            if(player1.includes(8) || player2.includes(8)){
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`.image8`).src = 'images/o-image.png'
            player2.push(8)
            }
        }
        
        const player1Win = winCons.some(con => {
            return con.every(n => player1.includes(n))
        })
        const player2Win =  winCons.some(con => {
            return con.every(n => player2.includes(n))
        })
        if(turn > 7 && (!player1Win) && (!player2Win)){
            document.querySelector('h1').innerText = 'Tie'
        }
        else if(player1Win) {
            document.querySelector('h1').innerText = 'Player 1 Wins'
        }
        else if(player2Win) {
            document.querySelector('h1').innerText = 'Player 2 Wins'
        }
       
    }
}


const square0 = new Square0('.image0')
const square1 = new Square1('.image1')
const square2 = new Square2('.image2')
const square3 = new Square3('.image3')
const square4 = new Square4('.image4')
const square5 = new Square5('.image5')
const square6 = new Square6('.image6')
const square7 = new Square7('.image7')
const square8 = new Square8('.image8')



sq0.addEventListener('click', square0.click)
sq1.addEventListener('click', square1.click)
sq2.addEventListener('click', square2.click)
sq3.addEventListener('click', square3.click)
sq4.addEventListener('click', square4.click)
sq5.addEventListener('click', square5.click)
sq6.addEventListener('click', square6.click)
sq7.addEventListener('click', square7.click)
sq8.addEventListener('click', square8.click)


// class Tester{
//     constructor(tag){
//         this.tag = tag
        
//     }

//     addImage(){
//         document.querySelector(`${this.tag}`).src = 'images/x-image.png'
//     }
// }

// const test = new Tester('.test')

// document.querySelector('.tester').addEventListener('click', test.addImage)

// class Tester {
//     constructor(tag) {
//         (this.tag = tag), 
//         (this.tagSrc = document.querySelector(`${this.tag}`));
//     }
//     addImage() {
//         console.log("addImage");
//         this.tagSrc.src = "images/x-image.png";
//         console.log(this.tagSrc.src)
//     }
// }

// const test = new Tester(".test");

// test.tagSrc.addEventListener("click", test.addImage);