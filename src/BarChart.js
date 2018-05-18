import React, {Component} from 'react';
import AmCharts from '@amcharts/amcharts3-react';

class BarChart extends Component{
    render(){
        return(
            <div className = "barChart">
                <AmCharts.React
            style={{
              width: "100%",
              height: "400px"
            }}
            options={{
              "type": "serial",
              "theme": "dark",
              "dataProvider": [{
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
              "valueAxes": [ {
                "gridColor": "#FFFFFF",
                "gridAlpha": 0.2,
                "dashLength": 0
              } ],
              "gridAboveGraphs": true,
              "startDuration": 1,
              "graphs": [ {
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "fillAlphas": 0.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "sales"
              } ],
              "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
              },
              "categoryField": "car",
              "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickPosition": "start",
                "tickLength": 20
              },
              "export": {
                "enabled": true
              }
            }} />
            </div>

        )
    }
}

export default BarChart;