"use strict";

import express from "express";
import "dotenv/config";
import routes from "./routes/web.js";
import morgan from "morgan";
import fs from "fs";
import "./app/services/logger.js";

/**----- setup the server -----**/
const app = express();
app.use(morgan("combined", {
stream: fs.createWriteStream("./storage/logs/node.log", { flags: 'a' })
}));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(routes);
/**----- setup the server -----**/

/**----- start the server -----**/
app.listen(process.env.APP_PORT, console.log(`Server started on url ${process.env.APP_URL}`));
/**----- start the server -----**/
