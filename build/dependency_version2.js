"use strict";
class Database {
    constructor() { }
    Save(orderId) {
        console.log(orderId);
    }
}
class Logger {
    constructor() { }
    LogInfo(message) {
        console.log(message);
    }
    ;
}
class EmailSender {
    constructor() { }
    SendEmail(userId) {
        console.log(userId);
    }
}
// Cart is high level module
class Cart {
    constructor(database, logger, emailSender) {
        this.database = database;
        this.logger = logger;
        this.emailSender = emailSender;
    }
    Checkout(orderId, userId) {
        // Database, Logger, EmailSender is lower level module
        this.database.Save(orderId);
        this.logger.LogInfo("Order has been checkout");
        this.emailSender.SendEmail(userId);
    }
}
const cart = new Cart(new Database(), new Logger(), new EmailSender());
cart.Checkout(2, 2);
