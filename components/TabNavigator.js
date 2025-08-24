import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsButton from './SettingsButton';
import { Pressable, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { CastlesProvider } from '../contexts/CastlesContext';

const Tab = createBottomTabNavigator();

function TabNavigator({ initialRouteName, screens }) {
	const { currentTheme } = useContext(ThemeContext);

	return (
		<CastlesProvider>
			<Tab.Navigator
				id={null}
				initialRouteName={initialRouteName}
				screenOptions={{
					tabBarStyle: currentTheme.styles.bgDark,
					headerStyle: currentTheme.styles.bgDark,
					headerTintColor: currentTheme.styles.text.color
				}}
			>
				{
					screens.map(({name, component, title, icon}) => (
						<Tab.Screen
							name={name}
							component={component}
							options={{
								title: title,
								headerShown: false,
								tabBarButton: (props) => (
									<Pressable { ...props } style={[props['aria-selected'] && currentTheme.styles.primary, styles.button]}>
										<Ionicons name={icon} size={24} color={props['aria-selected'] ? currentTheme.styles.bgLight.backgroundColor : currentTheme.styles.text.color} />
									</Pressable>
								)
							}}
							key={name}
						/>
					))
				}
			</Tab.Navigator>
		</CastlesProvider>
	);
}

const styles = StyleSheet.create({
	button: {
		padding: 6,
		aspectRatio: 1,
		alignSelf: 'center',
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '25%'
	}
});

export default TabNavigator;