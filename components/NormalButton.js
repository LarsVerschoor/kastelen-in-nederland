import { Pressable, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import NormalText from './NormalText';

function NormalButton({ onPress, icon, text, secondary=false, inRow=false }) {
	const { currentTheme } = useContext(ThemeContext);

	return(
		<Pressable
			onPress={onPress}
			style={[
				styles.button,
				inRow && { flex: 1 },
				!secondary && currentTheme.styles.primary,
				secondary && { borderWidth: 1, borderColor: currentTheme.styles.primary.backgroundColor }
			]}
		>
			<Ionicons name={icon} size={20} color={!secondary ? currentTheme.styles.bgDark.backgroundColor : currentTheme.styles.primary.backgroundColor}/>
			<NormalText color={!secondary ? currentTheme.styles.bgDark.backgroundColor : currentTheme.styles.primary.backgroundColor}>
				{text}
			</NormalText>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
		gap: 8,
		paddingHorizontal: 18,
		paddingVertical: 12,
		alignSelf: 'flex-start',
		borderRadius: 6,
		justifyContent: 'center'
	}
});

export default NormalButton;