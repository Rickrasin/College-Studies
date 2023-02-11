function Add() {
  const number = document.getElementById("valor");
  const list = document.getElementById("valores");

  if (number.value.length >= 1) {
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(number.value));

    list.appendChild(newItem);
  }
}

function Ordenar() {
  const list = document.getElementById("valores").children;
  const select = document.getElementById("select");
  const vetor = [];

  for (let i = 0; i < list.length; i++) {
    vetor.push(eval(list[i].innerHTML));
  }

  console.log(select.selectedIndex);

  if (select.selectedIndex == 0) {
    bubble_sort(vetor);
    console.log(vetor);
  }

  if (select.selectedIndex == 1) {
    selection_sort(vetor);
  }
  if (select.selectedIndex == 2) {
    quick_sort(vetor, 0, vetor.length - 1);
  }

  console.log(vetor);
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = vetor[i];
  }
}

function Misturar() {
  const list = document.getElementById("valores").children;
  const vetor = [];

  for (let i = 0; i < list.length; i++) {
    vetor.push(eval(list[i].innerHTML));
  }

  shuffle(vetor, 0.5);


  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = vetor[i];
}
}

swap = (vetor, pos1, pos2) => {
  var temp = vetor[pos1];
  vetor[pos1] = vetor[pos2];
  vetor[pos2] = temp;

  return vetor;
};

shuffle = (vetor, changes) => {
    vetor.sort(() => Math.random() - changes);
};

//Funções Sort

bubble_sort = (vetor) => {
  let flag = false;
  for (var i = 0; i <= vetor.length - 1; i++) {
    flag = false;
    for (var j = 0; j < vetor.length - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        var temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
        flag = true;
      }
    }

    if (!flag) {
      console.log(vetor);
      return;
    }
  }
};

selection_sort = (vetor) => {
  let menor;

  for (let i = 0; i < vetor.length - 1; i++) {
    menor = i;
    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[menor]) {
        menor = j;
      }
    }
    if (i != menor) {
      [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]];
    }
  }

  return vetor;
};

quick_sort = (vetor, initial, final) => {
  var index;
  var pivot = vetor[Math.floor((right + left) / 2)];
  if (vetor.length > 1) {
    index = partic(vetor, initial, final, pivot);
    if (initial < index - 1) {
      quick_sort(vetor, initial, index - 1);
    }
    if (index < final) {
      quick_sort(vetor, index, final);
    }
  }
  return vetor;
};

partic = (vetor, initial, final, pivot) => {
  (i = initial), (j = final);
  while (i <= j) {
    while (vetor[i] < pivot) {
      i++;
    }
    while (vetor[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(vetor, i, j);
      i++;
      j--;
    }
  }
  return i;
};
