# fdll
Fast Doubly Linked List

Lists contains object with two properties: key and data. A list cannot contain two elements with same key. All operations are done in constant time. Lists have following methods:
* push({key: key, data: data}) adds an element next to the list head. The new length of the list is returned.
* pop() removes the tail of the list and return {key: key, data: data}; if list is empty, null is returned.
* unshift({key: key, data: data}) adds an element before the list tail. The new l ength of the list is returned.
* shift() removes the head of the list and return {key: key, data: data}; if the list is empty, null is returned.
* remove(key) removes the element which as the key if it exists and return {key: key, data: data}; if is does not exist, null is returned.
