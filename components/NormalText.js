import { StyleSheet, Text } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function NormalText({ children }) {
	const { currentTheme } = useContext(ThemeContext);

	return (
		<Text style={[styles.text, currentTheme.styles.textMuted]}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 14
	}
});

export default NormalText;