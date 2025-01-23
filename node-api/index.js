import express from 'express'
import fs from 'fs'
import cors from 'cors'

const app = express()

//Habilitar cors peticiones
app.use(cors())

const readData = () => {
    try {
        const data = fs.readFileSync("./db.json")
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
}
readData()


app.get('/users', (req, res) => {
    const data = readData()
    res.json(data.users)

})

app.listen(3000, () => {
    console.log("server 3000 activo");

})