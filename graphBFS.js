const breathFirstPrint = (graph, source) => {
    const queue = [source]
    const printed = []
    // FILO
    while (queue.length > 0) {
        const current = queue.shift()
        printed.push(current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
    console.log(printed)
}


const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}


breathFirstPrint(graph, 'a')