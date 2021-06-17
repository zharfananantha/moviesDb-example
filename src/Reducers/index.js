
import FilmReducer, {filmInit} from './FilmReducer';

export const initialState = {
  film: filmInit,
};

export default ({login, user, film}, action) => ({
  film: FilmReducer(film, action),
});
