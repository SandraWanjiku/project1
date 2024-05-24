let count = 0;
let btns = document.querySelectorAll (".btn")
let value = document.querySelector ("#value")

btns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const all = e.currentTarget.classList
     if(all.contains('decrease')){
        count --
     }
     else if(all.contains('increase')){
        count ++
     }
     else{
        count=0
     }

     value.textContent = count;

     
     if(count>0){
        value.style.color ="green"
     }
     else if(count<0){
        value.style.color ="red"
     }
     else{
        value.style.color ="orange"
     }
  })
})