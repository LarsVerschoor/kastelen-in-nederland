import { useContext, useEffect, useState } from 'react';
import { CastlesContext } from '../contexts/CastlesContext';
import Screen from '../components/Screen';
import Heading from '../components/Heading';
import { Picker } from '@react-native-picker/picker';
import Container from '../components/Container';
import { StyleSheet, View, TextInput } from 'react-native';
import NormalButton from '../components/NormalButton';
import { ThemeContext } from '../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';

function CreateNoteScreen({ route }) {
	const { castles, notes, addNote, editNote, deleteNote } = useContext(CastlesContext);
	const { currentTheme } = useContext(ThemeContext);
	const navigation = useNavigation();

	const [selectedCastle, setSelectedCastle] = useState(route.params?.id ?? null);
	const [note, setNote] = useState("");

	const [editing, setEditing] = useState(false);

	useEffect(() => {
		const isEditing = !!notes.find(note => note.id === selectedCastle)
		setEditing(isEditing)
		navigation.setOptions({ title: isEditing ? 'Notitie bewerken' : 'Nieuwe notitie' });
		setNote(notes.find(({ id }) => id === selectedCastle)?.text ?? '')
	}, [selectedCastle]);

	function save() {
		if (selectedCastle === null) {
			alert('Je moet een kasteel selecteren voordat je de notitie op kunt slaan.');
			return;
		}

		if (note === "") {
			alert('Je kunt geen lege notitie opslaan.');
			return;
		}

		if (editing) {
			editNote(selectedCastle, note.trim());
			navigation.navigate('NotesTab', {
				screen: 'NotesScreen'
			});
			return;
		}
		addNote(selectedCastle, note.trim());
		navigation.navigate('NotesTab', {
			screen: 'NotesScreen'
		});
	}

	function remove() {
		deleteNote(selectedCastle);
		navigation.navigate('NotesTab', {
			screen: 'NotesScreen'
		});
	}

	return (
		<Screen>
			<View style={styles.container}>
				<View>
					<Heading>Selecteer een kasteel</Heading>
					<Container>
						<Picker
							style={currentTheme.styles.textMuted}
							dropdownIconColor={currentTheme.styles.textMuted.color}
							onValueChange={(value) => setSelectedCastle(value)}
							selectedValue={selectedCastle}
						>
							<Picker.Item label="Geen kasteel geselecteerd" value={null} key={null}/>
							{
								castles.map(castle => (
									<Picker.Item label={castle.name} value={castle.id} key={castle.id}/>
								))
							}
						</Picker>
					</Container>
				</View>

				<View>
					<Heading>Notitie</Heading>
						<TextInput
							style={[styles.textInput, currentTheme.styles.border, currentTheme.styles.bgLight, currentTheme.styles.textMuted]}
							multiline={true}
							onChangeText={(text) => setNote(text)}
							value={note}
						/>
				</View>
				<View style={styles.buttonsContainer}>
					<NormalButton onPress={save} icon="save-outline" text="Opslaan"></NormalButton>
					{
						editing &&
						<NormalButton onPress={remove} icon="trash-outline" text="Verwijderen" secondary={true}/>
					}
				</View>

			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 16
	},
	textInput: {
		borderWidth: 1,
		borderRadius: 6,
		paddingVertical: 18,
		paddingHorizontal: 18,
		fontSize: 16
	},
	buttonsContainer: {
		flexDirection: 'row',
		gap: 16
	}
});

export default CreateNoteScreen;