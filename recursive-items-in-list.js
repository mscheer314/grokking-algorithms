'use strict'

function recursiveCountItemsInList(list) {
  if (list.length === 0) {
    return 0
  }
  return 1 + recursiveCountItemsInList(list.slice(1))
}

console.log(recursiveCountItemsInList(['asdf','asdf','asdf','asdf']))
