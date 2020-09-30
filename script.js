const container = document.getElementById('container')
const img = document.querySelectorAll('#container img')

let index = 0

function run() {
  index++;

  if(index > img.length - 1) {
    index = 0
  }

  container.style.transform = `translateX(${-index * 500}px)`
}

setInterval(run, 2000)