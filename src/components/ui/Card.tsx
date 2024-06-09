type CardProps = {
	children: React.ReactNode;
	className?: string;
};

const Card = ({ children, className }: CardProps) => {
	return (
		<div
			className={`flex items-center justify-center bg-card-bg rounded-4xl border-2 border-card-border p-10 ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
