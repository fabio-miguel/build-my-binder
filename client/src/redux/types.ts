export interface Card {
  id: number;
  name: string;
}

export interface ListState {
  isLoading: boolean;
  list: Card[];
}

export interface RootState {
  list: ListState;
}

export interface Action {
  type: string;
  payload?: any;
}
