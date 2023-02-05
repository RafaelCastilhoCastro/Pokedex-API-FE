import React from 'react';
import { RoutesComponent } from './Components/Routes'
import { GlobalState } from "./Global/GlobalState"
import { GlobalStyle } from './Components/GlobalStyle';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <GlobalState>
      <GlobalStyle/>
      <ToastContainer />

      <RoutesComponent/>
    </GlobalState>
  );
}

export default App;
