import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListStack from './ListStack';
import MapStack from './MapStack';
import TabNavigator from '../components/TabNavigator';
import NotesStack from './NotesStack';

const Tab = createBottomTabNavigator();

function TabsStack() {
	return (
		<TabNavigator
			initialRouteName="ListTab"
			screens={[
				{ name: 'ListTab', component: ListStack, title: 'Kastelen', icon: 'list-outline' },
				{ name: 'MapTab', component: MapStack, title: 'Kaart', icon: 'map-outline' },
				{ name: 'NotesTab', component: NotesStack, title: 'Notities', icon: 'document-text-outline' }
			]}
		/>
	)
}

export default TabsStack;