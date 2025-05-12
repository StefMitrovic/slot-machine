import { expect } from 'chai';
import { Reel } from '../src/slots/Reel';
import * as PIXI from 'pixi.js';
import sinon from 'sinon';
import { AssetLoader } from '../src/utils/AssetLoader';

describe('Reel', () => {
    let reel: Reel;
    const symbolCount = 3;
    const symbolSize = 100;
    const EPSILON = 0.001; // Tolerancija zbog potencijalnih grešaka u decimalama

beforeEach(() => {
    // Create a valid texture mock
    const mockTexture = PIXI.RenderTexture.create({ width: symbolSize, height: symbolSize });
    sinon.stub(AssetLoader, 'getTexture').returns(mockTexture);

    reel = new Reel(symbolCount, symbolSize);
});

    afterEach(() => {
        sinon.restore(); // Restore all mocked methods
    });

    it('should create a container and symbols on initialization', () => {
        expect(reel.container).to.be.an.instanceOf(PIXI.Container);
        expect(reel['symbols']).to.be.an('array').with.lengthOf(symbolCount);
        reel['symbols'].forEach(symbol => {
            expect(symbol).to.be.an.instanceOf(PIXI.Sprite);
            expect(symbol.width).to.equal(symbolSize);
            expect(symbol.height).to.equal(symbolSize);
        });
    });

    it('should start spinning when startSpin is called', () => {
        reel.startSpin();
        expect(reel['isSpinning']).to.be.true;
        expect(reel['speed']).to.be.greaterThan(0);
    });

    it('should stop spinning when stopSpin is called', () => {
        reel.stopSpin();
        expect(reel['isSpinning']).to.be.false;
    });
});