import { setLoading } from "../redux/slices/loadingSlice";
import { store } from "../redux/store";
import makeApiRequest from "./apiConnector";
import { endPoints } from "./apiEndpoints";


export const CategoryData = async (id) => {
  store.dispatch(setLoading(true));
  try {
    const data = await makeApiRequest(`${endPoints?.category_api}`, {
      method: "get",
    });

    store.dispatch(setLoading(false));
    return data;
  } catch (error) {
    store.dispatch(setLoading(false));
    throw error;
  }
};