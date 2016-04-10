import React from 'react';
import $ from 'jquery';
import './Pokemon.scss'
import { Link } from 'react-router';
import {
  PokemonDetail,
  Type
} from '../';

export default class Pokemon extends React.Component {

  constructor(props) {
    super(props);
  }

  getImage() {
    return `http://pokeapi.co/media/img/${this.props.info.pkdx_id}.png`;
  }

  getName() {
    return this.props.info ?  this.props.info.name : '';
  }

  getInfo() {
    const {info} = this.props;
    this.props.pokemonClick(info);
  }

  getTypes() {
    return this.props.info.types.map((type) =>
      <Type type = {type} />
      );
  }

  render() {
    const types = this.getTypes();
    
    return (
        <article className = "pokemon" onClick={this.getInfo.bind(this)}>
          <div className = "pokemon__border">
            <div className = "pokemon__imgBox">
              <img className = "pokemon__img" src = {this.getImage()}/>
            </div>
            <h3 className = "pokemon__name"> {this.getName()} </h3>
            <div className = "pokemon__types">
              {types}
            </div>
          </div>
        </article>
    );
  }
}
