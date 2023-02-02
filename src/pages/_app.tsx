import 'tailwindcss/tailwind.css'
import '@/styles/styles.css'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'

const App = ({ Component, pageProps }) => {
	return (
		
		<ThemeProvider attribute="class">
			{/* <!-- Google tag (gtag.js) --> */}
			<Script
       				 src="https://www.googletagmanager.com/gtag/js?id=G-HERRG7L4LP"
        				strategy="afterInteractive"
      			/>
      			<Script id="google-analytics" strategy="afterInteractive">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){window.dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-HERRG7L4LP');
				`}
			</Script>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
