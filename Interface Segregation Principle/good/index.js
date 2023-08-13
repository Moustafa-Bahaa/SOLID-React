/**
 * Interface Segregation Principle (ISP)
 *  The Interface Segregation Principle means that a component should only have the methods and properties that it needs
 * and should not be forced to implement unnecessary ones
 * In ReactJS, this means designing components so that they only implement the features they require.
 *  This helps keep the code efficient and reduces the risk of errors.
 */

//Define a component that only needs to send email and implements EmailNotification interface 
const EmailSender =()=>{

    const sendEmail =()=>console.log("sending email notification");

    return (
        <div>
            <h1>Email Sender Component</h1>
            <button onClick={sendEmail}>sendEmail</button>
        </div>
    )
}

//Define a component that only needs to send SMS and implements SMSNotification interface 

const SMSSender =()=>{

    const sendSMS =()=>console.log("sending sms notification");

    return (
        <div>
            <h1>Email Sender Component</h1>
            <button onClick={sendSMS}>sendSMS</button>
        </div>
    )
}

//Define a component that only needs to send push notification  and implements PushNotification interface 

const PushSender =()=>{

    const sendPush =()=>console.log("sending push notification");

    return (
        <div>
            <h1>Email Sender Component</h1>
            <button onClick={sendPush}>sendPush</button>
        </div>
    )
}