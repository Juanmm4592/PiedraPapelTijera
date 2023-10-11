var c_machine = 0, c_user = 0;

function btn_select(btn) {

  let items = ["roca", "papel", "tijera"], buttonId = btn.id, n_random = getRandomInt(3), item = items[n_random];

  if (buttonId === 'btn_rock') {
    if (item == "roca") {
      alert("Jugador escogio roca, la maquina obtuvo roca, es un empate!");
    } else if (item == "papel") {
      alert("Jugador escogio roca, la maquina obtuvo papel, maquina gana!");
      c_machine++;
    } else {
      alert("Jugador escogio roca, la maquina obtuvo tijera, jugador gana!");
      c_user++;
    }
    updateScore();
  } else if (buttonId === 'btn_paper') {
    if (item == "roca") {
      alert("Jugador escogio papel, la maquina obtuvo roca, jugador gana!");
      c_user++;
    } else if (item == "papel") {
      alert("Jugador escogio papel, la maquina obtuvo papel, es un empate!");
    } else {
      alert("Jugador escogio papel, la maquina obtuvo tijera, la maquina gana!");
      c_machine++;
    }
    updateScore();
  } else if (buttonId === 'btn_scissors') {
    if (item == "roca") {
      alert("Jugador escogio tijeras, la maquina obtuvo roca, la maquina gana!");
      c_machine++;
    } else if (item == "papel") {
      alert("Jugador escogio tijeras, la maquina obtuvo papel, el jugador gana!");
      c_user++;
    } else {
      alert("Jugador escogio tijeras, la maquina obtuvo tijera, Es un empate!");
    }
    updateScore();
  }
}

function btn_reset() {
  resetScore();
  c_machine = 0;
  c_user = 0;
}

function updateScore() {
  let counter_machine = document.getElementById('counter_machine');
  let counter_user = document.getElementById('counter_user');

  counter_machine.textContent = c_machine;
  counter_user.textContent = c_user;
}

function resetScore() {
  let counter_machine = document.getElementById('counter_machine');
  let counter_user = document.getElementById('counter_user');

  counter_machine.textContent = 0;
  counter_user.textContent = 0;
}

//Metodo para obtener un numero random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}