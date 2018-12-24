import React,{Component} from 'react'
import Header from './components/Header'
import MainRoute from './routes/MainRoute'

class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                <MainRoute />
            </div>
        );
    }
}

export default Main;