function listStore(value) {
  list.push(value)
}

function giveList() {
  return mySort(list)
}

function mySort() {
  var myList = list.slice(0)
  myList.sort((a, b) => (a - b))
  console.log(list)
  return myList
}

exports.listStore = listStore
exports.giveList = giveList

var list = []