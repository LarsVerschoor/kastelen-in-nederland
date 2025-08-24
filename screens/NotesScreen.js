import Screen from '../components/Screen';
import NormalButton from '../components/NormalButton';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { CastlesContext } from '../contexts/CastlesContext';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import NotePreview from '../components/NotePreview';

function NotesScreen() {
	const navigation = useNavigation();
	const { notes, castles, loading } = useContext(CastlesContext);
	function goToCreateNote() {
		navigation.navigate('NotesTab', {
			screen: 'CreateNoteScreen'
		});
	}

	return (
		<Screen noPadding={true}>
			<View style={styles.button}>
				<NormalButton onPress={goToCreateNote} icon="add-outline" text="Notitie toevoegen"/>
			</View>
			{
				loading ?
					<ActivityIndicator size="large" style={styles.loading}/>
					:
					castles && <FlatList
						contentContainerStyle={styles.list}
						data={
							castles.reduce((acc, castle) => {
								const note = notes.find(note => note.id === castle.id);
								if (note && !acc.some(n => n.id === note.id)) {
									acc.push(note);
								}
								return acc;
							}, [])
						}
						renderItem={({ item }) => (
							<NotePreview id={item.id}/>
						)}
						keyExtractor={({ id }) => id}
					/>
			}
		</Screen>
	);
}

const styles = StyleSheet.create({
	list: {
		padding: 16,
		gap: 16
	},
	loading: {
		marginTop: 32
	},
	button: {
		paddingLeft: 16,
		paddingTop: 16,
	}
});

export default NotesScreen;