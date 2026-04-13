function combineUsers(...args) {
  const combineObject = { users: []}

  for(const array of args) {
    combineObject.users = [...combineObject.users, ...array]
  }
  combineObject.merge_date = new Date().toLocaleDateString('en-US')

  return combineObject
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};