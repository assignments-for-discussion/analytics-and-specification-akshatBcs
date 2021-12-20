
function average(numbers) {
  let clean = [];
  for(let i=0; i<numbers.length;i++){
	if(Number.isInteger(numbers)){
    clean += numbers; 
    }
}

  
  return clean.reduce((p, c)=> p + c, 0) / clean.length;
}

module.exports = {average};
