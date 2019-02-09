function maxProfit(prices) {
  console.log(prices)
  var max = maxIndex
  var diff = [0,0] //0 is value, 1 is index
  var copy = prices.slice(0)
  for (var i = 0, i < copy.length; i++) {
    copy[i].origin = i
  }
  //Each element of copy has it's original index stored for access later
  while (prices.length > 2 && max > 1) {
    copy
    max = clean(prices, max)
    max--
  }
  return prices[1] - prices[0]
}

function rem(arr, index) { //removes the index from array
  arr.splice(index, 1)
}

function clean(copy, arr, maxIndex, diff) { //takes out useless indexes from array
  var temp;
  for (var i = 0; i < arr.length - 1; i++) {
    if (maxIndex <= minIndex(copy)) { //if illegal, useless to us, so remove it
      rem(copy, minIndex(copy))
      console.log('From Copy', 'copy:', copy)
    } 
    else if (arr[maxIndex] - copy[minIndex(copy)] < diff[0] && diff[1] < copy[minIndex(copy)].origin) {
    //else legal, so if the diff is less than our max diff AND it is to the right of that best diff, it can be taken out from both
      rem(arr, copy[minIndex(copy)].origin])
      rem(copy, minIndex(copy))
      console.log('From Both', 'copy:', copy)
    }
    //else it is legal and either the diff is greater or it is to the left of that best diff or both
    else if (arr[maxIndex] - copy[minIndex(copy)] > diff[0] && diff[1] > copy[minIndex(copy)].origin){ 
      //else if diff is greater and it's to the left of the best diff, the other one is useless
      rem(arr, diff[1])
      console.log('From Just Array', 'copy:', copy)
      diff[1] = copy[minIndex(copy)].origin
      diff[0] = copy[minIndex(copy)]
    }
    else if (arr[maxIndex] - copy[minIndex(copy)] > diff)
    {

    }

}
return maxIndex
}

function maxIndex(arr) {
  var max = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return max;
}

function minIndex(arr) {
  var min = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
      min = i;
    }
  }
  return min;
}

//console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]))

var stock = [45, 24, 35, 31, 40, 38, 11]
maxProfit(stock)