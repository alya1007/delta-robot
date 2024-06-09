import Card from "@/components/ui/Card";
import VideoCard from "@/components/video/VideoCard";

export default function Home() {
	return (
		<main className="text-center w-full p-10 max-h-screen">
			<div className="flex w-full flex-col items-center justify-start gap-10">
				<h1 className="text-3xl font-medium">Delta Sort</h1>
				<div className="flex justify-end w-full gap-10">
					<VideoCard src="/images/camera-placeholder.jpg" />
					<Card className="w-2/4">Card</Card>
				</div>
				<Card className="w-full p-7 flex">
					<div className="border-r-2 flex border-divider flex-1 flex-grow items-center justify-center">
						<div className="flex flex-col justify-center items-start p-2">
							<h1 className="text-4xl">1600</h1>
							<h6 className="uppercase font-thin text-sm">bottles sorted</h6>
						</div>
					</div>
					<div className="border-r-2 flex border-divider flex-1 flex-grow items-center justify-center">
						<div className="flex flex-col justify-center items-start p-2">
							<h1 className="text-4xl">0.002s</h1>
							<h6 className="uppercase font-thin text-sm">average time</h6>
						</div>
					</div>
					<div className="flex flex-1 flex-grow items-center justify-center">
						<div className="flex flex-col justify-center items-start p-2">
							<h1 className="text-4xl">0.3%</h1>
							<h6 className="uppercase font-thin text-sm">error rate</h6>
						</div>
					</div>
				</Card>
			</div>
		</main>
	);
}
