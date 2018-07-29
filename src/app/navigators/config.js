import { HeaderStyles } from './styles';


export const defaultStackConfig = {
	headerMode: 'float',
	navigationOptions: ({ navigation }) => ({
		headerStyle: HeaderStyles.headerStyle,
		headerTintColor: HeaderStyles.headerTintColor,
		headerTitleStyle: HeaderStyles.headerTitleStyle,
	})
};
