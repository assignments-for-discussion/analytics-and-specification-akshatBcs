
function average(numbers) {
  return numbers.reduce((p || 0, c || 0)=> p + c, 0) / numbers.length;
}

module.exports = {average};
