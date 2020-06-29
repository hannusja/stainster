import React, { Component } from "react";
import Step from "../components/Step"
import Container from "../components/Jumbotron"

const protocol=[
    {
        id: 1,
        text:"Rinse in DI water",
        timer: true,
        minutes: 5,
        seconds: 5
    },
    {
        id: 2,
        text:"Drain",
        timer: false
    },
    {
        id: 3,
        text: "Run to xylene",
        timer: false
    },
    {
        id: 4,
        text:"Coverslip",
        timer:false
    }
]

class Stain1 extends Component {

    render() {
        return(
            <Container>
                {protocol.map(Step)}
            </Container>
        )
    }
}

export default Stain1