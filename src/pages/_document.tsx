import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html className="">
			<Head>
				<title>Ana Howard - Colourful Haired Human</title>
				<link rel="icon" type="image/png" href="https://anahoward.me/images/eyesemoji.png" />
				<meta name="title" content="Ana Howard - Colourful Haired Human" />
				{/* facebook  / open graph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.anahoward.me"></meta>
				<meta property="og:title" content="Ana Howard - Colourful Haired Human" />
				<meta property="og:description" content="" />
				<meta property="og:image" content="https://anahoward.me/images/preview.png"></meta>

				{/* twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.anahoward.me" />
				<meta property="twitter:title" content="Ana Howard - Colourful Haired Human" />
				<meta property="twitter:description" content="" />
				<meta property="twitter:image" content="https://anahoward.me/images/preview.png"></meta>

				{/* <!-- Google tag (gtag.js) --> */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-HERRG7L4LP"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-HERRG7L4LP');
				</script>
			</Head>
			<body className="bg-[#f7f2f2] dark:bg-gray-800">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
