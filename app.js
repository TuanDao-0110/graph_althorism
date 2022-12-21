const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
] // shortest path =(edges,'w','z') = 2 

const shortestPath = (edges, nodeA, NodeB) => {
    const graph = buildGraph(edges)
    // create visited list --> to make sure that graph travesal not go back
    const visited = new Set()
    visited.add(nodeA)
    // let queue with node and distance
    let queue = [[nodeA, 0]]
    while (queue.length > 0) {
        console.log(queue)
        // take 1st out of the queue
        const [node, distance] = queue.shift()

        // check if that node === NodeB
        if (node === NodeB) {
            // return incase node === nodeB
            return distance
        }
        // if not keep push 2 new unvisited neighbor  vs add distance 
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                queue.push([neighbor, distance + 1])
            }
        }
    }
}

const buildGraph = (edges) => {
    const graph = {}

    for (let edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) {
            graph[a] = []
        }
        graph[a].push(b)
        if (!(b in graph)) {
            graph[b] = []
        }
        graph[b].push(a)
    }
    return graph
}

console.log(shortestPath(edges, 'w', 'z'))