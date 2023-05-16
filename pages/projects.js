import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
    <Layout>
        <div className='row mt-3'>
            <h1>My Web Developer Projects</h1>
        </div>
        <div className='row'>
                <p>Below is a summary of my web development projects with a sample image, as well as links to the relevant 
                    github repositories.</p>
        </div>
        <div className='row mt-3'>
            <h2>ToDo App</h2>
        </div>
        <div className='row'>
            <p>An app allowing a logged in user to create, read, update and delete items on a to-do list. 
                This is a full stack React App with Express, including user authentication and integration with MongoDB using Mongoose.</p> 
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <img src="/static/images/toDO.png"/>
            </div>
            <div className='col-md-6'>
                <a href="https://github.com/alexelliott90/toDoApp" class="btn btn-primary GithubLink">
                        ToDo App - Github</a>
            </div> 
        </div>  
        <div className='row mt-3'>
            <h2>Car Inventory</h2>
        </div>
        <div className='row'>
            <p>An app allowing a user to create, read, update and delete items for a list of cars. 
                This is a full stack React App with Express, including integration with MongoDB using Mongoose.</p> 
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <img src="/static/images/carInventory.png"/>
            </div>
            <div className='col-md-6'>
                <a href="https://github.com/alexelliott90/carInventory" class="btn btn-primary GithubLink">
                        Car Inventory - Github</a>
            </div>  
        </div>
        <div className='row mt-3'>
            <h2>ITunes Search</h2>
        </div>
        <div className='row'>
            <p>An app allowing a user to search the iTunes API for any media, and then save items to a list. 
                This is a full stack React App with Express, including integration with a 3rd party API.</p> 
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <img src="/static/images/iTunesSearch.png"/>
            </div>
            <div className='col-md-6'>
                <a href="https://github.com/alexelliott90/iTunesSearch" class="btn btn-primary GithubLink">
                    iTunes Search - Github</a>
            </div>    
        </div>
        <div className='row mt-3'>
            <h2>Web Project Items</h2>
        </div>
        <div className='row'>
            <p>An app allowing a user to create, read, update and delete items from a list of web projects. 
                This is a full stack React App with Express.</p> 
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <img src="/static/images/webProjectItems.png"/>
            </div>
            <div className='col-md-6'>
                <a href="https://github.com/alexelliott90/webProjectItems" class="btn btn-primary GithubLink">
                            Web Project Items - Github</a>
            </div>
        </div>
        <div className='row mt-3'>
            <h2>Hangman Game</h2>
        </div>
        <div className='row'>
            <p>An app allowing a user to play hangman. 
                This is React App using Redux.</p>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <img src="/static/images/hangman.png"/>
            </div>
            <div className='col-md-6'>
                <a href="https://github.com/alexelliott90/hangman" class="btn btn-primary GithubLink">
                Hangman Game - Github</a> 
            </div>
        </div>
        <div className='row mt-3'>
            <h2>Fitness Website</h2>
        </div>
        <div className='row'>
            <p>A front end for a website about fitness. 
                This project was built with HTML and Javascript and styled with CSS.</p> 
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <img src="/static/images/fitnessPage.png"/>
            </div>
            <div className='col-md-6'>
                <a href="https://github.com/alexelliott90/fitnessWebsite" class="btn btn-primary GithubLink">
                Fitness Website - Github</a>
            </div>
        </div>

        <style jsx>{
            `
            .GithubLink{
                margin-left: 3vw
            }
            .Link{
                border: 1px solid grey;
                margin: 3vw
            }

            img{
                height: 10vw;
                padding-left: 2vw;
            }

            `}
        </style>
    </Layout>


)