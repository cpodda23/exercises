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

const container = document.querySelector('.container')
const button = document.querySelector('button')

let clickedSeats = []

function createButton(seat, selected) {
  const seatElement = document.createElement('div');
  seatElement.setAttribute('role', 'button');
  seatElement.className = selected ? 'seat colored' : 'seat'
  seatElement.innerHTML = seat.id;
  seatElement.addEventListener("click", () => {
    toggleSeat(seat)
    render()
  })

  if (seat.premium) {
    seatElement.appendChild(createLine())
  }
  return seatElement
}



const render = () => {
  container.innerHTML = ''
  seats.forEach(seat => {
    const selected = !!clickedSeats.find((s) => s.id === seat.id)
    container.appendChild(createButton(seat, selected))

  })

  updateBuy()

  const sum = clickedSeats.reduce((acc, seat) => acc + seat.price, 0)
  createTotal(sum)
}

function createLine() {
  const line = document.createElement('div');
  line.className = 'line';
  return line
}

function toggleSeat(seat) {
  const isPresent = !!(clickedSeats.find((clickedSeat) => clickedSeat.id == seat.id))
  clickedSeats =
    (isPresent)
      ? clickedSeats.filter((clickedSeat) => clickedSeat.id != seat.id)
      : [...clickedSeats, seat]
}

function createTotal(sum) {
  const textTotal = document.createElement('h2')
  textTotal.innerHTML = `Total: ${sum} €`;
  textTotal.className = 'total';
  const total = document.querySelector('#total')
  total.innerHTML = ''
  total.appendChild(textTotal)
}


function updateBuy() {
  if (clickedSeats.length < 1) {
    button.classList.add("disabled")
  } else {
    button.addEventListener("click", buyFunction)
    button.classList.remove("disabled")
  }
}

function buyFunction() {
  window.alert(`Thanks! You bought seat${(clickedSeats.length > 1) ? `s` : ''} ${(clickedSeats.map((seat) => seat.id)).sort()}`)
}


render()