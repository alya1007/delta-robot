import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type VideoModalProps = {
	src?: string;
	onClose: () => void;
};

const VideoModal = ({ src, onClose }: VideoModalProps) => (
	<AnimatePresence>
		<motion.div
			className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClose}
		>
			<motion.div
				className="relative rounded-4xl"
				layoutId="expandable-image"
				initial={{ scale: 0.8 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
				exit={{ scale: 0.8 }}
				onClick={(e) => e.stopPropagation()}
			>
				<motion.img
					src={src}
					className="w-auto h-auto max-w-full max-h-full rounded-4xl"
				/>
				<motion.button
					className="absolute bottom-6 right-8 transition-all duration-300 ease-in-out hover:scale-75"
					onClick={onClose}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<Image
						src={"/images/screen-normal-icon.png"}
						alt="screen normal icon"
						width={30}
						height={30}
					/>
				</motion.button>
			</motion.div>
		</motion.div>
	</AnimatePresence>
);

export default VideoModal;
