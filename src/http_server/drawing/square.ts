import { mouse, left, right, up, down, Button } from '@nut-tree/nut-js';

export const drawSquare = async (parameter: number) => {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(parameter));
  await mouse.move(down(parameter));
  await mouse.move(left(parameter));
  await mouse.move(up(parameter));
  await mouse.releaseButton(Button.LEFT);
};
