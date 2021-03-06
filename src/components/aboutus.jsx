import React from 'react';
import img1 from '../images/about_us1.jpg';
import img2 from '../images/about_us2.jpg';

const aboutus_content = {
  title: 'About Us',
  iamges: [],
  content:
    'Consequat officia Lorem occaecat nostrud cillum eu. Duis sunt mollit sint id proident nulla amet fugiat mollit aute ipsum nostrud. Minim esse duis nostrud cillum cupidatat eiusmod exercitation deserunt quis ut ullamco ullamco. Quis commodo officia velit ut eiusmod. Aute culpa non fugiat nostrud do dolor in est ex commodo ullamco Lorem. Culpa nisi do laborum pariatur. Deserunt qui occaecat dolor Lorem consectetur deserunt occaecat officia elit do officia reprehenderit',
};
const AboutUs = () => {
  return (
    <>
      <div className='grid grid-col-1 grid-flow-row gap-12 lg:grid-cols-2'>
        <h1 className='text-gray-300 text-6xl col-start-2'>
          {aboutus_content.title}
        </h1>
      </div>
      <div className='grid grid-col-1 grid-flow-row gap-12 lg:grid-cols-2 mb-64'>
        <div className='relative'>
          <div className='image_aboutus'>
            <img src={img2} classname='rounded-lg ' alt='' />
          </div>
          {/* <div className='image2'>
            <img src={img2} className='rounded-lg' alt='' />
          </div> */}
        </div>
        <div className='text-gray-300  '>
          <p className='text-justify'>{aboutus_content.content}</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
