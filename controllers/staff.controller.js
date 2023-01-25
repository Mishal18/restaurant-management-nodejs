
exports.getStaffPage = (req,res) => {
    res.send("Staff Page")
}

exports.getStaffLoginPage = (req,res) => {
    res.render('staff/login')
}