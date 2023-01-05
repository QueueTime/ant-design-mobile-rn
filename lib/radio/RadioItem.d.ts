import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { RefCheckboxProps } from '../checkbox/Checkbox';
import { CheckboxStyle } from '../checkbox/style';
import { ListStyle } from '../list/style';
import { WithThemeStyles } from '../style';
import { RadioItemPropsType } from './PropsType';
export interface RadioItemProps extends RadioItemPropsType, WithThemeStyles<CheckboxStyle> {
    style?: StyleProp<ViewStyle>;
    listItemStyles?: Partial<ListStyle>;
}
export default class RadioItem extends React.Component<RadioItemProps> {
    radio: RefCheckboxProps;
    handleClick: () => void;
    render(): JSX.Element;
}
