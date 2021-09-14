import { BlockMapBuilder } from 'draft-js';
import React, { useState, useEffect } from 'react';

import './ToggleBtn.css';

export default function ToggleBtn({ id, checkedStatus }) {

    const [publish, setPublish] = useState(checkedStatus);

    const handleCheckbox = () => {
        if (publish === false) {
            setPublish(true);
        } else {
            setPublish(false);
        }
    }

    console.log(publish);

    useEffect(() => {
        console.log(publish);
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ publish })
            };
            fetch(`/blogs/${id}/update`, requestOptions)
                .then(response => response.json())
                .then(res => console.log(res));
    });


    return (
        <form className="float-right">
            <div id="toggle-btn" className="d-flex">
                <p className="mr-2">Publish</p>
                <input hidden type="checkbox" checked={publish} id={id} className="checkbox-input"
                    onChange={handleCheckbox} />

                <label htmlFor={id} className="round-slider-container">
                    <div></div>
                    <div></div>
                    <div className="round-slider"></div>
                </label>
            </div>
        </form>
    )
}