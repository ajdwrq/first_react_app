import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

/**
 * 产生并派发action对象的函数：增加
 * @param counterCaption
 */
export const increment = (counterCaption) =>{
    AppDispatcher.dispatch({
        type:ActionTypes.INCREMENT,
        counterCaption:counterCaption
    });
};
/**
 * 产生并派发action对象的函数：减少
 * @param counterCaption
 */
export const decrement = (counterCaption) =>{
    AppDispatcher.dispatch({
        type:ActionTypes.DECREMENT,
        counterCaption:counterCaption
    });
};