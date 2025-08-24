import { NavigationContainer } from '@react-navigation/native';
import TabsStack from './stacks/TabsStack';
import SettingsScreen from './screens/SettingsScreen';
import StackNavigator from './components/StackNavigator';
import { ThemeProvider } from './contexts/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<NavigationContainer>
					<StackNavigator
						initialRouteName="Tabs"
						screens={[
							{ name: 'Tabs', component: TabsStack, headerShown: false },
							{ name: 'Settings', component: SettingsScreen, title: 'Instellingen', settingsShown: false }
						]}
					/>
				</NavigationContainer>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}