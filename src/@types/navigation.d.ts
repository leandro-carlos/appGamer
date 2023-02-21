import { GameCardProps } from "./../Components/GameCard/index";
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  Game: GameParams;
};

interface GameParams {
  id;
  titulo;
  bannerUrl;
}
