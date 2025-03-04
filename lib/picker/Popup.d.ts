import React from 'react';
import { View } from 'react-native';
declare const _default: {
    new (props: Readonly<import("./PopupPickerTypes").PopupPickerProps>): {
        picker: any;
        UNSAFE_componentWillReceiveProps(nextProps: {
            value: any;
            visible: any;
        }): void;
        onPickerChange: (pickerValue: any) => void;
        saveRef: (picker: any) => void;
        setVisibleState(visible: any): void;
        fireVisibleChange(visible: boolean): void;
        getRender(): React.ReactNode;
        onTriggerClick: (e: any) => void;
        onOk: () => void;
        getContent: () => string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.FunctionComponentElement<{
            [x: string]: any;
            ref: (picker: any) => void;
        }> | undefined;
        onDismiss: () => void;
        hide: () => void;
        render(): React.ReactNode;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./PopupPickerTypes").PopupPickerProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./PopupPickerTypes").PopupPickerProps>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./PopupPickerTypes").PopupPickerProps>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<import("./PopupPickerTypes").PopupPickerProps>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./PopupPickerTypes").PopupPickerProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./PopupPickerTypes").PopupPickerProps>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./PopupPickerTypes").PopupPickerProps>, nextState: Readonly<any>, nextContext: any): void;
    };
    defaultProps: {
        actionTextUnderlayColor: string;
        actionTextActiveOpacity: number;
        triggerType: string;
        styles: {};
        WrapComponent: View;
        onVisibleChange(_: any): void;
        okText: string;
        dismissText: string;
        title: string;
        onOk(_: any): void;
        onDismiss(): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
