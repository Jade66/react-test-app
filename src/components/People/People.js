import React, { Component } from 'react';
import Person from './Person/Person';

class People extends Component {
  render() {
    if(this.props.showPeople) {
      return (
        this.props.people.map((person, index) => {
          return <Person 
            key={person.id} personId={person.id}
            name={person.name} age={person.age} 
            click={(newName) => this.props.clicked(index, newName)}
            nameChangedHandler={(event) => this.props.changed(event, person.id)} 
          />
        })
      );
    }
    return null;
  }
}

export default People;
