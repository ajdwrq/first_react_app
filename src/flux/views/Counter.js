import React,{Component} from 'react'
import * as Actions from "../actions/Actions";
import CounterStore from "../stores/CounterStore";

class Counter extends Component{
    constructor(props){
        super(props);

        this.onChange=this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count:CounterStore.getCounterValues()[props.caption]
        }
    }
    onChange(){
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count:newCount});
    }
    componentDidMount(){
        CounterStore.addChangeListener(this.onChange);
    }
    componentWillUnmount(){
        this.CounterStore.removeChangeListener(this.onChange);
    }
    onClickIncrementButton(){
        Actions.increment(this.props.caption);
    }
    onClickDecrementButton(){
        Actions.decrement(this.props.caption);
    }

    render(){
        const {caption} = this.props;
        return (
            <div>
                <button onClick={this.onClickIncrementButton} >+</button>
                <button onClick={this.onClickDecrementButton} >-</button>
                <span>{caption} count:{this.state.count}</span>
            </div>
        )
    }
}
export default Counter