import { createSlice } from '@reduxjs/toolkit';

const modalDefaultData = {
	id: '',
	title: '',
	videoId: '',
	bucket: '',
	link: '',
};

export const appSlice = createSlice({
	name: 'appData',

	initialState: {
		pageNumber: 0,
		modalOpen: false,
		modalData: {
			id: '',
			title: '',
			videoId: '',
			bucket: '',
			link: '',
		},
		address: '',
		products: [],
		favourites: [],
		nfts: [],
	},

	reducers: {
		incrementPage: state => {
			state.pageNumber += 1;
		},
		decrementPage: state => {
			state.pageNumber -= 1;
		},
		setPage: (state, action) => {
			state.pageNumber = action.payload;
		},
		openModal: (state, action) => {
			state.modalOpen = true;
			state.modalData = action.payload;
		},
		closeModal: state => {
			state.modalOpen = false;
			state.modalData = modalDefaultData;
		},
		setProducts: (state, action) => {
			state.products = [...action.payload];
		},
		updateProducts: (state, action) => {
			state.products = [action.payload, ...state.products?.filter(item => item.id !== action.payload.id)];
		},
		deleteProducts: (state, action) => {
			state.products = [...state.products.filter(item => item.id !== action.payload.id)];
		},
		addFavourites: (state, action) => {
			state.favourites = [action.payload, ...state.favourites?.filter(item => item.id !== action.payload.id)];
		},
		removeFavourites: (state, action) => {
			state.favourites = [...state.favourites?.filter(item => item.id !== action.payload.id)];
		},
		setAddress: (state, action) => {
			state.address = action.payload;
		},
		addNFT: (state, action) => {
			state.nfts = [action.payload, ...state.nfts];
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	incrementPage,
	decrementPage,
	setPage,
	// Modal
	openModal,
	closeModal,
	// Videos
	setProducts,
	updateProducts,
	deleteProducts,
	// Favourites
	addFavourites,
	removeFavourites,
	updateQuery,
	// Address
	setAddress,
	// NFTs
	addNFT,
} = appSlice.actions;

export default appSlice.reducer;
