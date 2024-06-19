import path from "path";
import message from "../../lang/messages.js";
import db from '../models/index.js';
const {User} = db;
export default class AuthController {
    static async userLogin(Request, Response){
        await User.create({firstName:"shesh"});
        Response.json({
            "status":200,
            "data":message("PasswordReset", {name:"shesh", age:26})
        })
    }
}

