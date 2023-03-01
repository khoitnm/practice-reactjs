import Item from "./Item";

export const createItem = (id: number): Item => {
  return {
    id: `${id}`,
    name: `Name ${id} ${Date.now()}`
  }
}

export const createItemsSortedById = (itemsCount: number): Item[] => {
  const result: Item[] = [];
  for (let i = 0; i < itemsCount; i++) {
    result.push(createItem(i));
  }
  return result;
}

export const createItemsSortedRandomly = (itemsCount: number): Item[] => {
  const items: Item[] = createItemsSortedById(itemsCount);
  return shuffle(items);
}

export const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

