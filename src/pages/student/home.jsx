import React from 'react';
import Hero from '../../../components/student/hero';
import Searchbar from '../../../components/student/searchbar';
import CourseSection from '../../../components/student/courcesection';

const StudentHome = () => {
    return (
        <div>
        <div className='flex flex-col items-center space-y-7 text-center'>
            <Hero/>
        </div>
        <div>
                <Searchbar/>
        </div>
        <div>
           <CourseSection/>
        </div>
        </div>
    );
};

export default StudentHome;