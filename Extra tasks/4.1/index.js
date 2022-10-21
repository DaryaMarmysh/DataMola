class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class List {
    list = [];
    constructor(root) {
        if (root !== undefined) {
            this.root = new Node(root, null);
            this.list.push(new Node(root, null))
        }
    }
    addNode(value, i) {
        if (value !== undefined && typeof value === 'number') {
            if (i !== undefined && typeof value === 'number') {
                if (i > this.list.length - 1 || i <= 0) {
                    return false;
                }

                else {
                    let newNode = new Node(value, this.list[i]);
                    this.list[i].next = this.list[i - 1];
                    this.list.splice(i + 1, 0, newNode);
                }
            }
            else {
                this.list.push(new Node(value, this.list[this.list.length - 1]))
            }
            return true;
        }
        else return false;

    }
    removeNode(i) {
        if(this.list.length > 1){
        if (i !== undefined ) {
            if (i <= this.list.length - 1 && typeof i === 'number') {
                if (i === 0) {
                    this.root = this.list[1];
                    this.list[1].next = null;
                    this.list.splice(0, 1);
                }
                else if (i === this.list.length - 1) {
                    this.list.pop();
                }
                else {
                    this.list.splice(i, 1);
                    this.list[i].next = this.list[i - 1];
                }
                return true;
            }
            else {
                return false;
            }

        }
        else {
            this.list.pop();
            return true;
        }
    }
        return false;
    }
    print() {
        let arr = [];
        this.list.forEach(n => arr.push(n.value))
        console.log(arr.join(', '))
    }
}
let l = new List(1);
l.addNode(2)
l.addNode(3)
l.addNode(4)
l.print()
console.log(l.removeNode('hh'));
l.print();
console.log(l);