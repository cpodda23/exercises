const seats = [
  {
    id: 1,
    price: 4,
  },
  {
    id: 2,
    price: 4,
  },
  {
    id: 3,
    price: 6,
    premium: true,
  },
  {
    id: 4,
    price: 6,
    premium: true,
  },
  {
    id: 5,
    price: 4,
  }
]

console.log(seats)


const sum = seats.reduce((acc,obj)=>{acc+obj.price},0)

function addSeat() {
 // return seats.reduce((acc,obj)=>{acc+obj.price},0)
}

function buyFunction() {
  window.alert(`Thanks! You bought seats ${sum}`)
}

