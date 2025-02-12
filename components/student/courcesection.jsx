import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourceCard from './courcecard';
import { AppContext } from '../../src/context/appContex';

const CourseSection = () => {

        const {allCourses} = useContext(AppContext)


    return (
        <div className='flex flex-col items-center'>
            <div className='py-16 md:px-40 px-8 text-center'>
                <h2 className='text-3xl font-medium text-gray-800'>Recommendation For You</h2>
                <p className='text-sm md:text-base text-gray-500 mt-3'>Discover the best course for you.</p>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-4 my-8 md:my-16'>
               {allCourses.slice(0,4).map((course, index)=><CourceCard key={index} course={course}/>)}
            </div>
            
            <Link className='text-gray-500 border border-gray-500/80 px-10 py-3 rounded ' to={'/course-list'} onClick={() => scrollTo(0,0)}>All Courses</Link></div>
        
    );
};

export default CourseSection;