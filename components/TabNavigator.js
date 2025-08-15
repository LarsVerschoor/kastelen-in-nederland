import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsButton from './SettingsButton';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabNavigator({ initialRouteName, screens }) {
	return (
		<Tab.Navigator
			id={null}
			initialRouteName={initialRouteName}
		>
			{
				screens.map(screen => (
					<Tab.Screen
						name={screen.name}
						component={screen.component}
						options={{
							title: screen.title,
							headerRight: () => <SettingsButton/>,
							tabBarButton: (props) => (
								<Pressable { ...props }>
									<Ionicons name={screen.icon} size={24} color="black" />
								</Pressable>
							)
						}}
						key={screen.name}
					/>
				))
			}
		</Tab.Navigator>
	)
}

export default TabNavigator;