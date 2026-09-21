const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function generateCode(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error('Input must be a non-negative integer');
  }

  if (number === 0) {
    return '0';
  }

  let result = '';

  while (number > 0) {
    const remainder = number % 62;
    result += ALPHABET[remainder];
    number = Math.floor(number / 62);
  }

  return result.split('').reverse().join('');
}

module.exports = generateCode;