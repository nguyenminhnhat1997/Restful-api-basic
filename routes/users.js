var express = require('express');
var router = express.Router();
var User = require('../models/db-user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res)=>{
	var user = {
		  name : "Nhat",
          email : "email@gmail.com",
          password : "Nhat123"
	}
	User.create(user,(err, user)=>{
		 if (err) return res.status(500).send("Lỗi ");
		 res.status(200).send(user);
	})
})

router.get('/:id', function (req, res) {

    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("Lỗi");
        if (!user) return res.status(404).send("Không tìm thấy user.");
        res.status(200).send(user);
    });

});

router.delete('/:id', function (req, res) {

    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("Lỗi.");
        res.status(200).send("User "+ user.name +" đã được xóa.");
    });

});
router.put('/:id', function (req, res) {
    
    User.findByIdAndUpdate(req.params.id, {$set:{name:"Bon"}}, {new: true},  (err, user) =>{
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });

});
module.exports = router;
