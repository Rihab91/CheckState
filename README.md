# create projet name CheckState



## rcc

App.js (class-based component)

###  state ={ person :{

a state for this class  Person ={ fullName,bio, imgSrc, profession} and a boolean shows


### { (this.state.shows ==true )?

When the show state is true, the person's profile will appear.

### onClick={()=>{if (this.state.shows==true){this.setState({shows:false})}else {this.setState({shows:true})}

action sur le bouton a chaque click , once true and once false every click 
### componentDidMount / setInterval 
shows the time interval since the last component was mounted using the component lifecycle


