// import React from 'react';
// import  ReactDOM  from 'react-dom';
// import MainApp from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<MainApp/>,div);
//   ReactDOM.unmountComponentAtNode(div);
// });


import MainApp from "./App";
import {createRoot} from "react-dom/client";

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<MainApp/>);
    root.unmount();
});
