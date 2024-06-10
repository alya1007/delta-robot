import Image from "next/image";

type VideoCardProps = {
	src: string;
	videoSrc: string;
	showVideo: boolean;
};

const VideoCard = ({ src, videoSrc, showVideo }: VideoCardProps) => {
	return (
		<div className="h-[370px] w-full ">
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
