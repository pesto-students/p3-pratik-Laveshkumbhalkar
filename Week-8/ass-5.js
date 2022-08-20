class Graph {
    constructor(noOfVertices) {
      this.noOfVertices = noOfVertices;
      this.AdjList = new Map();
    }
  
    addVertex(v) {
      this.AdjList.set(v, []);
    }
  
    addEdge(v, w) {
      this.AdjList.get(v).push(w);
    }
  
    findJudge() {
      let keysItr = this.AdjList.keys();
      for (let vrtx of keysItr) {
        let get_values = this.AdjList.get(vrtx);
        if (get_values.length === 0) {
          return vrtx;
        }
      }
    }
}
  
let vrtx = [1, 2, 3];

let g = new Graph(3);

for (let i = 0; i < vrtx.length; i++) {
    g.addVertex(vrtx[i]);
}
  
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(3, 1);

if (g.findJudge()) {
    console.log(`${g.findJudge()} is the judge node`);
} else {
    console.log("-1");
}

/*
OUTPUT:-

For:
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(3, 1);

OUTPUT=  -1

For:
g.addEdge(1, 3);
g.addEdge(2, 3);

OUTPUT = 3 is the judge node

*/