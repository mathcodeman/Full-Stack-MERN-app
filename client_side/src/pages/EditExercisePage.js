import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function EditExercise({ exerciseToEdit }) {
    const [Name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate();


    const editExercise = async () => {
        const result = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: Name, reps: reps, weight: weight, unit: unit, date: date })
        })
        if (result.status === 200) {
            console.log("Nice!!!")
            alert("Exercise edit!!")
        }
        else {
            alert("Failed to edit!!")
        }
        navigate('/')


    }
    return (
        <>
            <div className="edit_form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={Name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicReps">
                        <Form.Label>Reps</Form.Label>
                        <Form.Control type="number" value={reps} onChange={e => setReps(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="number" value={weight} onChange={e => setWeight(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUnit">
                        <Form.Label>Unit</Form.Label>
                        <Form.Control type="Unit" value={unit} onChange={e => setUnit(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>date</Form.Label>
                        <Form.Control type="date" value={date} onChange={e => setDate(e.target.value)} />
                    </Form.Group>

                    <Button onClick={editExercise}>
                        Edit
                    </Button>
                </Form>
            </div>

        </>
    )
}

export default EditExercise;