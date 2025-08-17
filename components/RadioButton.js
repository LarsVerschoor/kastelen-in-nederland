import { Pressable, StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import NormalText from './NormalText';

function RadioButton({ onSelect, selected, label }) {
	const { currentTheme } = useContext(ThemeContext);

	return (
		<Pressable onPress={() => onSelect()} style={styles.button}>
			<View style={[styles.outerCircle, { borderColor: currentTheme.styles.primary.backgroundColor }]}>
				{selected &&
					<View style={[styles.innerCircle, currentTheme.styles.primary]}></View>
				}
			</View>
			<NormalText>{label}</NormalText>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
		gap: 8,
		alignSelf: 'flex-start'
	},
	outerCircle: {
		borderWidth: 2,
		width: 22,
		borderRadius: 11,
		aspectRatio: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	innerCircle: {
		width: '70%',
		aspectRatio: 1,
		borderRadius: '50%'
	}
});

export default RadioButton;