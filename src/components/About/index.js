import './index.scss'
import { useState} from 'react'
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus pharetra nunc porta euismod. Sed ultricies eleifend arcu non mattis. Ut fermentum accumsan tempus. Quisque sed orci id risus vehicula vestibulum nec eget odio. Nulla eros felis, sollicitudin sit amet porttitor sed, tempor id metus. Mauris fermentum orci non mattis blandit. Curabitur dignissim sodales nibh, sit amet sollicitudin quam laoreet ut. Cras ac eros vitae orci venenatis laoreet. Vestibulum sed odio sed eros commodo dignissim. Duis ultricies, nibh sit amet varius eleifend, libero sapien commodo lorem, id gravida metus felis ut ex.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus pharetra nunc porta euismod. Sed ultricies eleifend arcu non mattis. Ut fermentum accumsan tempus. Quisque sed orci id risus vehicula vestibulum nec eget odio. Nulla eros felis, sollicitudin sit amet porttitor sed, tempor id metus. Mauris fermentum orci non mattis blandit. Curabitur dignissim sodales nibh, sit amet sollicitudin quam laoreet ut. Cras ac eros vitae orci venenatis laoreet. Vestibulum sed odio sed eros commodo dignissim. Duis ultricies, nibh sit amet varius eleifend, libero sapien commodo lorem, id gravida metus felis ut ex.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus pharetra nunc porta euismod. Sed ultricies eleifend arcu non mattis. Ut fermentum accumsan tempus. Quisque sed orci id risus vehicula vestibulum nec eget odio. Nulla eros felis, sollicitudin sit amet porttitor sed, tempor id metus. Mauris fermentum orci non mattis blandit. Curabitur dignissim sodales nibh, sit amet sollicitudin quam laoreet ut. Cras ac eros vitae orci venenatis laoreet. Vestibulum sed odio sed eros commodo dignissim. Duis ultricies, nibh sit amet varius eleifend, libero sapien commodo lorem, id gravida metus felis ut ex.
                </p>
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