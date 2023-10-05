import express from "express"
import bodyParser from "body-parser"
import ejs from "ejs"



const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  const today = new Date("June 25, 2023 11:13:00");
  let day = today.getDay();


  let Type = "dia de semana"
  let adv = "trabalhar"

  if (day === 0 || day === 6) {
    Type = "final de semana"
    adv = "folgar"
  }

  res.render("index.ejs", {
    dayType: Type,
    advice: adv,
  });
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});