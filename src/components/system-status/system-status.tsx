import * as React from "react";
import {SystemStatusGroup} from "./system-status-group";
import {clsx} from "clsx";
import {startAuth} from "../../utils/auth";

interface Props {
    isAuth: boolean;
    isParticipant: boolean;
    isTwitchDataLoaderActive: boolean;
    isSteamDataLoaderActive: boolean;
    isRiotDataLoaderActive: boolean;
    className?: string;
}

export const SystemStatus: React.FC<Props> = props => {
    const {
        isAuth,
        isParticipant,
        isTwitchDataLoaderActive,
        isSteamDataLoaderActive,
        isRiotDataLoaderActive,
        className
    } = props;
    return (
        <div className={clsx("bg-stone-700 rounded-lg px-8 py-6", className)}>
            <div className="flex justify-center mb-6 text-stone-100 text-xl font-semibold">
                System Issues Detected
            </div>

            <div className="flex gap-6">
                <SystemStatusGroup
                    title="Auth & Permissions"
                    items={[
                        {
                            title: "Twitch Authentication",
                            level: isAuth ? "success" : "error",
                            suggestion: (
                                <div>
                                    You need to <span onClick={startAuth} className="text-blue-300 hover:text-blue-500 underline cursor-pointer">
                                    Sign In
                                </span> first, so we can get access to your Twitch data,
                                </div>
                            )
                        },
                        {
                            title: "Data loaders activated",
                            level: isParticipant ? "success" : "error",
                            suggestion: (
                                <div>
                                    We need to activate data loaders for you first, <a
                                    href="https://forms.gle/RqFNYuNKQUK79NqH6" target="_blank" rel="noopener noreferrer"
                                    className="text-blue-300 hover:text-blue-500 underline">
                                    Apply for Participation
                                </a>
                                </div>
                            )

                        },
                    ]}
                    className="flex-1"
                />
                <SystemStatusGroup
                    title="Data Loaders"
                    items={[
                        {
                            title: "Twitch data loader",
                            level: isTwitchDataLoaderActive ? "success" : "error",
                            suggestion: (
                                <div>
                                    Report Error
                                </div>
                            )
                        },
                        {
                            title: "Steam data loader",
                            level: isSteamDataLoaderActive ? "success" : "error",
                            suggestion: (
                                <div>
                                    Report Error
                                </div>
                            )
                        },
                        {
                            title: "Riot data loader",
                            level: isRiotDataLoaderActive ? "success" : "warning",
                            suggestion: (
                                <div>
                                    Forgot to Rotate Riot API Key? =))
                                </div>
                            )
                        },
                    ]}
                    className="flex-1"
                />
            </div>
        </div>
    );
};