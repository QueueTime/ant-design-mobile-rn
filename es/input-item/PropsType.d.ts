import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
export declare type InputEventHandler = (value?: string) => void;
export interface InputItemPropsType {
    type?: 'text' | 'bankCard' | 'phone' | 'password' | 'number' | 'digit' | KeyboardTypeOptions;
    editable?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    clear?: boolean;
    maxLength?: number;
    extra?: React.ReactNode;
    error?: boolean;
    labelNumber?: number;
    labelPosition?: 'left' | 'top';
    textAlign?: 'left' | 'center' | 'right';
    updatePlaceholder?: boolean;
    locale?: object;
    onChange?: (value: string) => void;
    onFocus?: InputEventHandler;
    onBlur?: InputEventHandler;
    onVirtualKeyboardConfirm?: InputEventHandler;
    children?: React.ReactNode;
}
