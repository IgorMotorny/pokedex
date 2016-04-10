import React from 'react';
import $ from 'jquery';
import {
  Col,
  Button
} from 'react-bootstrap';

import {
  Pokemon
} from '../';

import './pokemonList.scss';
import {
  loadMore,
  moreInfo
} from '../../actions/pokemon';

import {
  connect
} from 'react-redux';

const mapStateToProps = (state) => ({
  pokemonsUrl: state.pokemons.pokemonsUrl
});

export default class PokemonList extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        pokemons: [],
        result: {},
        url: 'http://pokeapi.co/api/v1/pokemon/?limit=12',
        loading: true
      };

    }

    componentWillMount() {
        this.getPokemonsData();
    }

    getPokemonsData() {

      let {
        pokemons,
        url
      } =  this.state;

      $.get(url, function(result) {
        pokemons.push(...result.objects);

        this.setState({
          pokemons: pokemons,
          url: 'http://pokeapi.co' + result.meta.next,
          loading: false
        });



      }.bind(this));
    }

    getMorePokemons() {

      const {
        loading
      } = this.state;


      if(!loading) {
        this.getPokemonsData();
        this.setState({
          loading: true
        });
      }
    }

    setCurrentPokemon(info) {
     this.props.dispatch(moreInfo(info));
    }

    createList() {
      return this.state.pokemons.map((pokemonInfo, id) =>
        <Pokemon info = {pokemonInfo} pokemonClick = {this.setCurrentPokemon.bind(this)}/>
      );
    }

    getStatus() {
      return this.state.loading ? 'Loading' : 'Load more'
    }

    getButton() {
      const status = this.getStatus();
      return this.state.url ?
      (<Button bsStyle = "primary" className = "loadMore" onClick={this.getMorePokemons.bind(this)}>
        {status}
      </Button>)
     : '';
    }

    render() {
      const pokemonsList = this.createList();
      const button = this.getButton();
      return (
        <div className="pokemonList">
          {pokemonsList}
          {button}
        </div>
      );
    }
}
export default connect(mapStateToProps)(PokemonList);
