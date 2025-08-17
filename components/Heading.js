import { StyleSheet, Text } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Heading({ children }) {
	const { currentTheme } = useContext(ThemeContext);

	return (
		<Text style={[styles.text, currentTheme.styles.text]}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 10
	}
});

export default Heading;