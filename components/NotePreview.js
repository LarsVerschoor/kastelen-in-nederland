import NormalText from './NormalText';
import Container from './Container';
import { useContext } from 'react';
import { CastlesContext } from '../contexts/CastlesContext';
import { Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemeContext } from '../contexts/ThemeContext';

function NotePreview({ id }) {
	const navigation = useNavigation();
	const { castles } = useContext(CastlesContext);
	const { currentTheme } = useContext(ThemeContext);

	function goToNote() {
		navigation.navigate('NotesTab', {
			screen: 'CreateNoteScreen',
			params: { id }
		});
	}

	return (
		castles &&
		<Pressable onPress={goToNote}>
			<Container>
				<View style={styles.container}>
					<NormalText>{castles.find(castle => castle.id === id).name}</NormalText>
					<Ionicons name="arrow-forward-outline" color={currentTheme.styles.text.color} size={20}/>
				</View>
			</Container>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});

export default NotePreview;