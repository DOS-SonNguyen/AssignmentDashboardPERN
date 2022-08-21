const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT || 9999;

// process.env.PORT
// process.env.NODE_ENV


// Middleware
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}


app.get("/assignments", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});
// Routes

// Create a new assignment

app.post("/assignment", async (req, res) => {
    try{
        const { name, description, due_date, year, month, day, hour, minute, status, progress } = req.body;
        const newAssignment = await pool.query("INSERT INTO assignment (name, description, due_date, year, month, day, hour, minute, status, progress) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *", [name, description, due_date, year, month, day, hour, minute, status, progress]);
        res.json(newAssignment.rows[0]);
    } catch(err){
        console.error(err.message);
    }
})

// get all assignments

app. get('/assignment', async (req, res) => {
    try {
        const allAssignments = await pool.query('SELECT * FROM assignment');
        res.json(allAssignments.rows);
    } catch (error) {
        console.error(error.message);
    }
})

// get a single assignment


app. get('/assignment/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const assignment = await pool.query('SELECT * FROM assignment WHERE id = $1', [id]);
        res.json(assignment.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})
// update an assignment

app.put("/assignment/:id", async (req ,res) => {
    try {
        const { id } = req.params;
        const { name, description, due_date, year, month, day, hour, minute, status, progress } = req.body;
        const updateAssignment = await pool.query("UPDATE assignment SET name = $1, description = $2, due_date = $3, year = $4, month = $5, day = $6, hour = $7, minute = $8, status = $9, progress = $10 WHERE id = $11 RETURNING *", [name, description, due_date, year, month, day, hour, minute, status, progress, id]);
        res.json(updateAssignment.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// delete an assignment

app.delete("/assignment/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteAssignment = await pool.query("DELETE FROM assignment WHERE id = $1", [id]);
        res.json("Assignment deleted successfully");
    } catch (error) {
        console.error(error.message);
    }
})


app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});