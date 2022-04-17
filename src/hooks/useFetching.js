import { useState } from 'react';
export default function useFetching(callback) {
	const [isLoading, setLoadingStatus] = useState(false);
	const [error, setError] = useState(false);
	const fetching = async () => {
		try {
			setLoadingStatus(true);
			await callback();
		} catch (e) {
			setError(e);
		} finally {
			setLoadingStatus(false);
		}
	};
	return [fetching, isLoading, error];
}
