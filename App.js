import React, { Component } from 'react';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmit(event){
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
<div >
 <div className="App">
   <h1 >To Do's</h1>
       <p>Type a to do </p>
        <form  onSubmit={this.onSubmit}>
          <input className="todo" value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        </div>
        <List items={this.state.items} />

</div>
    );
  }
}
export default App;
