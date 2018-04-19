import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ClickCount from './ClickCount';
import SampleButton from './SampleButton';
/*import ControlPanel from './ControlPanel';*/
/*import Counter from './Counter';*/
import Sample from './Sample'
/*import ControlPanel1 from './flux/views/ControlPanel';*/
import ControlPanel2 from './redux/3.2.2/views/ControlPanel.js';
import Ycjzsj from './Ycjzsj';

ReactDOM.render(
    <div>
   {/* <App />
        <ClickCount/>
        <Counter caption={'123'} initValue={20} />
        <br/>
        <SampleButton id = 'sample' borderWidth = {2} //onClick = {onButtonClick}
                      style = {{color:"red"}}
        />
        <ControlPanel/>

        <Sample/>
        <hr/>*/}
        {/*<ControlPanel1/>*/}
       {/* <ControlPanel2/>*/}

        <Ycjzsj/>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
