import React from 'react';

class VideoGame extends React.Component {
  render() {
    console.log(this.props);

    return (
      <section className="card">
        <img src="" alt=""/>
        <h1>MineCraft</h1>
        <p>Mojang</p>
      </section>
    );
  }
}

export default VideoGame;