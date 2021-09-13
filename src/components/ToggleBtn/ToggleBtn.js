import { BlockMapBuilder } from 'draft-js';
import React, { useState, useEffect } from 'react';

import './ToggleBtn.css';

export default function ToggleBtn({ blogId }) {

    const [isClicked, setIsClicked] = useState(false);

    const handleCheckbox = () => {
        if (isClicked == true) {
            setIsClicked(false);
        } else {
            setIsClicked(true);

        }
    }
    console.log(isClicked);
    return (
        <form className="float-right">
            <div id="toggle-btn" className="d-flex">
                <p className="mr-2">Publish</p>
                <input hidden type="checkbox" checked={isClicked} id={blogId} className="checkbox-input" onChange={handleCheckbox} />

                <label for={blogId} className="round-slider-container">
                    <div></div>
                    <div></div>
                    <div className="round-slider"></div>
                </label>
            </div>
        </form>
    )
}