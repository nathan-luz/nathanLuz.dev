function somar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('A função aceita apenas números como parâmetros');
  }
  return a + b;
}
exports.somar = somar;