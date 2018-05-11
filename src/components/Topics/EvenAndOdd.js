import React, { Component } from 'react';

class EvenAndOdds extends Component {
 constructor(){
   super();

   this.state = {
     evenArray:[],
     oddArray:[],
     userInput: ''
   }
 }

 changeUserInput(val){
   this.setState({userInput: val})
 }

 getEvenOdds(str){
 let arr = str.split(',');
 let even = [];
 let odd = [];

 for(let i = 0; i <arr.length; i++){
   if(arr[i] % 2 === 0 ){
     even.push(+arr[i])
     // var even = this.state.evenArray.push
     // this.setState({evenArray: this.state.evenArray.push(+arr[i])})
     console.log(this.state.evenArray);
   } else{
     odd.push(+arr[i])
     // this.setState({oddArray: this.state.oddArray.push(+arr[i])})
   }
 }  

 console.log(this.state.oddArray);
 
 this.setState({evenArray: even, oddArray: odd})
 }

 render() {
   console.log(this.state);
   return (
     <div className="puzzleBox evenAndOddPB">
       <h4>Evens and Odds</h4>
       <input className="inputLine" onChange={(e) => this.changeUserInput(e.target.value)}/>
       <button className="confirmationButton" onClick={() => this.getEvenOdds(this.state.userInput)}></button>
       <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
       <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
     </div>
   )
 }
}

export default EvenAndOdds;
