// import React, { Component } from "react";
// import Step from "../components/Step"
// import Container from "../components/Jumbotron"




// class Stain1 extends Component {

//     protocol=[
//     {
//         id: 1,
//         text:"Rinse in DI water",
//         timer: true,
//         minutes: 5,
//         seconds: 5
//     },
//     {
//         id: 2,
//         text:"Drain",
//         timer: false,
//         checked: this.checked
//     },
//     {
//         id: 3,
//         text: "Run to xylene",
//         timer: false
//     },
//     {
//         id: 4,
//         text:"Coverslip",
//         timer:false
//     }
// ]

//     checked=()=>{
        
//         console.log("Clicked")
//     }
//     render() {
//         return(
//             <Container>
//                 {this.protocol.map(Step)}
//             </Container>
//         )
//     }
// }

    const Stain1=[
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
        timer: false,
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
export default Stain1