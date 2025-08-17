import { NavigationContainer } from '@react-navigation/native';
import TabsStack from './stacks/TabsStack';
import SettingsScreen from './screens/SettingsScreen';
import StackNavigator from './components/StackNavigator';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
	return (
		<ThemeProvider>
			<NavigationContainer>
				<StackNavigator
					initialRouteName="Tabs"
					screens={[
						{ name: 'Tabs', component: TabsStack, headerShown: false },
						{ name: 'Settings', component: SettingsScreen, headerShown: true, title: 'Instellingen' }
					]}
				/>
			</NavigationContainer>
		</ThemeProvider>
	);
}