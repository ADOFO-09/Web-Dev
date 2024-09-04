import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandname = "";

app.use(bodyParser.urlencoded({ extended: true}));

//Custom Middleware
// function bandNameGenerator(req, res, next){
//   console.log(req.body);
//   bandname = req.body['street'] + req.body['pet'];
//   next();
// }

// app.use(bandNameGenerator);

app.get('/', (req, res) => {
   res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res) => {
  bandname = req.body['street'] + req.body['pet'];
   res.send(`<h1>Your band name is: </h1><p><h2>${bandname}</h2></p>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
