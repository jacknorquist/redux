// src/features/physicsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PhysicsState {
  temperature: number;
  gravity: number;
  stiffness: number;
}

const initialState: PhysicsState = {
  temperature: 20,
  gravity: 9.81,
  stiffness: 1.0,
};

const physicsSlice = createSlice({
  name: 'physics',
  initialState,
  reducers: {
    setTemperature(state, action: PayloadAction<number>) {
      state.temperature = action.payload;
    },
    setGravity(state, action: PayloadAction<number>) {
      state.gravity = action.payload;
    },
    setStiffness(state, action: PayloadAction<number>) {
      state.stiffness = action.payload;
    },
  },
});

export const { setTemperature, setGravity, setStiffness } = physicsSlice.actions;
export default physicsSlice.reducer;