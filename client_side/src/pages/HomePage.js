import React from "react";
import ExerciseList from "../components/ExerciseList";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//const exercise = [{ name: "James", reps: 1, weight: "lbs", unit: 2, date: "21-09-21" }, { name: "James", reps: 1, weight: "lbs", unit: 2, date: "21-09-21" }];



function HomePage() {
    //This is to control the reaction of the change of exercise list on the page
    const [exercise, setExercise] = useState([]);

    //This is to fetch the backend API call
    const loadExercise = async () => {
        const respnse = await fetch('/exercises', { method: 'GET' })
        const data = await respnse.json()
        setExercise(data); //Re-render the page
    }


    //This call just to modify the databse and the table content was the old content
    //Called by the loadExercise function
    //SetExercise to re-render the table
    const deleteExercise = async (_id) => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' })
        if (response.status === 204) {
            const newExercise = exercise.filter(item => item._id !== _id);
            setExercise(newExercise)
        }
        else {
            console.error(`Failed to delete the id=${_id} item, state code = ${response.status}`)
        }
    }

    useEffect(() => {
        loadExercise();
    })


    return (
        <>
            <h2>Welcome to the HomePage</h2>
            <ExerciseList exercise={exercise} OnDelete={deleteExercise}></ExerciseList>
            <Link to="/create_page">Add new exercise</Link>
        </>
    )
}

export default HomePage;