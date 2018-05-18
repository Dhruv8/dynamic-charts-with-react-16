import React, {Component} from 'react';
import AmCharts from '@amcharts/amcharts3-react';

class PieChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            audi: this.props.aud,
            merc: this.props.merc,
            maseratti: this.props.mase,
            toyota: this.props.toyo
        }
    }

    render(){
        return( 
            <div className = "pieChart">
                <AmCharts.React
                style={{
                width: "100%",
                height: "400px"
                }}
                options={{
                "type": "pie",
                "theme": "light",
                "dataProvider":[{
                    "car": "Audi",
                    "sales": this.props.audi 
                }, {
                    "car": "Mercedes",
                    "sales": this.props.merc
                }, {
                    "car": "Maseratti",
                    "sales": this.props.mase
                }, {
                    "car": "Toyota",
                    "sales": this.props.toyo
                }],
                "valueField": "sales",
                "titleField": "car",
                "balloon":{
                "fixedPosition":true
                },
                "export": {
                    "enabled": true
                }
                }} />
            </div>    
        )
    }

}

export default PieChart; 