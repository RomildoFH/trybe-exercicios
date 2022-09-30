import React, { Component } from 'react';

class PersonCard extends Component {
  render() {
    const { nome, email, age, image } = this.props;
    return(
      <div className="card">
        <img src={image} alt={nome} />
        <h3>{nome}</h3>
        <p>{age}</p>
        <p>{email}</p>
      </div>
    )
  }
}

export default PersonCard;