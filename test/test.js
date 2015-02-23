var fdll = require('..');
var a = new fdll();
a.push({
	key: 'cat',
	data: {}
});
a.print();
a.push({
	key: 'sed',
	data: {grou: 'grou'}
});
a.print();
a.remove('cat');
a.print();
a.push({
	key: 'sod',
	data: {gr: 'gr'}
});
a.print();
console.log('pop', a.pop());
a.print();