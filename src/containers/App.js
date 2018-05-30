import React, { Component } from 'react';
import classes from './App.css';
import ControlPanel from '../components/ControlPanel/ControlPanel';
import People from '../components/People/People';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
        {id: 'person-1', name: 'Otto', age: 55},
        {id: 'person-2', name: undefined, age: 92},
        {id: 'person-3', name: 'Agatha', age: 28},
        {id: 'person-4', name: 'Buffy', age: 19}
      ],
      showPeople: false
    };
  }

  deletePersonHandler = (index) => {
    let people = [...this.state.people] ;
    people.splice(index, 1);
    this.setState({people: people});
  }

  nameChangedHandler = (event, id) => {
    const index = this.state.people.findIndex(p => {
      return p.id === id;
    });
    let person = { 
      ...this.state.people[index]
    };

    person.name = event.target.value;
    
    let people = [...this.state.people];
    people[index] = person;

    this.setState({people: people});
  };

  togglePeopleHandler = (event) => {
    const showing = this.state.showPeople;
    this.setState({showPeople: !showing});
  };

  render () {
    return (
        <div className={classes.App} id='application-root-element'>
          <ControlPanel appTitle={this.props.title} showPeople={this.state.showPeople} 
            people={this.state.people} 
            clicked={this.togglePeopleHandler}
          />
          <People showPeople={this.state.showPeople} 
            people={this.state.people} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
    );
  }
}

export default App;
