// import from vendor
import React, { PropTypes } from 'react';
import { Grid, Clearfix } from 'react-bootstrap';

// import from components
import { Header,
PokemonList,
PokemonDetail } from '../';

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.element
  };

  render() {
    const { children } = this.props;
    return (
      <Grid>
          <Header/>
        <main>
          {children}
        </main>
      </Grid>
    );
  }
}
