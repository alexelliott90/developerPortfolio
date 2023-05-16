import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
    <Layout>
        <div className='row mt-3'>
            <h1>About me</h1>
        </div>
        <div className='row'>
                <p>Below is a summary of my career and education history, as well as my personal interests.</p>
        </div>
        <div className='row mt-3'>
            <h2>Professional Summary</h2>
            <p>A Senior Economist, expert at delivering high quality and easily interpreted economic analysis to senior stakeholders and clients to help them to achieve their value and sustainability goals.</p> 
            <p>I am also a trained web developer - this professional summary was built by myself with node.js</p>   
        </div>
        <div className='row mt-3'>
            <h1>Career History</h1>
        </div>
        <div className='row  mt-2'>
            <h2>2020 to Present - Senior Economist - SLR Consulting Limited</h2>
            <p>Head of Economics at SLR's Oil and Gas Advisory Service. Leading and managing multidisciplinary 
                teams to assess investment opportunities and strategy for energy companies to help them to achieve 
                their goals in a sustainable manner. Leading energy market studies across Europe and Africa. 
                Providing in depth advice and due diligence on energy transportation and sales agreements for 
                energy companies and energy buyers. Providing expertise and analysis on commercial issues to 
                assist legal firms and energy companies with dispute resolution.Head of Economics at SLR's Oil 
                and Gas Advisory Service. Leading and managing multidisciplinary teams to assess investment 
                opportunities and strategy for energy companies to help them to achieve their goals in a 
                sustainable manner. Leading energy market studies across Europe and Africa. Providing in depth 
                advice and due diligence on energy transportation and sales agreements for energy companies and 
                energy buyers. Providing expertise and analysis on commercial issues to assist legal firms and 
                energy companies with dispute resolution.</p>
            <h2>2016 - 2020 - Senior Economist - INEOS Energy</h2>
            <p>Head of the group Economics team developing valuations of assets and potential acquisitions for 
                INEOS Energy. Responsible for cash flow forecasting for the group, and for presenting updates to 
                the Board on a regular basis. Received highly positive feedback, with the analysis being used to 
                make high value investment decisions. Provided analysis for budgeting, impairment testing, and 
                updates to debt providers. Provided expertise to solve commercial issues during negotiations.</p>
            <h2>2014 - 2016 - Lead Economist - BG Group Plc</h2>
            <p>Promoted from Economist to Lead Economist in July 2015. Gained excellent feedback for presentation 
                to members of the BG Corporate Executive Team. Built Excel economic models used to generate 
                discounted cash flow analysis for senior management to make high value deal decisions globally. 
                Sole responsibility for creating economic models for developments in the Americas and presenting 
                complex probabilistic analysis to the Corporate Executive Team. Awarded a Shell Recognition Award 
                in October 2016 for assistance with the purchase of BG by Shell.</p>
            <h2>2010 - 2014 - Assistant Manager - Deloitte LLP</h2>
            <p>Provided strategic advisory services to energy companies. This included studies comprising 
                economics, fiscal regimes, competitor intelligence, energy supply and demand, and infrastructure. 
                Presented at Deloitte events to external audiences and regularly at group level meetings, receiving 
                excellent feedback for delivery.</p>
            <h2>2008 - 2010 - Geophysicist - Fugro Emu</h2>
            <p>Carrying out offshore geophysical surveys, data processing, and reporting, for wind farms and 
                offshore wave power generation. Project management and responsibility for bidding for potential 
                projects.</p>
        </div>
        <div className='row mt-3'>
            <h1>Education</h1>
        </div>
        <div className='row mt-2'>
            <h2>2004 - 2008 - Master of Geophysics Degree - University of Southampton</h2>
        </div>
        <div className='row'>
            <p>Grade: 2.1 Honours</p>
            <p>Activities and societies: Three years at Southampton University Officers Training Corps (SUOTC), reaching Junior Under Officer (JUO) level, and passing the Army Officer Selection Board.</p>
            <p>Awarded the BG Group sponsorship for final year Geophysicists</p>
        </div>
        <div className='row mt-2'>
            <h2>2021 - Wine & Spirit Education Trust Level 2 in Wines</h2>
        </div>
        <div className='row'>
            <p>Grade - Distinction</p>
        </div>
        <div className='row mt-3'>
            <h1>Personal Interests</h1>
        </div>
        <div className='row  mt-2'>
            <p>My personal interests include:</p>
        </div>
        <div className='row'>
            <ul>
                <li>Sailing</li>
                <li>Paddleboarding</li>
                <li>Fitness / Weightlifting</li>
                <li>Cycling</li>
                <li>Baking</li>
                <li>Cooking</li>

            </ul>
        </div>

        <style jsx>{
            `
            .Link{
                border: 1px solid grey;
                margin: 3vw
            }

            `}
        </style>
    </Layout>
)