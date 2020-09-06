import React from 'react';
import './Start.css'

const Start = () => {
    return (
        <div class="quiz border background-image">
            <div className="quizcontainer">
                <div class="startcontainer">
                    <span>
                        Test your knowledge on "The Legend Zelda Series" to see
                        if you are worthy of wielding the Master Sword!
                    </span>
                    <button class="press startbutton">Start</button>
                </div>
            </div>
        </div>
    );
};

export default Start;
