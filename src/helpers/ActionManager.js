import {createStore} from 'redux'

const userdata = {
    data:[
        {id:1,
        name: "Cheeseburger",
        date_join: {
            date: 20,
            month: 1,
            year: 2021
        },
        membership: 1,
        subscription: 0},
        {id:2,
        name: "Jimmy",
        date_join: {
            date: 12,
            month: 2,
            year: 2021
        },
        membership: 0,
        subscription: 0},
        {id:3,
        name: "Rick",
        date_join: {
            date: 25,
            month: 1,
            year: 2021
        },
        membership: 1,
        subscription: 2},
        {id: 4,
        name: "Eddy",
        date_join: {
            date: 20,
            month: 1,
            year: 2021
        },
        membership: 0,
        subscription: 0},
        {id: 5,
        name: "Ryan",
        date_join: {
            date: 20,
            month: 1,
            year: 2021
        },
        membership: 1,
        subscription: 1}
    ]
}

let currentDetails = {}

function setDetails(i){
    currentDetails = userdata.data[i]
    console.log(currentDetails)

}

export const showDetails = {
        type: "show"
    
}
export const DeleteUser = () =>{
    return{
        type:"delete"
    }
}

export const CallDetails =(i)=>{
    return{
        type: "set",
        index: i
    }
}

export const AddUser = (data) =>{
    return{
        type:"add",
        NewEntry:{
            id: data.id,
            name: data.name,
            date_join:data.date_join,
            membership:data.membership,
            subscription:data.subscription
        }
    }
}

export const EditUser = (update) =>{
    return{
        type:"edit",
        UpdateEntry:{
            id: update.id,
        name: update.name,
        date_join:update.date_join,
        membership:update.membership,
        subscription:update.subscription
        }
    }
}


export const ShowList = {
        type:"list"
    }

export const UserManager = (state = userdata, action = {}) =>{
    
    switch(action.type){
        case "edit":{
            state = userdata
            console.log(action.UpdateEntry.id)
            const dataId = state.data.findIndex(data=> data.id === action.UpdateEntry.id)
            const newUserList = [...state.data];
            newUserList[dataId] = action.UpdateEntry
            currentDetails = action.UpdateEntry
            userdata.data = newUserList
             return{
                 ...state,
                 data: newUserList
             }
        }
        case "add":
            console.log("AddUser running")
            state = userdata
            let newUserList = [...state.data]
            newUserList.push(action.NewEntry)
            console.log(newUserList)
            userdata.data = newUserList
            return {
                ...state,
                data: userdata
            }
        case "set":{
            setDetails(action.index)
            return
        }
        case "show":{
            console.log("redux show running")
            console.log(currentDetails)
            return currentDetails
        }
        default:{

            return {...state}
        }
    }
}
let store = createStore(UserManager)
export {store}
