const express = require('express')
// const res = require('express/lib/response')

const app = express()

app.use(express.static('static'))
// app.use(express.static('files'))

app.get('/', (req, res) => {
    res.send('<h1>Hello whats good in your hood?</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Hello this is my About page!</h1>')
})

app.get('/gallery', (req, res) => {
    res.send(`<h1>Hello this is my Gallery page!</h1>
    <div>
    <img src="/img/hqdefault.jpg"></img>
    </div>`)
})

app.listen(3000, () =>{
    console.log('Server is running on http://www.localhost.3000/ to stop server press control+c')
})