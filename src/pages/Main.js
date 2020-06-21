import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import Alert from "../components/Alert"
import DeleteBtn from "../components/DeleteBtn"


class Main extends Component {
  state = {
    alert: false,
    alertline: ""
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
            <DeleteBtn onClick={() => this.setState({alert: false})} />
          </Alert>
      <Container>

      </Container>
    </Jumbotron>
    )
  }
  
}


export default Main;