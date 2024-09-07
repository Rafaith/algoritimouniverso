function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
   
    let campoPesquisa = document.getElementById ("campo-pesquisa").value
    console.log(campoPesquisa);

    if (!campoPesquisa) {
        section.innerHTML = "<span style='color: white;'>Digite algo para pesquisar</span>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

       if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados +=` 
            <div class="item-resultado">
                  <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                  </h2>
                  <p class="descricao-meta">${dado.descricao}
                  </p>
                  <a
                    href=${dado.link} target="_blank"
                    >Mais informações</a
                  >
                </div>`
                ;
        }
       
    }

    if (!resultados) {
      resultados = "<span style='color: white;'>Nada foi encontrado</span>"
    }
    
    section.innerHTML = resultados
}

// console.log(dados);

