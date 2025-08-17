import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RadioButton from '../components/RadioButton';
import themes from '../constants/themes';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Screen from '../components/Screen';
import Heading from '../components/Heading';
import Container from '../components/Container';

function SettingsScreen() {
	const { currentTheme, setTheme } = useContext(ThemeContext);

	return (
		<>
			<Screen borderBottom={false} scrollable={true}>
				<Heading>Thema</Heading>
				<Container style={styles.radioButtonsContainer}>
					{
						themes.map(t => (
							<RadioButton onSelect={() => setTheme(t.id)} label={t.name} key={t.id} selected={t.id === currentTheme.id}/>
						))
					}
				</Container>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	radioButtonsContainer: {
		gap: 8,
		backgroundColor: '#FF0000'
	}
});

export default SettingsScreen;