import * as database from "../database";

/*
  This is the only file that allowed to address the database directly.
  It has some crud functionality which is able to perform all 
  neccassary integration actions.
*/

export function insert(object: any, entityName: keyof typeof database) {
  const entity = database[entityName];
  entity.push(object);
  return object;
}

export function getAll(entityName: keyof typeof database) {
  return database[entityName];
}

export function getOne() {}

export function update() {}

export function remove() {}
