"use client";

import Image from "next/image";
import { useVideo } from "@/context/VideoContext"; // Update the import path accordingly

type VideoCardProps = {
	src: string;
	videoSrc: string;
};

const VideoCard = ({ src, videoSrc }: VideoCardProps) => {
	const { showVideo } = useVideo();

	return (
		<div className="w-full ">
			{showVideo ? (
				<video
					src={videoSrc}
					className="rounded-4xl w-full h-full object-cover object-center"
					controls
				/>
			) : (
				<div className="relative h-full">
					<Image
						src={src}
						alt={"placeholder image"}
						className="rounded-4xl"
						fill={true}
					/>
				</div>
			)}
		</div>
	);
};

export default VideoCard;
