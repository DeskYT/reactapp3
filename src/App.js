import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/UserList/UserList";
import FormLogin from "./components/FormLogin";
import Calendar from "./components/Calendar";
import Timer from "./components/Timer/Timer";
import NewCalendar from "./components/Calendar";
import Carousel from "./components/Carousel"
import UserLoader from "./components/UserLoader";
import Counter from "./components/Counter";
import Chat from "./components/Chat";

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
    //return (<Chat/>)
    //return (<UserLoader />)
    //return(<NewCalendar language="ru"/>);
    return(<Timer />);
    //return(<Counter/>)
    //return(<FormLogin />);
    /*const slideList = [
      {
        src: "https://scontent.fdnk6-1.fna.fbcdn.net/v/t1.0-9/p960x960/49323186_3003482743010848_555597493396570112_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=Z0EK-GQPQ_AAX8zBcZe&_nc_ht=scontent.fdnk6-1.fna&tp=6&oh=329ffd2b3a066d4f510f486acea05b0e&oe=5F78B214",
        title: "img",
        description: "this is an image"
      },
      {
        src: "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
        title: "img2",
        description: "this is an image2"
      },
      {
        src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        title: "img3",
        description: "this is an image3"
      }
    ];
    return(<Carousel slides={slideList} />)*/
  }
}

export default App;
