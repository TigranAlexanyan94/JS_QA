const base64 = {
    email: 'tigran.alexanyan.im@gmail.com', 
    password: 'jhjhj'
}

const email = Buffer.from(base64.email, 'utf-8' ).toString('base64');
const password = Buffer.from(base64.password,'utf-8').toString('base64');

const emailStr = email.toString('base64');
const passwordStr = password.toString('base64');
const emailPassword ={email: emailStr, password: passwordStr}


module.exports = emailPassword