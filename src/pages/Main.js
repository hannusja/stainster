import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import Alert from "../components/Alert"
import {protocols} from "../Protocols"
import Step from "../components/Step"

class Main extends Component {
  state = {
    alert: false,
    alertline: "",
    chosenStain: [],
    minutes: 0,
    seconds: 0
  }
  componentDidMount() {
    this.setState({
      alert: true,
      alertline: " Disclaimer: This app and all information within is for educational purpose and student use only. Please follow procedures approved by your organization."
    })
  }

  render () {
    return(
    <Jumbotron>
          <Alert style={{ opacity: this.state.alert ? 1 : 0, width: "400px" }} >
            {this.state.alertline}
            <button style={{color:"#0000ff"}} onClick={() => this.setState({alert: false})} > I understand this statement and agree with it </button>
          </Alert>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Available Stains
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {protocols.map((stain,index)=>(<button className="dropdown-item" key={index} onClick={()=>this.setState({chosenStain:protocols[index].action})}>{stain.name}</button>))}
        </div>
      </div>
      <Container>
          {this.state.chosenStain.map(Step)} 
      </Container> 
    </Jumbotron>
    )
  }
  
}


export default Main;