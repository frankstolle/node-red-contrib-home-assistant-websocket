import { expect } from 'chai';

import {
    isFeatureSupported,
    pushIfNotExist,
} from '../../../../src/editor/components/idSelector/utils';

describe('utils', function () {
    describe('pushIfNotExist', function () {
        it('should push element to array if it does not exist', function () {
            const array = [1, 2, 3];
            pushIfNotExist(array, 4);
            expect(array).to.include(4);
        });

        it('should not push element to array if it already exists', function () {
            const array = [1, 2, 3];
            pushIfNotExist(array, 3);
            expect(array).to.have.lengthOf(3);
        });
    });

    describe('isFeatureSupported', function () {
        it('should return true if required array is empty', function () {
            expect(isFeatureSupported(0b1010, [])).to.be.true;
        });

        it('should return true if bitmask supports all required features', function () {
            expect(isFeatureSupported(0b1010, [0b0010, 0b1000])).to.be.true;
        });

        it('should return false if bitmask does not support any required features', function () {
            expect(isFeatureSupported(0b1010, [0b0100, 0b0001])).to.be.false;
        });

        it('should return true if bitmask supports any features ', function () {
            expect(isFeatureSupported(0b1111, [[0b1000, 0b0100], 0b1000])).to.be
                .true;
        });

        it('should return false if bitmask does not support all features in nested arrays', function () {
            expect(isFeatureSupported(0b1010, [[0b1000, 0b0100]])).to.be.false;
        });
    });
});
