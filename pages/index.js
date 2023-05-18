import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
    <Layout>
		<div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    <img src="/static/images/profilePic.jpeg/"/>
                </div>
                <div className='col-md-9'>
                    <h1>Introduction</h1>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-12'>
                    <p>If you follow the links in the header, you will find information about my development portfolio to date, as well as information about me and my career 
                        history. You can also contact me via the details in the contact section.
                    </p>
                </div>
            </div>
        </div>
        <style jsx>
            {`
            img{
                height: 10vw;
                padding-left: 2vw;
            }
            h1{
                text-align: left;
            }

            p{
                text-align: center
            }
            `}
        </style>


    </Layout>
    
)