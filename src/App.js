import React, {Component} from "react";
import axios from 'axios';
import './App.css'
import Loading from "./loading";
class App extends Component{
    state = {
        advice : ''
    }
    componentDidMount(){
       this.getAdvice();
    }

    getAdvice = () => {
        axios.get(`https://api.adviceslip.com/advice`).then((res)=>{
            const {advice } = res.data.slip;
            this.setState({advice});
          
        }).catch((err)=>{
            console.log(err?.message);
        });
    }
    render (){
        const {advice} = this.state;
        return (
          <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button onClick={()=>this.getAdvice()}>Get Advice</button>
            </div>
            <Loading/>
          </div>
        );
    }
}

export default App;