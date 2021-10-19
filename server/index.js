const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '../public/index.html'))});

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/styles.css'));
})

app.get("/app.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/app.js"));
})


app.get('/api/displayAnswer', (req, res) => {
    let sayings = ['nope', 'say hello to my boom-stick', "good. bad. I'm the guy with the gun", "Carl...", "Jeez Rick, I just don't know."]
    res.status(200).send(sayings);
})

app.post('api/displayQuestion', (req, res) => {
    
    res.status(200).send(req.body);
})

const port = process.env.PORT || 4404;

app.listen(port, () => { console.log(`Server up on ${port}`);})