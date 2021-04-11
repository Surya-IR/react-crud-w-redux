import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {store, ShowList, CallDetails} from '../../../../helpers/ActionManager'
import {BrowserRouter as Router, withRouter, useHistory as history} from 'react-router-dom'
class UserList extends Component{
    constructor(props){
        super(props)
        this.state = {
            userdata: this.props.userdata/*[
                {name: "Tommy",
                date_join: {
                    date: 20,
                    month: 1,
                    year: 2021
                },
                membership: 1,
                subscription: 0},
                {name: "Jimmy",
                date_join: {
                    date: 12,
                    month: 2,
                    year: 2021
                },
                membership: 0,
                subscription: 0},
                {name: "Rick",
                date_join: {
                    date: 25,
                    month: 1,
                    year: 2021
                },
                membership: 1,
                subscription: 2},
                {name: "Eddy",
                date_join: {
                    date: 20,
                    month: 1,
                    year: 2021
                },
                membership: 0,
                subscription: 0},
                {name: "Ryan",
                date_join: {
                    date: 20,
                    month: 1,
                    year: 2021
                },
                membership: 1,
                subscription: 1}
            ]*/
        }

        this.toDetails = this.toDetails.bind(this)
        this.checkUserList = this.checkUserList.bind(this)
    }

     componentDidMount(){
        console.log("the props are: "+ this.props.userdata)
        this.setState({
            userdata: this.props.userdata
        })
    }
    

    toDetails = (i) =>{
        
        store.dispatch(CallDetails(i))
        this.props.history.push("/details")
    }

    checkUserList(){
        console.log("mounting")
        store.dispatch(ShowList)
        console.log("dispatch redux")
        let reduxData = store.getState()
        this.setState({userdata: reduxData.data})
        this.state.userdata.map((user,index)=>{
            return(
            <Card className = "ListCardStyling">
                <div className = "EntryStyling">
                    <div className ="row">
                        <div className = "col-sm-3"><h2 className = "UserNameStyling">{user.name}</h2></div>
                        <div className = "col-sm-5"></div>
                        <div className = "col-sm-3"><Button onClick = {()=>this.toDetails(index)} className= "btn btn-success FunctionButton">Details</Button></div>
                    </div>
                    <div className ="row">
                        <div className = "col-sm-3"><h3 className = "UserDateStyling">Date Joined: {user.date_join.date}-{user.date_join.month}-{user.date_join.year}</h3></div>
                        <div className = "col-sm-5"></div>
                        <div className = "col-sm-3"><Button className= "btn btn-danger FunctionButton">Remove</Button></div>
                    </div>
                    
                    
                    <h3 className = "MembershipStyling">Membership: {user.membership === 0 ? <span>Reguler</span> : <span>Premium</span>}</h3>
                </div>
            </Card>
        )})
    }

    render(){
        return(
            <div>
            <Router>
                <h2 id="MainHeader">LIST OF CUSTOMERS</h2>
                <Button onClick = {()=>this.props.history.push("/new")}>ADD+</Button>
                {
                    this.props.userdata.map((user,index)=>{
                        return(
                        <Card className = "ListCardStyling">
                            <div className = "EntryStyling">
                                <div className ="row">
                                    <div className = "col-sm-3"><h2 className = "UserNameStyling">{user.name}</h2></div>
                                    <div className = "col-sm-5"></div>
                                    <div className = "col-sm-3"><Button onClick = {()=>this.toDetails(index)} className= "btn btn-success FunctionButton">Details</Button></div>
                                </div>
                                <div className ="row">
                                    <div className = "col-sm-3"><h3 className = "UserDateStyling">Date Joined: {user.date_join.date}-{user.date_join.month}-{user.date_join.year}</h3></div>
                                    <div className = "col-sm-5"></div>
                                    <div className = "col-sm-3"><Button className= "btn btn-danger FunctionButton">Remove</Button></div>
                                </div>
                                
                                
                                <h3 className = "MembershipStyling">Membership: {user.membership === 0 ? <span>Reguler</span> : <span>Premium</span>}</h3>
                            </div>
                        </Card>
                    )})
                } 
                </Router>
            </div>
        )
    }
}
/**/
export default withRouter(UserList)