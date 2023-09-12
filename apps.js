const btn = document.querySelectorAll('.btn');
const zeero = document.querySelector('.zeero');


     for(let i = 0 ; i < btn.length ; i++){
          btn[i].addEventListener('click', function(event){
                zeero.innerText =  Number(zeero.innerText) + 1
               return zeero
          })
     }

/*btn.addEventListener('click',function(event){
     zeero.innerText =  Number(zeero.innerText) + 1
     return zeero
});*/