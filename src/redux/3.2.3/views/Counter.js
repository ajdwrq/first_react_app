import React,{Componment} from 'react'


const buttonStyle={
  margin:'10px'
};

/*class Counter extends Componment{

    render(){
        const {caption,onIncrement,onDecrement,value} = this.props;
        return(
            <div>
                <button style={buttonStyle} onclick={onIncrement}></button>
                <button style={buttonStyle} onclick={onDecrement}></button>
                <span>{caption} Count:{value}</span>
            </div>
        )
    }
}*/

function Counter (props){
    const {caption,onIncrement,onDecrement,value} = props;
    return(
        <div>
            <button style={buttonStyle} onclick={onIncrement}></button>
            <button style={buttonStyle} onclick={onDecrement}></button>
            <span>{caption} Count:{value}</span>
        </div>
    )
}
class CounterContainer extends Componment{

    constructor(props){
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.setState({
           caption:this.props.caption,
           value:this.state.value
        });
    }
    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        };
    }
    onIncrement(){

    }

    onDecrement(){

    }

    render(){
        return(
            <Counter caption={this.props.caption}  onIncrement={this.onIncrement}
                     onDecrement={this.onDecrement} value={this.state.value}
            />
        )
    }
}