import { DataInterface, storeState, storeStateListeners } from "./store";

export interface StoreUpdaterPropsInterface {
  newDataArr: DataInterface[];
}

export const storeUpdater = ({ newDataArr }: StoreUpdaterPropsInterface) => {
  console.log("storeState", storeState);

  newDataArr.forEach((newDataItem) => {
    const index = storeState.findIndex(
      (item) => item.propertyName === newDataItem.propertyName
    );

    if (index === -1) {
      storeState.push(...newDataArr);
    } else {
      storeState.splice(index, 1, newDataItem);
    }

    storeStateListeners.forEach((item) => {
      if (item.propertyName === newDataItem.propertyName) {
        item.callback(newDataItem.value);
      }
    });
  });
};

export const updateState = ({ value, propertyName }: DataInterface) => {
  storeUpdater({
    newDataArr: [{ value, propertyName }],
  });
};
