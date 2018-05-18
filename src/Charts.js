import React, {Component} from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';

class Charts extends Component{
    render(){
        return(
            <div className = "flex-container">
                <BarChart audi={this.props.audi} merc={this.props.merc} mase={this.props.mase} toyo={this.props.toyo}/>
                <PieChart audi={this.props.audi} merc={this.props.merc} mase={this.props.mase} toyo={this.props.toyo}/>
            </div>
        )
    }
}

export default Charts;
