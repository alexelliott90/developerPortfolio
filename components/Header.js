import Link from 'next/link'

const Header = () => (
    <div className='Header'>
        <div className='row mt-3'>
            <div className='col-md-12'>
                <h1 className='PageTitle'>Alex Elliott's Developer Portfolio</h1>
            </div>
        </div>

        <div className='row mt-3'>
            <div className='col-md-3'>
                <Link href="/">
                <p className='Link'>Home</p>
                </Link>
            </div>
            <div className='col-md-3'>
                <Link href="/about">
                <p className='Link'>About</p>
                </Link>
            </div>
            <div className='col-md-3'>
                <Link href="/projects">
                <p className='Link'>Projects</p>
                </Link>
            </div>
            <div className='col-md-3'>
                <Link href="/contact">
                <p className='Link'>Contact</p>
                </Link>
            </div>        
        </div>
        <style jsx>{
            `
            .Header{
                text-align: center
            }

            .PageTitle{
                font-size: 3vw;
            }

            .Link{
                border: 2px solid navy;
                margin: 3vw;
                background-color: white;
                border-radius: 0.5vw;
            }

            p{
                font-weight: bold;
            }
            `}
        </style>
    </div>
)

export default Header