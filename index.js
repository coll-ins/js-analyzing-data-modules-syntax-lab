function combineUsers(...args) {
  const combineObject = { users: []}

  for(const array of args) {
    combineObject.users = [...combineObject.users, ...array]
  }
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};