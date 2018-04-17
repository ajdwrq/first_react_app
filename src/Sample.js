import React,{Component} from 'react'
class Sample extends Component{

    constructor(props){
        super(props);
        this.state = {foo:'bar'};
    }
    render(){
        return (<div></div>)
    }
}

Sample.defaultProps = {
    return : {sampleProp : 0}
};
export default Sample
