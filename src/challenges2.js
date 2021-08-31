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
function hasRepetitiveNumber(counter) {
  for (let count of counter) {
    if (count >= 3) {
      return true;
    }
  }
  return false;
}

function isValid(number) {
  let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let num of number) {
    if (num < 0 || num > 9) {
      return false;
    }
    counter[num] += 1;
  }
  if (hasRepetitiveNumber(counter)) {
    return false;
  }
  return true;
}

function generatePhoneNumber(n) {
  if (n.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let valid = isValid(n);
  if (!valid) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
}

// Desafio 12
function lineCheck(line1, line2, line3) {
  return line1 < line2 + line3 && line1 > Math.abs(line2 - line3);
}

function triangleCheck(lineA, lineB, lineC) {
  return lineCheck(lineA, lineB, lineC)
  && lineCheck(lineB, lineA, lineC)
  && lineCheck(lineC, lineA, lineB);
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
