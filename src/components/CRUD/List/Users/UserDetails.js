import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {store, ShowList, CallDetails, showDetails} from '../../../../helpers/ActionManager'
import {BrowserRouter as Router, Link, withRouter, useHistory} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserDetails.css'

class UserDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            userDetails:{}
        }
        this.toList = this.toList.bind(this)
        this.toEdit = this.toEdit.bind(this)
    }

    toEdit(){
        //store.dispatch(CallDetails(i))
        this.props.history.push({
            pathname:"/edit"})
    }
    toList(){
   
        store.dispatch(ShowList)
        let reduxData = store.getState()
        return reduxData.data
    }

   

    componentDidMount(){
        store.dispatch(showDetails)
    let userFetch = store.getState() 
        this.setState({
            userDetails: userFetch
        })
        console.log(userFetch)
        let keyLists = Object.keys(this.state.userDetails)
        for (let i = 0; i <= keyLists.length; i++){
            console.log("test")
            console.log(keyLists[i])
        }
    }

    
    render(){
        return(
            <div>
                <Card>
                <div className = "DetailsStyling">
                    <h2 className = "DataStyling">NAME : </h2><h2 className = "UserDataStyling">{this.state.userDetails.name}</h2>
                    <h2 className = "DataStyling">ID: </h2><h2 className = "UserDataStyling"> {this.state.userDetails.id}</h2>
                    <h2 className = "DataStyling">SUBSCRIPTION TYPE: </h2><h2 className = "UserDataStyling"> {this.state.userDetails.subscription === 0 ? "Product 1": "Product 2"}</h2>
                    <h2 className = "DataStyling">MEMBERSHIP: </h2><h2 className = "UserDataStyling"> {this.state.userDetails.membership === 0 ? "Regular": "Premium"}</h2>
                    <Link to={{pathname:"/home"}}><Button className = "ButtonLayout btn btn-primary">&lt;&lt;BACK</Button></Link>
                    <Button onClick = {()=>{this.toEdit()}}className = "ButtonLayout btn btn-success">EDIT</Button>
                </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(UserDetails)