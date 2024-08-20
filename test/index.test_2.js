function somar(a, b){
  return a + b

};

test('quero a soma de 1 e 1', function (){
  expect(somar(1, 1)).toBe(2);

});
