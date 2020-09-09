import React from 'react';
import './Hearts.css';
// import { OUTCOMES } from './outcomes/outcomes'

const Hearts = () => {

// const countHearts = () => {
//         if (hearts === 10) {
//               return OUTCOMES.perfect;
//         } else if (hearts <= 9 && hearts >= 7) {
//               return OUTCOMES.great;
//         } else if (hearts <= 6 && hearts >= 3) {
//               return OUTCOMES.good;
//         } else {
//               return OUTCOMES.fail;
//         }
//   }

    return (
        <div class='health border'>
            <div class='heartcontainer'></div>
        </div>
    );
};

export default Hearts;
