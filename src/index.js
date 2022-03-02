import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

import App from './Components/App'

import './index.css'

const defaultState = {
    html:'<h1>Enter HTML here</h1>\n<p class="alert alert-primary">Bootstrap is imported</p>'
}

const UPDATE_HTML = "UPDATE_HTML"

const updateHtmlAction = (html) => ({
    type: UPDATE_HTML,
    html
})

const reducer = (state=defaultState, action)=>{
    console.log(action)
    switch(action.type){
        case UPDATE_HTML: return {...state, html:action.html}
        default: return state
    }
}

const store = createStore(reducer)

const bindPropsToState = (state) => ({
    html: state.html
})
const bindPropsToAction = (dispatch) => ({
    submitUpdateHtmlAction: (html)=>dispatch(updateHtmlAction(html))
})



const Connected = connect(bindPropsToState,bindPropsToAction)(App)

const Main = () => {
    return (
        <Provider store={store}>
            <Connected />
        </Provider>
    )
}

ReactDOM.render(<Main />, document.getElementById("root"))