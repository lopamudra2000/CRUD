import {createStore, applyMiddleware,compose} from "redux";
import reducers from './reducers/index';

import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;