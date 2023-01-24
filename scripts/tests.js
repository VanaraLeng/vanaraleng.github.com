
describe('Sum', function() {
    describe('#sum()', function() {
        it('should return 10 when we sum all numbers in array', function() {
            assert.equal(sum([1,2,3,4]), 10);
        });
    });
});

describe('Multiply', function() {
    describe('#sum()', function() {
        it('should return 24 when we multiply all numbers in array', function() {
            assert.equal(multiply([1,2,3,4]), 24);
        });
    });
});

describe('Reverse', function() {
    describe('#reverse()', function() {
        it('should output (ratset gaj) when we reverse (jag testar)', function() {
            assert.equal(reverse("jag testar"), "ratset gaj");
        });
    });
});

describe('Filter Long Words', function() {
    describe('#filterLongWords()', function() {
        it('shout output ["Archaic", "Plethora"] when we filter with greater than 6 in ["Archaic", "Zephyr", "Plethora", "Degust"]', function() {
            assert.deepEqual(filterLongWords(["Archaic", "Zephyr", "Plethora", "Degust"], 6), ["Archaic", "Plethora"]);
            
        });
    });
});