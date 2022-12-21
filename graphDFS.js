const depthFirstPrint = (graph, source) => {
    const stack = [source];
    const printed = []
    // FIFO
    while (stack.length > 0) {
        const current = stack.pop()
        printed.push(current)
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
    return printed
}


const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}
console.log(
    depthFirstPrint(graph, 'a')
)