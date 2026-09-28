import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Magenta",
        "Cyan",
        "Purple",
        "Orange",
    ];
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    type="radio"
                    label={<p style={{ backgroundColor: color }}>{color}</p>}
                    name="color"
                    value={color}
                    onChange={() => {
                        setSelectedColor(color);
                    }}
                />
            ))}
            <p
                data-testid="colored-box"
                style={{ backgroundColor: selectedColor }}
            >
                You have chosen {selectedColor}
            </p>{" "}
        </div>
    );
}
