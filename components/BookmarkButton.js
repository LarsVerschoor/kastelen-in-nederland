import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { CastlesContext } from '../contexts/CastlesContext';

function BookmarkButton({ id }) {
	const { currentTheme } = useContext(ThemeContext);
	const { isBookmarked, toggleBookmark } = useContext(CastlesContext)


	return (
		<Pressable onPress={() => toggleBookmark(id)}>
			<Ionicons name={`bookmark${!isBookmarked(id) ? '-outline' : ''}`} size={24} color={currentTheme.styles.primary.backgroundColor} />
		</Pressable>
	);
}

export default BookmarkButton;