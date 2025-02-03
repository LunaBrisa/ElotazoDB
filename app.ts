require('dotenv').config();
import express from "express";
import Router from "./src/routes/index";
import bodyParser from "body-parser";
import path from "path";

const app=express();
const PORT=process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views")); // Asegúrate de que la carpeta "views" está en "src"

app.use(express.static(path.join(__dirname, "public"))); 

app.use(bodyParser.json())
app.use(express.json());
app.use("/", Router);

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
console.log('Press Ctrl+C to quit');
})


