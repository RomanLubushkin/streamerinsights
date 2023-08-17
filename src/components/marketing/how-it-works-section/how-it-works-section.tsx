import * as React from "react"
import {GiLetterBomb} from "react-icons/gi";
import {BsDatabaseFillDown, BsFillClipboardDataFill} from "react-icons/bs";
import {DemoChart} from "../demo-chart/demo-chart";

interface Props {

}

export const HowItWorksSection: React.FC<Props> = () => {
    return (
        <section className="bg-stone-800 py-16">
            <div className="container mx-auto">
                <h2 className="text-white text-3xl md:text-4xl font-semibold text-center mb-6">
                    How It Works
                </h2>
                <p className="text-stone-200 mb-8 max-w-5xl mx-auto text-center">
                    Apply now, and we'll swiftly collect data, granting you access. While we utilize publicly
                    available data, sharing insights remains your choice. Future enhancements include public
                    sharing, but for now, we're planning to use direct links.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <div className="text-xl mb-4">
                            Apply for Participation
                        </div>
                        <p className="text-stone-600 flex items-center justify-center">
                            <GiLetterBomb className="w-10 h-10"/>
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <div className="text-xl mb-4">
                            Start Data Gathering
                        </div>
                        <p className="text-stone-600 flex items-center justify-center">
                            <BsDatabaseFillDown className="w-10 h-10"/>
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <div className="text-xl mb-4">
                            Get Access to Insights
                        </div>
                        <p className="text-stone-600 flex items-center justify-center">
                            <BsFillClipboardDataFill className="w-10 h-10"/>
                        </p>
                    </div>
                </div>
                <div className="w-full h-96 bg-stone-300 rounded overflow-hidden">
                    <DemoChart/>
                </div>
            </div>
        </section>
    );
};