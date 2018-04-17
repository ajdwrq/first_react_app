import * as ActionTypes from './ActionTypes.js'

/**
 * 增操作，每个action构造函数都返回一个action对象
 * @param counterCaption
 * @returns {{type, counterCaption: *}}
 */
export const increment = (counterCaption) =>{
    return {
        type:ActionTypes.INCREMENT,
        counterCaption:counterCaption
    };
};
/**
 * * 减操作，每个action构造函数都返回一个action对象
 * @param counterCaption
 * @returns {{type, counterCaption: *}}
 */
export const decrement = (counterCaption) =>{
    return {
        type:ActionTypes.DECREMENT,
        counterCaption:counterCaption
    };
};