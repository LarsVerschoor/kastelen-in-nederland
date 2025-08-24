import StackNavigator from '../components/StackNavigator';
import NotesScreen from '../screens/NotesScreen';
import CreateNoteScreen from '../screens/CreateNoteScreen';

function NotesStack() {
	return (
		<StackNavigator initialRouteName="NotesScreen" screens={[
			{ name: 'NotesScreen', title: 'Notities', component: NotesScreen, headerShown: true },
			{ name: 'CreateNoteScreen', title: 'Nieuwe notitie', component: CreateNoteScreen, headerShown: true }
		]}/>
	);
}

export default NotesStack;