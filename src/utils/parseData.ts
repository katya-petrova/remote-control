export const parseData = (command: string) => {
  const array = command.split(' ');
  const direction = array[0];
  const position = array[1];
  const figureLength = array[2];
  return [direction, position, figureLength];
};
