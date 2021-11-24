import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function CreateExercise() {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const addExercise = async () => {
        const result = await fetch('/exercises', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, reps: reps, weight: weight, unit: unit, date: date })
        })
        if (result.status === 201) {
            console.log("Nice!!!")
            alert("Exercise added!!")
        }
        else {
            alert("Failed to add!!")
        }
        navigate("/");

    }
    return (
        <>
            <div className="create_form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicReps">
                        <Form.Label>Reps</Form.Label>
                        <Form.Control type="number" placeholder="Reps" value={reps} onChange={e => setReps(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="number" placeholder="Weight" value={weight} onChange={e => setWeight(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUnit">
                        <Form.Label>Unit</Form.Label>
                        <Form.Control type="Unit" placeholder="kgs/lbs" value={unit} onChange={e => setUnit(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>date</Form.Label>
                        <Form.Control type="date" placeholder="Date" value={date} onChange={e => setDate(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={addExercise}>
                        Add
                    </Button>
                </Form>
            </div>

        </>
    )
}

export default CreateExercise;