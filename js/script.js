
// DATA LAYER

const prezzoKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver = 0.4;
// const anniUtente = prompt('Buongiorno quanti anni ha?');
// const kmUtente = prompt('Quanti km vuole percorrere con il nostro treno?');


const btnInput = document.getElementById('btn-input2');
btnInput.addEventListener('click', function(){


    const nome = document.getElementById('input-name-surname').value;
    const distanza = document.getElementById('input-km-da-percorrere').value;
    const eta = document.getElementById('eta-viaggiatore').value;


    let prezzoRounded, discountprice, price;

    const prezzoBiglietto = distanza * prezzoKm;

    // BUSINESS LAYER

    if (eta === "Minorenne"){
        discountprice = prezzoBiglietto * (1- scontoMinorenni);
        // sconto = prezzoBiglietto * scontoMinorenni;
        
        prezzoRounded = Math.round((discountprice + Number.EPSILON) * 100) /100;
        document.getElementById('tipo-biglietto').innerHTML = 'sconto minorenni';
        
    }else if(eta === "Senior"){
        discountprice = prezzoBiglietto * (1- scontoOver);
        
        prezzoRounded = Math.round((discountprice + Number.EPSILON) * 100) /100;
        document.getElementById('tipo-biglietto').innerHTML = 'sconto Senior';
    
    }else{
        discountprice = 0;
        
        price = prezzoBiglietto - discountprice;
        prezzoRounded = Math.round((price + Number.EPSILON) * 100) /100;
        document.getElementById('tipo-biglietto').innerHTML = 'Biglietto Standard';
    }





    const name = document.getElementById('input-name-surname');
    document.getElementById('output-name').innerHTML = nome;






    document.getElementById('finalPrice').innerHTML = prezzoRounded

  //resetto i lvalue dell'input
//   document.getElementById('input2').value = '';
});

// PRESENTATION LAYER

// document.getElementById('output').innerHTML = msg;