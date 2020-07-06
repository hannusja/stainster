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
    (this.state.currentStep.id===this.state.chosenStain.length)?
    (this.setState({
      currentStep:{text:"You have finished this protocol. Please compare results to a know control"}
    })):
    (this.setState({
      currentStep:this.state.chosenStain[this.state.currentStep.id]
    }))
  }
  quitStain =()=>{
    this.setState({
      currentStep:{}
    })
  }
  handleClick=()=>{
  this.startTimer =  setInterval(() => {
    console.log(this.state)
    const minutes = this.state.currentStep.minutes
    const seconds=this.state.currentStep.seconds
    if (seconds > 0) {
      this.setState(prevState=>({
        currentStep:{...prevState.currentStep,
          seconds: seconds-1
        }
      }))
    }
    if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.startTimer)
          this.makeNoise()
        } else {
          this.setState(prevState=>({
            currentStep:{...prevState.currentStep,
              minutes: minutes - 1,
              seconds: 59
            }
          }))
        }
    } 
  }, 1000)
}
  makeNoise=()=>{
    console.log("Time's up")
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
    <Modal show={Object.entries(this.state.currentStep).length?(true):(false)}>
        <Modal.Header>
          <Modal.Title>Current step</Modal.Title>
        </Modal.Header>
    <Modal.Body>{this.state.currentStep.text}
    </Modal.Body>    
    <Button style={{opacity: this.state.currentStep.timer?1:0}} onClick={this.handleClick}>{this.state.currentStep.minutes}:{this.state.currentStep.seconds < 10 ? `0${this.state.currentStep.seconds }` : this.state.currentStep.seconds }</Button>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.quitStain}>
            Abandon stain
          </Button>
          <Button variant="primary" onClick={this.nextStep}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </Jumbotron>
    )
  }
  
}


export default Main;