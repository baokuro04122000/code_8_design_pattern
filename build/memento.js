"use strict";
class State {
    constructor(str) {
        this.str = str;
    }
    get Str() {
        return this.str;
    }
    set Str(str) {
        this.str = str;
    }
}
class Originator {
    constructor(state) {
        this.state = state;
    }
    get State() {
        return this.state;
    }
    set State(state) {
        console.log("State :: ", state);
        this.state = state;
    }
    createMemento() {
        console.log("creates a memento with a given state!");
        return new Memento(this.state);
    }
    setMemento(memento) {
        console.log("sets the state back");
        this.State = memento.State;
    }
}
class Memento {
    constructor(state) {
        this.state = state;
    }
    get State() {
        console.log("get memento's state");
        return this.state;
    }
}
class CareTaker {
    constructor() {
        this.memento = [];
    }
    get Memento() {
        return this.memento[this.memento.length - 1];
    }
    set Memento(memento) {
        this.memento.push(memento);
    }
    get AllMemento() {
        return this.memento;
    }
}
function show() {
    var state = new State("... State 1 "), originator = new Originator(state), careTaker = new CareTaker();
    careTaker.Memento = originator.createMemento();
    originator.setMemento(careTaker.Memento);
    originator.State = new State("... state 2");
    careTaker.Memento = originator.createMemento();
    originator.setMemento(careTaker.Memento);
    originator.State = new State("... state 3");
    console.log(careTaker.AllMemento);
}
show();
