import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../components/Home'
class MainRoute extends Component {
    render() {
        return(<Switch>
            <Route exact path="/" component={Home}/>
            
        </Switch>);
    }
}

export default MainRoute