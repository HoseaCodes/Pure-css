import React from 'react'
import './switch.css'

const Switch = () => {
    return (
        <div>
            <div class='switch-box'>
                <div class='screen-outer'>
                    <div class='screen-inner'>
                        <div class='switch-left'>
                            <div class='switch-circle-left'>
                            </div>
                        </div>
                        <div class='switch-right'>
                            <div class='switch-circle-right'>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='controller-left'>
                    <div class='square-bottom'>
                    </div>
                    <div class='top-button'>
                    </div>
                    <div class='dpad-left'>
                        <div class='up'>
                        </div>
                        <div class='right'>
                        </div>
                        <div class='down'>
                        </div>
                        <div class='left'>
                        </div>
                    </div>
                    <div class='joystick-left'>
                        <div class='joystick-inner'>
                        </div>
                    </div>
                </div>
                <div class='controller-right'>
                    <div class='circle-bottom'>
                        <div class='cirle-inner'>
                        </div>
                    </div>
                    <div class='top-dpad'>
                        <div class='square-top-left'>
                        </div>
                        <div class='square-top-right'>
                        </div>
                        <div class='square-bottom-left'>
                        </div>
                        <div class='square-bottom-right'>
                        </div>
                    </div>
                    <div class='dpad-right'>
                        <div class='up'>
                        </div>
                        <div class='right'>
                        </div>
                        <div class='down'>
                        </div>
                        <div class='left'>
                        </div>
                    </div>
                    <div class='joystick-right'>
                        <div class='joystick-inner'>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Switch;