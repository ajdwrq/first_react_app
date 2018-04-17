import store from '../store/Store.js';
import React,{Component,PropTypes} from 'react';
import * as Actions from '../action/Action.js';

const buttonStyle ={
    margin:'10px'
};

class Counter extends Component{
    constructor(props){
        super(props);
        this.onIncrement=this.onIncrement.bind(this);
        this.onDecrement=this.onDecrement.bind(this);
        this.onChange=this.onChange.bind(this);
        this.getOwnState=this.getOwnState.bind(this);

        this.state=this.getOwnState();
    }
    getOwnState(){
        return{
            //该store是一个唯一的Redux Store；可通过store.getState()获得store上存储的所有状态
            value:store.getState()[this.props.caption]
        };
    }

    /**
     * 要保持store上状态和this.state的同步
     */
    onChange(){
        this.setState(this.getOwnState());
    }

    /**
     *在初始化render之后只执行一次，在这个方法内，可以访问任何组件，
     * componentDidMount()方法中的子组件在父组件之前执行
     */
    componentDidMount(){
        store.subscribe(this.onChange);
    }

    /**
     * 当组件要被从界面上移除的时候，就会调用componentWillUnmount(),
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等
     */
    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }

    /**
     * 派发action，加
     */
    onIncrement(){
        store.dispatch(Actions.increment(this.props.caption));
    }

    /**
     * 派发action,减
     */
    onDecrement(){
        store.dispatch(Actions.decrement(this.props.caption));
    }

    render(){
        const value = this.state.value;
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                <span>{caption} count:{value}</span>
            </div>
        )

    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.value !== this.state.value);
    }

}
export default Counter