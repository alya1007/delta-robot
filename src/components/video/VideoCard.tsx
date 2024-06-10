import Image from "next/image";

type VideoCardProps = {
	src: string;
	videoSrc: string;
	showVideo: boolean;
};

const VideoCard = ({ src, videoSrc, showVideo }: VideoCardProps) => {
	return (
		<div className="w-full">
			{showVideo ? (
				<div className="h-full">
					<video src={videoSrc} className="rounded-4xl h-[380px]" controls />
				</div>
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
