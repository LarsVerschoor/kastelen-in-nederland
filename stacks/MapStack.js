import StackNavigator from '../components/StackNavigator';
import MapScreen from '../screens/MapScreen';

function MapStack() {
	return (
		<StackNavigator initialRouteName="MapScreen" screens={[{ name: 'MapScreen', title: 'Kaart', component: MapScreen }]}/>
	);
}

export default MapStack;