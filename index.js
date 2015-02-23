(function fdllModule() {
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = Fdll;
} else {
	window.Fdll = Fdll;
}

function Fdll() {
    this._length = 0;
    this._head = null;
    this._tail = null;
    this._index = {};
}

Fdll.prototype.push = function(obj) {
	var key = obj.key;
	if (this._index[key]) return new Error('Key uniqueness broken');
	var node = {
		key: key,
        next: null,
        prev: null
    };
	if (this._length == 0) {
	    this._head = node;
	    this._tail = node;
	} else {
	    this._tail.next = node;
	    node.prev = this._tail;
	    this._tail = node;
	}
	this._index[key] = {
		data: obj.data,
		node: node
	};
	return ++this._length;
}
Fdll.prototype.unshift = function(obj) {
	var key = obj.key;
	if (this._index[key]) return new Error('Key uniqueness broken');
	var node = {
		key: key,
        next: null,
        prev: null
    };
	if (this._length == 0) {
	    this._head = node;
	    this._tail = node;
	} else {
	    this._head.prev = node;
	    node.next = this._head;
	    this._head = node;
	}
	this._index[key] = {
		data: obj.data,
		node: node
	};
	return ++this._length;
};
Fdll.prototype.pop = function() {
	if (this._length == 0) return null;
	else {
		var key = this._tail.key;
		return this.remove(key);
	}
};
Fdll.prototype.shift = function() {
	if (this._length == 0) return null;
	else {
		var key = this._head.key;
		return this.remove(key);	}
};
Fdll.prototype.remove = function(key) {
	var index = this._index[key];
	if (!index) return null;
	var node = index.node;
	var prev = node.prev;
	var next = node.next;
	if (prev) prev.next = next;
	else this._head = next;
	if (next) next.prev = prev;
	else this._tail = prev;
	delete this._index[key];
	this._length--;
	return({
		key: key,
		data: index.data
	});
}
Fdll.prototype.get = function(key) {
	var index = this._index[key];
	if (index) return {key: key, data: index.data};
	else return null;
};
Fdll.prototype.length = function() {
	return this._length;
};
Fdll.prototype.print = function() {
	console.log('length:', this._length);
	var node = this._head;
	console.log('[');
	while(node) {
		var index = this._index[node.key];
		console.log('key:', node.key + '; data:', index.data, ',');
		node = node.next;
	}
	console.log(']');
};
})();
