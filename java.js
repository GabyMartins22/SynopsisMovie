//Animação de rolagem da tela 
const myObserver = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show')
        }
    })
})

const imagens = document.querySelectorAll('.hidden')

imagens.forEach((element) => myObserver.observe(element))

//perguntar se deseja mesmo sair 
    type = "text/javascript" >
      window.addEventListener('beforeunload', function (event) {
        event.preventDefault();
        resp = prompt("Tem certeza de que deseja sair?");
        if (resp === "Sim") {
          window.close();
        } else if (resp === "Não") {
          alert("OK");
        }
      });

//Mudar tema do site (claro / escuro)
const chk = document.getElementById('chk')
chk.addEventListener('change', ()=>{
  document.body.classList.toggle('dark')
})
