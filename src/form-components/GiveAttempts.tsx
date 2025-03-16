import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3)
    const [attemptsRequested, setAttemptsRequested] = useState<string>("")

    function updateAttemptsLeft() : void {
        let extraAttempts : number = parseInt(attemptsRequested) || 0
        setAttemptsLeft(attemptsLeft + extraAttempts)
    }


    return (
        <div>
            <h3>Give Attempts</h3>
            attempts remaining : {attemptsLeft}
            <Form.Group controlId="formAttemptRequest">
                <Form.Label>Requested number of attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setAttemptsRequested(event.target.value)}}
                />
            </Form.Group>
            <Button onClick={updateAttemptsLeft} id="gain">Gain Attempts</Button>
            <Button id="use" onClick={() => {setAttemptsLeft(attemptsLeft - 1)}} disabled={attemptsLeft === 0}>Use Attempt</Button>
        </div>
    );
}
