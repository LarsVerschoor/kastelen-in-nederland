import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function StackNavigator({ initialRouteName, screens }) {
	return (
		<Stack.Navigator
			id={null}
			initialRouteName={initialRouteName}
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
	)
}

export default StackNavigator;