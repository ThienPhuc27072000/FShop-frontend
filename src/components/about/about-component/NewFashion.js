import React from 'react';

export default function NewFashion() {
    return(
        <>
        <div className="agilenwew3lsfashions">
            <div className="container">
                <h3>AVANT-GARDE FASHION</h3>
                <h4>Star Studded Launching of the Festival Collection in NYFW in</h4>
                <div className="agilenwew3lsfashions-aitstimer">
                    <div className="clock">
                        <div className="column days">
                            <div className="timer" id="days"></div>
                            <div className="text">DAYS</div>
                        </div>
                        <div className="timer days">:</div>
                        <div className="column">
                            <div className="timer" id="hours"></div>
                            <div className="text">HOURS</div>
                        </div>
                        <div className="timer">:</div>
                        <div className="column">
                            <div className="timer" id="minutes"></div>
                            <div className="text">MINUTES</div>
                        </div>
                        <div className="timer">:</div>
                        <div className="column">
                            <div className="timer" id="seconds"></div>
                            <div className="text">SECONDS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}