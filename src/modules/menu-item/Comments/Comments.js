import React, { Component } from 'react';

class Comments extends Component {
  state = { text: '' };

  handleTextChange = ({ target: { value } }) => {
    this.setState({ text: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          cols="40"
          placeholder="Type your comment here..."
          onChange={this.handleTextChange}
          value={text}
        />
        <button type="submit">Add comment</button>
      </form>
    );
  }
}

export default Comments;
