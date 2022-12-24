class Queue {
    constructor(){
        this.queue = []
        this.front = this.rear = 0
    }
    enqueue(value){
        this.queue[this.rear++] = value
    }
    dequeue(){
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    peek(){
        return this.queue[this.front];
    }
    size(){
        return this.rear - this.front;
    }
}

function solution(priorities, location) {
    const queue = new Queue()
    priorities.forEach((v,i)=> queue.enqueue([v,i]))
    let count = 0
    while(queue.size() > 0){
        const [val,idx] = queue.dequeue()
        const max = Math.max(...queue.queue
                             .filter(item=>item)
                             .map((item)=>item[0]))
     
        if(val>=max){
            count++
            if(idx === location) return count
        } else {
            queue.enqueue([val,idx])
        }
    }

    return queue
}