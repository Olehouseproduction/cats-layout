const nameCats = [
  "Кот с усами",
  "Кошка с колпаком",
  "Кот с тыквой",
  "Кошка-балерина",
];

for (let i = 0; i < nameCats.length; i++) {
  const dataNameCats = document.createTextNode(nameCats[i]);
  const textCats = document.getElementById(`name-cat-${i + 1}`);
  textCats.appendChild(dataNameCats);
}
