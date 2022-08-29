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

class Square {
    
    constructor(sqNumImg,num){
        this.sqNumImg = sqNumImg
        this.num = num
    }
    click(){
        turn++
        if(turn % 2 === 0){
            if(player1.includes(this.num) || player2.includes(this.num)) {
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`${this.sqNumImg}`).src = 'images/x-image.png'
            player1.push(this.num)
            }
        }
        else if(turn % 2 === 1) {
            if(player1.includes(this.num) || player2.includes(this.num)){
                document.querySelector('.error').innerText = 'Spot Already Taken'
                setTimeout(clearError,2000)
                turn--
            }
            else{
            document.querySelector(`${this.sqNumImg}`).src = 'images/o-image.png'
            player2.push(this.num)
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



const square0 = new Square('.image0', 0)
const square1 = new Square('.image1', 1)
const square2 = new Square('.image2', 2)
const square3 = new Square('.image3', 3)
const square4 = new Square('.image4', 4)
const square5 = new Square('.image5', 5)
const square6 = new Square('.image6', 6)
const square7 = new Square('.image7', 7)
const square8 = new Square('.image8', 8)



sq0.addEventListener('click', square0.click.bind(square0))
sq1.addEventListener('click', square1.click.bind(square1))
sq2.addEventListener('click', square2.click.bind(square2))
sq3.addEventListener('click', square3.click.bind(square3))
sq4.addEventListener('click', square4.click.bind(square4))
sq5.addEventListener('click', square5.click.bind(square5))
sq6.addEventListener('click', square6.click.bind(square6))
sq7.addEventListener('click', square7.click.bind(square7))
sq8.addEventListener('click', square8.click.bind(square8))

