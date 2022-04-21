import React from 'react'
import {FaGraduationCap} from 'react-icons/fa'

export default function Education() {
  return (
    <div className='cv-education'>
        <h3 className='title'> <FaGraduationCap className='cap-icon'/> Education</h3> <hr />
        <div className='education-list'>
            <ul className='ul' >
                <li>
                    <div className='date'>2012 - 2015</div>
                    <div>
                        <h4>Federal Government Girls' College, Sagamu</h4>
                        <p>WASSC May/June 2015</p>
                        <p>little change</p>
                        
                    </div>
                </li>
                <li>
                    <div className='date'>2017 - Present</div>
                    <div>
                        <h4>University of Ibadan, Ibadan</h4>
                        <p>Undergraduate</p>
                        
                    </div>
                </li>
            </ul>
            
        </div>
    </div>
  )
}
