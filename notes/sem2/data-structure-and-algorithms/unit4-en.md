# DATA STRUCTURES AND ALGORITHMS

# UNIT – TREES AND GRAPHS

---

# TREES IN DATA STRUCTURES

# Introduction to Trees

A Tree is a non-linear hierarchical data structure consisting of nodes connected through edges.

Unlike arrays, stacks, and queues:
- Tree does not store data sequentially.
- Data is stored in hierarchical form.

Trees are used when data has:
- Parent-child relationship
- Hierarchical structure

---

# Real Life Example of Tree

Examples:
- Family tree
- Organization hierarchy
- File system folders
- College management structure

Suppose a company has:
- CEO
- Managers
- Employees

This forms a hierarchical structure similar to a tree.

---

# Basic Terminology of Tree

Trees contain several important terms.

---

# Node

Each data element in tree is called a node.

---

# Root Node

Topmost node of tree.

A tree can have only one root node.

---

# Parent Node

A node having child nodes.

---

# Child Node

A node connected below another node.

---

# Leaf Node

A node having no children.

Also called:
```text
Terminal Node
```

---

# Edge

Connection between two nodes.

---

# Degree of Node

Number of children of a node.

---

# Level

Position of node in tree.

---

# Height of Tree

Maximum level of tree.

---

# Image Representation of Tree

