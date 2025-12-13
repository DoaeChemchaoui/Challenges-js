// Perform a breadth-first search (BFS) on a graph

function bfs(graph, start) {
    let visited = [];
    let queue = [];

    queue.push(start);

    while (queue.length > 0) {
        let node = queue.shift();

        if (!visited.includes(node)) {
            visited.push(node);
            console.log(node);

            let neighbors = graph[node];
            for (let i = 0; i < neighbors.length; i++) {
                queue.push(neighbors[i]);
            }
        }
    }
}
const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 4],
    3: [1, 5],
    4: [1, 2, 5],
    5: [3, 4]
};

breadthFirstSearch(graph, 4);