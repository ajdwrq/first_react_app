import {createStore} from 'redux';
import reducer from '../reducer/Reducer.js';

const initValues = {
    'First':0,
    'Second':10,
    'Third':20
};
/**
 * createStore(p1,p2,[p3]) ;第一个参数代表更新状态的reducer；第二个参数是状态的初始值,第三个参数可选,代表Store Enhancer
 *
 * Store状态设计主要原则：避免冗余；与flux不同，不需要Summary组件，只需要将Counter状态数值加在一起即可
 *
 */
const store = createStore(reducer,initValues);


export default store;