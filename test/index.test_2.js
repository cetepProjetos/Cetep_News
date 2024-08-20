
  function somar(a, b, operador){
  switch (operador) {
    case '+':
      return a + b
      break;

      case '-':
      return a - b
      break;

      case '*':
      return a * b
      break;

      case '/':
      return a / b
      break;
  
    default:
      break;
  }

};

test('quero a soma de 1 e 1', function (){
  expect(somar(1, 1, '+')).toBe(2);
});

test('quero a subtração de 1 e 1', function (){
  expect(somar(1, 1, '-')).toBe(0);
});

test('quero a multiplicação de 1 e 1', function (){
  expect(somar(1, 1, '*')).toBe(1);
});

test('quero a divisão de 1 e 1', function (){
  expect(somar(1, 1, '/')).toBe(1);
});

  

