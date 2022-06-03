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
        if (this.keyMap[idx]) {
            for (let i = 0; i < this.keyMap[idx].length; i++) {
                if (this.keyMap[idx][i][0] === key) {
                    return this.keyMap[idx][i][1];
                }
            }
        }
        return undefined;
    }
    keys () {
        let keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let kvPair of this.keyMap[i]) {
                    if (!keys.includes(kvPair[0])) {
                        keys.push(kvPair[0]);
                    }
                }
            }
        }
        return keys;
    }
    values () {
        let vals = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let kvPair of this.keyMap[i]) {
                    if (!vals.includes(kvPair[1])) {
                        vals.push(kvPair[1]);
                    }
                }
            }
        }
        return vals;
    }
}

let hashTable = new HashTable();
console.log('HASH TABLE', hashTable.set(1, 'one'));
console.log('HASH TABLE', hashTable.set(2, 'two'));
console.log('HASH TABLE', hashTable.set(2, 'two'));
console.log('HASH TABLE', hashTable.set(2, 'two'));
console.log('HASH TABLE', hashTable.set(3, 'three'));
console.log('HASH TABLE', hashTable.set(10000, 4));
console.log('HASH TABLE', hashTable.get(1));
console.log('HASH TABLE', hashTable.get(3));
console.log('HASH TABLE', hashTable.get(1));
console.log('VALUES', hashTable.values());
console.log('KEYS', hashTable.keys());


