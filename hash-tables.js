// HASH TABLES

// Works on strings only
function hash (key, arrayLen) {
    let total = 0;
    for (let char of key) {
        let val = char.charCodeAt(0) - 96;
        total = (total + val) % arrayLen;
    }
    return total;
}

class HashTable {
    constructor(size=35) {
        this.keyMap = new Array(size);
    }
    _hash (key) {
        let total = 0;
        let PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let val = char.charCodeAt(0) - 96;
            total = (total * PRIME + val) % this.keyMap.length;
        }
        return total;
    }
    set (key, val) {
        let idx = this._hash(key);
        if (!this.keyMap[idx]) {
            this.keyMap[idx] = [];
        }
        this.keyMap[idx].push([key, val]);
        return this.keyMap;
    }
    get (key) {
        let idx = this._hash(key);
        let kvPair;
        if (!this.keyMap[idx]) return undefined;
        if (this.keyMap[idx].length === 1) {
            kvPair = this.keyMap[idx][0];
        } else {
            this.keyMap[idx].forEach(pair => {
                if (pair[0] === key) {
                    kvPair = pair;
                }
            });
        }
        if (!kvPair) return undefined;
        return kvPair;
    }
}

let hashTable = new HashTable();
console.log('HASH TABLE', hashTable.set(1, 'one'));
console.log('HASH TABLE', hashTable.set(2, 'two'));
console.log('HASH TABLE', hashTable.set(3, 'three'));
console.log('HASH TABLE', hashTable.get(1));


