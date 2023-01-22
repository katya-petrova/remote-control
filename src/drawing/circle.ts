import { mouse, Button, straightTo, Point } from '@nut-tree/nut-js';

const NUMBER_OF_CIRCLE_POINTS = 90;

export const drawCircle = async (radius: number) => {
  const currentPointerPosition = await mouse.getPosition();

  const centerOfCircle = {
    x: currentPointerPosition.x,
    y: currentPointerPosition.y + radius,
  };

  await mouse.pressButton(Button.LEFT);

  for (let n = 0; n <= NUMBER_OF_CIRCLE_POINTS; n += 1) {
    const xn =
      centerOfCircle.x +
      radius * Math.sin((2 * Math.PI * n) / NUMBER_OF_CIRCLE_POINTS);
    const yn =
      centerOfCircle.y -
      radius * Math.cos((2 * Math.PI * n) / NUMBER_OF_CIRCLE_POINTS);

    await mouse.move(straightTo(new Point(xn, yn)));
  }

  await mouse.releaseButton(Button.LEFT);
};