```md
![Tree Structure](images/tree-structure.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_tree.svg

---

# Characteristics of Tree

- Non-linear structure
- Hierarchical organization
- Efficient searching
- Dynamic memory allocation

---

# Advantages of Trees

- Faster searching
- Hierarchical representation
- Efficient insertion and deletion

---

# Disadvantages of Trees

- Complex implementation
- More memory usage

---

# Tree Representation Using Linked List

Trees are commonly represented using:
```text
Linked representation
```

because tree size changes dynamically.

---

# Node Structure of Tree

Each node contains:
- Data
- Pointer to child nodes

---

# Basic Structure in C

```c
struct node
{
    int data;
    struct node *left;
    struct node *right;
};
```

---

# Binary Tree

# Introduction to Binary Tree

A Binary Tree is a tree in which each node can have maximum:
```text
Two child nodes
```

These are:
- Left child
- Right child

---

# Real Life Example of Binary Tree

Examples:
- Decision making systems
- Tournament brackets
- Expression trees

---

# Image Representation of Binary Tree

```md
![Binary Tree](images/binary-tree.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/5/5e/Binary_tree_v2.svg

---

# Properties of Binary Tree

- Maximum two children
- Left and right subtrees
- Recursive structure

---

# Types of Binary Tree

1. Full Binary Tree
2. Complete Binary Tree
3. Perfect Binary Tree
4. Skewed Binary Tree

---

# Full Binary Tree

Every node has either:
- 0 children
OR
- 2 children

---

# Complete Binary Tree

All levels filled except possibly last level.

---

# Perfect Binary Tree

All internal nodes have:
- Two children
and
- All leaf nodes at same level

---

# Skewed Binary Tree

Nodes arranged mostly on one side.

---

# Linear Representation of Binary Tree

Binary tree can be represented using array.

---

# Formula

For node at index:
```text
i
```

Left child:
```text
2*i
```

Right child:
```text
2*i+1
```

---

# Example

```text
Index: 1 2 3 4 5
Data : A B C D E
```

---

# Advantages of Linear Representation

- Simple implementation
- Fast access

---

# Disadvantages

- Memory wastage
- Not suitable for sparse trees

---

# Linked Representation of Binary Tree

Most common representation.

Each node contains:
- Data
- Left pointer
- Right pointer

---

# Structure of Binary Tree Node

```c
struct node
{
    int data;
    struct node *left;
    struct node *right;
};
```

---

# Advantages of Linked Representation

- Dynamic memory allocation
- No memory wastage

---

# Tree Traversal

# Introduction

Traversal means visiting all nodes of tree systematically.

---

# Types of Tree Traversal

1. Inorder Traversal
2. Preorder Traversal
3. Postorder Traversal

---

# Inorder Traversal

Traversal order:
```text
Left → Root → Right
```

---

# Example

Suppose tree:

```text
      A
     / \
    B   C
```

Inorder:
```text
B A C
```

---

# Algorithm of Inorder Traversal

```text
1. Traverse left subtree
2. Visit root
3. Traverse right subtree
```

---

# C Program for Inorder Traversal

```c
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
};

struct node* createNode(int value)
{
    struct node *newnode;

    newnode=(struct node*)malloc(sizeof(struct node));

    newnode->data=value;
    newnode->left=NULL;
    newnode->right=NULL;

    return newnode;
}

void inorder(struct node *root)
{
    if(root!=NULL)
    {
        inorder(root->left);

        printf("%d ",root->data);

        inorder(root->right);
    }
}

void main()
{
    struct node *root;

    clrscr();

    root=createNode(1);

    root->left=createNode(2);
    root->right=createNode(3);

    root->left->left=createNode(4);
    root->left->right=createNode(5);

    printf("Inorder Traversal:\n");

    inorder(root);

    getch();
}
```

---

# Output

```text
4 2 5 1 3
```

---

# Preorder Traversal

Traversal order:
```text
Root → Left → Right
```

---

# Example

Tree:
```text
      A
     / \
    B   C
```

Preorder:
```text
A B C
```

---

# Algorithm of Preorder Traversal

```text
1. Visit root
2. Traverse left subtree
3. Traverse right subtree
```

---

# Program for Preorder Traversal

```c
void preorder(struct node *root)
{
    if(root!=NULL)
    {
        printf("%d ",root->data);

        preorder(root->left);

        preorder(root->right);
    }
}
```

---

# Postorder Traversal

Traversal order:
```text
Left → Right → Root
```

---

# Example

Tree:
```text
      A
     / \
    B   C
```

Postorder:
```text
B C A
```

---

# Algorithm of Postorder Traversal

```text
1. Traverse left subtree
2. Traverse right subtree
3. Visit root
```

---

# Program for Postorder Traversal

```c
void postorder(struct node *root)
{
    if(root!=NULL)
    {
        postorder(root->left);

        postorder(root->right);

        printf("%d ",root->data);
    }
}
```

---

# Difference Between Traversals

| Traversal | Order |
|---|---|
| Inorder | Left Root Right |
| Preorder | Root Left Right |
| Postorder | Left Right Root |

---

# Applications of Trees

Trees are used in:
- File systems
- Database indexing
- Expression evaluation
- AI decision trees
- Compiler design

---

# GRAPHS

# Introduction to Graph

A Graph is a non-linear data structure consisting of:
- Vertices (Nodes)
- Edges (Connections)

Graphs are used to represent networks.

---

# Real Life Examples of Graph

Examples:
- Social networks
- Road maps
- Internet connections
- Flight routes

Suppose:
- Cities connected by roads

This forms a graph structure.

---

# Components of Graph

---

# Vertex

A node in graph.

---

# Edge

Connection between vertices.

---

# Image Representation of Graph

```md
![Graph Representation](images/graph-representation.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/5/5b/6n-graf.svg

---

# Types of Graph

1. Directed Graph
2. Undirected Graph

---

# Directed Graph

Edges have direction.

Example:
```text
A → B
```

---

# Undirected Graph

Edges have no direction.

Example:
```text
A — B
```

---

# Graph Representation

Graphs can be represented using:
1. Adjacency Matrix
2. Adjacency List

---

# Adjacency Matrix

Graph stored in matrix form.

---

# Example

```text
    A B C
A   0 1 1
B   1 0 0
C   1 0 0
```

---

# Meaning

```text
1 → Connection exists
0 → No connection
```

---

# Image Representation

```md
![Adjacency Matrix](images/adjacency-matrix.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/9/9e/Graph_adjacency_matrix.png

---

# Advantages of Adjacency Matrix

- Easy implementation
- Fast edge checking

---

# Disadvantages

- Memory wastage
- Not efficient for sparse graphs

---

# Graph Traversal

Traversal means visiting all vertices systematically.

---

# Types of Graph Traversal

1. Breadth First Search (BFS)
2. Depth First Search (DFS)

---

# Breadth First Search (BFS)

BFS visits vertices level-by-level.

Uses:
```text
Queue
```

---

# Working of BFS

1. Start from source node
2. Visit neighboring nodes
3. Continue level-wise

---

# Real Life Example

BFS works like:
- Spreading of water waves

---

# Image Representation of BFS

```md
![BFS Traversal](images/bfs-traversal.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif

---

# Algorithm of BFS

```text
1. Insert source node into queue
2. Mark visited
3. Remove node from queue
4. Visit adjacent nodes
5. Repeat
```

---

# C Program for BFS

```c
#include<stdio.h>
#include<conio.h>

int graph[10][10],visited[10],queue[10];
int front=-1,rear=-1,n,i,j;

void bfs(int v)
{
    for(i=0;i<n;i++)
    {
        if(graph[v][i] && !visited[i])
        {
            queue[++rear]=i;
        }
    }

    if(front<=rear)
    {
        visited[queue[++front]]=1;

        bfs(queue[front]);

    }
}

void main()
{
    clrscr();

    printf("Enter Number of Vertices: ");
    scanf("%d",&n);

    printf("Enter Graph Matrix:\n");

    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            scanf("%d",&graph[i][j]);
        }
    }

    bfs(0);

    printf("Visited Nodes:\n");

    for(i=0;i<n;i++)
    {
        if(visited[i])
        {
            printf("%d ",i);
        }
    }

    getch();
}
```

---

# Depth First Search (DFS)

DFS visits nodes deeply before backtracking.

Uses:
```text
Stack or Recursion
```

---

# Working of DFS

1. Visit node
2. Go deep into subtree
3. Backtrack when needed

---

# Real Life Example

DFS works like:
- Exploring maze deeply before returning.

---

# Image Representation of DFS

```md
![DFS Traversal](images/dfs-traversal.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif

---

# Algorithm of DFS

```text
1. Visit node
2. Mark visited
3. Visit adjacent unvisited nodes recursively
```

---

# C Program for DFS

```c
#include<stdio.h>
#include<conio.h>

int graph[10][10],visited[10],n,i,j;

void dfs(int v)
{
    visited[v]=1;

    printf("%d ",v);

    for(i=0;i<n;i++)
    {
        if(graph[v][i]==1 && visited[i]==0)
        {
            dfs(i);
        }
    }
}

void main()
{
    clrscr();

    printf("Enter Number of Vertices: ");
    scanf("%d",&n);

    printf("Enter Graph Matrix:\n");

    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            scanf("%d",&graph[i][j]);
        }
    }

    printf("DFS Traversal:\n");

    dfs(0);

    getch();
}
```

---

# Difference Between BFS and DFS

| BFS | DFS |
|---|---|
| Uses Queue | Uses Stack |
| Level-wise traversal | Depth-wise traversal |
| More memory | Less memory |
| Shortest path useful | Backtracking useful |

---

# Applications of Graphs

Graphs are used in:
- Google Maps
- Social media
- Network routing
- AI pathfinding
- Recommendation systems

---

# Important Points to Remember

- Tree is hierarchical structure.
- Binary tree has maximum two children.
- Traversal means visiting nodes systematically.
- Inorder = Left Root Right.
- Preorder = Root Left Right.
- Postorder = Left Right Root.
- Graph consists of vertices and edges.
- Adjacency matrix stores graph in matrix form.
- BFS uses queue.
- DFS uses recursion or stack.

---

# Conclusion

Trees and graphs are extremely important non-linear data structures used in computer science and real-world applications. Trees help represent hierarchical relationships efficiently, while graphs help represent networks and interconnected systems.

Binary trees are widely used in databases, compilers, and AI systems, whereas graphs are used in networking, routing, social media, and search algorithms. Understanding traversal techniques like BFS and DFS is essential because they form the foundation of advanced algorithms and modern computing systems.
