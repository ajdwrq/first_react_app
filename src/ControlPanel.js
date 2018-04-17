import React, {Component} from 'react'
import Counter from './Counter'
class ControlPanel extends Component{

    constructor(props){
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues=[0,10,20];
        const initSum = this.initValues.reduce((a,b) => a+b,0);
        this.state = {
            sum:initSum
        };
    }
    onCounterUpdate(newValue,previousValue){
        const valueChange = newValue-previousValue;//改变值
        this.setState(
            {sum:this.state.sum+valueChange}//将改变值复制到sum
        )
    }


    render (){
        console.log('enter CountorPanel render');
        return (
            <div>
                <Counter  caption = "First"  initValue = {0}/>
                <Counter  caption = "Second"  initValue = {10}/>
                <Counter  caption = "Third" onUpdate={this.onCounterUpdate} initValue = {20}/>
                <button onClick={()=>this.forceUpdate()} >Click me to repaint!</button>

                <hr/>
                <div>TotalCount:{this.state.sum}</div>
            </div>
        )
    }
}
export default ControlPanel