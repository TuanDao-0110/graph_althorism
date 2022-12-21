const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]// --> 3 island
const isLandCount = (grid) => {
    let visited = new Set()
    let count = 0
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (explore(grid, r, c, visited)) {
                count++
            }
        }
    }
    return count
}

const explore = (grid, r, c, visited) => {
    // check row bound/ col bound to make sure that we will not move futher or less
    // than bounds
    const rowInBounds = 0 <= r && r < grid.length
    const colInBound = 0 <= c && c < grid[0].length
    if (!rowInBounds || !colInBound) return false
    // find not water 
    if (grid[r][c] === 'W') return false
    const pos = r + ',' + c
    if (visited.has(pos)) return false
    visited.add(pos);
    // moving when check that not over inbounds 
    // it call recrusive while check and return not visited or visited --> true/false
    explore(grid, r - 1, c, visited)
    explore(grid, r + 1, c, visited)
    explore(grid, r, c - 1, visited)
    explore(grid, r, c + 1, visited)
    return true
}
console.log(isLandCount(grid))