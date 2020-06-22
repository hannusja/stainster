import React, { Component } from "react";
import Step from "../components/Step"
import Container from "../components/Jumbotron"

class Stain1 extends Component {

    render() {
        return(
            <Container>
                <Step text="Rinse in DI water" timer={true} minutes={5} seconds={5}></Step>
                <Step text="Drain" timer={false} />
            </Container>
        )
    }
}

export default Stain1