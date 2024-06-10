"use client";

import Card from "./ui/Card";
import { useVideo } from "@/context/VideoContext";

const Statistics = () => {
	const { showVideo } = useVideo();
	return (
		<Card className="w-full p-7 flex">
			<div className="border-r-2 flex border-divider flex-1 flex-grow items-center justify-center">
				<div className="flex flex-col justify-center items-start p-2">
					<h1 className="text-4xl">{showVideo ? "3" : "0"}</h1>
					<h6 className="uppercase font-thin text-sm">items sorted</h6>
				</div>
			</div>
			<div className="border-r-2 flex border-divider flex-1 flex-grow items-center justify-center">
				<div className="flex flex-col justify-center items-start p-2">
					<h1 className="text-4xl">{showVideo ? "2s" : "0s"}</h1>
					<h6 className="uppercase font-thin text-sm">average time</h6>
				</div>
			</div>
			<div className="flex flex-1 flex-grow items-center justify-center">
				<div className="flex flex-col justify-center items-start p-2">
					<h1 className="text-4xl">{showVideo ? "0%" : "0%"}</h1>
					<h6 className="uppercase font-thin text-sm">error rate</h6>
				</div>
			</div>
		</Card>
	);
};

export default Statistics;
