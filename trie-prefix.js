// Prefix Trie

class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(string) {
        let node = this.root;
        for (let char of string) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode(); // add character if doesnt exist
            } else {
                node = node.children[char]; // move to that character if already exists
            }
        }
        node.endOfWord = true; // mark last character as end of word
    }
    search(string) {
        let node = this.root;
        for (let char of string) {
            if (!(char in node.children)) {
                return false; // word not in trie
            }
            node = node.children[char]; // go to next character
        }
        return node.endOfWord; // if last character is end, word exists in trie, returns true
    }
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!(char in node.children)) {
                return false; // word not in trie
            }
            node = node.children[char]; // go to next character
        }
        return true; // return true if any word has the prefix
    }
}

const trie = new Trie().insert('apple');
console.log(trie.search('apple'));
