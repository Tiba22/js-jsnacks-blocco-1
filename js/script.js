
  // Esercizio 1


  // Generatore di "nomi cognomi" casuali: prendendo una
  // lista di nomi e una lista di cognomi, Gatsby vuole
  // generare una falsa lista di invitati.

  // var names = ['Alessandro', 'Lorenzo', 'Tiziana', 'Martino', 'Pippo'];
  // var lastnames = ['Venti', 'Dongu', 'Baraldi', 'Brogno', 'Baudo'];
  // var fullnames = [];
  // var random1;
  // var random2;

  // for (var i = 0; i < 5; i++) {
  //   random1 = Math.round(Math.random() * (4 - 0) + 0);
  //   random2 = Math.round(Math.random() * (4 - 0) + 0);
  //   fullnames.push(names[random1] + " " + lastnames[random2]);
  // }
  // console.log(fullnames);


  // Esercizio 2


  // Crea due array che hanno un numero di elementi diversi.
  // Aggiungi elementi all'array che ha meno elementi fino a
  // quando ne avrà tanti quanti l'altro.

  // var arr1 = [ 5 ];
  // var arr2 = [ 15, 2, 7 ];

  // console.log(arr1, arr2);

  // if (arr1 > arr2) {
  //     var shortArr = arr1;
  //     var longArr = arr2;

  // } else if (arr1 < arr2) {
  //     var shortArr = arr2;
  //     var longArr = arr1;

  // }else {
  //     console.log("Stessa lunghezza");
  // }

  // var trueElement = longArr.length - shortArr.length;

  // for (var i = 0; i < trueElement; i++ ) {
  //     var random = Math.round(Math.random() * (100 - 1) + 1);
  //     shortArr.push(random);
  // }

  // console.log(shortArr, longArr);
  // console.log("array precedentemente corto: " + shortArr + " || Array lungo: " + longArr);



  // Esercizio 3


  // Chiedere all'utente un valore limite, poi richiedere all'utente una serie di valori
  // finche' la somma non supera il valore limite e stampare i valori forniti dall'utente

  // var limit = parseInt(prompt("Inserisci il valore limite"));
  // var sum = 0;

  // while (sum <= limit) {
  //     var number = parseInt(prompt("Inserisci il valore da sommare"));
  //     sum += number;
  //     console.log("Numero: " + number);
  // }

  // console.log("Somma: " + sum);



  // Esercizio 4


  // Crea due tag div con due id diversi.
  // Un div avrà il testo colorato di rosso mentre l'altro di verde.
  // Partendo da un array di numeri, stampiamo nell'id rosso i numeri
  // dispari e in verde i numeri pari.

  // var numbers = [15, 20, 1, 3, 22];

  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] % 2 === 1) {
  //     document.getElementById("mainTitle").innerHTML += " " + numbers[i];
  //   } else {
  //     document.getElementById("mainTitle2").innerHTML += " " + numbers[i];
  //   }
  // }








  // GOAL:
  // - Creare un oggetto che descriva uno studente con le
  // seguenti proprietà: nome, cognome e età. Stampare a
  // schermo attraverso il for in tutte le proprietà.


  function es1() {
    var studente = {

      nome : 'Alessandro',
      cognome : 'Tibaldo',
      eta : 24,

    };

    for (var key in studente) {

      console.log(key + ' ' + studente[key]);
    }
  }

  // es1();




  // - Creare un array di oggetti di studenti. Ciclare su tutti gli
  // studenti e stampare per ognuno nome e cognome

  function es2() {
    var studenti = [
      {'nome' : 'Alessandro', 'cognome' : 'Tibaldo', 'eta' : 24},
      {'nome' : 'Andrea', 'cognome' : 'Fazio', 'eta' : 99},
      {'nome' : 'Diego', 'cognome' : 'Barbaresco', 'eta' : 99}
    ]

    for (var i=0; i<studenti.length; i++) {
      console.log('Nome: ' + studenti[i]['nome'] + ' ' + 'Cognome: ' + studenti[i]['cognome']);
    }
  }
  // es2();




  // - Dare la possibilità all'utente attraverso 3 prompt di
  // aggiungere un nuovo oggetto studente inserendo
  // nell'ordine: nome, cognome e età.


  function es3() {

    var nomePrompt = prompt('Inserisci il tuo nome');
    var cognomePrompt = prompt('Inserisci il tuo cognome');
    var etaPrompt = prompt('Inserisci la tua età');

    var studente = {
      'nome' : nomePrompt,
      'cognome' : cognomePrompt,
      'eta' : etaPrompt
    }
    console.log(studente);
  }

  es3();
