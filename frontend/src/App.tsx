import React from 'react';
import {ReactComponent as GitIcon} from './assets/img/github.svg'

function App() {
  return (
   <>
   <header>
     <nav>
       <div>
         <h1>DsMovie</h1>
         <a href="https://github.com/wll-machado" target="_blank" rel="noreferrer">
           <div><GitIcon/></div>
           <p>/wll-machado</p>
         </a>
       </div>
     </nav>
   </header>
   </>
  );
}

export default App;
