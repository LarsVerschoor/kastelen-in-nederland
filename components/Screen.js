import { ScrollView, StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Screen({ borderBottom = true, borderTop = true, scrollable = false, noPadding=false, children }) {
	const { currentTheme } = useContext(ThemeContext);

	const Container = scrollable ? ScrollView : View;

	return (
		<>
			{ borderTop && <View style={[styles.headerBorder, currentTheme.styles.border]}/> }
			<Container
				style={[styles.screen, currentTheme.styles.bg, !scrollable && !noPadding && styles.padding]}
				contentContainerStyle={[styles.scrollContent, !noPadding && styles.padding]}
			>
				{children}
			</Container>
			{ borderBottom && <View style={[styles.headerBorder, currentTheme.styles.border]}/> }
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	padding: {
		padding: 16
	},
	scrollContent: {
		flexGrow: 1
	},
	headerBorder: {
		borderTopWidth: 1,
		borderBottomWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0
	}
});

export default Screen;