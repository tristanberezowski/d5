var listStore = require('./listStore')
giveList = listStore.giveList
listStore = listStore.listStore
log = console.log

for (var i = 0; i < 5; i++) {
  listStore(Math.ceil(Math.random() * 50))
}

log(giveList())