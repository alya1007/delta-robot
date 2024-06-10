"use client";

import Logs from "@/components/logs/Logs";
import Statistics from "@/components/Statistics";
import VideoCard from "@/components/video/VideoCard";
import { useState } from "react";

export default function Home() {
	const [showVideo, setShowVideo] = useState<boolean>(true);
	return (
		<main className="text-center w-full p-10 max-h-screen">
			<div className="flex w-full flex-col items-center justify-start gap-10">
				<h1 className="text-3xl font-medium">Delta Sort</h1>
				<div className="flex justify-end w-full gap-10">
					<VideoCard
						src="/images/camera-placeholder.jpg"
						videoSrc="/videos/output.mp4"
						showVideo={showVideo}
					/>
					<Logs />
				</div>
				<Statistics />
			</div>
		</main>
	);
}
