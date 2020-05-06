import allTypes from "./types";
/**
 * Функция для получения вида персонажа и зависимых от него параметров
 * @param  {} type - вид персонажа
 */
export function getType(type) {
  if (allTypes[type] === undefined) {
    throw new Error("Incorrect value type");
  } else {
    return type;
  }
}
/**
 * Функция для проверки имени на длину
 * @param  {} name - имя персонажа
 */
export function getName(name) {
  if ((name.length < 2) || (name.length > 10)) {
    throw new Error("Incorrect value name");
  } else {
    return name;
  }
}
/**
 * @param  {} name - имя персонажа
 * @param  {} type - вид персанажа. Возможен один из (строка):
 * Bowman, Swordsman, Magician, Daemon, Undead, Zombie.
 */
export default function Character(name, type) {
  this.name = getName(name);
  this.type = getType(type);
  this.health = 100;
  this.level = 1;
  this.attack = allTypes[type].attack;
  this.defense = allTypes[type].defense;
}
