export const mergeProps = <TBaseProps, TAdditionalProps>(
  baseProps: TBaseProps,
  additionalProps: (props: TBaseProps) => TAdditionalProps,
): TBaseProps & TAdditionalProps => {
  const mergedProps = { ...baseProps };
  const additional = additionalProps(baseProps);
  for (const key in additional) {
    // @ts-ignore
    if (additional.hasOwnProperty(key)) {
      // @ts-ignore
      mergedProps[key] = additional[key];
    }
  }
  // @ts-ignore
  return mergedProps;
};
