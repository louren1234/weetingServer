const express = require('express');
const app = require('../app');
const router = express.Router();
const userController = require('../controllers/userController');
const jwt = require('../middleware/jwt');
const upload = require('../middleware/multer');
// const uploadImg = upload('../images');
console.log("router");
router.post('/check/email',userController.getEmail);
router.post('/auth/email', userController.authEmail);
router.post('/join', userController.joinUser);
router.post('/login', userController.userLogin);
router.get('/', userController.main);
router.get('/mypage', jwt.checkToken,userController.getUser);
router.post('/mypage/img', jwt.checkToken, upload.single('image') ,userController.editImg)
// router.get('/', function(req, res, next) {
//   res.send("users");
// });
module.exports = router;
