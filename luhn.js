function luhn(account) {
  var copy = account.toString().slice(0).split('').map((element) => (parseInt(element)))
  for (var i = copy.length - 2; i > 0; i = i - 2) {
    copy[i] = copy[i] * 2
    if (copy[i] >= 10) {
      copy[i] = addDigits(copy[i])
    }
  }
  return sum(copy) % 10 === 0
}

// function addDigits(value) {
//   var string = value.toString()
//   var sum = 0;
//   [...string].forEach(element => sum += parseInt(element))

//   return sum
// }
const addDigits = value => [...value.toString()].reduce((sum, e) => sum += parseInt(e), 0)

function sum(arr) {
  return arr.reduce((sum, e) => sum + e, 0);
}

console.log(luhn(79927398713))