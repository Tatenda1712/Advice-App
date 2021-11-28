import React from 'react';
import './App.css';
import './Header';
import HeadSection from './Header';
import Advice from './Advice';

class App extends React.Component{

    render(){
        return(
               <div>
                 <HeadSection/>
                     <Advice/>
                     </div>
        
             
        )
    }
}
export default App;