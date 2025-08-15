import StackNavigator from '../components/StackNavigator';
import ListScreen from '../screens/ListScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function ListStack() {
	return (
		<StackNavigator initialRouteName="ListScreen" screens={[{ name: 'ListScreen', component: ListScreen, headerShown: false }]}/>
	);
}

export default ListStack;