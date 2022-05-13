import * as react from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

// Find all widget divs
const WidgetTargets = document.querySelectorAll('.referrio-embed-widget')

// Inject our React App into each
WidgetTargets.forEach(Div => {
  ReactDOM.render(
    <react.StrictMode>
      <App domElement={Div}/>
    </react.StrictMode>,
    Div
  );
});

