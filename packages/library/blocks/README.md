# Nameless Blocks

## Beta версия, не предназначена для продакшена

Пакет с функдаметральными блоками для построения вашего интерфейса.
Эти блоки дают вам базовые стили и возможность какими html тегами
или вашими личными компонентами они будут являтся. Так же у них есть
возможность мигрировать в свой дочерний элемент, чтобы разделять свойства.
но не добавлять колличесво тегов, аналог asChild из [Radix-ui](https://www.radix-ui.com/primitives/docs/utilities/slot),
но построена на библиотеке [@namelessdev/slots](https://www.npmjs.com/package/@namelessdev/slots).
Для стилизации используется TailwindCSS, атрибут className расширен и принимает
тип ClassValue из библиотеки [clsx](https://www.npmjs.com/package/clsx).
Так же все функции типа grid, flex, conteiner и тому подобного назначатся
при помощи TailwindCSS для облегчения функциональности, так как в TailwindCSS
они уже есть и хорошо работают.

## Box

Простой аналог div или другова элемента который вы укажете в `as?: T | React.FC`.
Во круг него строятся все остальные компоненты этого пакета.

```tsx
const DecorativeBox: FC = () => {};

<Box className="p-5 rounded-md" as={DecorativeBox}>
  <Heading>Hello</Heading>
</Box>;
```

```tsx
<Box className="p-5 rounded-md">
  <DecorativeBox slot="parent">
    <Heading>Hello</Heading>
  </DecorativeBox>
</Box>
```

## Flex

Компонент для создания flex layout. Это обёртка над Box, которые добавляет стили
`flex justify-center items-center gap-3`. У него есть все теже функции, что и у Box.
Отступы и другие настройки применяются при помощи классов TailwindCSS

```tsx
<Flex
  as="menu"
  className={{
    "bg-blue-200 p-5": isVisibility,
  }}
>
  <Box className="w-5 h-5 rounded-md">1</Box>
  <Box className="w-5 h-5 rounded-md">2</Box>
  <Box className="w-5 h-5 rounded-md">3</Box>
  <Box className="w-5 h-5 rounded-md">4</Box>
</Flex>
```

## Stack

Полный аналог компонента Flex, только с самого начала добавлсяет `flex-col`.

```tsx
<Stack className="gap-3">
  <Box className="w-5 h-5 rounded-md">1</Box>
  <Box className="w-5 h-5 rounded-md">2</Box>
  <Box className="w-5 h-5 rounded-md">3</Box>
  <Box className="w-5 h-5 rounded-md">4</Box>
</Stack>
```

## Grid

Компонент для создания сеток на основе css Grid.
Настройки сетки применяются при помощи классов TailwindCSS.

```tsx
<Grid
  className={{
    "grid-cols-2": isTrue,
    "grid-cols-[200px_minmax(900px,_1fr)]": isFalse,
    "gap-3": true,
  }}
>
  <Box className="w-5 h-5 rounded-md">1</Box>
  <Box className="w-5 h-5 rounded-md">2</Box>
  <Box className="w-5 h-5 rounded-md">3</Box>
  <Box className="w-5 h-5 rounded-md">4</Box>
</Grid>
```

## Section

Это компонент для отделения секций. Это единственный компонент в пакете,
который может быть только тегом `section`, так как это синтаксицеский компонент.

```tsx
<Box className="py-5">
  <DecorativeBox>
    <Section slot="parent">
      <Heading>Hello World</Heading>
    </Section>
  </DecorativeBox>
</Box>
```

## Container

Компонент для ограничения максимальной ширины страницы и выравнивания по центру.
Все настройки так же применяются при помощи классов TailwindCSS [container](https://tailwindcss.com/docs/container)

```tsx
<Container className="p-5 max-w-screen-lg rounded-md">
  <Flex slot="parent">
    <Heading>Hello World</Heading>
  </Flex>
</Container>
```
