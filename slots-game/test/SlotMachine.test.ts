import { expect } from 'chai';
import { SlotMachine } from '../src/slots/SlotMachine';
import * as PIXI from 'pixi.js';
import sinon from 'sinon';
import { Reel } from '../src/slots/Reel';

describe('SlotMachine', () => {
    let slotMachine: SlotMachine;
    let app: PIXI.Application;

  beforeEach(() => {
    sinon.restore(); // očisti sve stubove i spy-eve
    app = {
      screen: { width: 800, height: 600 },
      stage: new PIXI.Container(),
    } as unknown as PIXI.Application;

    slotMachine = new SlotMachine(app);
  });

    afterEach(() => {
        sinon.restore();
    });

    it('should create reels on initialization', () => {
        expect(slotMachine['reels']).to.be.an('array').with.lengthOf(4); // Assuming REEL_COUNT is 4
        slotMachine['reels'].forEach(reel => {
            expect(reel).to.be.an.instanceOf(Reel);
        });
    });

    it('should set the spin button', () => {
        const button = new PIXI.Sprite();
        slotMachine.setSpinButton(button);
        expect(slotMachine['spinButton']).to.equal(button);
    });
});
