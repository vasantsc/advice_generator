import React, {Component} from "react";
import axios from 'axios';
import './App.css'
import Loading from "./loading";
class App extends Component{
    state = {
        advice : '',
        loading: true,
    }
    componentDidMount(){
       this.getAdvice();
    }

    updateBackgroundImage = () => {
        axios
          .get("https://source.unsplash.com/random")
          .then((response) => {
            const backgroundImageUrl = response.request.responseURL;
            const id = document.getElementById('image-container');
            id.style.backgroundImage = `url('${backgroundImageUrl}')`;
          })
          .catch((error) => {
            console.error("Error fetching background image:", error);
          });
      };

    getAdvice = () => {
        this.setState({ loading: true });
        axios.get(`https://api.adviceslip.com/advice`).then((res)=>{
            this.updateBackgroundImage();
            const {advice } = res.data.slip;
            this.setState({ advice, loading: false }); 
        }).catch((err)=>{
            console.log(err?.message);
            this.setState({ loading: false }); 
        });
    }

    render (){
        const {advice,loading } = this.state;
        return (
          <div id="image-container" className="app">
            <div className="card">
                {!loading && <h1 className="heading">{advice}</h1>}
                {loading && <Loading />} 
                <button className="gradient-button" onClick={()=>this.getAdvice()}>Get Advice</button>
            </div>
           
          </div>
        );
    }
}

export default App;