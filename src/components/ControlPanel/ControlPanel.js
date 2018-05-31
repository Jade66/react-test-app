import React from 'react';
import classes from './ControlPanel.css';

const controlPanel = (props) => {

    let buttonClass = '';

    if(props.showPeople) {
      buttonClass = classes.Red;
    }

    let textClasses = [];
    if(props.people.length <= 2) {
      textClasses.push(classes.red);
    }
    if(props.people.length <= 1) {
      textClasses.push(classes.bold);
    }

    return (
        <div className={classes.ControlPanel}>
            <h1>{props.appTitle}</h1>
            <p className={textClasses.join(' ')}>The BEST app!</p>
            <button onClick={props.clicked} className={buttonClass} >
            Toggle
            </button>
        </div>
    );
};

export default controlPanel;