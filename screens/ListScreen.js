import Screen from '../components/Screen';
import { CastlesContext } from '../contexts/CastlesContext';
import { useContext } from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import ListCard from '../components/ListCard';

function ListScreen() {
	const { castles } = useContext(CastlesContext);

	return (
		<Screen noPadding={true}>
			{
				castles === null ?
					<ActivityIndicator size="large" style={styles.loading}/>
					:
					<FlatList
						contentContainerStyle={styles.list}
						data={castles}
						renderItem={({ item }) => (
							<ListCard id={item.id}/>
						)}
						keyExtractor={item => item.id}
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