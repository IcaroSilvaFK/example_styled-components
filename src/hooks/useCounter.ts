import { useContext } from "react";
import { CounterContext } from "../context/CounterContextProvider";

export function useCounter(){
  return   useContext(CounterContext)
}