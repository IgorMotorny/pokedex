import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  App,
  PokemonList,
  PokemonDetail,
  NotFound,
  Main
} from '../components';


export const productionBaseUrl = '/kottans/';
export const devBaseUrl = '/';
const env = process.env.NODE_ENV;

import { url } from '../utils/urls';

export default (
  <Route path = {url('/')} component = {App}>
    <IndexRoute component = {Main}/>
    <Route path = "*" component = {NotFound} />
  </Route>
);
