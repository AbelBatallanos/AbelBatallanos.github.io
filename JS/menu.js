(function(){
    const openBoton = document.querySelector('.Nav_menu');
    const menu = document.querySelector('.Nav__link');
    const closeBoton = document.querySelector('.Nav_close');
   
    openBoton.addEventListener('click', () => {
        menu.classList.add('Nav__link--show');
    })

    closeBoton.addEventListener('click', () =>
    {
        menu.classList.remove('Nav__link--show');
    })

    /*Porque no colocamos toggle ?*/
    /*porque solo se usa cuando sea una funcion ahi se usa el toggle*/
})();