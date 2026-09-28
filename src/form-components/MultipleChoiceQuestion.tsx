import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userEmotions">
                <Form.Label>How do you feel?</Form.Label>
                <Form.Select value={userAnswer} onChange={updateEmotion}>
                    {options.map((choice: string) => {
                        return (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
            {userAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
