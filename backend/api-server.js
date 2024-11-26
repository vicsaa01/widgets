const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB

mongoose.connect('mongodb+srv://victorsaakes:18irRH96LDa8mJMr@qiwi.pw6cz.mongodb.net/', {
    dbName: 'public',
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('Connected to MongoDB')).catch((error) => console.error('Connection error:', error));

// Create DB schemas

const notesSchema = new mongoose.Schema({
    text: {type: String, required: true, default: ''},
    author: {type: String, required: true, default: 'Anónimo'},
    created_at: {type: Date, required: true, default: Date.now()}
})
const Note = mongoose.model('Notes', notesSchema)

// Start server

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});


// API routes: Notes

app.get('/notes', async (req, res) => {
    const notes = await Note.find()
    res.json(notes)
})

app.get('/note', async (req, res) => {
    try {
        const note = await Note.findById(req.query.id)
        res.json(note)
    } catch(e) {
        res.json({error: e.message});
    }
})

app.post('/note', (req, res) => {
    var newNote
    if (req.body.author == undefined || req.body.author == '') {
        newNote = new Note({'text': req.body.text, 'created_at': req.body.created_at})
    } else {
        newNote = new Note({'text': req.body.text, 'author': req.body.author, 'created_at': req.body.created_at})
    }
    newNote.save()
    console.log('Posted new note: ' + newNote)
    res.status(201).json(newNote)
})