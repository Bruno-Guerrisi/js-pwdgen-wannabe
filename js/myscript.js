function myFunction() {
    let name = prompt('Come ti chiami?');
    let surname = prompt("Qual'è il tuo cognome?");
    let favorite_color = prompt("Qual'è il tuo colore preferito?");

    document.getElementById('password').innerHTML = `${name}${surname}${favorite_color}21`;
  }