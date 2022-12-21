let printed = []
const depthFirstPrint = (graph, source) => {
    printed.push(source)
    for (let neighbor of graph[source]) {
        depthFirstPrint(graph, neighbor)
    }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}


depthFirstPrint(graph, 'a')