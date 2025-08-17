import { StyleSheet } from 'react-native';

const themes = [
	{
		name: 'licht',
		id: 0,
		styles: StyleSheet.create({
			bgDark: {
				backgroundColor: '#D9E1F2'
			},
			bg: {
				backgroundColor: '#ECF0F9'
			},
			bgLight: {
				backgroundColor: '#FFFFFF'
			},
			text: {
				color: '#00091A'
			},
			textMuted: {
				color: '#3D475C'
			},
			border: {
				borderColor: '#A6AEBF',
				borderWidth: 1
			},
			primary: {
				backgroundColor: '#0D2A63'
			}
		})
	},
	{
		name: 'donker',
		id: 1,
		styles: StyleSheet.create({
			bgDark: {
				backgroundColor: '#000000'
			},
			bg: {
				backgroundColor: '#060B13'
			},
			bgLight: {
				backgroundColor: '#0D1526'
			},
			text: {
				color: '#E5EEFF'
			},
			textMuted: {
				color: '#A4AEC2'
			},
			border: {
				borderColor: '#404859',
				borderWidth: 1
			},
			primary: {
				backgroundColor: '#9CB9F2'
			}
		})
	}
];

export default themes;