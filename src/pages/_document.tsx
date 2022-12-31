import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
	return (
		<Html className="">
			<Head>
				<title>Ana Howard</title>
				<link
					rel="icon"
					href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E👀%3C/text%3E%3C/svg%3E"
				/>
				<meta name="description" content="👋 wagwan! welcome to my site" />
			</Head>
			<body className="bg-[#f7f2f2] dark:bg-gray-800">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
