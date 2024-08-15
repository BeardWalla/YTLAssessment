import express from "express";
import http from "http";
import bodyParser from "body-parser";

import { controller } from "./app/controllers/Transaction.js";
import { connectDB } from "./app/services/DBService.js";

const router = express.Router();

    const os = await import('os');
    console.log('i am running server side. ' + os.hostname);
    await connectDB();



router.get("/", ((request, response) => {
    response.status(200).send({
        message: "Hello world"
    })
}));


router.get("/transactions", controller.getAllTransactions);

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.set('port', 8088);
var server = http.createServer(app);
server.listen(8088);
