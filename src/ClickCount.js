import React,{Component} from 'react'
class ClickCount extends Component{
    //构造方法
    constructor(props){
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count:0}
    }
    onClickButton (){
        this.setState({
            count:this.state.count+1
        });
    }

    render(){
        return (
            <div>
                <button onClick={this.onClickButton}>Click Me </button>
                <div>
                    Click Count:{this.state.count}
                </div>
            </div>
        )
    }

}
export default ClickCount