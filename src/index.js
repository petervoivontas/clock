import React from 'react';
import ReactDOM from 'react-dom';
import {Clock} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Clock />, document.getElementById('root'));
registerServiceWorker();
