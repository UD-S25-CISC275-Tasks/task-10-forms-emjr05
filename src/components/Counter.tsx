import React, { useState } from "react";
<<<<<<< HEAD

=======
>>>>>>> temp-solved-forms
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);

    return (
        <span>
            <Button
                onClick={() => {
                    setValue(1 + value);
                }}
            >
                Add One
            </Button>
            to {value}.
        </span>
    );
}
