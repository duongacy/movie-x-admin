export type IOption = {
    name: string;
    value: string;
};

export type ISelectCallbackChange = (value: string) => void;
export type ISelectCallbackFocus = () => void;
export type ISelectCallbackBlur = () => void;
export type ISelectCallbackSearch = (value: string) => void;
