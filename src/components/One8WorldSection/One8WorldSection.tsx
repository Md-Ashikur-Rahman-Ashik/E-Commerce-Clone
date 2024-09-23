import React from 'react';

const One8WorldSection: React.FC = () => {
    return (
        <section className="flex items-center justify-center h-screen">
            <div className="text-center">
                {/* one8 text */}
                <h1 className="text-6xl md:text-8xl font-bold text-yellow-500">one8</h1>

                {/* WORLD text */}
                <h2 className="text-6xl md:text-8xl font-bold text-transparent mt-4 tracking-wide">
                    <span className="border-4 border-yellow-500 px-2 py-1">
                        WORLD
                    </span>
                </h2>
            </div>
        </section>
    );
};

export default One8WorldSection;