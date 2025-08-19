import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { CastlesContext } from '../contexts/CastlesContext';

function MapScreen() {
	const { castles } = useContext(CastlesContext);

	return (
		<View style={{ flex: 1 }}>
			<MapView style={styles.map} showsUserLocation={true} showsMyLocationButton={true}>
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