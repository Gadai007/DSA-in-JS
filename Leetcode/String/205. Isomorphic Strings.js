
const isomorphic = (s='', t='') => {
    if(s.length !== t.length) return false

    let mapa = new Map()
    let mapb = new Map()

    for(let i =0; i < s.length; i++){
        if(mapa.has(s[i]) && mapa.get(s[i]) !== t[i]){
            return false
        }else{
            mapa.set(s[i], t[i])
        }
        if(mapb.has(t[i]) && mapb.get(t[i]) !== s[i]){
            return false
        }else{
            mapb.set(t[i], s[i])
        }
    }
    return true
}

console.log(isomorphic('egg', 'add'))