// check how many connect node in graph
const connectedComponentsCount = (graph) => {
    const visited = new Set()
    let count = 0
    for (let node in graph) {
        if (explore(graph, node, visited)) {
            count += 1
        }
    }
    return count
}
const explore = (graph, current, visited) => {
    // check this node already visited or not ?
    if (visited.has(Number(current))) return false
    // if not add it 
    visited.add(current)
    for (let neigbor of graph[current]) {
        // run recursive fn --> to check array inside each node
        explore(graph, neigbor, visited)
    }
    return true
}
const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}


console.log(connectedComponentsCount(graph))