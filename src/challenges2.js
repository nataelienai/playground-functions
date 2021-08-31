// Desafio 10
function techList(techs, name) {
  let objectList = [];
  for (let tech of techs.sort()) {
    objectList.push({
      tech,
      name,
    });
  }
  if (objectList.length === 0) {
    return 'Vazio!';
  }
  return objectList;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
