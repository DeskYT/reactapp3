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
    };
  }

  componentDidMount() {
    this.fetchUsers()
        /*.catch(e => {
          this.setState({error: e})
        });*/
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



    console.log(this.state);
  };

  mapUsers = () => {
    return this.state.users.map((user) => (
      <UserItem {...user} key={user.cell} />
    ));
  };

  handleClick = (event) => {
    event.preventDefault();
    this.fetchUsers();
    console.log(event.currentTarget);
  }
  handleToggleClick = () =>{
    this.setState({isStated: !this.state.isStated});
  }
  render() {
    const { users, isFetching, error } = this.state;
    return (
      <div className={styles.container}>
        {isFetching && <Spinner />}
        {error && <Error error={error} hideError={this.hideError} />}
        {users.length > 0 && this.mapUsers()}
        <div className={styles.loadButton} onClick={this.fetchUsers}>LOAD</div>
        {/*<div onClick={this.handleToggleClick}>{this.state.isStated ? 'UnState it':'State it'}</div>*/}
      </div>
    );
  }
}
