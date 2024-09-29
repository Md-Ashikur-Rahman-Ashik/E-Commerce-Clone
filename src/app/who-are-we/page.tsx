import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const WhoAreWe = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="relative h-screen w-full text-white flex">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}></div>

                {/* Text Container */}
                <div className="relative z-10 top-40 text-center">
                    {/* "BE READY" Text */}
                    <h1 className="text-yellow-500 font-bold text-8xl lg:text-[10rem] md:text-6xl sm:text-4xl">BE READY</h1>

                    {/* "BE BETTER" Text with Outline */}
                    <h1 className="text-transparent font-bold text-8xl lg:text-[10rem] md:text-6xl sm:text-4xl outline-white2" style={{ WebkitTextStroke: '2px white' }}>
                        BE BETTER
                    </h1>

                    {/* Paragraph Section */}
                    <p className="text-lg mt-8 max-w-2xl mx-auto sm:text-sm">
                        What started as a shirt number on the back of a young talent, became a phenomenon in the sporting world and an inspiration for billions in a global community that dares to express its unique sense of style.
                    </p>
                </div>
            </div>
        </>
    );
};

export default WhoAreWe;
