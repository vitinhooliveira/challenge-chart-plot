import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/top.css'
import { render } from '@testing-library/react';

class Top extends Component {
    render() {
        return (
            <div className='Top' >
                <Typography variant="h2">
                    Victor Challenge
                </Typography>
            </div>
        )
    }
}


export default Top