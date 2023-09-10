let saveEL = document.getElementById('save-el')
let countEL = document.getElementById('count-el')
let count = 0

function increment() {
  count += 1
  countEL.textContent = count
}

function save() {
  let countStr = ' ' + count + ' - '
  saveEL.textContent += countStr
  countEL.textContent = 0
  count = 0
}

function reset() {
  location.reload()
}
