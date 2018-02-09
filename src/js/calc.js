const sum = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;
const div = (n1, n2) => n2 === 0 ? '0 não pode ser dividido ou divisor' : n1 / n2;

export { sum, sub, mult, div }
