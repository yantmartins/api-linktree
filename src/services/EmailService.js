const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_SENHA,
    },
});

function enviarTokenRecuperarSenha(email, token) {
    transporter.sendMail({
    from: '"API LINK T42" <yaanmaartins@gmail.com>', // sender address
    to: "yantmartins@live.com", // list of receivers
    subject: "Recuperação de Senha", // Subject line
    text: "Recuperar sua senha", // plain text body
    html: `
    <div>
    <a href="http://localhost:3000/recuperar-senha?token=${token}">Clique aqui para recuperar sua senha</a>
</div>`, // html body
      }).then(re => console.log(re))    
}

module.exports = {
    enviarTokenRecuperarSenha
}