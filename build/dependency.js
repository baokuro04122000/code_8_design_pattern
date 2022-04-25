"use strict";
// class Database{
//   constructor(){}
//   Save(orderId:number):void{
//     console.log(orderId)
//   }
// }
// class Logger{
//   constructor(){}
//   LogInfo(message:string):void{
//     console.log(message)
//   };
// }
// class EmailSender{
//   constructor(){}
//   SendEmail(userId:number):void{
//     console.log(userId)
//   }
// }
// // Cart is high level module
// class Cart
// {
//     public Checkout(orderId:number, userId: number):void
//     {
//         // Database, Logger, EmailSender is lower level module
//         const db:Database = new Database();
//         db.Save(orderId);
//         const log:Logger = new Logger();
//         log.LogInfo("Order has been checkout");
//         const es:EmailSender = new EmailSender();
//         es.SendEmail(userId);
//     }
// }
