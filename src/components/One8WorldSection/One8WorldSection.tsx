import React from 'react';

const One8WorldSection: React.FC = () => {
    return (
        <section className="flex items-center justify-center h-screen">
            <div>
                {/* one8 text */}
                <h1 className="lg:text-[14rem] text-6xl md:text-8xl text-yellow-500">one8</h1>

                {/* WORLD text */}
                <h2 className="lg:text-[12rem] md:text-7xl text-4xl font-bold text-transparent outline-yellow">
                    WORLD
                </h2>
            </div>
        </section>
    );
};

export default One8WorldSection;