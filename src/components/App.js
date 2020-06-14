import React from 'react'
import { hot } from 'react-hot-loader'
import FormContainer from "./FormContainer";

class App extends React.Component{
    render() {
        return (
           <FormContainer />
        )
    }
}

export default hot(module)(App)
