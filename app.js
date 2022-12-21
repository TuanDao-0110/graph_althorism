const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    return hasPath(graph, nodeA, nodeB,)
}

const buildGraph = (edges) => {
    // create
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
let visited = []
const hasPath = (graph, src, dst,) => {
    if (src === dst) return true
    if (visited.includes(src)) return false
    visited.push(src)
    for (let neigbor of graph[src]) {
        if (hasPath(graph, neigbor, dst)) {
            return true
        }
    }
    return false
}
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]
console.log(
    undirectedPath(edges, 'j', 'o')
)
