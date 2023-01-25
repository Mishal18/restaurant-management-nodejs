
exports.getUserPage = (req,res) => {
    res.send("User Page")
}

exports.getUserLoginPage =  (req,res) => {
    res.render('user/login')
}
exports.getUserSignupPage =  (req,res) => {
    res.render('user/signup')
}
exports.getUserMenuPage = (req,res) => {
    res.render('user/menu')
}