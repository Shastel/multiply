module.exports = function multiply(first = Number(first), second = Number(second)) {
  return (BigInt(first) * BigInt(second)).toString();
  
}
