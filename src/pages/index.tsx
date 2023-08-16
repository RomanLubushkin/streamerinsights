import * as React from "react"
import {HeadFC, PageProps} from "gatsby"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import {Seo} from "../components/seo"
import {FaBeer} from "react-icons/fa";
import {GiLetterBomb, GiMicroscope} from "react-icons/gi";
import {BsDatabaseFillDown, BsFillClipboardDataFill} from "react-icons/bs";

type DataProps = {}

const Index: React.FC<PageProps<DataProps>> = () => {
    const options = {
        chart: {
            type: 'spline',
            height: 396,
        },
        title: {
            text: 'My chart'
        },
        series: [
            {
                data: [1, 2, 1, 4, 3, 6]
            }
        ]
    };
    return (
        <div className="bg-stone-900">
            <section className="text-white">
                <div className="container mx-auto px-6 py-24 flex items-stretch">
                    <div className="w-1/2">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Uncover the Key Ingredients to Your Success</h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-6">
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
                    <div className="relative w-1/2 -l-20 h-full before:absolute before:w-full before:h-full before:hero-gradient" >
                        <img src="/images/hero-bg.jpg" alt="streamerinsights.org"/>
                    </div>
                </div>
            </section>

            <section className="bg-stone-100 py-14">
                <div className="container mx-auto px-4 flex gap-14 items-center">
                    <div className="w-8/12">
                        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                        <p className="text-stone-700 mb-6">
                            We are a non-commercial project dedicated to exploring the correlations between In-Game data and
                            the
                            growth of content creators' audiences. Participation is completely free, but limited, as we
                            cover
                            all computations ourselves.
                        </p>
                        <p className="text-stone-700">
                            Join us in this exciting journey of discovery and innovation. Your insights contribute to
                            shaping
                            the future of gaming and content creation.
                        </p>
                    </div>
                    <div className="w-4/12 flex items-center justify-center text-stone-800">
                        <GiMicroscope className="w-48 h-48"/>
                    </div>
                </div>
            </section>

            <section className="bg-stone-800 py-16">
                <div className="container mx-auto">
                    <h2 className="text-white text-3xl md:text-4xl font-semibold text-center mb-6">
                        How It Works
                    </h2>
                    <p className="text-stone-200 mb-8 max-w-5xl mx-auto text-center">
                        Apply now, and we'll swiftly collect data, granting you access. While we utilize publicly available data, sharing insights remains your choice. Future enhancements include public sharing, but for now, we're planning to use direct links.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                        <div className="bg-white p-4 rounded-lg shadow-md text-center">
                            <div className="text-xl mb-4">
                                Apply for Participation
                            </div>
                            <p className="text-stone-600 flex items-center justify-center">
                                <GiLetterBomb className="w-10 h-10" />
                            </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md text-center">
                            <div className="text-xl mb-4">
                                Start Data Gathering
                            </div>
                            <p className="text-stone-600 flex items-center justify-center">
                                <BsDatabaseFillDown className="w-10 h-10" />
                            </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md text-center">
                            <div className="text-xl mb-4">
                                Get Access to Insights
                            </div>
                            <p className="text-stone-600 flex items-center justify-center">
                                <BsFillClipboardDataFill className="w-10 h-10" />
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-96 bg-stone-300 rounded overflow-hidden">
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    </div>
                </div>
            </section>

        </div>
    )
}

export const Head: HeadFC<DataProps> = () => <Seo title="Using TypeScript"/>

export default Index
