import React from "react";
import {Container} from "../Grid"

function Step(props) {

    return (
        <Container style={{padding:30}} key={props.id}>
            <Container style={{color:"#0000ff", ...props.style}}> {props.text} </Container>
            <Container>
                {(props.timer) ? (
                    <button style={{color:"#0000ff"}} > {props.minutes}:{props.seconds < 10 ? `0${props.seconds }` : props.seconds } </button> 
                ) :
                (<button style={{color:"#0000ff"}}> Check </button>)}
            </Container>
        </Container>
    )   
}

export default Step;