import React from 'react';
import { TouchableOpacity, View} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { colors } from '../../styles/colors';


export class DrawerIcon extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={ () => this.props.navigation.toggleDrawer() }>
				<View style={{marginLeft: 15, paddingLeft: 7, paddingRight: 7}}>
					<Ionicons name="md-menu" color={colors.textPrimary} size={35} />
				</View>
			</TouchableOpacity>
		)
	}
};
