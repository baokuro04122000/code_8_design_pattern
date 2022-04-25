//create subsystem
class AccountService
{
    GetAccout(email:string):void
    {
        console.log("Getting the account of " + email);
    }
}

class EmailService
{
    SendMail(mailTo:string):void
    {
        console.log("Sending an email to " + mailTo);
    }
}

class PaymentService
{
    PaymentByPaypal():void
    {
        console.log("Payment by Paypal");
    }
    PaymentByCreditCard():void
    {
        console.log("Payment by Credit Card");
    }
    PaymentByEBankingAccount():void
    {
        console.log("Payment by E-banking account");
    }
    PaymentByCash():void
    {
        console.log("Payment by cash");
    }
}

class ShippingService
{
    FreeShipping():void
    {
        console.log("Free Shipping");
    }

    StandardShipping():void
    {
        console.log("Standard Shipping");
    }

    ExpressShipping():void
    {
        console.log("Express Shipping");
    }
}

class SmsService
{
    sendSMS(mobilePhone:string):void
    {
        console.log("Sending an message to " + mobilePhone);
    }
}

// create facade
class ShopFacade
    {
        private static _instance:ShopFacade;

        private accountService: AccountService;
        private paymentService: PaymentService;
        private shippingService: ShippingService;
        private emailService: EmailService;
        private smsService: SmsService;

        constructor(){
            this.accountService = new AccountService();
            this.paymentService = new PaymentService();
            this.shippingService = new ShippingService();
            this.emailService = new EmailService();
            this.smsService = new SmsService();
        }

        public static getInstance():ShopFacade
        {
            if (this._instance == null)
                this._instance = new ShopFacade();
            return this._instance;
        }

        public buyProductByCashWithFreeShipping(email:string):void
        {
            this.accountService.GetAccout(email);
            this.paymentService.PaymentByCash();
            this.shippingService.FreeShipping();
            this.emailService.SendMail(email);
            console.log("Done\n");
        }

        public buyProductByPaypalWithStandardShipping(email:string, mobilePhone:string)
        {
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