const category = require('../models/Category')
const items = require('../models/Item')


exports.getUserPage = (req,res) => {
    res.send("User Page")
}

exports.getUserLoginPage =  (req,res) => {
    res.render('user/login')
}
exports.getUserSignupPage =  (req,res) => {
    res.render('user/signup')
}
exports.getUserMenuPage = async (req,res) => {
    const myCategory = await category.find({}).lean()
    res.render('user/menu', { myCategory })
}

exports.getUserMenuItemPage = async (req,res) => {
    const myItems = await items.find({}).lean()
    res.render('user/menu-items', { myItems })
}