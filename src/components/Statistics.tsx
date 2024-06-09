import Card from "./ui/Card";

const Statistics = () => {
	return (
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
	);
};

export default Statistics;
