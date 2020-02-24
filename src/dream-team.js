module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) return members.filter(item =>  typeof item === 'string')
                                           .map(name => name.trim().slice(0,1).toUpperCase())
                                           .sort((a,b) =>  a.localeCompare(b))
                                           .toString().replace(/,/g, "");
  else return  false
};