(function(){
const sliders = [...document.querySelectorAll('.testimony__body')]; //... esos 3 puntos lo que hace es para que sea un Array ,, asi para que ya no sean un nodo de elementos
const bottonNext = document.querySelector('#next');
const bottonBefore = document.querySelector('#before');
let value;

bottonNext.addEventListener('click', () => {
    changePosition(1)
});

bottonBefore.addEventListener('click', () => {
    changePosition(-1)
});

const changePosition = (add) => {    /*ese changePosition actua como una funcion callBack*/
    const currentTestimony = document.querySelector('.testimony__body--show').dataset.id; /*la dataset.id se referira solo al data-id que esta en el html */
    value = Number(currentTestimony);
    value += add; 
    
    sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');/*Number es para transf a enteros y le restamos 1 despues accedemos a su clase del mismo "currentTestimony" los que tengan la clas testimony__body--show y luego removemos esa mism clase testi__body--show*/
    if(value === sliders.length+1 || value === 0){
        value = value === 0 ? sliders.length : 1 ;  //el sliders.leng es para que me mande al numero 3 si es que tenemos 0 pero si revasamos el numero de sliders nos regresaa al 1
    }

    sliders[value-1].classList.add('testimony__body--show'); /*el value se le eliminra 1 y despues se le agregara la clase testimony--show cada vez que se d siguiente*/

}

/*La animacion se hace gracias a la classe testimony__body--show*/

})();