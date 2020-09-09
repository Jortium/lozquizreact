import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div class='quiz border background-image'>
            <div className='quizcontainer'>
                <div className='startcontainer'>
                    <span>
                        Test your knowledge on "The Legend Zelda Series" to see
                        if you are worthy of wielding the Master Sword!
                    </span>
                    <button
                        className='press startbutton'
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Questions;
