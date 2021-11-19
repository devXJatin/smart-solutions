import React from 'react'
import Student from './Student'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <Link to="home/studentlogin">
            <div className='student'>
                <Student/>

            </div>
            </Link>

            <div className='admin'>

            </div>
        </div>
    )
}

export default Home
