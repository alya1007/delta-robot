"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type VideoContextType = {
	showVideo: boolean;
	setShowVideo: (show: boolean) => void;
};

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider = ({ children }: { children: ReactNode }) => {
	const [showVideo, setShowVideo] = useState<boolean>(false);

	return (
		<VideoContext.Provider value={{ showVideo, setShowVideo }}>
			{children}
		</VideoContext.Provider>
	);
};

export const useVideo = () => {
	const context = useContext(VideoContext);
	if (context === undefined) {
		throw new Error("useVideo must be used within a VideoProvider");
	}
	return context;
};
