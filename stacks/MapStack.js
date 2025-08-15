import StackNavigator from '../components/StackNavigator';
import MapScreen from '../screens/MapScreen';

function MapStack() {
	return (
		<StackNavigator initialRouteName="MapScreen" screens={[{ name: 'MapScreen', component: MapScreen, headerShown: false }]}/>
	);
}

export default MapStack;