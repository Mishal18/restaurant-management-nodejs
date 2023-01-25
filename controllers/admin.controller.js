
exports.getAdminPage = (req,res) => {
    res.send("Admin Page")
}

exports.getAdminLoginPage = (req,res) => {
    res.render('admin/login')
}