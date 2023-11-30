
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
     
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'

export default class App extends Component {

state ={
person :{
  fullName: 'Neymar',
  bio: 'A Footballeur',
  imgSrc: 'https://www.nicepng.com/png/detail/173-1739512_neymar-png.png', 
  profession: 'Footballeur',
} ,
shows :true ,
time : 0,

}
//compteur : method is used to execute a function repeatedly at specified time intervals(milliseconds).
componentDidMount() { 
  setInterval (() => {
    this.setState ({time:this.state.time+1})
      
    },1000)
    
}
//redemarer le compeur si on refrech la page web
componentWillUnmount(){
  clearInterval(this.interval)
}
  render() {
    return (
      
       <div style={{backgroundColor: "lightblue"}}>
        {/* si notre state: shows ==true ,notre person s'affiche */}
        { (this.state.shows ==true )?
       <div >
       <h1 style={{color: "red"}}>      {this.state.person.fullName}  </h1>
       <h2 style={{Color: "red"}}>     {this.state.person.bio}       </h2>
       <img src={this.state.person.imgSrc} alt="Profile" width={'200px'}  />
       <h2 >     {this.state.person.profession}</h2>
       <p>Time:{this.state.time}</p>
       </div> :null 
        }

        {/* si bouton =true ,il se change => false et si false devient =>true*/ }
      <button onClick={()=>{if (this.state.shows==true){this.setState({shows:false})}else {this.setState({shows:true})};console.log(this.state.shows )}}>show me</button>
      
      </div>
    )
  }
}
