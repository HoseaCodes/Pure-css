import React from 'react'
import './bcard.css'
import DOM from '../../images/dom.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bcard = () => {
    return (<div className='body'>

        <div className='bCard'>
            <div id='leftSide'>
                <div id='status'>
                    <div id='b-box1'>ONLINE</div>
                </div>
                <div id='circle'>
                    <div id='image'>
                        <a href="http://www.hoseacodes.com"><img className='bcard-img' src={DOM} title="D.Hosea" alt='D.Hosea' /></a>
                    </div>
                    <div id='buttons'>
                        <div id='b-box2'>

                            <div id='fafa-mobile'>

                                <img src="https://img.icons8.com/ios/40/000000/phone.png" alt='phone' />
                                <FontAwesomeIcon icon={['fa', 'fa-mobile']} />
                                {/* <i className="fa fa-mobile" aria-hidden="true"></i> */}
                            </div>
                        </div>

                        <div id='b-box3'>
                            <div id='fafa-comments'>
                                <img src="https://img.icons8.com/carbon-copy/50/000000/communication.png" alt='message' />
                                <FontAwesomeIcon icon={['fa', 'fa-comments-o']} />
                                {/* <i className="fa fa-comments-o" aria-hidden="true"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='rightSide'>
                <div id='b-box4'>

                    <div id='text1'>
                        Mr. D.Hosea
                        </div>
                    <div id='rating'>
                        <FontAwesomeIcon icon={['fa', 'fa-star']} />
                        <FontAwesomeIcon icon={['fa', 'fa-star']} />
                        <FontAwesomeIcon icon={['fa', 'fa-star']} />
                        <FontAwesomeIcon icon={['fa', 'fa-star']} />
                        <FontAwesomeIcon icon={['fa', 'fa-star-half-o']} />
                        {/* <i className="fa fa-star" aria-hidden="true"></i> */}
                        {/* <i className="fa fa-star" aria-hidden="true"></i> */}
                        {/* <i className="fa fa-star" aria-hidden="true"></i> */}
                        {/* <i className="fa fa-star" aria-hidden="true"></i> */}
                        {/* <i className="fa fa-star-half-o" aria-hidden="true"></i> */}

                    </div>
                    <div id='text2'>
                        Software Engineer
                         </div>
                    <div id='text3'>
                        Django, React, JavaScript, Python, Bootstrap
                        </div>
                    <div id='text4'>
                        5 mins free
                        </div>
                    <div id='text5'>
                        then $5.99/min
                        </div>
                </div>
            </div>

        </div>

    </div >
    )
}

export default Bcard