const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'taskmanager.belenzo@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to Task Manager, ${name}. Let us know how you get along with the application.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'taskmanager.belenzo@gmail.com',
        subject: 'We\'re sorry to see you go!',
        text: `Goodbye, ${name}. We hope to see you back on Task Manager soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}