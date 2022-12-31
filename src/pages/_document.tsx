import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
	return (
		<Html className="">
			<Head>
				<title>Ana Howard</title>
				<link rel="icon" href="data:;base64,iVBORw0KGgo=" />
				<meta name="description" content="👋 wagwan! welcome to my site" />
			</Head>
			<body className="bg-[#f7f2f2] dark:bg-gray-800">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
