import * as ActionTpyes from '../action/ActionTypes.js';

/**
 * reducer中，绝不能修改参数中的state，因为reducer是一个村函数，不能产生任何副作用
 * @param state
 * @param action
 * @returns {*}
 */
export default (state,action) =>{
    const {counterCaption} = action;
    switch (action.type){
        case ActionTpyes.INCREMENT:
            return {...state,[counterCaption]:state[counterCaption]+1};
        case ActionTpyes.DECREMENT:
            /*return {...state,[counterCaption]:state[counterCaption]-1};//等同于下面这个*/
            const newState = Object.assign({},state);
            newState[counterCaption]--;
            return newState;
        default:
            return state;
    }
};


/*const reducer = (state,action) =>{
    const {counterCaption} = action;
    switch (action.type){
        case ActionTpyes.INCREMENT:
            return {...state,[counterCaption]:state[counterCaption]+1};
        case ActionTpyes.DECREMENT:
            /!*return {...state,[counterCaption]:state[counterCaption]-1};//等同于下面这个*!/
            const newState = Object.assign({},state);
            newState[counterCaption]-1;
            return newState;
        default:
            return state
    }
};*/