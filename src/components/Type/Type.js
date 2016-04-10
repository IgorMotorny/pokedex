import React from 'react';


export default class Type extends React.Component {

getColor(prop) {
  prop = prop.toLowerCase();

  switch (prop) {
    case 'grass':
      return '#00AB00';

    case 'poison':
      return '#8B0DB5';

    case 'fire':
      return '#FF0000';

    case 'electric':
      return '#E5FF00';

    case 'water':
      return '#1A00FF';

    case 'bug':
      return '#D67206';

    case 'flying':
      return '#05E9ED';

    case 'ground':
      return '#614C36';

    default:
      return '#bebebe';
  }
}

render() {
  const type = this.props.type.name;
  const color = this.getColor(type);
  const style = {
    backgroundColor: color
  }
  return (
    <div className = "pokemon__type" style={style}>
    {type}
    </div>
  );
}

}
