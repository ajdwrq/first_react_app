import React ,{Component} from 'react'
import PropTypes from 'prop-types';
class Counter extends Component{
    constructor(props){
        super(props);
        console.log('enter constructor ' + this.props.caption)
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count:props.initValue || 0
        }
    }
    onClickIncrementButton (){
        /*this.setState({
          count : this.state.count+1
        })*/
        this.updateCount(true);
    }
    onClickDecrementButton(){
        /*this.setState({
            count : this.state.count-1
        })*/
        this.updateCount(false);
    }
    componentWillMount(){
        console.log('enter componentWillCount ' + this.props.caption)
    }
    render (){
        console.log('enter render ' + this.props.caption)
        const {caption}  = this.props;
        return(
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count:{this.state.count}</span>
            </div>
        )
    }
    componentDidMount(){
        console.log('enter cpmponentDidMount ' + this.props.caption)
    }

    componentWillReceiveProps(nextProps){
        console.log('enter componentWillReceiveProps ' + this.props.caption)
    }
    shouldComponentUpdate(nextProps,nextState){
        return (nextProps.caption!==this.props.caption)||(nextState.count!==this.props.count);
    }
    updateCount(isIncrement){
        const previousValue = this.state.count;
        const newValue = isIncrement?previousValue+1:previousValue-1;
        this.setState({count:newValue});
        this.props.onUpdate(newValue,previousValue);
    }
}
Counter.propTypes={
    caption:PropTypes.string.isRequired,
    onUpdate:PropTypes.func
}
Counter.defaultProps={
    onUpdate:f =>f//什么都不做的函数
}
export default Counter
