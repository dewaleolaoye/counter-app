import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: [
      {
        id: 1,
        name: 'Tag 1'
      },
      {
        id: 2,
        name: 'Tag 2'
      },
      {
        id: 3,
        name: 'Tag 3'
      }
    ]
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
  render() {
    const tags = this.state.tags;
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <ul>
          {tags.map(tag => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Counter;
