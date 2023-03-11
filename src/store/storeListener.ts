import { DataCallback, storeState, storeStateListeners } from "./store";

export interface OnStoreChangedPropsInterface {
  propertyName: string;
  callback: DataCallback;
}

export const onStoreChanged = ({
  propertyName,
  callback,
}: OnStoreChangedPropsInterface) => {
  /**
   *
   * TODO: should also control how many listeners are appended
   */
  const uniqueId = "" + callback + propertyName + "_storeListener";

  const currentListenerIndex = storeStateListeners.findIndex(
    (item) => item.uniqueId === uniqueId
  );

  const newData = { propertyName, callback, uniqueId };
  if (currentListenerIndex === -1) {
    storeStateListeners.push(newData);
  } else {
    storeStateListeners.splice(currentListenerIndex, 1, newData);
  }
};

export interface GetStoreStateValuePropsInterface {
  propertyName: string;
}

export const getStoreStateValue = ({
  propertyName,
}: GetStoreStateValuePropsInterface) => {
  return storeState.find((item) => item.propertyName === propertyName)?.value;
};
