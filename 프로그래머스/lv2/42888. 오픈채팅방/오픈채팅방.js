class Chat {
    messages = []
    users = {}
    
    enter({id,nickname}) {
       const messagesIdx = [...(this.users[id]?.messagesIdx || []), this.messages.length]
       this.users[id] = { nickname, messagesIdx };
       this.messages.push(`${nickname}님이 들어왔습니다.`)
       this.change({id,nickname})
    }
    
    leave({id}) {
       const messagesIdx = [...this.users[id].messagesIdx, this.messages.length]
       const { nickname } = this.users[id] 
       this.users[id] = { nickname, messagesIdx };
       this.messages.push(`${nickname}님이 나갔습니다.`)
    }
    
    change({id,nickname}) {
       this.users[id] = {...this.users[id], nickname};
       const {messagesIdx} = this.users[id]
       messagesIdx.forEach(messageIdx =>{
         const [a, b] =  this.messages[messageIdx].split('님이')         
         this.messages[messageIdx] = nickname + '님이' + b
       })
    }
};

function solution(record) {
    const chat = new Chat()
    for (let x of record){
       const [method, id, nickname] = x.split(' ');
       chat[method.toLowerCase()]({id,nickname});
    }
    return chat.messages
}

