
function average(numbers) {
  return numbers.reduce((p, c)=> p || 0 + c || 0, 0) / numbers.length;
}

module.exports = {average};
