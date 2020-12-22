import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Class.css';


const Class = () => {
    console.log(fakeData);
    const first15 = fakeData.slice(0,15);
    const [courses, setCourses] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
       
        <div className="class-box">
        <div className="course-box">
        
            {
                courses.map(crs => <Course 
                    handleAddCourse = {handleAddCourse}
                    course={crs}>
                    </Course>)
            }
        
        </div>
        <div className="cart-box">
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Class;