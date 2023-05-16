import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

const Layout = (props) => (
   <div>
	<Head>
	   <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossOrigin="anonymous"
		/>
	</Head>
  	<div className='Content'>
    	<Header />
    	{props.children}
  	</div>
        <style global jsx>
            {`
                body {
                    background: lightblue;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    color: navy;
                }
                h1{
                    font-size: 2.25vw;
                    font-weight: bold;
                }
    
                h2{
                    font-size: 1.5vw;
                    font-weight: bold;
                }
            `}
        </style>
        <style jsx>{
            `
            .Content{
                color:black;
                margin: 5vw;
                padding: 2vw;
                border: 2px solid navy
            }
            p {
                color: blue;
                }
            div {
                background: lightblue;
                }
            @media (max-width: 600px) {
                div {
                background: blue;
                }
            }
            `}
        </style>
    </div>
  
)

export default Layout