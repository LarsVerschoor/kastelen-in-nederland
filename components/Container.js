import { StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Container({ children }) {
	const { currentTheme } = useContext(ThemeContext);

	return (
		<View style={[styles.container, currentTheme.styles.bgLight, currentTheme.styles.border]}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 14,
		borderRadius: 8
	}
});

export default Container;