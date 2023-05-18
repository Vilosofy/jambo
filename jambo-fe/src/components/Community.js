import React from "react";
import "./Community.css"
import persons from "../assets/peeps.png"

const Community = () => {
    return(
        <div className="community">
            <div className="join">
                <div className="join_content">
                    <div className="join_text">
                        <h1> Join Our Community </h1>
                        <div className="join_desc">
                            <text> Meet other indie game developer also know latest update, <br/> announcements, and more </text>
                        </div>
                    </div>

                    <div className="join_button">
                        <button> Join Our Discord </button>
                    </div>
                </div>

                <img src={persons} alt="persons" />
            </div>
        </div>
    );
};

export default Community;