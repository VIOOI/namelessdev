import { Hash, HashMap, Option } from "effect";

export type Lazy<T> = () => T;

interface History<T> {
  value: HashMap.HashMap<number, T>;
  update: (key: number, value: T) => void;
}

export const lazyfn = <B extends any, A extends any[] = any[]>(
  fn: (...args: A) => B,
): ((...args: A) => () => B) => {
  const history: History<B> = {
    value: HashMap.empty<number, B>(),
    update: function (key, value) {
      this.value = this.value.pipe(HashMap.set(key, value));
    },
  };

  return (...lazyargs: A): Lazy<B> =>
    () => {
      const hashArgs = Hash.array(lazyargs);

      return history.value.pipe(
        HashMap.get(hashArgs),
        Option.getOrElse(() => {
          const result = fn(...lazyargs);
          history.update(hashArgs, result);
          return result;
        }),
      );
    };
};
