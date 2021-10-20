function myFunction() {
    const name = prompt('Come ti chiami?');
    const surname = prompt("Qual'è il tuo cognome?");
    const favorite_color = prompt("Qual'è il tuo colore preferito?");

    let random_number = Math.floor(Math.random() * 101);
    
    document.getElementById('password').innerHTML = `${name}${surname}${favorite_color}${random_number}`;
  }