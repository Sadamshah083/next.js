"use client";

// Importing decrement and increment action creator from the CounterSlice.
import {
  decrement,
  increment,
  reset,
} from "@/lib/features/CounterState/CounterSlice";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();

  const countState = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="flex gap-8 items-center">
      <div>
        <div className="flex flex-col items-center border p-10">
          <h2 className=" text-center py-1 px-4 font-semibold text-gray-600 ">
            counter Value
          </h2>
          <div className="flex gap-4 justify-center items-center">
            <button
              onClick={() => dispatch(decrement(1))}
              className="w-10 h-10 border rounded bg-green-300"
            >
              -
            </button>
            <h2 className="border rounded h-10 text-center py-1 px-4 font-semibold text-gray-600 ">
              {countState}
            </h2>
            <button
              onClick={() => dispatch(increment(1))}
              className="w-10 h-10 border rounded bg-green-300"
            >
              +
            </button>
          </div>
          <button
            className="bg-green-300 p-2 mt-3 rounded-2xl w-[150px] shadow-md"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
