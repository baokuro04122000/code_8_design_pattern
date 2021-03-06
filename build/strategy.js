"use strict";
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    doSomeBusinessLogic(data) {
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        const result = this.strategy.doAlgorithm(data);
        console.log(result.join(','));
    }
}
class ConcreteStrategyA {
    doAlgorithm(data) {
        return data.sort();
    }
}
class ConcreteStrategyB {
    doAlgorithm(data) {
        return data.reverse();
    }
}
const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic(['a', 'b', 'c', 'd', 'e']);
console.log('');
console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic(['a', 'b', 'c', 'd', 'e']);
