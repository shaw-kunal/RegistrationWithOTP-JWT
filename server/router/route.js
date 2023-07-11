import express from "express"
const router = express.Router()

//  import all controller
import * as controller from "./../controllers/appControllers.js"


/* POST MEHTOD */
router.route('/register').post(controller.register)
// router.route('/registerMail').post();// send the email
router.route('/authenticate').post((req,res)=> res.end());// authenticate user
router.route('/login').post(controller.login);// login in app


/* GET METHOD */

router.route('/user/:username').get(controller.getUSer) // user with username
router.route('/generateOTP').get(controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP)  //  verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset all  the variables



/* PUT METHOD */
router.route('/updateuser').put(controller.updateuser); // is use to updte the user profile
router.route('/resetPassword').put(controller.resetPassword);  // use the reset password


export default router