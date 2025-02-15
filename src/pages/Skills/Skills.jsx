import React from "react";
import "./Skills.css";
import { skillsImg } from "../../constants/Layout";

export default function Skills() {
    return (
        <>
            <div className="section-4" id="skill-section">
               <h2 className="technical-skill">Technical Skills</h2>
                <div className="right-section-4">
                    <div className="skills-icon">

                      {
                        skillsImg.map((skill)=>{
                            return (
                            <div key={skill.name}>
                                <img src={skill.img} alt="" />
                                <p>{skill.name}</p>
                            </div>
                            )
                        })
                      }
                    </div>
                </div>


                <div className="scroll-container">
                    <div className="scroll-content">
                        
                     {
                        skillsImg.map((skill)=>{
                            return <div><p>{skill.name}</p></div>
                        })
                     }

                    </div>
                </div>
            </div>
        </>
    );
}
