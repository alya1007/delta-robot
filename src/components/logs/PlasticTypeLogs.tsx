import Box from "../ui/Box";

type PlasticTypeLogsProps = {
	name: string;
	total: number;
};

const PlasticTypeLogs = ({ name, total }: PlasticTypeLogsProps) => {
	return (
		<div className="flex items-center justify-between gap-4">
			<h1 className="font-medium">{name}</h1>
			<Box variant="info">{total}</Box>
		</div>
	);
};

export default PlasticTypeLogs;
