class LRUManager {
    cacheSize
    cached = [];
    runtime = 0;
    
    constructor(cacheSize){
        this.cacheSize = cacheSize
    }

    process(city){
       const lowerCaseCity = city.toLowerCase();
       this.runtime += this.#checkIsHit(lowerCaseCity) ? 1 : 5;
       this.#caching(lowerCaseCity)
    }
    // 처음엔 swap이란것을 만들어, 
    // 존재할 경우 swap으로, 마지막으로 옮기는 방식으로 구현했는데,
    // 이 경우 예외처리 못해주는 부분이 생기는 듯.
    #caching(city){
        const idx = this.cached.indexOf(city)
        if(idx > -1) {
           this.cached = [...this.cached.slice(0,idx), ...this.cached.slice(idx+1)];
        }
        this.cached.push(city);
        if(this.cached.length > this.cacheSize) {
          this.cached.shift();
        }
    }

    #checkIsHit(city){
        return this.cached.includes(city)
    }
}

function solution(cacheSize, cities) {
    const lruManager = new LRUManager(cacheSize)
    for(let i = 0; i<cities.length; i++){
         lruManager.process(cities[i]);
    }
    return lruManager.runtime
}


