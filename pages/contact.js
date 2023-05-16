import Link from 'next/link'
import Layout from '../components/MyLayout'
import { Container } from 'react-bootstrap'

export default () => (
    <Layout>
        <div className='row mt-3'>
            <div className='col-md-6'>
                <h1>Contact Details</h1>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-md-8'>
                <div className='row'>
                    <h2>Below are my contact details as well as links to my professional profiles:</h2>
                </div>
                <div className='row mt-3'>
                    <p>Tel: XXXXXXXX</p>
                </div>
                <div className='row'>
                    <p>Email: XXXXXXXX</p>
                </div>
                <div className='row'>
                    <p>Linkedin:  <a href="https://www.linkedin.com/in/alexanderelliott/">
                        Alex Elliott - Linkedin</a></p>
                </div>
                <div className='row'>
                    <p>Github:  <a href="https://github.com/alexelliott90">
                        Alex Elliott - Github</a></p>
                </div>
            </div>

            <div className='col-md-4'>
                    <img src="/static/images/profilePic.jpeg/"/>
            </div>
        </div>

        <style jsx>
            {`
            img{
                height: 15vw;
                padding: 2vw;
            }

            h2{
                padding-left: 1vw;
                font-size: 1.5vw   
            }

            p{
                padding-left: 1vw
            }
            `}
        </style>


    </Layout>
)