import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import FormLabel from 'react-bootstrap/FormLabel'
import {store, ShowList,EditUser, AddUser ,showDetails} from '../../../../helpers/ActionManager'
import {BrowserRouter as Router, Link, withRouter, useHistory} from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserDetails.css'

class NewUserForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            userDetails:{
                id: this.props.newId,
                name:"",
                date_join:{
                    date: 0,
                    month: 0,
                    year: 0
                },
                membership: 0,
                subscription: 0
                

            }
        }
        this.changeDetails = this.changeDetails.bind(this)
        this.ConfirmEntry = this.ConfirmEntry.bind(this)
    }

    changeDetails(e){
        console.log("changeDetails Running")
        let today = new Date()
        let newData = this.state.userDetails
        newData.date_join.date = parseInt(today.getDate())
        newData.date_join.month = parseInt(today.getMonth())
        newData.date_join.year = parseInt(today.getFullYear())
        switch(e.target.id){
            case "username":
                newData.name = e.target.value
                this.setState({
                    userDetails: newData
                })
                break
            case "subscription":
                console.log(this.state.userDetails)
                if(e.target.value === "Product 1"){
                    newData.subscription = 0
                    this.setState({
                        userDetails: newData
                    })
                }else{
                    newData.subscription = 1
                    this.setState({
                        userDetails: newData
                    })
                }
                break
            case "membership":
                if(e.target.value === "Reguler"){
                    newData.subscription = 0
                    this.setState({
                        userDetails: newData
                    })
                }else{
                    newData.subscription = 1
                    this.setState({
                        userDetails: newData
                    })
                }
                break
                default:
                    break
        }
        
    }
    async ConfirmEntry(newData){
        console.log("ConfirmUpdate Running")
        await store.dispatch(AddUser(newData))
        this.props.updateList()
       
        
        this.props.goBack()
    }
    async componentDidMount(){
       
       document.getElementById("username").value = this.state.userDetails.name
       document.getElementById("id").value = this.state.userDetails.id
       document.getElementById("subscription").title = this.state.userDetails.subscription === 0 ? "Product 1": "Product 2"
       document.getElementById("membership").value = this.state.userDetails.subscription === 0 ? 0 : 1
    }
    render(){
        return(
            <div>
                <Card>
                <Form className = "DetailsStyling">
                    <FormLabel className = "DataStyling">NAME : </FormLabel>
                    <Form.Control id = "username" className = "UserDataStyling"/>
                    <FormLabel disabled className = "DataStyling">ID: </FormLabel>
                    <Form.Control id = "id" className = "UserDataStyling"/>
                    <FormLabel className = "DataStyling">SUBSCRIPTION TYPE: </FormLabel><br/>
                    <select style ={{ width: "50%", marginLeft: "2%", marginTop: "2%", marginBottom: "2%", height: 30 }} id = "subscription">
                        <option value ={0} eventKey="Product 1">Product 1</option>
                        <option value ={1} eventKey="Product 2">Product 2</option>
                    </select><br/>
                    <FormLabel className = "DataStyling">MEMBERSHIP: </FormLabel><br/>
                    <select style ={{ width: "50%", marginLeft: "2%", marginTop: "2%", marginBottom: "2%", height: 30 }} id = "membership">
                        <option value = {0} eventKey="Regular">Reguler</option>
                        <option value ={1} eventKey="Premium">Premium</option>
                    </select><br/>
                    <Button onClick ={()=>this.props.history.push("/details")} className = "ButtonLayout btn btn-primary">&lt;&lt;BACK</Button>
                   
                </Form>
                <Button
                    onClick={()=>{this.ConfirmEntry(
                        {name: document.getElementById("username").value,
                            id:parseInt(document.getElementById("id").value),
                            date_join:this.state.userDetails.date_join,
                            subscription: parseInt(document.getElementById("subscription").value),
                            membership:parseInt(document.getElementById("membership").value)})}} className="btn btn-success">CONFIRM</Button>
                </Card>
            </div>
        )
    }
}
// onChange = {(e)=>{this.changeDetails(e)}}
export default withRouter(NewUserForm)