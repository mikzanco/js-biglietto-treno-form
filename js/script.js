
// DATA LAYER

const prezzoKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver = 0.4;
const anniUtente = prompt('Buongiorno quanti anni ha?');
const kmUtente = prompt('Quanti km vuole percorrere con il nostro treno?');
let prezzo, prezzoRounded, msg;

const prezzoBiglietto = kmUtente * prezzoKm;

// BUSINESS LAYER

if (anniUtente < 18){
    discountprice = prezzoBiglietto * (1- scontoMinorenni);
    // sconto = prezzoBiglietto * scontoMinorenni;
    
    prezzoRounded = Math.round((discountprice + Number.EPSILON) * 100) /100;
    msg = `Il tuo biglietto costa ${prezzoRounded}€`;
    msg += `
    <br>
    Essendo minorenne ha lo sconto del ${scontoMinorenni * 100}% quindi paghi solo ${prezzoRounded}€
    `;
}else if(anniUtente > 65){
    discountprice = prezzoBiglietto * (1- scontoOver);
    
    prezzoRounded = Math.round((discountprice + Number.EPSILON) * 100) /100;
    msg = `Il tuo biglietto costa ${prezzoRounded}€`;
    msg += `
    <br>
    Essendo senior ha lo sconto del ${scontoOver * 100}% quindi paghi solo ${prezzoRounded}€
    `;
}else{
    discountprice = 0;
    
    price = prezzoBiglietto - discountprice;
    prezzoRounded = Math.round((price + Number.EPSILON) * 100) /100;
    msg = `Il tuo biglietto costa ${prezzoRounded}€`;55


}


const btnInput = document.getElementById('btn-input');
btnInput.addEventListener('click', function(){
  const name = prompt('Come ti chiami?')
  console.log(name);
  console.log(document.getElementById('input').value);
  document.getElementById('input').value = name;
});

const btnInput2 = document.getElementById('btn-input2');
btnInput2.addEventListener('click', function(){
  const name = document.getElementById('input2').value;
  //alert('Nell\'input c\'è scritto: ' + name);
  document.getElementById('output-name').innerHTML = name;

  //resetto i lvalue dell'input
  document.getElementById('input2').value = '';
});

// PRESENTATION LAYER

document.getElementById('output').innerHTML = msg;