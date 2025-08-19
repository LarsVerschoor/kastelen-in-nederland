import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CastlesContext = createContext(null);

function CastlesProvider({ children }) {
	const [castles, setCastles] = useState(null);
	const [bookmarks, setBookmarks] = useState(null);
	const [loading, setLoading] = useState(true);

	// Load castles from API or AsyncStorage
	useEffect(() => {
		(async () => {
			function fetchWithTimeout (url, options, timeout=5000) {
				return Promise.race([
					fetch(url, options),
					new Promise((_, reject) => setTimeout(() => reject('Request timed out'), timeout))
				]);
			}

			try {
				setLoading(true);
				const response = await fetchWithTimeout('https://kastelen.larsverschoor.nl/', {
					headers: {
						'x-delay': '1000'
					}
				});
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				setCastles(await response.json());
			} catch(e) {
				try {
					setCastles(JSON.parse(await AsyncStorage.getItem('castles')) ?? null);
				} catch (e) {
					console.log(e)
				}
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	// Save newest castles to AsyncStorage
	useEffect(() => {
		if (!castles) return;
		(async () => {
			try {
				await AsyncStorage.setItem('castles', JSON.stringify(castles));
			} catch (e) {
				console.log(e)
			}
		})();
	}, [castles]);

	// Load local bookmarks
	useEffect(() => {
		(async () => {
			try {
				setBookmarks(JSON.parse(await AsyncStorage.getItem('bookmarks')) ?? []);
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	// Locally save bookmarks on state update
	useEffect(() => {
		(async () => {
			try {
				await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
			} catch (e) {
				console.log(e);
			}
		})();
	}, [bookmarks]);

	function toggleBookmark(id) {
		setBookmarks((prev) => {
			const exists = prev.includes(id);
			if (!exists) return [...prev, id];
			return prev.filter((castle) => castle !== id);
		});
	}

	function isBookmarked(id) {
		return bookmarks.includes(id);
	}

	return (
		<CastlesContext.Provider value={{ castles, loading, isBookmarked, toggleBookmark }}>
			{children}
		</CastlesContext.Provider>
	);
}

export { CastlesContext, CastlesProvider }