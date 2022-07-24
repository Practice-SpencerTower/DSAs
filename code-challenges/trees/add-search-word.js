// Add and Search Word

addWord(word) {
	let current = this.root;
	for (let letter of word) {
		if (!current[letter]) current[letter] = {};
		current = current[letter];
}
current.endOfWord = true;
}

search(word) {
	function dfs(j, root) {
		let current = this.root;
		for (let i = j; i < word.length; i++) {
			let letter = word[i];
		
			if (letter === '.') {
				for (let child of Object.values(current)) {
					if (dfs(i + 1, child)) return true;
}
return false;
} else {
		if (!current[letter]) return false;
		current = current[letter];
}
}
return current.endOfWord === true;
}
dfs(0, this.root);
}
