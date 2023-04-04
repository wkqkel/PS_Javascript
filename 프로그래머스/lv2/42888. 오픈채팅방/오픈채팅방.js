class Chat {
    messages = [];
    users = {}
    
    Enter({id,nickname}) {
       this.Change({id,nickname})
       this.messages.push({id,text: '님이 들어왔습니다.'})
    }
    
    Leave({id}) {
       this.messages.push({id,text: '님이 나갔습니다.'})
    }
    
    Change({id,nickname}) {
       this.users[id] = nickname;
    }
    
    Publish(){
        return this.messages.map((v,i)=>{
            const {id, text} = v;
            return this.users[id] + text
        })
    }
}

function solution(record) {
    const chat = new Chat()
    for (let x of record){
       const [method, id, nickname] = x.split(' ');
       chat[method]({id,nickname})
    }
    return chat.Publish()
}

