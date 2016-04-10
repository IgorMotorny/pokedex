import React from 'react';
import classNames from 'classnames';
import './PokemonDetail.scss';
export default class PokemonDetail extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isFixed: false
    };
  }

  getImageUrl() {
  return  `http://pokeapi.co/media/img/${this.props.info.pkdx_id}.png`;
  }

  getTypes() {
    let {types} = this.props.info;
    types = types.map((type) => type.name);
    return  types.join(', ');
  }

  getId() {
    let id = this.props.info.pkdx_id;
    id = id.toString();

    let newId = [];
    for(let i = 0; i < 3 - id.length; i++)
      newId.push(0);

    newId.push(id);
    return '#' + newId.join('');
  }

  fix() {
    let newFixed = !this.state.isFixed;
    this.setState({
      isFixed: newFixed
    });

  }

  getInfo() {

    if(!this.props.info.name)
      return '';

    this.getId();
    const {
      name,
      attack,
      defense,
      hp,
      sp_atk,
      sp_def,
      speed,
      weight,
      moves
    } = this.props.info;

    const types = this.getTypes();
    const url = this.getImageUrl();
    const id = this.getId();
    return (
      <div className = "pokemonDetail__border ">
        <div className = "pokemonDetail__imgBox">
        <svg viewBox="0 0 24 24"
        className = "pokemonDetail__fix" onClick = {this.fix.bind(this)}>
          <path fill="#000000"
          d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
        </svg>
          <img className = "pokemonDetail__img" src={url}/>
        </div>
        <div className = "pokemonDetail__header">
          {name} {id}
        </div>
        <table className = "pokemonDetail__table">
          <tbody>
            <tr>
              <td className = "pokemonDetail__col">
              Type
              </td>
              <td className = "pokemonDetail__col">
              {types}
              </td>
            </tr>

            <tr>
              <td className = "pokemonDetail__col">
              Attack
              </td>
              <td className = "pokemonDetail__col">
              {attack}
              </td>
            </tr>

            <tr>
              <td className = "pokemonDetail__col">
              Defense
              </td>
              <td className = "pokemonDetail__col">
              {defense}
              </td>
            </tr>

            <tr>
              <td className = "pokemonDetail__col">
              HP
              </td>
              <td className = "pokemonDetail__col">
              {hp}
              </td>
            </tr>

            <tr>
              <td className = "pokemonDetail__col">
              SP Attack
              </td>
              <td className = "pokemonDetail__col">
              {sp_atk}
              </td>
              </tr>

            <tr>
              <td className = "pokemonDetail__col">
              SP Defense
              </td>
              <td className = "pokemonDetail__col">
              {sp_def}
              </td>
            </tr>

            <tr>
              <td className = "pokemonDetail__col">
              Speed
              </td>
              <td className = "pokemonDetail__col">
              {speed}
              </td>
              </tr>

            <tr>
              <td className = "pokemonDetail__col">
              Weight
              </td>
              <td className = "pokemonDetail__col">
              {weight}
              </td>
            </tr>


            <tr>
              <td className = "pokemonDetail__col">
              Total moves
              </td>
              <td className = "pokemonDetail__col">
              {moves.length}
              </td>
            </tr>
            </tbody>
        </table>
      </div>
    );
  }

  getStyle() {
    let style = {}
    if(document.getElementById('pokemonDetailOffset')) {
        style = {
          left: document.getElementById('pokemonDetailOffset').offsetLeft + 15
        };
      }

    return style;
  }

  render() {
  const inner = this.getInfo();
  const {isFixed} =  this.state;
  const style = this.getStyle();

  return (
      <section id ="pokemonDetail" className = {
        classNames({
          pokemonDetail: true,
          fixed: isFixed
        })
      }
      style = {style}>
      {inner}
      </section>
    );
  }
}
