import Image from "next/image";

const CameraPreview = () => {
	return (
		<div
			className="bg-cover bg-center flex flex-col rounded-4xl border-card-border items-center justify-center w-96 h-96 border-2"
			style={{ backgroundImage: `url('/images/camera-placeholder.jpg')` }}
		>
			<Image
				src="/images/camera-icon.png"
				alt="camera icon"
				width={150}
				height={150}
			/>
		</div>
	);
};

export default CameraPreview;
