import { Howl } from 'howler';
// TODO: Implement sound player using the "howler" package

const sounds = new Map<string, Howl>();
export const sound = {
    add: (alias: string, url: string): void => {
      const howl = new Howl({
        src: [url],
        preload: true,
      });
      sounds.set(alias, howl);
      console.log(`Sound added: ${alias} from ${url}`);
    },
  
    play: (alias: string): void => {
      const howl = sounds.get(alias);
      if (howl) {
        howl.play();
        console.log(`Playing sound: ${alias}`);
      } else {
        console.warn(`Sound not found: ${alias}`);
      }
    }
  };
