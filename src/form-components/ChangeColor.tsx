import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    let colors: string[] = ["red", "blue", "green", "orange", "purple", "cyan", "magenta", "white", "black"]

    const [chosenColor, setColor] = useState<string>(colors[0])


    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    inline
                    key = {color}
                    type="radio"
                    name="color"
                    id = {color}
                    onChange={(e) => {setColor(e.target.value)}}
                    label={color}
                    value={color}
                    checked = {chosenColor === color}
                />
            ))
        }
        <div
            data-testid="colored-box"
            style={{
                backgroundColor : chosenColor
            }}>
            You have chosen {chosenColor}
        </div>
        </div>
    );
}
