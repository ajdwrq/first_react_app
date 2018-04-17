import AppDispatcher from '../dispatcher/AppDispatcher.js';
import * as ActionTypes from "../actions/ActionTypes";
import {EventEmitter} from 'events';
const counterValues = {
    'First':0,
    'Second':10,
    'Third':30
};
const CHANGE_EVENT = 'changed';
const CounterStore = Object.assign({},EventEmitter.prototype,{
   getCounterValues:function () {
       return counterValues;
   },
    emitChange:function () {
        this.emit(CHANGE_EVENT);//广播一个特定时间，第一个参数是字符串类型的事件名称
    },
    addChangeListener:function (callback) {
        this.on(CHANGE_EVENT,callback);//可以增加一个挂在这个EventEmitter对象特定时间上的处理函数，第一个参数是字符串类型的事件名称，第二个参数是处理函数
    },
    removeChangeListener:function (callback) {
        this.removeListener(CHANGE_EVENT,callback);//和on函数做的事情相反，删除挂在这个EventEmitter对象特定事件上的处理函数，第一个参数是事件名称，注意:如需使用要一定保留对处理函数的引用
    }
});

CounterStore.dispatchToken = AppDispatcher.register((action) =>{
    if(action.type===ActionTypes.INCREMENT){
        counterValues[action.counterCaption]++;
        CounterStore.emitChange();//广播这个时间
    }else if(action.type===ActionTypes.DECREMENT){
        counterValues[action.counterCaption]--;
        CounterStore.emitChange();//广播这个时间
    }
});

/*AppDispatcher.dispatch({
    type:ActionTypes.INCREMENT,
    counterCaption:'First'
});*/

export default CounterStore