import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)

    this.value = "anything";

    this.state = {

      list: [],

      new_ToDo_Item: " "

    }
  }

  //incorporating local storage 
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // adds event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

// functions for the internal workings of Todo list
  update_new_to_do_item(key, value) {

    this.setState({
      [key]: value
    })

  }


  add_new_item() {

    const new_ToDo_Item = {
      id: 1 + Math.random(),
      value: this.state.new_ToDo_Item
    }

    const list = [...this.state.list, new_ToDo_Item]

    this.setState({
      list,
      new_ToDo_Item: ""
    })

  }

  delete_item(id) {

    const list = [...this.state.list]

    const newlist = list.filter(item => item.id !== id)

    this.setState({
      list: newlist,
      new_ToDo_Item: ""
    })

  }

  render() {
    return (
      <div>
        <h1 className="app-title">ToDo List</h1>
        <div className="Container" id="center" >


          <div
            style={{

            }}
          ></div>
          add an item
          <br />
          <input
            placeholder="what do you want toDo 😊 ?"

            type="text"

            value={this.state.new_ToDo_Item}

            onChange={e => this.update_new_to_do_item("new_ToDo_Item", e.target.value)}
          >
          </input>
          <button
            className="add-btn btn-floating"
            onClick={() => this.add_new_item()}
            disabled={!this.state.new_ToDo_Item.length}
          >

            <i
              className="material-icons"
            >+</i>
          </button>
          <br /><br />
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <li key={index} >
                  {item.value}
                  <button className="btn btn-floating" onClick={() => this.delete_item(item.id)} >
                    <i className="material-icons">x</i>
                  </button>
                </li>
              )


            })}
          </ul>
        </div>
      </div>
    );
  }
}

