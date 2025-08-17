import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

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
				screens.map(screen => (
					<Stack.Screen
						name={screen.name}
						component={screen.component}
						key={screen.name}
						options={{ headerShown: screen.headerShown ?? false, title: screen.title }}
					/>
				))
			}
		</Stack.Navigator>
	);
}

export default StackNavigator;