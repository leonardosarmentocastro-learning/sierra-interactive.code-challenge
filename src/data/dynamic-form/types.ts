// enums
/////
export enum InputTypes {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select'
};

export enum Actions {
  ADD_NEW_INPUT = 'ADD_NEW_INPUT',
  CHANGE_INPUT = 'CHANGE_INPUT',
};

// types
/////
export type TextInputTypes = InputTypes.TEXT | InputTypes.NUMBER;
export type TextInputConfiguration = {
  id?: string,
  label: string,
  type: TextInputTypes,
  value?: string,
};

export type SelectOption = {
  id: string,
  label: string,
  value: any,
};
export type SelectableInputConfiguration = {
  id?: string,
  label: string,
  options: SelectOption[],
  type: InputTypes.SELECT,
  value: string,
};

export type InputConfiguration = TextInputConfiguration | SelectableInputConfiguration;

// interfaces
/////
export interface Action {
  type: Actions;
  payload: any,
};

export interface State {
  inputs: InputConfiguration[],
  dynamicFormDispatch: Function,
};
