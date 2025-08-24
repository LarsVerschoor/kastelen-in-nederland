import Container from './Container';
import Heading from './Heading';
import { useContext } from 'react';
import { CastlesContext } from '../contexts/CastlesContext';
import NormalText from './NormalText';
import { Image, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemeContext } from '../contexts/ThemeContext';
import BookmarkButton from './BookmarkButton';
import NormalButton from './NormalButton';
import { useNavigation } from '@react-navigation/native';

function ListCard({ id }) {
	const { castles } = useContext(CastlesContext);
	const { currentTheme } = useContext(ThemeContext);
	const navigation = useNavigation();

	const castle = castles.find(c => c.id === id);

	function goToMap() {
		navigation.navigate('MapTab', {
			screen: 'MapScreen',
			params: {
				region: {
					...castle.location,
					latitudeDelta: 0.04,
					longitudeDelta: 0.04
				}
			}
		});
	}

	return (
		<Container>
			<View style={styles.card}>
				<View>
					<View style={styles.header}>
						<Heading>{castle.name}</Heading>
						<BookmarkButton id={castle.id}/>
					</View>
					<View style={styles.location}>
						<Ionicons name="location" size={20} color={currentTheme.styles.textMuted.color} />
						<NormalText>{castle.city}</NormalText>
					</View>
				</View>

				<Image
					style={styles.image}
					source={{
						uri: castle.image.url
					}}
				/>
				<View style={styles.buttonsContainer}>
					<NormalButton onPress={goToMap} icon="map-outline" text="Bekijk op kaart" inRow={true}/>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	card: {
		gap: 16
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 4,
		alignItems: 'center'
	},
	location: {
		flexDirection: 'row',
		gap: 4
	},
	image: {
		flex: 1,
		width: '100%',
		aspectRatio: 16 / 9,
		borderRadius: 6
	},
	buttonsContainer: {
		flexDirection: 'row',
		gap: 16,
		flexWrap: 'wrap'
	}
});

export default ListCard;