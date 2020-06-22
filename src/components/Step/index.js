import React from "react";
import Container from "../Jumbotron"

function Step (props) {
    return (
        <Container>
            <button style={{color:"#0000ff", ...props.style}}> {props.text} </button>
            <Container>
                {(props.timer) ? (
                    <button style={{color:"#0000ff"}}> {props.minutes}:{ props.seconds < 10 ? `0${ props.seconds }` : props.seconds } </button> 
                ) :
                (<button style={{color:"#0000ff"}}> Check </button>)}
            </Container>
        </Container>
    )
}

export default Step;