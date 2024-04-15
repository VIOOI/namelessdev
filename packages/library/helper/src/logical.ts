export const Logical = {
  when: <T>(cond: boolean, onTrue: T, onFalse: T): T =>
    cond ? onTrue : onFalse,

  and: (...values: boolean[]) => values.reduce((acc, val) => acc && val, true),
  or: (...values: boolean[]) => values.reduce((acc, val) => acc || val, false),
  xor: (...values: boolean[]) => values.reduce((acc, val) => acc !== val),
  not: (value: boolean) => !value,
};
