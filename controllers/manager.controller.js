const Category = require('../models/Category')
exports.getManagerPage = (req,res) => {
    res.send("Kitchen Manager Page")
}

exports.getManagerLoginPage = (req,res) => {
    res.render('manager/login')
}
exports.getManagerMenuPage = (req,res) => {
    res.render('manager/menu')
}
exports.getManagerAddCategoryPage = (req,res) => {
    res.render('manager/add-category')
}
exports.postManagerAddCategoryPage =  (req,res) => {
    const myCategory =  new Category({
        name : req.body.categoryname,
        description : req.body.categorydescription
    })
    myCategory.save().then(() => {
        console.log("Category Added!!")
    }).catch((err) => {
        console.log(err)
    })
    res.redirect('/manager/menu')
}