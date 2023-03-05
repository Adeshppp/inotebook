const express = require('express')
const router = express.Router()
const Notes = require("../models/Notes");
const fetchUser = require("../middleware/fetchUser")
const { body, validationResult } = require("express-validator");


// Route 1 : Get all notes : GET "/api/notes/fetchallnotes"
// Login required
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!!!");
    }

})

// Route 2 : Add a note : POST "/api/notes/addnote"
//log in required

router.post('/addnote', fetchUser, [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 3 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors , return bad requests and an error
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!!!");
    }
})


// Route 3 : UPDATE an existing note : PUT "/api/notes/updatenote"
// Login required
router.put('/updatenote/:id', fetchUser, async (req, res) => {

    // destructuring below fields
    const { title, description, tag } = req.body;
    try {
        // create new note
        const newNote = {};

        // if user requesting to change below fields then those fileds will be updated.
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find a note to be updated and update it
        let note = await Notes.findById(req.params.id);

        // If note not available in DB
        if (!note) return res.status(404).send("Not Found!")

        // check if requesting user is same as author of that note
        if (note.user.toString() !== req.user.id) return res.status(401).send("Not allowed !!!!");

        // if executions come here then note is available.

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

        res.json({ note })
    } catch (error) {

        console.error(error.message);
        res.status(500).send("Internal Server Error!!!");

    }



})
module.exports = router


// Route 4 : DELETE an existing note using: delete "/api/notes/updatenote"
// Login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {

    //adding try catch to get to know if in case server is down
    try {
        // Find a note to be deleted and delete it
        let note = await Notes.findById(req.params.id);

        // If note not available in DB
        if (!note) return res.status(404).send("Not Found!")

        // check if requesting user is same as author of that note
        if (note.user.toString() !== req.user.id) return res.status(401).send("Not allowed !!!!");

        // if executions come here then note is available.

        note = await Notes.findByIdAndDelete(req.params.id)

        res.json({ "Success": "Note has been deleted", note: note })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!!!");
    }





})
module.exports = router
// jkhbdsjkbfadsfad