import React from "react";
import "./Education.css";

export default function Education() {
    return (
        <div className="education" id="Education">


            <h2 className="education-heading">Education</h2>

            <div className="timeline">
                <div className="container left-container">
                    <span></span>
                    <div className="text-box">
                        <h2>Mern Full Stack Web Development</h2>
                        <small>DebugShala, 2019 - 2022</small>
                        <p className="text-content">
                        Completed MERN Full-Stack Web Development training from DebugShala, Indore, with hands-on experience in creating responsive web applications using MongoDB, Express.js, React.js, and Node.js.
                        </p>
                        <p className="left-container-arrow"></p>
                    </div>
                </div>

                <div className="container right-container">
                    <span></span>
                    <div className="text-box">
                        <h2>Bachelor Of Technology</h2>
                        <small>Rajiv Gandhi Proudyogiki Vishwavidyalaya, 2018 - 2022 <p>CGPA - 7.46</p></small>
                        
                        <p className="text-content">
                        Completed B.Tech from RGPV University, Bhopal, with a focus on analytical thinking and technical problem-solving. Gained practical knowledge through projects and coursework, building a strong foundation for technical and engineering skills.
                        </p>
                        <p className="right-container-arrow"></p>
                    </div>
                </div>

                <div className="container left-container">
                    <span></span>
                    <div className="text-box">
                        <h2>Higher Secondary</h2>
                        <small>Model Higher Secondary School, 2017 - 2018 <p>Percentage - 65 %</p></small>
                        
                        <p className="text-content">
                        Completed 12th in Mathematics stream, focusing on core subjects like Physics, Chemistry, and Mathematics. Built a strong analytical foundation and developed problem-solving skills during this phase.
                        </p>
                        <p className="left-container-arrow"></p>
                    </div>
                </div>

                <div className="container right-container">
                    <span></span>
                    <div className="text-box">
                        <h2>High School</h2>
                        <small>Model Higher Secondary School, 2016 - 2017, <p>Percentage - 81 %</p></small>
                        
                        <p className="text-content">
                        Completed 10th with a strong academic performance, building a solid foundation in Mathematics, Science, and other core subjects. Developed a keen interest in learning and problem-solving during this time.
                        </p>
                        <p className="right-container-arrow"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
