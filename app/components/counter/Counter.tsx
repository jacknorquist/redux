"use client";

import { useState } from "react";

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "@/lib/features/counter/counterSlice";

import {setGravity, setTemperature, setStiffness} from "@/lib/features/physics/physicsSlice"

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./Counter.module.css";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <button onClick={dispatch(setGravity(1))}></button>
      <button onClick={dispatch(setTemperature(1))}></button>
      <button onClick={dispatch(setStiffness(1))}></button>

    </div>
  );
};
