// old interface
class OldCalculator {
  constructor() {  }  
  operations(term1:number, term2:number, operation:string):number {
    switch (operation) {
      case 'add':
        return term1 + term2;
      case 'sub':
        return term1 - term2;
      default:
        return NaN;
    }
  };

}
// new interface
class NewCalculator {
  constructor() {  }

  add(term1:number, term2:number):number{
    return term1 + term2;
  }
  
  sub(term1:number, term2:number):number{
    return term1 - term2;
  }
}
// Adapter Class
class CalcAdapter {
  public newCalc:NewCalculator;
  constructor() {
    this.newCalc = new NewCalculator();
  }
  operations(term1:number, term2:number, operation:string):number {
    switch (operation) {
      case 'add':
        // using the new implementation under the hood
        return this.newCalc.add(term1, term2);
      case 'sub':
        return this.newCalc.sub(term1, term2);
      default:
        return NaN;
    }
  };
}
 
// usage
const oldCalc:OldCalculator = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'add')); // 15
 
const newCalc:NewCalculator = new NewCalculator();
console.log(newCalc.add(10, 5)); // 15
 
const adaptedCalc:CalcAdapter = new CalcAdapter();
console.log(adaptedCalc.operations(10, 5, 'add')); // 15; 