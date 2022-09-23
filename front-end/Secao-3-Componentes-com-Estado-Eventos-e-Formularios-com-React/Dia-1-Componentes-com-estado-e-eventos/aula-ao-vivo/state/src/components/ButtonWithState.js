import React from 'react';

class ButtonWithState extends React.Component {
  constructor () {
    super ();
    this.state = {
      clicks: 0,
    };
    // this.add = this.add.bind(this);
  }

  add =() => {
    // Função assincrona onde que altera para um valor fixado
    // this.setState((previousState, _props) => ({ // Callback updater
    //   clicks: 50,
    // }));
    // console.log(this.state.clicks);

    // Função assincrona onde console.log imprime o valor anterior
    // this.setState((previousState, _props) => ({ // Callback updater
    //   clicks: previousState.clicks + 1,
    // }));
    // console.log(this.state.clicks);

    // Função assincrona recebendo uma callback como segundo parâmetro onde o console.log imprime o valor atualizado
    this.setState((estadoAnterior) => ({ // Está é a Callback updater
      clicks: estadoAnterior.clicks + 1,
    }), () => { // Após a vírgula é a callback
      console.log(this.state.clicks);
    });
  }

  render() {
    const { clicks } = this.state;
    return (
      <>
        <h1>Butão usando o estado</h1>
        <h4>
          Número de cliques:
          {' '}
          { clicks }
        </h4>
        <button type="button" onClick={ this.add }>Add +1</button>
      </>
    )
  }
}

export default ButtonWithState;