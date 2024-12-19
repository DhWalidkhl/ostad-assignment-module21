import nodemailer from 'nodemailer';

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

    let  transport= nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{user:"chorompagla@gmail.com",pass:"bsodvosaegezletj"},
        tls:{rejectUnauthorized:false}
    })


    let mailOption={
        from:'Walid Shop',
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }

    return await transport.sendMail(mailOption)
}
export default EmailSend;