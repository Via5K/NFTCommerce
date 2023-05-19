import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/layouts/Navbar';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'swiper/css/bundle'; // All (extra) CSS of Swiper is imported here

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<ThemeProvider attribute="class">
				<Script
					src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.4-rc.0/web3.min.js"
					integrity="sha512-RGPKVfQewHGfk9yaB7ThGPKAQU+civS5awsfStLg22jrWbqgDkNzPtIwNFpFApr3ccjB730SRxi+KnDjhIuTpw=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
					onLoad={() => {
						if (window.web3) {
							window.web3 = new Web3(window.web3.currentProvider);
						}
					}}
				/>

				<Navbar />
				<Component {...pageProps} />
			</ThemeProvider>
			<ToastContainer
				position="bottom-right"
				autoClose={6000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				className="w-fit"
			/>
		</Provider>
	);
}
