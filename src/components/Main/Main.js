import React, {
  PropTypes
}
from 'react';

import {
  Row,
  Col,
  Button
}
from 'react-bootstrap';

import {
  Header,
  PokemonList,
  PokemonDetail
}
from '../';

import {
  connect
}

from 'react-redux';
import './main.scss';

const mapStateToProps = (state) => ({
  currentPokemonInfo: state.pokemons.currentPokemonInfo
});

export default class Main extends React.Component {

  setUrl(url) {
      this.url = url;
  }

  render() {
    const {
      currentPokemonInfo
    } = this.props;


    return (
      <Row>
        <Col  mdPush = {9} md = {3} id ="pokemonDetailOffset">
          <PokemonDetail info={currentPokemonInfo}/>
        </Col>
        <Col  mdPull = {3} md = {9} >
          <PokemonList/>
        </Col>
      </Row>
    );
  }
}
export default connect(mapStateToProps)(Main);
