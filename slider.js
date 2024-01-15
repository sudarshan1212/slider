let slideContainer=document.getElementById('slideContainer')
let slider=document.getElementById('slider')
let cards = slider.getElementsByTagName('div')

let elementshow=3
let sliderContainerWidth=slideContainer.clientWidth
let cardWidth=sliderContainerWidth/elementshow
//  console.log(cardWidth);
 slider.style.width=cards.length*cardWidth+'px'
 for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width=cardWidth+'px'
    // console.log(element.style.width);
    
 }
// console.log(sliderContainerWidth);
 function prev(){
    
    let h=-1264
    if(Math.floor(((+slider.style.marginLeft.slice(0,-2))))!=h){
        slider.style.marginLeft=((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px'

        
    }
    console.log(Math.floor((+slider.style.marginLeft.slice(0,-2))));
    // console.log(Math.floor(-cardWidth* (cards.length-elementshow)));
    console.log(h);
    
        // cards.length-elementshow

 }
 function next(){
    if(+slider.style.marginLeft.slice(0,-2)!=0)   {
        slider.style.marginLeft=((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px'
    }     
    
  
    
 } 