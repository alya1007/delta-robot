import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/context/VideoContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Delta Sort",
	description: "Delta Sort - delta robot for sorting objects",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<VideoProvider>{children}</VideoProvider>
			</body>
		</html>
	);
}
