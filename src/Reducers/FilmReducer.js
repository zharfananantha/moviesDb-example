/**
 * Product reducer.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import {SET_FILM} from './Type';

export const filmInit = {
  listing: [
    {
      id: 0,
      adult: false,
      genre_ids: [],
      backdrop_path: '',
      original_language: '',
      original_title: '',
      overview: '',
      popularity: 0.0,
      poster_path: '',
      release_date: '',
      title: '',
      video: false,
      vote_average: 0.0,
      vote_count: 0
    },
  ],
};

export default (state, action) => {
  switch (action.type) {
    case SET_FILM:
      return {...state, listing: action.payload};
    default:
      return state;
  }
};
