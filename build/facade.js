"use strict";
//create subsystem
class AccountService {
    GetAccout(email) {
        console.log("Getting the account of " + email);
    }
}
class EmailService {
    SendMail(mailTo) {
        console.log("Sending an email to " + mailTo);
    }
}
class PaymentService {
    PaymentByPaypal() {
        console.log("Payment by Paypal");
    }
    PaymentByCreditCard() {
        console.log("Payment by Credit Card");
    }
    PaymentByEBankingAccount() {
        console.log("Payment by E-banking account");
    }
    PaymentByCash() {
        console.log("Payment by cash");
    }
}
class ShippingService {
    FreeShipping() {
        console.log("Free Shipping");
    }
    StandardShipping() {
        console.log("Standard Shipping");
    }
    ExpressShipping() {
        console.log("Express Shipping");
    }
}
class SmsService {
    sendSMS(mobilePhone) {
        console.log("Sending an message to " + mobilePhone);
    }
}
// create facade
class ShopFacade {
    constructor() {
        this.accountService = new AccountService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
        this.emailService = new EmailService();
        this.smsService = new SmsService();
    }
    static getInstance() {
        if (this._instance == null)
            this._instance = new ShopFacade();
        return this._instance;
    }
    buyProductByCashWithFreeShipping(email) {
        this.accountService.GetAccout(email);
        this.paymentService.PaymentByCash();
        this.shippingService.FreeShipping();
        this.emailService.SendMail(email);
        console.log("Done\n");
    }
    buyProductByPaypalWithStandardShipping(email, mobilePhone) {
        this.accountService.GetAccout(email);
        this.paymentService.PaymentByPaypal();
        this.shippingService.StandardShipping();
        this.emailService.SendMail(email);
        this.smsService.sendSMS(mobilePhone);
        console.log("Done\n");
    }
}
ShopFacade.getInstance().buyProductByCashWithFreeShipping("19110168@student.hcmute.edu.vn");
ShopFacade.getInstance().buyProductByPaypalWithStandardShipping("19110168@student.hcmute.edu.vn", "0123456789");
