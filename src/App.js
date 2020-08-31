import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/UserList/UserList";
import FormLogin from "./components/FormLogin";
import Calendar from "./components/Calendar";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('component Did mount')
  }
  componentWillUnmount() {
    console.log('component will unmount')
  }

  render() {
    console.log('component rendered');
    return (<UserList />)
    //return(<Calendar />);
  }
}

export default App;
