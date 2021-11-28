import React from 'react';
import axios from 'axios';
import './App.css';
import './Header';

class Advice extends React.Component{
    state={advice:''}

    componentDidMount(){
     this.fetchAdvice();
    }
   fetchAdvice=()=>{
       axios.get('https://api.adviceslip.com/advice')
       .then((response)=>{
            const {advice}=response.data.slip;
            this.setState({advice});
       })
       .catch((error)=>{

       });
   }
    render(){
        const {advice}=this.state;
        return(
               <div>
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Random ADVICE!  </span>
                    </button>
                </div>
            </div>
        
              </div>
             
        )
    }
}
export default Advice;