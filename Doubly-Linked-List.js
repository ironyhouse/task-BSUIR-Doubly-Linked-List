function LinkedList() {
    class Node {                                      // создание узла
      constructor (value) {
        this.value = value;
        this.next = null;                             // следующий элемент 
        this.prev = null;                             // предыдущий элемент
      }
    }
    
    class LinkedList {
      constructor () {
        this.head = null;                             // голова списка
        this.tail = null;                             // хвост списка
        this.length = 0;                              // длинна
      }
    
      append(value) {                                 // добавление элемента
        const newNode = new Node(value);
  
        if (this.length === 0) {
          this.head = newNode
          this.tail = newNode;
        } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
  
          this.tail = newNode;
        }
    
        this.length++;
      }
  
      insertAt(position, value) {                       // вставка элемента
        if (position < 0 || this.length < position) {
          return false;
        }
  
        let node = new Node(value);
  
        if (position === 0) {
          node.next = this.head;
          this.head.prev = node;
  
          this.head = node;
        } else if (position === this.length) {
          this.tail.next = node;
          node.prev = this.tail;
  
          this.tail = node;
        } else {
          let current = this.head;
          let prev = null;
          let index = 0;
  
          while (index < position) {
            prev = current;
            current = current.next;
            index++;
          }
  
          prev.next = node;
          node.prev = prev;
  
          node.next = current;
          current.prev = node;
        }
  
        this.length++;
      }
    
      deleteAt(position) {                                  // удаление элемента 
        if (position < 0 || this.length <= position ) {
          return null;
        }
    
        let current;
  
        if (position === 0) {
          current = this.head;
  
          this.head = this.head.next;
          this.head.prev = null;
        } else if(position === this.length - 1) {
          current = this.tail;
  
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current = this.head;
  
          let prev = null;
          let index = 0;
    
          while (index < position) {
            prev = current;
            current = current.next;
            index++;
          }
    
          prev.next = current.next;
          current.next.prev = prev;
        }
    
        this.length--;
        return current.value;
      }
  
      delete(element) {
        this.deleteAt( this.indexOf(element) );
      }
  
      indexOf(element) {                                      // индекса искомого элемента
        let current = this.head;
        let index = 0;
  
        while (current) {
          if (current.value === element) {
            return index;
          }
  
          current = current.next;
          index++;
        }
  
        return -1;
      }
  
      get(position) {                                       // значение элемента с определенным индексом
        if (position < 0 || this.length <= position ) {
          return null;
        }
  
        let current = this.head;
        let index = 0;
  
        while (index < position) {
          current = current.next;
          index++;
        }
  
        return current.value;
      }
    
      isEmpty() {                                               // проверка списка на пустоту 
        return this.length === 0;
      }
  
      size() {                                                  // длинна списка 
        return this.length;
      }
    
      print() {                                                 // напечатать весь список
        let current = this.head;
    
        while(current) {
          console.log(current.value);
          current = current.next;
        }
      }
    }
  
////////////////////////////////////////////////////////////////////////////////

    function appendItem() {
      console.log('\n---Append Item---');
  
      list.append( {a: 1} );
      list.append( {a: 2} );
      list.append( {a: 3} );
      
      list.insertAt(2, payload);
  
      list.insertAt(0, {a: 5});
      list.insertAt(5, {a: 6});
  
      list.print();
    }
    /*
    function getItem() {
      console.log('\n---Get Item---');
  
      console.log('get(4):', list.get(4));
      console.log('get(0):', list.get(0));
      console.log('get(-5):', list.get(-5));
  
      console.log('indexOf {a: 5}:', list.indexOf({a: 5}));
      console.log('indexOf payload:', list.indexOf(payload));
    }
    */
    function deleteItem() {
      console.log('\n---delete Item---');
  
      console.log('Before:');
      list.print();
  
      list.delete(payload);
  
      console.log('After:');
      list.print();
    }

////////////////////////////////////////////////////////////////////////////////


    // ---Creation---
    console.log('\n\n---Doubly Linked List---');
    let list = new LinkedList();
    let payload = {a: 4};
  
    appendItem();
    //getItem();
    deleteItem();
  } 

/*Вызов
LinkedList();
*/