import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editModeEnabled, setEditMode] = useState<boolean>(false);
    const [isAStudent, setStudentBool] = useState<boolean>(true);
    const [studentName, setStudentName] = useState<string>("Your Name");
    
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentBool(event.target.checked);
    }


    return (
        <div>
            <h3>Edit Mode</h3>
                    <div>
            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit mode"
                checked={editModeEnabled}
                onChange={updateMode}
            />
            <div>{editModeEnabled ?
                <div>
                <Form.Group controlId="formUserAnswer">
                    <Form.Label>Enter name of student:</Form.Label>
                    <Form.Control
                        value={studentName}
                        onChange={updateAnswer}
                    />
                </Form.Group>
                <Form.Check
                    type="checkbox"
                    id="is-a-student"
                    label="Is this a student?"
                    checked={isAStudent}
                    onChange={updateStudent}
                />
                </div>
            
            :     isAStudent ? studentName + " is a student."
                : studentName + " is not a student."
                }</div>
            </div>
        </div>
    );
}
