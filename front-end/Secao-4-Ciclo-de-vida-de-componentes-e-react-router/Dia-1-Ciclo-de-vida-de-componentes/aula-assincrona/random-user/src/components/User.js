import React from 'react';
import PersonCard from './PersonCard';

class User extends React.Component {
  constructor() {
    super()

    this.state = {
      carregando: true,
      userData: [],
    };
    // console.log('este é o constructor sendo impresso')
  }

  fetchUser = () => {
    const url = 'https://api.randomuser.me/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          userData: data.results,
          carregando: false,
        })
      })
  }

  getUserInfo(user) {
    return {
      name: `${user.name.title} ${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    }
  }

  
  componentDidMount() {
    // console.log('este é o componentDidMount sendo impresso')
    this.fetchUser();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log('este é o shouldComponentUpdate sendo impresso')
    const maxAge = 50;
    console.log(nextState.userData[0].dob.age)
    if (nextState.userData[0].dob.age < maxAge) return true;
    if (nextState.userData[0].dob.age > maxAge) return false;
  }

  componentDidUpdate() {
    // console.log('este é o componentDidUpdate sendo impresso')
  }

  componentWillUnmount() {
    // console.log('este é o componentWillUnmount sendo impresso')
  }

  render() {
    const { userData, carregando } = this.state;
    // console.log(this.getUserInfo(userData[0]));
    if (carregando) return <p>loading</p>
    return(
      // console.log('este é o render sendo impresso')
      <div>
        {
          !carregando &&
          <PersonCard
            nome={ this.getUserInfo(userData[0]).name }
            email={ this.getUserInfo(userData[0]).email }
            age={ this.getUserInfo(userData[0]).age }
            image={ this.getUserInfo(userData[0]).image }
          />
        }
      </div>
    );
  }
}

export default User;