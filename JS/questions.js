(function(){
    const titleQuestions = [...document.querySelectorAll(".question__title")];
    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {
            let height = 0;
            let answer = question.nextElementSibling; /*este metodo se refiere que agarra el hermano de question (h3) agarrara a answer del html  en general agarra al hermano */
            let addPdding = question.parentElement.parentElement; /*de aqui agarramos al padre de question y despues agarramos al padre de su padre que es en html question__padding*/

            addPdding.classList.toggle('question__padding--add');

            question.children[0].classList.toggle('question__arrow--rotate');/*con el children[0]agarramos al 1er hijo de question (del h3) y luego nos dirigimos a sus listas de clases y le agregamos la siguiente class "question__arrow--rotate"*/
            
            if(answer.clientHeight === 0){ /*si el elemnto answer tiene un height == 0  pa eso sirve ese metodo que le agregmos si tiene o no height == 0  si tiene 0 es porque no tiene */
            height = answer.scrollHeight; /*nos daa el alto minimo para que se muestre el contenido eso nos da el scroll*/
            } /*En este caso el scrollHeight depende del question__padding ya que con eso nos da una altura minima sin eso no funcionari el efecto*/
        
            answer.style.height = `${height}px`;  /* queremos agregarle el valor de la variable height al  answer.style.height*/

        });
    });



})();