const obj = [
  {
    titulo: "Arroz de Couve-Flor",
    imgsrc: "/img/rice.jpg",
    preparo: "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
    ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"],
  },
  {
    titulo: "Bolo de Café",
    imgsrc: "/img/cake.jpeg",
    preparo: "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
    ingredientes: [
      "Farinha de Trigo",
      "Açúcar",
      "Café Torrado",
      "Chocolate em Pó",
      "Ovos",
    ],
  },
  {
    titulo: "Bolo de Café",
    imgsrc: "/img/muango.jpg",
    preparo: "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado",
    ingredientes: [
      "Farinha de Trigo",
      "Açúcar",
      "Café Torrado",
      "Chocolate em Pó",
      "Ovos",
    ],
  }
];

function PreencheCatalogo() {
  const render = document.getElementById("pnlCatalogo");

  let inicial = "";
  obj.map((item) => {
    console.log(item);
    render.innerHTML += GetCard(item);
  });
}

function GetListaIngredientes(receita) {
  let inicial = "";

  let resul = receita.ingredientes.reduce(
    (acumulado, atual) => (acumulado += `<li>${atual}</li>`),
    inicial
  );

  return `<ul> ${resul} </ul>`;
}

function GetCard(receita) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("style", "width: 250px;");

  return `<div class="card" style="width: 250px">
            <img class="card-img-top" style="width: 100%; height: 160px"  src="${receita.imgsrc}"></img>
            <div class="card-body">
                <div class="card-title">${receita.titulo}</div>
                <div class="card-text">${GetListaIngredientes(receita)}</div>
                <hr>
                <div class="card-text">${receita.preparo}</div>
            </div> 
        </div>`;
}
