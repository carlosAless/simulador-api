const path = require('path')

 const homeController = {
    getPage(req, res){
        res.sendFile(path.join(__dirname,'..', 'view', 'home', 'home.html'));
    }
}

module.exports = homeController