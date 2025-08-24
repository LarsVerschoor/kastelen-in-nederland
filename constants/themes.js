import { StyleSheet } from 'react-native';

const themes = [
	{
		name: 'donker',
		id: 10,
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
				color: '#bbc6d8'
			},
			border: {
				borderColor: '#404859',
				borderWidth: 1
			},
			primary: {
				backgroundColor: '#9CB9F2'
			}
		})
	},
	{
		name: 'licht',
		id: 1,
		styles: StyleSheet.create({
			bgDark: {
				backgroundColor: '#e2e7f3'
			},
			bg: {
				backgroundColor: '#f5f8fb'
			},
			bgLight: {
				backgroundColor: '#ffffff'
			},
			text: {
				color: '#00091A'
			},
			textMuted: {
				color: '#343d4e'
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
];

export default themes;