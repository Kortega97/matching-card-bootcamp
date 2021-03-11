let moveCount = document.querySelector('.moveCount')
let count = 0
let deck = document.querySelector('.cardSection')
document.querySelector('button').addEventListener('click',shuffleCards)

 document.querySelector('.cardSection').addEventListener('click', matchingCards);
 let cardOrder = [],
     selected = [],
     matched = 0;
 function shuffleCards() {
     cardOrder = []
     count = 0
     moveCount.innerHTML = count
     let card1 = '\'imgs/luffy.png\'',
         card2 = '\'imgs/robin.png\'',
         card3 = '\'imgs/nami.png\'',
         card4 = '\'imgs/franki.png\'',
         card5 = '\'imgs/zoro.png\'',
         card6 = '\'imgs/brook.png\'',
         card7 = '\'imgs/sanji.png\'',
         card8 = '\'imgs/usopp.png\'',
         card9 = '\'imgs/chpper.png\'',
         card10 ='\'imgs/1000Sunny.png\'',
         cards = [card1, card1, card2, card2, card3, card3, card4, card4, card5, card5,card6, card6, card7, card7, card8, card8, card9, card9, card10, card10];
     const deck = document.querySelectorAll('.card');
     deck.forEach(card => {
         let random;
         do {
             random = Math.floor(Math.random() * 20)
         } while (cards[random] === undefined)
         cardOrder.push(cards[random]);
         card.style.backgroundImage = 'url(\'imgs/back2.jpg\')';
         card.style.borderColor = 'black'
         delete cards[random];
     });
     
 }
 //Shuffle the cards update cardOrder with the current game's order
 shuffleCards();
 function matchingCards(e) {
     
     if (e.target.className === 'card'){
         console.log(e.target.innerHTML)
         if(e.target.style.backgroundImage === 'url(\"imgs/back2.jpg\")'){
         let cardNumber = e.target.dataset.value;
         console.log(cardNumber)
         selected.push(e.target);
         let img = cardOrder[cardNumber]
         e.target.style.backgroundImage = `url(${img})`;
         e.target.style.borderColor = 'gold'
        count++
        moveCount.innerHTML = count
        e.target.innerHTML = ''
         } 
     }
     if (selected.length === 2) {
         document.querySelector('.cardSection').removeEventListener('click', matchingCards);
         //All other cards are unclickable
         if (selected[0].style.backgroundImage === selected[1].style.backgroundImage) {
             matched++;
         }
         else {
             setTimeout(() => {
                selected[0].innerHTML =  '<img class= \'logo\' src=\"imgs/onepeiceL.png\" alt=\"\"></img>'
                selected[1].innerHTML =  '<img class= \'logo\' src=\"imgs/onepeiceL.png\" alt=\"\"></img>'
                selected[0].style.borderColor = 'black'
                selected[1].style.borderColor = 'black'
                selected[0].style.backgroundImage = 'url(\'imgs/back2.jpg\')';
                selected[1].style.backgroundImage = 'url(\'imgs/back2.jpg\')'; 
             }, 1000);
             
         }
         setTimeout(() => {
             selected = [];
             document.querySelector('.cardSection').addEventListener('click', matchingCards);
         }, 1000);
         console.log(selected);
         //Cards are clickable once again
     }
 }