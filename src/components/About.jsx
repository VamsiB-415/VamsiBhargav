import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Welcome to my portfolio! I am delighted to have you here. Feel free to explore and navigate through the various sections.</p>
            </div>
            <div>
              <p>I am a Master's student at ASU studying Software Engineering.
                 My passion lies in crafting remarkable software solutions that transcend boundaries and 
                 elevate lives. With 4 years of Experience in the industry as a developer,
                 I blend meticulousness and innovative problem-solving skills to explore uncharted territories, pushing the boundaries of what is possible. Together,
                 let's embark on a journey to create impactful software that leaves a lasting impression.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
