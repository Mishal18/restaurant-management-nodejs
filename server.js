const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
const { engine } = require('express-handlebars')
const userRouter = require('./routes/user.route')
const staffRouter = require('./routes/staff.route')
const managerRouter = require('./routes/manager.route')
const cashierRouter = require('./routes/cashier.route')
const adminRouter = require('./routes/admin.route')
const app = express()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("Connected to the MongoDB")
}).catch((err) => {
    console.log(err)
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.engine('hbs', engine({
    extname:'hbs',
    partialsDir : path.join(__dirname,'views','partials') 
}))
app.set('view engine', 'hbs')
app.set('views', './views');

app.use(express.static('public'))

app.use('/user', userRouter)
app.use('/staff', staffRouter)
app.use('/manager', managerRouter)
app.use('/cashier', cashierRouter)
app.use('/admin', adminRouter)

app.get('/', (req,res) => {
    res.render('home') 
})

const port = 3000
app.listen( port , () => console.log(`server running on port ${port}`));