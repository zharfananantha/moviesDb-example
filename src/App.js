/**
 * Application entry point.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import AppContainer from './Navigation';
import {StateProvider} from './State';
import Reducer, {initialState} from './Reducers';

export default () => (
  <StateProvider initialState={initialState} reducer={Reducer}>
    <AppContainer />
  </StateProvider>
);
