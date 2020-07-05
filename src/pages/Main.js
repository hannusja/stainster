import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import Alert from "../components/Alert";
import {protocols} from "../Protocols";
import Step from "../components/Step";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Main extends Component {
  state = {
    alert: false,
    alertline: "",
    alertClose:"",
    chosenStain: [],
    currentStep: {}
  }
  componentDidMount() {
    this.setState({
      alert: true,
      alertline: " Disclaimer: This app and all information within is for educational purpose and student use only. Please follow procedures approved by your organization.",
      alertClose: "I understand this statement and agree with it"
    })
  }
  stainIt=()=>{
    this.setState({
      currentStep: this.state.chosenStain[0]
    })
  }
  nextStep=()=>{
    (this.state.chosenStain.indexOf(this.state.currentStep)===this.state.chosenStain.length-1)?
    (this.setState({
      currentStep:{text:"You have finished this protocol. Please compare results to a know control"}
    })):
    (this.setState({
      currentStep:this.state.chosenStain[this.state.chosenStain.indexOf(this.state.currentStep)+1]
    }))
  }

  render () {
    return(
    <Jumbotron>
          <Alert style={{ opacity: this.state.alert ? 1 : 0, width: "400px" }} >
            {this.state.alertline}
            <button style={{color:"#0000ff"}} onClick={() => this.setState({alert: false})} > {this.state.alertClose} </button>
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
          <button style={{color:"#0000ff", opacity: this.state.chosenStain.length ? 1 : 0}} onClick={this.stainIt}> Start </button>
          {this.state.chosenStain.map(Step)} 
      </Container>
    {/* <Container style={{opacity: this.state.currentStep?1:0}}>{this.state.currentStep.text}</Container> */}
    <Modal show={Object.entries(this.state.currentStep).length?(true):(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Current step</Modal.Title>
        </Modal.Header>
    <Modal.Body>{this.state.currentStep.text}</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={this.nextStep}>
            Check
          </Button>
        </Modal.Footer>
      </Modal>
    </Jumbotron>
    )
  }
  
}


export default Main;