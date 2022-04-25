"use strict";
var CommandPattern;
(function (CommandPattern) {
    class Command {
        execute() {
            throw new Error("Abstract method!");
        }
    }
    CommandPattern.Command = Command;
    class ConcreteCommand1 extends Command {
        constructor(receiver) {
            super();
            this.receiver = receiver;
        }
        execute() {
            console.log("`execute` method of ConcreteCommand1 is being called!");
            this.receiver.action();
        }
    }
    CommandPattern.ConcreteCommand1 = ConcreteCommand1;
    class ConcreteCommand2 extends Command {
        constructor(receiver) {
            super();
            this.receiver = receiver;
        }
        execute() {
            console.log("`execute` method of ConcreteCommand2 is being called!");
            this.receiver.action();
        }
    }
    CommandPattern.ConcreteCommand2 = ConcreteCommand2;
    class Invoker {
        constructor() {
            this.commands = [];
        }
        storeAndExecute(cmd) {
            this.commands.push(cmd);
            cmd.execute();
        }
    }
    CommandPattern.Invoker = Invoker;
    class Receiver {
        action() {
            console.log("action is being called!");
        }
    }
    CommandPattern.Receiver = Receiver;
})(CommandPattern || (CommandPattern = {}));
(function main() {
    var receiver = new CommandPattern.Receiver(), command1 = new CommandPattern.ConcreteCommand1(receiver), command2 = new CommandPattern.ConcreteCommand2(receiver), invoker = new CommandPattern.Invoker();
    invoker.storeAndExecute(command1);
    invoker.storeAndExecute(command2);
}());
