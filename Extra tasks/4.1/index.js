class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class List {
    list = [];
    constructor(root) {
        {
            this.root = new Node(root, null);
            this.list.push(new Node(root, null))
        }
    }
    addNode(value, i) {
        if (value !== undefined && typeof value === 'number') {
            if (i !== undefined && typeof value === 'number') {
                if (i > this.list.length - 1) {
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
        if (i !== undefined) {
            if (this.list.length > 1 && typeof i === 'number' && i <= this.list.length - 1) {
                if (i == 0) {
                    this.root = this.list[1];
                    this.list[1].next = null;
                    this.list.splice(0, 1);
                }
                else if (i = this.list.length - 1) {
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


        /* methods */
    }
    print() {
        let arr = [];
        this.list.forEach(n => arr.push(n.value))
        console.log(arr.join(', '))
    }
}
let l = new List(8);

l.addNode(44);
l.addNode(9);
l.addNode(10);

//l.addNode(99999, 4);
//l.removeNode(0);
console.log(l);
l.print()