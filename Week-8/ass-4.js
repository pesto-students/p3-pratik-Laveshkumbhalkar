class Queue extends Array {
    enqueue(val) {
      this.push(val);
    }
    dequeue() {
      return this.shift();
    }
    isEmpty() {
      return this.length === 0;
    }
}
  
  // Stores the visited nodes for current node as key:val pair in adjaceny list
let adjList = new Map();

// Add vertex of graph as the key & keep value as empty arr
const addVertex = (v) => {
    adjList.set(v, []);
};

// Adding the edge between nodes (value in the adjacency list)
const addEdge = (v, w) => {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
};
  
const printGraph = () => {
    let keysItr = adjList.keys();

    for (let vrtx of keysItr) {
        let get_values = adjList.get(vrtx);
        var conc = "";
        for (var j of get_values) {
        conc += j + " ";
        }
        console.log(vrtx + " -> " + conc);
    }
};
  
function isReachable(s, d) {
    let visited = {};

    let q = new Queue();

    visited[s] = true;
    q.enqueue(s);

    while (!q.isEmpty()) {
        let currElement = q.dequeue();

        let getList = adjList.get(currElement);

        for (let i = 0; i < getList.length; i++) {
        if (getList[i] === d) {
            return true;
        }
        if (!visited[getList[i]]) {
            visited[getList[i]] = true;
            q.enqueue(getList[i]);
        }
        }
    }
    return false;
}

let vertex = [1, 2, 3, 4];

vertex.forEach((val) => {
    addVertex(val);
});

addEdge(1, 2);
addEdge(1, 4);
addEdge(2, 3);
addEdge(3, 4);

printGraph();

let src = 1;
let dst = 3;

if (isReachable(src, dst)) {
    console.log(`Vertex ${dst} is reachable from ${src}`);
} else {
    console.log(`Vertex ${dst} is not reachable from ${src}`);
}


/*
OUTPUT

1 -> 2 4 
2 -> 1 3 
3 -> 2 4 
4 -> 1 3 
Vertex 3 is reachable from 1

Time Complexity:- O(n+k)

 */