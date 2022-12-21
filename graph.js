const airports = 'PHX BKK OKC JFK LAX MEX HEL EZE LOS LAP LIM'.split(' ')

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'LAX'],
    ['MEX', 'HEL'],
    ['LOS', 'LAP'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
    ['MEX', 'BKK'],
    ['JFK', 'LOS']
]

const adjacencyList = new Map()

// add node
const addNode = (airport) => {
    adjacencyList.set(airport, [])
}

// add edge, undirected

const addEdge = (origin, destination) => {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}


// create a graph
airports.forEach(addNode)
routes.forEach(route => addEdge(...route))
console.log(adjacencyList)
// console.log(adjacencyList.get('HEL'))

const bfs = (start) => {
    const visited = new Set()
    // push to queue start
    const queue = [start]
    while (queue.length > 0) {
        const airport = queue.shift()
        const destinations = adjacencyList.get(airport)
        for (const destination of destinations) {
            queue.push(destination)
            if (destination === 'BKK') {
                console.log('found it')
            }
            if (!visited.has(destination)) {
                visited.add(destination)
                queue.push(destination)
            }
        }
    }
}


// bfs('LIM')