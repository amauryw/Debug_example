// @flow

import { createStore } from 'redux';
import enhancer from 'app3/src/modules/rootEnhancer';
import reducers from 'app3/src/modules/rootReducer';

export default () => createStore(reducers, enhancer);
