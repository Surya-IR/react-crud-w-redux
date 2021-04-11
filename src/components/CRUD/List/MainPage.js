import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {BrowserRouter as Router, withRouter, Route, Link} from 'react-router-dom'
import UserDetails from '../List/Users/UserDetails'
import {store, ShowList, CallDetails} from '../../../helpers/ActionManager'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from '../List/Users/UserList';
import EditForm from '../List/Users/EditForm'
import NewUserForm from '../List/Users/NewUserForm'
import './MainPage.css'

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state={
            userdata:[]
        }

        this.updateList = this.updateList.bind(this)
        
    }

    async updateList(){
        console.log("updateList running")
        store.dispatch(ShowList)
        console.log("dispatch redux")
        let reduxData = store.getState()
         this.setState({userdata: reduxData.data})
        console.log(this.state.userdata)
    }
    componentDidMount(){
        console.log("mounting")
        store.dispatch(ShowList)
        console.log("dispatch redux")
        let reduxData = store.getState()
        this.setState({userdata: reduxData.data})
       
    }
    render(){
        return(
            <div>
                
                <div className = "row FullBody">
                    <div className = "col-sm-3 SidebarStyling">
                    <h3 className = "SidebarHeader">COMPANY NAME</h3>
                        <ul className = "SidemenuStyling">
                            <li>USER LIST</li>
                            <li>MANAGE PRODUCTS</li>
                        </ul>
                    </div>
                    <div className = "col-sm-8 user-list">     
                    <Router>
                    <Route exact path="/home" render={(props)=><UserList userdata={this.state.userdata}/>}/>
                    
                    <Route path="/details" component={UserDetails}/>
                    <Route path="/edit" render={()=><EditForm updateList = {()=>this.updateList()}/>}/>
                    <Route path="/new" render={()=><NewUserForm goBack = {()=>this.props.history.push("/home")} updateList = {()=>this.updateList()} newId = {this.state.userdata.length}/>}/>
                    </Router>              
                       
                    </div>
                </div>
                
                
            </div>
        )
    }
}
/*<UserList userdata={this.state.userdata}/>*/
export default withRouter(MainPage)

