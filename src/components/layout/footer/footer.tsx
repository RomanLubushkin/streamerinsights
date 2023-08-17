import * as React from "react"

interface Props {

}

export const Footer: React.FC<Props> = () => {
    return (
        <footer className="flex justify-between items-center bg-stone-900 p-6 text-white">
            <div className="text-sm text-stone-300">
                <p className="text-stone-300">
                    © 2023 streamerinsights.org All rights reserved.
                </p>
            </div>
            <div className="flex items-center gap-4">
                <span className="font-semibold text-stone-200">Contacts</span>
                <a href="#" className="text-stone-300 hover:text-stone-400 underline">E-mail</a>
                <a href="#" className="text-stone-300 hover:text-stone-400 underline">Discord</a>
            </div>
        </footer>
    );
};