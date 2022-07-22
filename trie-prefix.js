// Prefix Trie

class TrieNode {
    constructor() {
        this.root = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(string) {
        let current = this.root;
        for (let letter of string) {
            if (current[letter] === undefined) current[letter] = {};  // add character if doesnt exist
            current = current[letter]; // move to that character if already exists
            }
        current.endOfWord = true; // mark last character as end of word
    }

    search(string) {
        let current = this.root;
        for (let letter of string) {
            if (!current[letter]) return false; // word not in trie
            current = current[letter]; // go to next character
        }
        return current && current.endOfWord === true; // if last character is end, word exists in trie, returns true
    }

    startsWith(prefix) {
        let current = this.root;
        for (let letter of prefix) {
            if (!current[letter]) return false; // word not in trie
            current = current[letter]; // go to next character
        }
        return true; // return true if any word has the prefix
    }
}
