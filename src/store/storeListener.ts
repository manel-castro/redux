import { DataCallback, storeState, storeStateListeners } from "./store";

export interface OnStoreChangedPropsInterface {
  propertyName: string;
  callback: DataCallback;
}

export const onStoreChanged = ({
  propertyName,
  callback,
}: OnStoreChangedPropsInterface) => {
  storeStateListeners.push({ propertyName, callback });
};

export interface GetStoreStateValuePropsInterface {
  propertyName: string;
}

export const getStoreStateValue = ({
  propertyName,
}: GetStoreStateValuePropsInterface) => {
  return storeState.find((item) => item.propertyName === propertyName)?.value;
};
