/**
 * Store state
 */
export interface DataInterface {
  propertyName: string;
  value: any;
}

export const storeState: DataInterface[] = [];

/**
 * State for listeners
 */
export type DataCallback = (data: any) => void;

export interface ListenersInterface {
  propertyName: string;
  callback: DataCallback;
  uniqueId: string;
}

export const storeStateListeners: ListenersInterface[] = [];
