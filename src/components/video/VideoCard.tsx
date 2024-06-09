"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import VideoModal from "./VideoModal";

type VideoCardProps = {
	src?: string;
};

const VideoCard = ({ src }: VideoCardProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div>
			<div className="group">
				<motion.div className="relative rounded-4xl">
					<motion.div className="bg-card-bg hover:opacity-30 transition-all duration-300 ease-in-out rounded-4xl">
						<motion.img
							src={src}
							className="cursor-pointer rounded-4xl"
							onClick={() => setIsOpen(true)}
							layoutId="expandable-image"
						/>
					</motion.div>
					<motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
						<Image
							src={"/images/camera-icon.png"}
							alt="camera icon"
							width={150}
							height={150}
						/>
					</motion.div>
				</motion.div>
			</div>
			{isOpen && <VideoModal src={src} onClose={() => setIsOpen(false)} />}
		</div>
	);
};

export default VideoCard;
