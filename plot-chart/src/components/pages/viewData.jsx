import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import dados from '../data/data'
import '../css/viewData.css'

class ViewData extends Component {
    render() {
        return (
            <div className='View'>
                <Line
                    data={{
                        labels: ['0', '1'],
                        datasets: [{
                            label: [dados[2].os + " " + dados[2].browser + " Max Response Time"],
                            data: [dados[2].max_response_time, dados[3].max_response_time],
                            borderColor: [
                                'rgba(20, 104, 222)'
                            ],
                            borderWidth: 2
                        }, {
                            label: [dados[2].os + " " + dados[2].browser + " Min Response Time"],
                            data: [dados[2].min_response_time, dados[3].min_response_time],
                            borderColor: [
                                'rgba(83, 142, 224)'
                            ],
                            borderWidth: 2
                        }, {
                            label: [dados[4].os + " " + dados[4].browser + " Max Response Time"],
                            data: [dados[4].max_response_time, dados[5].max_response_time],
                            borderColor: [
                                'rgba(8, 153, 37)'
                            ],
                            borderWidth: 2
                        }, {
                            label: [dados[4].os + " " + dados[4].browser + " Min Response Time"],
                            data: [dados[4].min_response_time, dados[5].min_response_time],
                            borderColor: [
                                'rgba(24, 237, 66)'
                            ],
                            borderWidth: 2
                        }, {
                            label: [dados[8].os + " " + dados[8].browser + " Max Response Time"],
                            data: [dados[8].max_response_time, dados[9].max_response_time],
                            borderColor: [
                                'rgba(247, 7, 27)'
                            ],
                            borderWidth: 2
                        }, {
                            label: [dados[8].os + " " + dados[8].browser + " Min Response Time"],
                            data: [dados[8].min_response_time, dados[9].min_response_time],
                            borderColor: [
                                'rgba(237, 71, 85)'
                            ],
                            borderWidth: 2
                        }, {
                            label: [dados[6].os + " " + dados[6].browser + " Max Response Time"],
                            data: [dados[6].max_response_time, dados[7].max_response_time],
                            borderColor: [
                                'rgba(229, 245, 5)'
                            ],
                            borderWidth: 2
                        }, {
                            label: [dados[6].os + " " + dados[6].browser + " Min Response Time"],
                            data: [dados[6].min_response_time, dados[7].min_response_time],
                            borderColor: [
                                'rgba(235, 245, 105)'
                            ],
                            borderWidth: 2
                        }
                        ],

                    }}
                    height={400}
                    width={600}
                />
            </div>
        )
    }
}



export default ViewData