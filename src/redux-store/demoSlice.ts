import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IDemoState {
    itemList: number[][];
    calculatedValues: number[][];
}
const initialState: IDemoState = {
    itemList: [],
    calculatedValues: []
};

const demoSlice = createSlice({
    name: 'demo',
    initialState,
    reducers: {
        insertNewList: (state) => {
            state.itemList.push([]);
            state.calculatedValues.push([]);
        },
        insertValueIntoList: (state, action: PayloadAction<number>) => {
            state.itemList[action.payload].push(0);
            state.calculatedValues[action.payload].push(0);
        },
        updateValue: (state, action: PayloadAction<{listIndex: number, itemIndex: number, value: number}>) => {
            const {listIndex, itemIndex, value} = action.payload;
            state.itemList[listIndex][itemIndex] = value;
            state.calculatedValues[listIndex][itemIndex] = value * 0.1;
        },
    }
});

export const {
    insertNewList,
    insertValueIntoList,
    updateValue
} = demoSlice.actions;

export default demoSlice.reducer;