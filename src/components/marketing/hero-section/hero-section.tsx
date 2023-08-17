import * as React from "react"

interface Props {

}

export const HeroSection: React.FC<Props> = () => {
    return (
        <section className="text-white">
            <div className="container mx-auto px-6 py-24 flex items-stretch">
                <div className="w-1/2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Uncover the Key Ingredients to Your Success</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-6 text-stone-300">
                        Join us in the pursuit of unraveling the secrets
                        to success through an exploration of In-Game Data and Content Creators' metrics.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#"
                           className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300">
                            Apply for Participation
                        </a>
                        <div
                            className="px-6 py-3 border border-stone-300 text-stone-300 rounded-full cursor-pointer transition duration-300 hover:bg-stone-700">
                            How It Works
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-1/2 -l-20 h-full before:absolute before:w-full before:h-full before:hero-gradient">
                    <img src="/images/hero-bg.jpg" alt="streamerinsights.org"/>
                </div>
            </div>
        </section>
    );
};