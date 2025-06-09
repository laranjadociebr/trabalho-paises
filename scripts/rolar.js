const rolarparabaixo = document.querySelector('#rolarparabaixo')

rolarparabaixo.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})