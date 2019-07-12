import { MARK_FAVORITE } from "./actionConstants";

export const markFavorite = (id: string) => ({
  type: MARK_FAVORITE,
  id
});
