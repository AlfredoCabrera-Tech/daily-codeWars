let timeFunc = (h,m,s) => {
    let hourMs = (h*3600000)
    let minMs = (m*60000)
    let secMs = (s*1000)
    let timeMs = hourMs + minMs + secMs

    return timeMs
}