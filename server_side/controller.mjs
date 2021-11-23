import express from "express"
import * as exercise from './db_model.mjs'

const PORT = 3000;
const app = express();


app.use(express.json());

app.post('/exercises', (req, res) => {
    exercise.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise)
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: "Request Failed!!" })
        })
})

app.get('/exercises', (req, res) => {
    exercise.getExercise()
        .then(result => {
            console.log(result)
            res.status(201).json(result)
        })
        .catch(error => {
            console.log(error)
            res.status(404).json({ Error: "Request Failed!!" })
        })
})

app.put('/exercises/:id', (req, res) => {
    const filter = { "name": req.body.name, "reps": req.body.reps, "weight": req.body.weight, "unit": req.body.weight, "date": req.body.date }
    exercise.updateExercise(req.params.id, filter)
        .then(updateCount => {
            console.log(updateCount)
            res.status(200).json({ Updated: updateCount })
        })
        .catch(error => {
            console.log(error)
            res.status(400).json({ Error: "Requested failed!!!" })
        })
})

app.delete('/exercises/:id', (req, res) => {
    exercise.deleteExercise(req.params.id)
        .then(deleteCount => {
            console.log(deleteCount)
            res.status(204)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: "Requested failed!!!" })
        })
})
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);

});