import express from "express";
const router = express.Router();
import message from "../lang/messages.js";
import AuthController from "../app/controllers/AuthContrroller.js";


/**-------- Auth Routes --------**/
router.get("/login", AuthController.userLogin);
/**-------- Auth Routes --------**/



router.get('*', function(req, res){
    res.json({
        "status":404,
        "data":message("404")
    });
});

export default router;