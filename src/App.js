

import React, { Component } from 'react'

export default class App extends Component {

state ={
person :{
  fullName: 'Neymar da Silva Santos',
  bio: '(born February 5, 1992, Mogi das Cruzes, Brazil) Brazilian football (soccer) player .',
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
       <h1 style={{color: "red", margin: "10px", textAlign: "center" }}>     {this.state.person.fullName}  </h1>
       <h3 style={{Color: "blue" , margin: "10px", textAlign: "center"}}>     {this.state.person.bio}       </h3>
       <img src={this.state.person.imgSrc} alt="Profile" width={'200px'} style={{ marginLeft: "650px"  }} />
       <h2  style={{color: "#193627", margin: "10px", textAlign: "center" }}>     {this.state.person.profession}</h2>
       <p style={{color: "red", margin: "10px", textAlign: "center" }}>Time:{this.state.time}</p>
       </div> :null 
        }

        {/* si bouton =true ,il se change => false et si false devient =>true*/ }
      <button style={{color: "green", marginLeft: "730px"}}  onClick={()=>{if (this.state.shows==true){this.setState({shows:false})}else {this.setState({shows:true})};console.log(this.state.shows )}}>Show me</button>
      
      </div>
    )
  }
}
