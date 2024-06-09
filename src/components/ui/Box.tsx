import classNames from "classnames";

type BoxProps = {
	variant: "error" | "success" | "info";
	children: React.ReactNode;
};

const Box = ({ variant, children }: BoxProps) => {
	const boxClass = classNames("px-6 py-2 rounded-4xl text-sm font-medium", {
		"text-error-text bg-error-bg": variant === "error",
		"text-success-text bg-success-bg": variant === "success",
		"text-info-text bg-info-bg": variant === "info",
	});
	return <div className={boxClass}>{children}</div>;
};

export default Box;
