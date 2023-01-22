import { mouse, left, right, up, down, Button } from '@nut-tree/nut-js';

export const drawRectangular = async (width: number, length: number) => {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(length));
  await mouse.move(down(width));
  await mouse.move(left(length));
  await mouse.move(up(width));
  await mouse.releaseButton(Button.LEFT);
};
