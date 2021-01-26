
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0){
    return [];
  } 
  return matrix.map((value, index) => {
    return index % 2 === 0 ? value : matrix[index].reverse() 
  }).flat();
}
