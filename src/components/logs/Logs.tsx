"use client";

import { useState } from "react";
import Box from "../ui/Box";
import Card from "../ui/Card";
import PlasticTypeLogs from "./PlasticTypeLogs";
import Image from "next/image";
import { useVideo } from "@/context/VideoContext"; // Update the import path accordingly

const Logs = () => {
	const { setShowVideo } = useVideo();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const [redItems, setRedItems] = useState<number>(0);
	const [greenItems, setGreenItems] = useState<number>(0);

	const logs = [
		{ name: "green", total: greenItems },
		{ name: "red", total: redItems },
		{ name: "yellow", total: 0 },
		{ name: "white", total: 0 },
	];

	const handleClick = () => {
		setIsLoading(true);
		setTimeout(() => {
			setShowVideo(true);
			setIsLoading(false);
			setIsRunning(true);
			setRedItems(1);
			setGreenItems(2);
		}, 3000);
	};

	return (
		<Card className="w-full flex-col gap-5">
			<div className="flex gap-5 w-full">
				<button
					onClick={handleClick}
					className=" uppercase bg-success-text px-10 font-semibold rounded-3xl hover:bg-button-hover transition-all duration-300 ease-in-out"
				>
					{isLoading ? (
						<Image
							src={"/images/spinner.gif"}
							alt="spinner gif"
							width={75}
							height={75}
						/>
					) : (
						"start"
					)}
				</button>
				<div className="bg-card-bg-light uppercase px-7 py-4 rounded-3xl flex items-center justify-between gap-4 w-full">
					<h1 className="font-medium">system status</h1>
					{
						<Box variant={isRunning ? "success" : "error"}>
							{isRunning ? "running" : "stopped"}
						</Box>
					}
				</div>
			</div>
			<div className="bg-card-bg-light uppercase px-7 py-6 rounded-3xl grid grid-cols-2 w-full gap-x-6 gap-y-2">
				{logs.map((log) => (
					<PlasticTypeLogs key={log.name} name={log.name} total={log.total} />
				))}
			</div>
		</Card>
	);
};

export default Logs;
