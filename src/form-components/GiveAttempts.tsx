import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [modifyNumAttempts, setModifyNumAttempts] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setModifyNumAttempts(event.target.value);
    }

    function useAttempts() {
    const amount = modifyNumAttempts === ""
        ? 1
        : Number(modifyNumAttempts);

    setRemainingAttempts((attempts) => attempts - amount);
    }

    function gainAttempts() {
        setRemainingAttempts(
            (attempts) => attempts + Number(modifyNumAttempts)
        );
        setModifyNumAttempts("");
    }

    return (
        <div>
            <h3>Give Attempts</h3>

            <Form.Group controlId="formUserAnswer">
                <Form.Label>Enter attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={modifyNumAttempts}
                    onChange={updateAnswer}
                />
            </Form.Group>

            <div>Remaining Attempts = {remainingAttempts}</div>

            <Button
                onClick={useAttempts}
                disabled={remainingAttempts <= 0}
            >
                use
            </Button>

            <Button onClick={gainAttempts}>
                gain
            </Button>
        </div>
    );
}