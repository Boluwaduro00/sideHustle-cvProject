import React from 'react'
import {CgBox} from 'react-icons/cg'

export default function Experience() {
  return (
    <div className='cv-education'>
        <h3 className='title'> <CgBox className='cap-icon'/> Experience</h3> <hr />
        <div className='education-list'>
            <ul className='ul' >
                <li>
                    <div className='date'>March 2020 - Nov 2020</div>
                    <div>
                        <h4>Fichaya Nigeria Limited</h4>
                        <p>Software Engineer Intern</p>
                        <p>I learnt about new technologies and how to test software applications manually</p>
                    </div>
                </li>
                <li>
                    <div className='date'>Dec 2021 - Feb 2022</div>
                    <div>
                        <h4>Trove Finance</h4>
                        <p>Tech Support Intern</p>
                        <p>I reported technical isseus from the customers to the engineering team </p>
                        <p>I used ReactJS as a front end developer</p>
                    </div>
                </li>
            </ul>
            
        </div>
    </div>
  )
}
