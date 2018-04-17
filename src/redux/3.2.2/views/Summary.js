import React,{Component} from 'react';
import store from '../store/Store.js';

class Summary extends Component{
    constructor(props){
        super(props);

        this.onChange=this.onChange.bind(this);
        this.getOwnState=this.getOwnState.bind(this);
        this.state=this.getOwnState();
    }

    getOwnState(){
        const state =store.getState();
        let sum = 0 ;
        for (const key in state){
            if(state.hasOwnProperty(key)){
                sum+=state[key];
            }
        }
        return {sum:sum};
    }
    onChange(){
        this.setState(this.getOwnState());
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.sum !== this.state.sum;
    }
    componentDidMount(){
        store.subscribe(this.onChange);
    }
    componentWillUnMount(){
        store.unsubscribe(this.onChange);
    }
    render(){
        const sum = this.state.sum;
        return (
            <div>
                <span>sum:{sum}</span>
            </div>
        )
    }

}

export default Summary;