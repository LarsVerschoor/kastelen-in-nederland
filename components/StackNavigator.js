import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import SettingsButton from './SettingsButton';

const Stack = createNativeStackNavigator();

function StackNavigator({ initialRouteName, screens }) {
	const { currentTheme } = useContext(ThemeContext);

	return (
		<Stack.Navigator
			id={null}
			initialRouteName={initialRouteName}
			screenOptions={{
				headerStyle: currentTheme.styles.bgDark,
				headerTintColor: currentTheme.styles.text.color
			}}
		>
			{
				screens.map(({ name, component, headerShown=true, settingsShown=true, title }) => (
					<Stack.Screen
						name={name}
						component={component}
						key={name}
						options={{
							headerShown: headerShown,
							title: title,
							headerRight: () => settingsShown && <SettingsButton/>
						}}
					/>
				))
			}
		</Stack.Navigator>
	);
}

export default StackNavigator;