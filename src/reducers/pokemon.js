import {
  MORE_INFO
} from '../actions/pokemon';



let initialState = {
  currentPokemonInfo: {}
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case MORE_INFO:
      return {
        ...state,
        currentPokemonInfo: action.info
      };

    default:
      return state;
  }
}
