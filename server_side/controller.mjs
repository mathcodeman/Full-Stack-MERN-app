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
            res.status(500).json({ Error: "Request Failed!!" })
        })
})

app.get('/exercises', (req, res) => {
    exercise.getExercise()
        .then(result => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: "Request Failed!!" })
        })
})

app.put('/exercises/:id', (req, res) => {

    exercise.updateExercise(req.params.id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(update => {
            res.status(200).json({ Updated: update })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: "Requested Failed!!!" })
        })
})

app.delete('/exercises/:id', (req, res) => {
    exercise.deleteExercise(req.params.id)
        .then(deleteCount => {
            console.log(deleteCount)
            res.status(204).json({ delete: deleteCount })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: "Requested failed!!!" })
        })
})
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);

});