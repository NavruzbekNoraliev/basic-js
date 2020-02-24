module.exports = function countCats(matrix) {
  if (Array.isArray(matrix)) return [].concat.apply([], matrix).filter(a=>a=='^^').length; 
  else return false;
};
