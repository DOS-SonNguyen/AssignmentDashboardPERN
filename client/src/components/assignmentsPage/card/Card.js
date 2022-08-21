import React, { useState } from 'react';
import UpdateAssignment from "../createAndUpdateAssignment/UpdateAssignment";

import editIcon from '../../../icon/edit-solid.svg';
import trashIcon from '../../../icon/trash-solid.svg';


import './Card.css';

function deleteAssignment(assignmentId) {
    fetch('/assignment/' + assignmentId, {
        method: 'DELETE'
    });
}


const Card = ({ assignment }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <div>
            <div class="card">
                <div class="card-top">
                    <h5>{assignment.name}</h5>
                </div>
                <div class="card-body" key={assignment.id}>
                    <p>Due Date: {assignment.hour}:{assignment.minute} {assignment.year}/{assignment.month}/{assignment.day}</p>
                    <p>Status: {assignment.status}</p>
                    <p>Progress: {assignment.progress}%</p>
                    <p>Description: {assignment.description}</p>
                </div>
                <div className="card-bottom">
                    <button onClick={() => setModal(true)} className="editIcon"><img src={editIcon} alt="edit icon"></img></button>
                    <button onClick={() => deleteAssignment(assignment.id)} className="trashIcon"><img src={trashIcon} alt="trash icon" ></img></button>
                </div>
            </div>
            <UpdateAssignment modal={modal} toggle={toggle} assignment={assignment} />
        </div>
    );
};

export default Card;