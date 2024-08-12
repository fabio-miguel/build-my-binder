export interface Card {
  id: number;
  name: string;
  imageUrl: string;
}

export interface ListState {
  isLoading: boolean;
  list: {
    id: number;
    name: string;
    imageUrls: {
      id: number;
      imageUrl: string;
    }[];
  }[];
  moreListCardsToLoad: boolean;
  nextListPageToLoad: string;
  selectedCards: Card[];
}

export interface RootState {
  list: ListState;
}

export interface Action {
  type: string;
  payload?: any;
}
