import React, {useState} from "react";

export default function NameForm() {
    const [value, setValue] = useState('');
    const [valueValid, setValueValid] = useState(true);
    const [lastName, setLastName] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (value === '') {
            setValueValid(false);
            return;
        }

        alert("You typed the following name: " + value + ',' + lastName);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{value} {lastName}</h1>

            <label>Name:
                <input
                    type="text"
                    value={value}
                    onChange={event => {
                        setValueValid(true);
                        setValue(event.target.value)
                    }}
                />

                {!valueValid ? <span style={{ color: 'red' }}>Invalid</span> : null}
            </label>

            <label>Last name:
                <input
                    type="text"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                />
            </label>

            <button>Submit</button>
        </form>
    );
}
