import mongoose from 'mongoose'

mongoose.connect(
    'mongodb://localhost:27017/exercise',
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('We successfully connected to Mongo using Mongoose!!')
});


const modelSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

const exercise = mongoose.model("exercise", modelSchema)

const createExercise = async (name, reps, weight, unit, date) => {
    const file = new exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date })
    return file.save()
}

const getExercise = async () => {
    const file = await exercise.find();
    return file
}

const updateExercise = async (_id, filter) => {
    const result = await exercise.updateMany({ id: _id }, filter)
    return result.nModified
}

const deleteExercise = async (_id) => {
    const result = await exercise.deleteMany({ id: _id })
    return result.deletedCount
}
export { createExercise, getExercise, updateExercise, deleteExercise }


