import StackNavigator from '../components/StackNavigator';
import NotesScreen from '../screens/NotesScreen';

function NotesStack() {
	return (
		<StackNavigator initialRouteName="NotesScreen" screens={[{ name: 'NotesScreen', component: NotesScreen, headerShown: false }]}/>
	);
}

export default NotesStack;