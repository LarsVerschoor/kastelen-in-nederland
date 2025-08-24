import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { CastlesContext } from '../contexts/CastlesContext';
import * as Location from 'expo-location';
import { watchPositionAsync } from 'expo-location';

function MapScreen({ route }) {
	const { castles } = useContext(CastlesContext);
	const [region, setRegion] = useState(route.params?.region ?? null);
	const [location, setLocation] = useState(null);

	// Ask the user for access to their location, and subscribe to it
	useEffect(() => {
		let locationSubscription;

		(async () => {
			const { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				console.log('Foreground location permission denied by user');
				return;
			}

			const lastKnownLocation = await Location.getLastKnownPositionAsync();
			setLocation(lastKnownLocation ?? null);

			const currentLocation = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
			setLocation(currentLocation);

			locationSubscription = await watchPositionAsync({ accuracy: Location.Accuracy.Highest, timeInterval: 5000, distanceInterval: 0, }, (location) => {
				setLocation(location);
			});
		})();

		return () => {
			if (locationSubscription) locationSubscription.remove();
		}
	}, []);

	// Set region to user's location if region is not set
	useEffect(() => {
		if (region || !location) return;

		const { latitude, longitude } = location.coords;
		setRegion({
			latitude,
			longitude,
			latitudeDelta: 4,
			longitudeDelta: 4
		});
	}, [location, region]);

	// Always overwrite region with route params
	useEffect(() => {
		if (!route.params?.region) return;
		setRegion(route.params.region);
	}, [route.params?.region]);

	return (
		<View style={{ flex: 1 }}>
			<MapView style={styles.map} showsUserLocation={true} showsMyLocationButton={true} region={region}>
				{
					castles && castles.map(castle => (
						<Marker
							key={castle.id}
							coordinate={castle.location}
							title={castle.name}
						/>
					))
				}
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	map: {
		width: '100%',
		height: '100%'
	}
});

export default MapScreen;