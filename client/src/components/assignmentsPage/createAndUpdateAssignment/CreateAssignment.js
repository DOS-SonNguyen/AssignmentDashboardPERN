import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import "./modal.css";

const CreateAssignment = ({ modal, toggle }) => {
    const [subjectName, setSubjectName] = useState('');
    const [subjectDueDate, setSubjectDueDate] = useState('');
    const [subjectStatus, setSubjectStatus] = useState('Not done');
    const [subjectProgress, setSubjectProgress] = useState('0');
    const [subjectDescription, setSubjectDescription] = useState('');

    const handleSubmit = async (e) => {
        let date = new Date(subjectDueDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }

        if (minute < 10) {
            minute = "0" + minute;
        }
        e.preventDefault();
        await fetch('/assignment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: subjectName,
                deadline: subjectDueDate,
                year: year,
                month: month,
                day: day,
                hour: hour,
                minute: minute,
                status: subjectStatus,
                progress: subjectProgress,
                description: subjectDescription
            })
        });
    };


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Assignment</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Subject Name:</label>
                            <input type="text" required value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
                        </div>

                        <div>
                            <label>Due Date:</label>
                            <input type="datetime-local" required value={subjectDueDate} onChange={(e) => setSubjectDueDate(e.target.value)} />
                        </div>

                        <div>
                            <label>Status:</label>
                            <select required value={subjectStatus} onChange={(e) => setSubjectStatus(e.target.value)}>
                                <option>Done</option>
                                <option>Not Done</option>
                            </select>
                        </div>

                        <div>
                            <label>Progress:</label>
                            <select required value={subjectProgress} onChange={(e) => setSubjectProgress(e.target.value)}>
                                <option>0</option>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>40</option>
                                <option>50</option>
                                <option>60</option>
                                <option>70</option>
                                <option>80</option>
                                <option>90</option>
                                <option>100</option>
                            </select>
                        </div>

                        <div>
                            <label>Description:</label>
                            <textarea rows="4" cols="50" value={subjectDescription} onChange={(e) => setSubjectDescription(e.target.value)}>
                            </textarea>
                        </div>
                        <div>
                            <button>Create</button>
                            <button onClick={toggle}>Cancel</button>
                        </div>

                    </form>
                </ModalBody>
            </Modal>
        </div>


    );
}

export default CreateAssignment
