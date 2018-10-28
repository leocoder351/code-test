import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from './AppDispatcher.js';

export const increment = (counterCaption) => {
  console.log('+++');
  AppDispatcher.dispatch({
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  });
};

export const decrement = (counterCaption) => {
  console.log('---');
  AppDispatcher.dispatch({
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  });
};