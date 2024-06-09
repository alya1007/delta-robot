import Logs from "@/components/logs/Logs";
import Statistics from "@/components/Statistics";
import Card from "@/components/ui/Card";
import VideoCard from "@/components/video/VideoCard";

export default function Home() {
	return (
		<main className="text-center w-full p-10 max-h-screen">
			<div className="flex w-full flex-col items-center justify-start gap-10">
				<h1 className="text-3xl font-medium">Delta Sort</h1>
				<div className="flex justify-end w-full gap-10">
					<VideoCard src="/images/camera-placeholder.jpg" />
				</div>
				<Statistics />
			</div>
		</main>
	);
}
