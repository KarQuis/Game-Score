const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

const userRoutes = require("./routes/User.js");

app.set("view engine", "handlebars");   //Integrar handlebars
app.engine("handlebars", exphbs.engine({
    defaultLayout: "main",
    layoutsDir: `${__dirname}/views/mainLayout`
}));

app.use(express.static(__dirname + "/public")); //Establecer carpeta publica

app.get("/", (req, res) => {
    res.send("Ruta principal funcionando");
})

app.use("/user", userRoutes);   //agregar ruta importada en la app

app.listen(3000, ()=> console.log("Server ON - Port 3000"));

