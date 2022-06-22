function areYouPlayingBanjo(name) {
    let nameArr = name.toLowerCase().split('')
    if(nameArr[0] === 'r'){
        return name + " plays banjo"
    }else {
        return name + " does not play banjo"
    }
}
