import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import UserItem from '../UserItem/UserItem';
import { getData } from '../../api';
import styles from './UserList.module.scss';
import Error from "../Error/Error";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isStated: false,
      error: null,
      deg: 180,
    };
  }
  componentDidMount() {
    this.fetchUsers();
    let intervalId = setInterval(this.timer, 1000/15);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }
  timer = () => {
    // setState method is used to update the state
    //this.setState({ deg: this.state.deg + 1 });
  }

  hideError = () => {
    this.setState({error: null});
  }

  fetchUsers = async () => {
    this.setState({
      isFetching: true,
    });
    getData()
        .then(res =>{
          const newUsers = res;
          this.setState({
            users: [...this.state.users, ...newUsers],
            isFetching: false,
          });
        })
        .catch(e =>{
          this.setState({
            error: new Error("API Connection Error!"),
            isFetching: false,
          })
        });
    //const newUsers = await getData();

    //console.log(this.state);
  };
  removeUser = (id) =>{
    if (id > -1) {
      this.setState({
        users: this.state.users.filter((value, index)=> index !== id)
      })
    }
  }
  mapUsers = () => {
    return this.state.users.map((user, id) => (
      <UserItem {...user} id={id} key={user.cell} removeUser={this.removeUser} />
    ));
  };

  handleClick = (event) => {
    event.preventDefault();
    this.fetchUsers();
    //console.log(event.currentTarget);
  }
  handleToggleClick = () =>{
    this.setState({isStated: !this.state.isStated});
  }

  render() {
    const { users, isFetching, error } = this.state;
    let stls =  `linear-gradient(${this.state.deg}deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)`;
    //console.log(styles.mainContainer);
    return (
      <div className={styles.mainContainer} style={{background:`${stls}`}}>
        <div className={styles.container}>
          {isFetching && <Spinner />}
          {error && <Error error={error} hideError={this.hideError} />}
          {users.length > 0 && this.mapUsers()}
          {/*<div onClick={this.handleToggleClick}>{this.state.isStated ? 'UnState it':'State it'}</div>*/}
        </div>
        <div className={styles.loadButton} onClick={this.fetchUsers}>LOAD</div>
      </div>

    );
  }
}
