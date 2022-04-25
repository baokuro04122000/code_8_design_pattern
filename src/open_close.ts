function compare(n1:any , n2:any):number{
      if (n1 > n2) {
        return 1;
    }

    if (n1 < n2) {
        return -1;
    }

    return 0;
}
function Sort(arrayA:Array<Number>):Array<Number>{
  return arrayA.sort(compare);
}
var numericArray: number[] = [2, 3, 4, 1, 5, 8, 11];
console.log(Sort(numericArray));
