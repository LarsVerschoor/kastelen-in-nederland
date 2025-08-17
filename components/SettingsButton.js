import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function SettingsButton() {
	const navigation = useNavigation();
	const { currentTheme } = useContext(ThemeContext);

	return (
		<Pressable onPress={() => navigation.navigate('Settings')} style={styles.button}>
			<Ionicons name="settings-outline" size={24} color={currentTheme.styles.text.color} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 16
	}
});

export default SettingsButton;