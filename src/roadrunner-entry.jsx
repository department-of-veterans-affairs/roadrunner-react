import React from 'react';
import ReactDOM from 'react-dom';

import RoadrunnerApp from './components/RoadrunnerApp';

function init() {
  ReactDOM.render(<RoadrunnerApp/>, document.getElementById('react-root'));
}

export { init };
