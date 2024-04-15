import React, { ReactElement, ReactNode, ElementType } from "react";

type ComponentOrElement<T> = ElementType<T> | ReactElement;

type DynamicProps<T extends {}> = {
  component: ComponentOrElement<T>;
  props?: T;
  children?: ReactNode;
};

export const Dynamic = <T extends {}>({
  component,
  props = {} as T,
  children,
}: DynamicProps<T>): ReactNode =>
  React.isValidElement(component)
    ? React.cloneElement(component, props, children)
    : React.createElement(component as ElementType<T>, props, children);
