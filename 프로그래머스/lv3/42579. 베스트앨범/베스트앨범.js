function solution(genres, plays) {
    const map = new Map()
    genres
        .map((genre,i)=> [genre, plays[i]])
        .forEach((v, index)=> {
            const data = map.get(v[0]) || {totalCount: 0, songs: []}
            map.set(v[0],{ totalCount: data.totalCount + v[1],
                            songs: [...data.songs,{play: v[1], index}]
                                        .sort((a,b)=> b.play-a.play)
                                        .slice(0,2) 
            })})
       return [...map.values()]
            .sort((a,b) => b.totalCount - a.totalCount)
            .flatMap(v => v.songs)
            .map(v => v.index)
}   