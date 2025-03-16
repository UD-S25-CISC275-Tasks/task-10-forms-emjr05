import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false)

    function switchEditMode(event: React.ChangeEvent<HTMLInputElement>){
        setEditMode(event.target.checked)
    }
    function switchIsStudent(event: React.ChangeEvent<HTMLInputElement>){
        setIsStudent(event.target.checked)
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>){
            setName(event.target.value);
        }



    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
            type="switch"
            id="switch-edit-mode"
            label= "Edit?"
            checked={editMode}
            onChange={switchEditMode}
            />
            <div>
                {editMode ? 
                <div>
                    <Form.Group controlId="formAnswer">
                                    <Form.Label>Student Name:</Form.Label>
                                    <Form.Control
                                    value = {name}
                                    onChange = {updateName} />
                                </Form.Group>
                    <Form.Check
                    type="switch"
                    id="switch-is-student"
                    label="Student?"
                    checked={isStudent}
                    onChange={switchIsStudent}
                    />

                     </div> : 
                <div>{name} {isStudent ? "is a student" : "is not a student"}</div>
                }
                                
            </div>
        </div>
    );
}
