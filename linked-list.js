class Node{
    constructor(value){
        this.value= value;
        this.next= null
    }
}

class LinkedList{
    constructor(){
        this.head= null,
        this.size=0
    }

    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
    perpend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next= this.head
            this.head= node
        }
        this.size++
    }
append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
        let prev= this.head
        while(prev.next){
            prev= prev.next
        }
        prev.next= node
    }
    this.size++
}
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr= this.head
            let listVal=""
            while(curr){
                listVal +=`${curr.value} `
                curr= curr.next
            }
            console.log("listVal", listVal)
        }
    }
}

const list= new LinkedList()
list.append(12)
list.append(34)
list.append(23)
list.print()
