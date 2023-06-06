import express from 'express'
const app = express()
import fs from 'fs'

const facts = fs.readFileSync('facts.txt', 'utf-8').split('\n')

app.get('/random-fact', (req, res) => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)]
    res.json({ fact: randomFact })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})