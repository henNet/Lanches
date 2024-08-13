var carrinho = 0;

function mostrarCombos() {
  var combosContainer = document.querySelector(".combosContainer");

  combosContainer.innerHTML = "";

  for (i = 0; i < combos.length; i++) {
    var combo = document.createElement("div");
    combo.classList.add("combo");

    combo.innerHTML = `
    <img src="${combos[i].url}"/>
    <p>${combos[i].descricao}</p>
    <h2>R$ <span>${combos[i].preco}</span></h2>
    `;

    var btn = document.createElement("button");
    btn.innerHTML = "Comprar";
    btn.addEventListener("click", somarPrecoCombo);

    combo.appendChild(btn);
    combosContainer.append(combo);
  }
}

function somarPrecoCombo(event) {
  var pai = event.target.parentElement;
  var totalPagar = document.querySelector("#total");

  console.log(pai.children[2].children[0].innerHTML);
  carrinho += Number(pai.children[2].children[0].innerHTML);

  totalPagar.innerHTML = carrinho.toFixed(2);
}

function mostrarPrecoTotal() {
  var totalPagar = document.querySelector("#total");
  alert("Valor final da compra: R$ " + totalPagar.innerHTML);
}

mostrarCombos();
