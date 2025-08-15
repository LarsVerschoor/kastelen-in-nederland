import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function SettingsButton() {
	const navigation = useNavigation();

	return (
		<Pressable onPress={() => navigation.navigate('Settings')} style={{ paddingHorizontal: 16 }}>
			<Ionicons name="settings-outline" size={24} color="black" />
		</Pressable>
	)
}

export default SettingsButton;