import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';
import themes from '../constants/themes';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(themes[0].id);

	useEffect(() => {
		(async () => {
			setTheme(JSON.parse(await AsyncStorage.getItem('theme')) ?? themes[0].id);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			await AsyncStorage.setItem('theme', JSON.stringify(theme));
		})();
	}, [theme]);

	const currentTheme = (themes.find(t => t.id === theme) ?? themes[0]);

	return (
		<ThemeContext.Provider value={{ setTheme, currentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export { ThemeContext, ThemeProvider }