import React, { useState } from 'react';
import Top from './top'
import ViewData from './viewData'
import Button from '@material-ui/core/Button';
import '../css/home.css'

function Home() {

    const [generateChart, setGenerateChart] = useState(false)

    function showgenerateChart() {

        const show = setGenerateChart(!generateChart)
        return (show)

    }

    return (
        <div>
            <Top></Top>
            <div>
                {generateChart === true ? <ViewData /> : ''}

            </div>
            <section className='ButtonGerateChart'>

                <Button variant="contained" color="primary" onClick={showgenerateChart} > GENERATE CHART </Button>
            </section>

        </div>
    )
}

export default Home