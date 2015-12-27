import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Profit'
        }
      ]
    };
  }
  render() {
    const notes = this.state.notes;

    return (
      <div>
        <Notes items={notes} />
      </div>
    );
  }
}
