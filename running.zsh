#!/bin/bash

# Функция для выполнения команды pnpmb с фильтром по имени пакета
function pnpmb_filter() {
  local name="$1"
  echo "**Обработка пакета: $name**"
  pnpm build --filter "$name"
}

# Получение списка пакетов
packages="$*"

# Цикл по списку пакетов
for name in $packages; do
  # Вызов функции pnpmb_filter для каждого пакета
  pnpmb_filter "$name"
  # Ожидание завершения команды
  wait
done

echo "**Все пакеты обработаны**"
