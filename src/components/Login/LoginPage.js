import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {BrowserRouter as Router, withRouter, useHistory as history} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css'

class LoginPage extends Component{
constructor(props){
    super(props)
    this.state =
        {
            username:"",
            password:""
        }

        this.LoginHome = this.LoginHome.bind(this)
    
}

LoginHome = () =>{
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if(username === "Surya" && password === "ch3353burg3r"){

        this.props.history.push("/home")
    }
}

render(){
    

const ButtonStyling = {
    width: "100%",
    borderRadius: 10
}
const BodyStyling = {
    backgroundColor: '#9760d7',
    height: "100%",
    paddingTop: "10%",
    paddingBottom: "10%"
}



    return(
        
        <div style = {BodyStyling}>
         
            <Router>
            <Card id = "CardStyling">
                <Form id = "FormStyling" >
                <h1 id ="TitleStyling">WELCOME TO SIMPLE CRUD</h1>
                    <Form.Group>
                        <Form.Label>USERNAME</Form.Label>
                        <Form.Control type="email" id = "username"/>
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control type="password" id = "password" />
                    </Form.Group>
                    <Button onClick = {()=>this.LoginHome()} className = "ButtonStyling" style = {ButtonStyling} className = "btn btn-primary">LOGIN</Button><hr/>
                    <p id = "orPage">or</p>
                    <hr/>
                    <Button class = "ButtonStyling" style = {ButtonStyling} className = "btn btn-success">SIGN UP</Button>
                </Form>
            </Card>
            </Router>
        </div>
    )
}

}

export default withRouter(LoginPage)