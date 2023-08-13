const EmailNotification ={}
const SMSNotification ={}
const PushNotification ={}

const Notification =()=>{
    const sendEmail =()=>console.log("sending email notification");
    const sendSMS =()=>console.log("sending sms notification");
    const sendPush =()=>console.log("sending push notification");
    return (
        <div>
            <h1>notification component</h1>
            <button onClick={sendEmail}>sendEmail</button>
            <button onClick={sendSMS}>sendSMS</button>
            <button onClick={sendPush}>sendPush</button>
        </div>
    )
}
export default Notification
/**
 * Consider a component called “Notification” that has methods for sending emails, SMS, and push notifications.
 *  However, not all implementations of this component need to send all three types of notifications
 */