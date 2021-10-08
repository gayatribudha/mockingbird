import React, { useState } from 'react';
import axios from "axios";


export default function Confirmation() {

    const [pin, setPin] = useState('');

    const onChangePin = e => {
        setPin(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        blogsList()
        async function blogsList() {
            try {
                let res = await axios.get(`/users/confirmRegister`);
                console.log(res.data);
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            Please enter your pin here.
            <input type="text" value={pin} onChange={onChangePin} />
            <button type="submit">OK</button>
        </form>
    )
}