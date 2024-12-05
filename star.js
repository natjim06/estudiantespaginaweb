const estrellas = document.querySelectorAll('.star');


estrellas.forEach((estrella) => {
  estrella.addEventListener('click', (e) => {

    const valor = estrella.dataset.value;

 
    const estrellasConjunto = estrella.parentNode.querySelectorAll('.star');

   
    estrellasConjunto.forEach((estrella) => {
      estrella.classList.remove('activa');
    });

  
    for (let i = 1; i <= valor; i++) {
      const estrellaActual = estrella.parentNode.querySelector(`.star[data-value="${i}"]`);
        estrellaActual.classList.add('activa');
    }
  });
});