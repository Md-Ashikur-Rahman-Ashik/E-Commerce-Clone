import React from 'react';

function One8WithIcon() {
    return (
        <div className='container mx-auto'>
            <section className="flex flex-col items-center justify-center py-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">This is one8!</h1>
                    <p className="text-lg md:text-xl">
                        A platform that celebrates the legacy of a champion – <span className="font-bold">Virat Kohli</span>.
                    </p>
                    <p className="text-lg md:text-xl mt-2">
                        Our core values are the cornerstones we depend on while constantly evolving to the next level.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        {/* Replace the placeholder below with your icon */}
                        <div className="text-yellow-500 text-5xl mb-4">🔍</div>
                        <p className="font-bold">INNOVATION</p>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* Replace the placeholder below with your icon */}
                        <div className="text-yellow-500 text-5xl mb-4">💪</div>
                        <p className="font-bold">DEDICATION</p>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* Replace the placeholder below with your icon */}
                        <div className="text-yellow-500 text-5xl mb-4">🔑</div>
                        <p className="font-bold">AUTHENTICITY</p>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* Replace the placeholder below with your icon */}
                        <div className="text-yellow-500 text-5xl mb-4">🤝</div>
                        <p className="font-bold">COMMUNITY-ORIENTED</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default One8WithIcon;