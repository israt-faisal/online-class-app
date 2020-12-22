import React from 'react';
import './Course.css'

const Course = (props) => {
    // console.log(props);



    const {course, price, name} = props.course;
    
    return (
        <div className="course">
           
            <div>
                <h3>Name of the Course: {course}</h3>
            <div>
                <h4>Price of the Course: $ {price}</h4>
            </div>
                <h5>Instructor's Name: {name}</h5>
            </div>
            <div>
            <button onClick= {()=> props.handleAddCourse(props.course)} className="btn"> <strong> Enroll Now </strong></button>
        </div>
        </div>
    );
};

export default Course;