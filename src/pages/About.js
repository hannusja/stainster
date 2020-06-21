import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import {Container} from "../components/Grid";

class Projects extends Component {

    render() {
        return (
            <Jumbotron>
                <Container>
                    This app contains info about ingredients and procedures for special tissue stains used in histology lab. Purpose of this app is to make it easier to calculate necessary amounts of chemicals and keep track of time and steps performed. In a current form this app is for educational purposes and students use only. If staining patient tissue please follow approved by your organization practices. Always follow laboratory safety rules and wear PPE while working with chemicals.
                </Container>
            </Jumbotron>
        );
    }
}

export default Projects;