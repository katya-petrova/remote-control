import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';

export const makeScreenshot = async () => {
  const { x: currentX, y: currentY } = await mouse.getPosition();
  const region = new Region(currentX - 100, currentY - 100, 200, 200);

  const image = await screen.grabRegion(region);
  const imageRGB = await image.toRGB();
  const jimpImage = new Jimp(imageRGB);
  const jimpRead = await Jimp.read(jimpImage);
  const MIME = jimpRead.getMIME();
  const buffer = await jimpRead.getBase64Async(MIME);

  return 'prnt_scrn ' + buffer.slice(22);
};
