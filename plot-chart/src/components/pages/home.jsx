import React, { Component } from 'react';
import Top from './top'
import ViewData from './viewData'
import Button from '@material-ui/core/Button';
import '../css/home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.generateChart = this.generateChart.bind(this);
        this.state = {
            chart: false
        }
    }
    generateChart() {
        this.setState({
            chart: true
        });
    }

    render() {
        return (
            <div>
                <Top></Top>
                <div>
                    {this.state.chart === true ? <ViewData /> : ''}

                </div>
                <section className='ButtonGerateChart'>
                
                <Button variant="contained" color="primary" onClick={this.generateChart} > GENERATE CHART </Button>
                </section>

            </div>
        )
    }
}

export default Home