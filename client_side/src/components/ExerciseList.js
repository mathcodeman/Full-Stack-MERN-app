import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { MdDeleteForever, MdEdit } from "react-icons/md"




function ExerciseList({ exercise, OnDelete, OnEdit }) {
    //Render items inside of exercise list that passed in
    const renderItem = (item) => {
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.reps}</td>
                <td>{item.weight}</td>
                <td>{item.unit}</td>
                <td>{item.date}</td>
                <td><MdEdit onClick={() => OnEdit(item)} style={{ cursor: 'pointer' }} /></td>
                <td><MdDeleteForever onClick={() => OnDelete(item._id)} style={{ cursor: 'pointer' }} /></td>
            </tr>
        );
    };
    return (
        <div id="exercise_table">
            <ReactBootStrap.Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {exercise.map(renderItem)}
                </tbody>
            </ReactBootStrap.Table>
        </div>

    )
}

export default ExerciseList;