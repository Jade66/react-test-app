import React, {Component} from 'react';
import classes from './Person.css';

//const randomAge = () => Math.floor(Math.random() * 10) + 1;

class Person extends Component {
  randomAge = () => Math.floor(Math.random() * 10) + 1;

  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click} >I'm a person! My name is {this.props.name || this.randomAge()} and I'm {this.props.age || this.randomAge()} years old!</p>
        <input type='text' onChange={(event) => this.props.nameChangedHandler(event, this.props.personId)} value={this.props.name} />
      </div>
    );
    }
}

export default Person;
