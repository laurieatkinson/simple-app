import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { insertNewList, insertValueIntoList, updateValue } from "./demoSlice";

export const useDemo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.demo);
  return {
    ...state,
    insertNewList: () => {
        dispatch(insertNewList());
    },
    insertValueIntoList: (listIndex: number) => {
        dispatch(insertValueIntoList(listIndex));
    },
    updateValue: (value: number, listIndex: number, itemIndex: number) => {
        dispatch(updateValue({listIndex: listIndex, itemIndex: itemIndex, value: value}));
    }
  }
}