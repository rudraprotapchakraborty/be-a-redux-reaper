import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/redux/features/counter/CounterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Counter() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  return (
    <div className="pt-24 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-sm w-full text-center border border-gray-200 dark:border-gray-700 transition-all">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Counter with Redux
        </h1>

        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <Button onClick={() => handleDecrement(1)}>Decrement by 1</Button>
            <Button onClick={() => handleDecrement(5)}>Decrement by 5</Button>
          </div>
          <div className="text-4xl font-semibold text-green-600 dark:text-green-400 w-16 text-center">
            {count}
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={() => handleIncrement(1)}>Increment by 1</Button>
            <Button onClick={() => handleIncrement(5)}>Increment by 5</Button>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Click buttons to update counter
        </p>
      </div>
    </div>
  );
}
