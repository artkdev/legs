export const formatAddress = (address) => {
	return address.slice(0, 5) + '...' + address.slice(-5);
};

export const ScrollToTop = () => {
	window.scrollTo(0, 0);
};