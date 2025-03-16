import React, { useState } from "react";
<<<<<<< HEAD

=======
>>>>>>> origin/task-forms
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
<<<<<<< HEAD

    return (
        <span>
            <Button
                onClick={() => {
                    setValue(1 + value);
                }}
            >
                Add One
            </Button>
=======
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
>>>>>>> origin/task-forms
            to {value}.
        </span>
    );
}
