interface IDatabase{
  Save(orderId:number):void;
}
interface ILogger{
  LogInfo(message:string):void;
}
interface IEmailSender{
  SendEmail(userId:number):void;
}

class Database implements IDatabase{
  constructor(){}
  Save(orderId:number):void{
    console.log(orderId)
  }
}
class Logger implements ILogger{
  constructor(){}
  LogInfo(message:string):void{
    console.log(message)
  };
}
class EmailSender implements IEmailSender{
  constructor(){}
  SendEmail(userId:number):void{
    console.log(userId)
  }
}

// Cart is high level module
class Cart
{
    private database:IDatabase;
    private logger:ILogger;
    private emailSender:IEmailSender;
    constructor(database:IDatabase, logger:ILogger, emailSender:IEmailSender){
      this.database = database;
      this.logger = logger;
      this.emailSender = emailSender;
    }
    public Checkout(orderId:number, userId: number):void
    {
        // Database, Logger, EmailSender is lower level module
        
        this.database.Save(orderId);

        this.logger.LogInfo("Order has been checkout");
 
        this.emailSender.SendEmail(userId);
    }
}
const cart:Cart = new Cart(new Database(), new Logger(), new EmailSender());
cart.Checkout(2,2);
