import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import market from './reducers/marketDataReducer';


var store = createStore(market,applyMiddleware(thunk));


export default store; 