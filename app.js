const express = require("express")
var hbs = require("express-handlebars")
const app = express()
const port = process.env.PORT || 3000
const { moviedata } = require("./data")

console.log(moviedata)
app.use(express.static("public"))
app.set("view engine", "hbs")
app.engine(
  "hbs",
  hbs({
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: "index",
    extname: "hbs",
  })
)

app.get("/", (req, res) => {
  res.render("movies", { moviedata })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
