// @ts-nocheck

type Key<K extends string | number | symbol> = K | [K, unknown];
type GetKey<K extends Key<string>> = K extends [string, unknown] ? K[0] : K;

export const splitProps = <
  P extends Record<string, unknown>,
  U extends Array<Array<Key<keyof P>>>,
>(
  props: P,
  ...keys: U
): [
  ...{
    [K in keyof U]: U[K] extends Array<Key<keyof P>>
      ? Pick<P, GetKey<U[K][number]>>
      : U[K] extends Key<keyof P>
        ? Pick<P, GetKey<U[K]>>
        : never;
  },
  Omit<P, GetKey<U[number][number]>>,
] => {
  const extractedProps = keys.map((keyGroup) =>
    Array.isArray(keyGroup)
      ? keyGroup.reduce(
          (acc, key) => ({
            ...acc,
            [key]: props[key],
          }),
          {} as Pick<P, GetKey<U[number][number]>>,
        )
      : { [keyGroup]: props[keyGroup] },
  );

  const remainingProps = Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      keys.every((keyGroup) =>
        Array.isArray(keyGroup)
          ? !keyGroup.includes(key as keyof P)
          : keyGroup !== key,
      ),
    ),
  ) as Record<string, unknown>;

  return [...extractedProps, remainingProps];
};
