import React, {Component} from 'react';
import Charts from './Charts';

class ChartValues extends Component{
    constructor(){
        super()
        this.state = {
            audi: 0,
            merc: 0,
            maseratti: 0,
            toyota: 0
        }
        this.setChartValue = this.setChartValue.bind(this);

    }

    setChartValue({ target }){
        this.setState({
            [target.name]: target.value
        })
    }

    render(){
        return(
        <div>
            <Charts audi={this.state.audi} merc={this.state.merc} mase={this.state.maseratti} toyo={this.state.toyota}/>
            <div className="App">    
                <input type = "text" name = "audi" onChange = {this.setChartValue} /><br/>
                <br/>
                <input type = "text" name = "merc" onChange = {this.setChartValue} /><br/>
                <br/>
                <input type = "text" name = "maseratti" onChange = {this.setChartValue} /><br/>
                <br/>
                <input type = "text" name = "toyota" onChange = {this.setChartValue} /><br/>
                <br/>
            </div>    
        </div>    
        )
    }
}


export default ChartValues;
