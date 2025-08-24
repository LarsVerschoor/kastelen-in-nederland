import Screen from '../components/Screen';
import { CastlesContext } from '../contexts/CastlesContext';
import { useContext } from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import ListCard from '../components/ListCard';

function ListScreen() {
	const { castles, loading } = useContext(CastlesContext);

	return (
		<Screen noPadding={true}>
			{
				loading ?
					<ActivityIndicator size="large" style={styles.loading}/>
					:
					castles && <FlatList
						contentContainerStyle={styles.list}
						data={castles}
						renderItem={({ item }) => (
							<ListCard id={item.id}/>
						)}
						keyExtractor={({ id }) => id}
					/>
			}
		</Screen>
	);
}

const styles = StyleSheet.create({
	list: {
		padding: 16,
		gap: 16
	},
	loading: {
		marginTop: 32
	}
});

export default ListScreen;