import Box from "../ui/Box";
import Card from "../ui/Card";
import PlasticTypeLogs from "./PlasticTypeLogs";

const Logs = () => {
	const logs = [
		{ name: "hdpe", total: 650 },
		{ name: "pet", total: 234 },
		{ name: "pvc", total: 132 },
		{ name: "poly", total: 688 },
		{ name: "ldpe", total: 435 },
		{ name: "other", total: 112 },
	];
	return (
		<Card className="w-2/4 flex-col gap-5">
			<div className="bg-card-bg-light uppercase px-7 py-4 rounded-3xl flex items-center justify-between gap-4 w-full">
				<h1 className="font-medium">system status</h1>
				<Box variant="success">running</Box>
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
