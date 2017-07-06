import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'
const colors = ['rgba(20,120,250, .7)', 'rgba(34,0,255, .7)', 'rgba(20,120,250, .7)', 'rgba(34,0,255, .7)', 'rgba(20,120,250, .7)', 'rgba(34,0,255, .7)', 'rgba(20,120,250, .7)','rgba(34,0,255, .7)','rgba(20,120,250, .7)']
class TripReport extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.toInches = this.toInches.bind(this);
  }
  componentWillMount(){
    console.log(this.props.locationParent);
    if(this.props.locationParent){

      fetch(`/api/observations/${this.props.locationParent}`)
      .then(res => res.json())
      .then((trip) => {
        this.setState(trip)
      })
    }else{
      fetch(`/api${this.props.location.pathname}`)
      .then(res => res.json())
      .then((trip) => {
        this.setState(trip)
      })
    }
  }
  toInches(layers){
    if(layers !== undefined){
      let datasets = [];
      for(var i = 0; i < layers.length; i++){
        let dataset = {};
        dataset.label = layers[i].type;
        let inches = 0;
        for(var j = 0; j <= i; j++){
          inches += layers[j].ft * 12 + layers[j].in
        }
        dataset.data = [inches, inches];
        dataset.backgroundColor = [colors[i]];
        datasets.push(dataset);
      }
      return datasets;
    }
  }
  render(){
    let layers = this.toInches(this.state.layers);
    let chartData = {
     labels: [],
     datasets: layers}
     let chartOptions = {
      maintainAspectRatio:false,
      responsive:false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
  }
    return (
      <div className="container" id="trip">
        <Line data={chartData} options={chartOptions} width={1010} height={500}/>
      </div>
    )
  }
}

export default TripReport
