import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	render(){
		return(
			<View style={styles.container}>
				<Text>Some text</Text>
				<TextInput></TextInput>
				<View>
				</View>	
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: #eee,
		alignItems: 'center',
		justifyContent: 'center',
	},
});