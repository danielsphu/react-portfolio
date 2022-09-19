import './index.scss'
import { useState} from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPython,
    faNode,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import Loader from 'react-loaders'

const About = () => {
    const [letterClass] = useState('text-animate')
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u','t', ' ', 'M' , 'e']}
                    idx={15}/>
                </h1>
                <p>
                    Hi! I'm a software engineering student currently studying at McMaster University with a passion for creating and inventing with code! I have experience in full-stack development from my internship with The Government of Ontario, as well as personal projects and hackathon projects.
                </p>
                <p>
                    Aside from looking for the next thing computer science topic to learn (currently interesting in ML/AI right now), I enjoy all things sci-fi as well as swimming in my free time. 
                </p>
                <p>
                    I am currently looking for summer 2023 opportunities! Feel free to reach out <a href="/contact">here</a>
                </p>
                <Link to="/contact" className="flat-button">RESUME</Link>
               
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                    <FontAwesomeIcon icon={faPython} color="#306998" />
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon icon={faHtml5}  />
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faNode} color="#68a063" />
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About