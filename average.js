
function average(numbers) {
  let noNan = numbers ? numbers :0;
  return noNan.reduce((p, c)=> p + c, 0) / noNan.length;
}

module.exports = {average};
