function listStore(value) {
  list.push(value)
}

function giveList() {
  return sortedList
}

exports.listStore = listStore
exports.giveList = giveList

var list = [6, 3, 4, 6, 7]
var sortedList = list.sort((a, b) => (a - b))
console.log(sortedList)