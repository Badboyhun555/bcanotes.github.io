# Q1. Define Tree and Explain its Terminology Including Root Node, Parent Node, Child Node, Sibling Node, Leaf Node, Level, Degree, and Height. Discuss Tree Representation Using Linked Lists with Suitable Diagrams.

# Introduction

Data Structures me Tree ek bahut important non-linear data structure hai. Arrays, Linked Lists, Stacks aur Queues linear data structures hote hain jahan elements sequential manner me arranged rehte hain. Lekin real-world information ko represent karne ke liye kai baar hierarchical structure ki zarurat hoti hai. Aise situations me Tree Data Structure ka use kiya jata hai.

Tree ka concept nature se inspire hua hai. Jaise ek real tree me root se branches nikalti hain aur phir un branches se aur branches grow karti hain, waise hi Tree Data Structure me bhi nodes hierarchical relationship me connected hote hain. Computer Science me Trees ka use Operating Systems, Database Management Systems, Artificial Intelligence, Compiler Design, File Systems, Computer Networks aur Searching Algorithms me extensively kiya jata hai.

Tree ek collection of nodes hota hai jo edges ke through connected rehte hain. Tree ka sabse upar wala node Root Node kehlata hai aur uske niche different levels par child nodes arranged rehte hain. Tree structure data ko organize karne, search karne aur process karne ke liye bahut efficient mana jata hai.

---

# Definition of Tree

Tree ek non-linear hierarchical data structure hai jo nodes aur edges se milkar bana hota hai.

Formal Definition:

> "A Tree is a finite set of one or more nodes such that there is one specially designated node called the Root Node and the remaining nodes form one or more disjoint subtrees."

Simple words me:

Tree nodes ka collection hota hai jisme ek root hota hai aur baaki nodes usse directly ya indirectly connected rehte hain.

---

# Basic Structure of Tree

Example:

```text
          A
        /   \
       B     C
      / \   / \
     D   E F   G
```

Yahan:

```text
A
```

Root Node hai aur baaki nodes uske descendants hain.

---

# Tree Terminology

Tree ko samajhne ke liye uski terminology ko samajhna bahut important hai.

---

# Root Node

Tree ka sabse topmost node Root Node kehlata hai.

Example:

```text
          A
        /   \
       B     C
```

Yahan:

```text
A
```

Root Node hai.

Characteristics:

- Tree me sirf ek Root Node hota hai.
- Root ka koi parent nahi hota.
- Tree ki starting Root se hoti hai.

---

# Parent Node

Jo node kisi dusre node ko directly connect karti hai use Parent Node kaha jata hai.

Example:

```text
      A
     / \
    B   C
```

Yahan:

```text
A
```

B aur C ka Parent hai.

---

# Child Node

Jo node kisi Parent ke niche directly connected ho use Child Node kaha jata hai.

Example:

```text
      A
     / \
    B   C
```

Yahan:

```text
B aur C
```

A ke Child Nodes hain.

---

# Sibling Node

Same Parent ke children ko Sibling Nodes kaha jata hai.

Example:

```text
      A
     / \
    B   C
```

Yahan:

```text
B aur C
```

siblings hain.

Dusra Example:

```text
      B
     / \
    D   E
```

D aur E siblings hain.

---

# Leaf Node

Jin nodes ke koi children nahi hote unhe Leaf Nodes ya Terminal Nodes kaha jata hai.

Example:

```text
          A
        /   \
       B     C
      / \   / \
     D   E F   G
```

Leaf Nodes:

```text
D, E, F, G
```

Characteristics:

- Inka koi child nahi hota.
- Tree ke last level par hote hain.

---

# Internal Node

Jin nodes ke children hote hain unhe Internal Nodes kaha jata hai.

Example:

```text
A, B, C
```

Internal Nodes hain.

---

# Degree of Node

Kisi node ke direct children ki total number ko us node ki Degree kaha jata hai.

Example:

```text
      A
    / | \
   B  C  D
```

Degree(A):

```text
3
```

Kyuki A ke 3 children hain.

---

# Degree of Tree

Tree me kisi bhi node ki maximum degree ko Tree ki Degree kaha jata hai.

Example:

```text
A ki degree = 3
B ki degree = 2
```

Tree Degree:

```text
3
```

---

# Level of Node

Root se kisi node tak ki distance ko Level kehte hain.

Example:

```text
          A
        /   \
       B     C
      / \
     D   E
```

Levels:

```text
Level 0 : A

Level 1 : B, C

Level 2 : D, E
```

---

# Height of Tree

Root se leaf node tak longest path ki length ko Tree Height kehte hain.

Example:

```text
          A
        /   \
       B     C
      /
     D
```

Longest Path:

```text
A → B → D
```

Height:

```text
2
```

---

# Edge

Do nodes ke beech connection ko Edge kehte hain.

Example:

```text
A ----- B
```

Yahan:

```text
(A,B)
```

ek edge hai.

---

# Subtree

Tree ke kisi node aur uske descendants se bani structure ko Subtree kaha jata hai.

Example:

```text
        A
       / \
      B   C
     / \
    D   E
```

Node B ke niche:

```text
B-D-E
```

ek subtree hai.

---

# Tree Representation

Computer memory me Tree ko represent karne ke multiple methods hote hain.

1. Sequential Representation
2. Linked Representation

Linked Representation sabse commonly used method hai.

---

# Linked Representation of Tree

Linked Representation me har node dynamically allocate ki jati hai aur pointers ke through connect ki jati hai.

Node Structure:

```c
struct node
{
    int data;
    struct node *left;
    struct node *right;
};
```

Har node store karti hai:

- Data
- Left Child Address
- Right Child Address

---

# Diagram of Linked Representation

```text
          A

       +-----+
       |  A  |
       +-----+
       /     \
      /       \

     V         V

 +-----+     +-----+
 |  B  |     |  C  |
 +-----+     +-----+
```

Memory me nodes different locations par store ho sakti hain.

---

# Advantages of Linked Representation

### Dynamic Memory Allocation

Memory requirement ke according allocate hoti hai.

### No Memory Wastage

Unused memory reserve nahi karni padti.

### Easy Insertion and Deletion

Nodes dynamically add aur remove ki ja sakti hain.

### Suitable for Large Trees

Large hierarchical structures efficiently store ki ja sakti hain.

---

# Disadvantages of Linked Representation

### Extra Memory Requirement

Pointers ke liye additional memory chahiye.

### Complex Implementation

Arrays ke comparison me implementation difficult hoti hai.

### Pointer Manipulation

Programming complexity increase ho jati hai.

---

# Applications of Trees

Trees ka use bahut saare real-world systems me hota hai.

### File Systems

Folders aur subfolders tree structure follow karte hain.

### Database Indexing

Fast searching ke liye B-Trees aur B+ Trees use hote hain.

### Compiler Design

Expression Trees use hote hain.

### Artificial Intelligence

Decision Trees use kiye jate hain.

### Computer Networks

Routing structures me.

### Operating Systems

Process hierarchies aur directory structures me.

---

# Conclusion

In conclusion, Tree ek important non-linear hierarchical data structure hai jo nodes aur edges se milkar banta hai. Tree terminology jaise Root Node, Parent Node, Child Node, Sibling Node, Leaf Node, Degree, Level aur Height tree structure ko samajhne ke liye fundamental concepts hain. Linked Representation tree ko dynamic aur efficient manner me memory me store karne ka popular method hai. Database systems, file systems, artificial intelligence aur operating systems jaise areas me Trees ka extensive use hota hai. Isi wajah se Tree Data Structure Computer Science ka ek highly important topic mana jata hai.



# Q2. What is a Binary Tree? Explain its Properties and Representations. Discuss Linear and Linked Representations of Binary Trees and write a C Program for Binary Tree Creation.

# Introduction

Tree Data Structure ka ek important specialized form Binary Tree hota hai. Binary Tree ek non-linear hierarchical data structure hai jisme har node ke maximum do child nodes ho sakte hain, jinko Left Child aur Right Child kaha jata hai. Binary Tree ka use computer science me bahut extensively hota hai, jaise expression evaluation, searching, sorting, database indexing, file systems, decision-making algorithms aur AI applications me.

Binary Tree ka main advantage ye hai ki iski structure simple hoti hai aur iska traversal aur manipulation efficient hota hai. Binary Tree ko recursive nature ki wajah se implement karna bhi relatively easy hota hai.

---

# Definition of Binary Tree

Binary Tree ek tree data structure hai jisme har node ke maximum do children hote hain:

- Left Child
- Right Child

Formal Definition:

> “A Binary Tree is a tree data structure in which each node has at most two children.”

---

# Structure of Binary Tree

Example:

```text
          A
        /   \
       B     C
      / \     \
     D   E     F
```

Yahan har node ke maximum 2 children hain.

---

# Properties of Binary Tree

Binary Tree ki kuch important properties hoti hain jo exam me frequently puchi jati hain.

---

## Property 1: Maximum Nodes at Level

Level i par maximum nodes:

```text
2^i
```

Example:

Level 0 → 1 node  
Level 1 → 2 nodes  
Level 2 → 4 nodes  

---

## Property 2: Maximum Nodes in Tree Height h

Agar height h ho to maximum nodes:

```text
2^(h+1) - 1
```

---

## Property 3: Minimum Height for n Nodes

```text
log2(n+1) - 1
```

---

## Property 4: Minimum Nodes in Height h

Minimum nodes = h + 1 (skewed tree)

---

## Property 5: Number of Leaf Nodes

Complete Binary Tree me:

```text
Leaf nodes = internal nodes + 1
```

---

## Property 6: Degree Constraint

Har node ka degree:

```text
0, 1, ya 2
```

---

# Types of Binary Tree

Binary Trees ke multiple types hote hain:

## 1. Full Binary Tree
Har node ke 0 ya 2 children hote hain.

## 2. Complete Binary Tree
Last level ko chhodkar sab levels fully filled hote hain.

## 3. Perfect Binary Tree
Har level fully filled hota hai.

## 4. Skewed Binary Tree
Sirf ek side me nodes hote hain (left ya right).

---

# Representation of Binary Tree

Binary Tree ko computer memory me represent karne ke 2 main methods hote hain:

1. Linear Representation (Array Representation)
2. Linked Representation

---

# 1. Linear Representation (Array Representation)

Array representation me Binary Tree ko index-based structure me store kiya jata hai.

Rule:

```text
Left Child = 2i + 1
Right Child = 2i + 2
Parent = (i - 1) / 2
```

---

## Example:

```text
          A
        /   \
       B     C
      / \
     D   E
```

Array form:

```text
Index:   0  1  2  3  4
Value:   A  B  C  D  E
```

---

## Advantages of Array Representation

- Simple implementation
- Fast access using index
- No pointer overhead

---

## Disadvantages of Array Representation

- Memory wastage in sparse trees
- Fixed size
- Not flexible

---

# 2. Linked Representation of Binary Tree

Linked representation me har node dynamically allocate hoti hai.

Each node contains:

- Data
- Left pointer
- Right pointer

---

## Node Structure

```c
struct node
{
    int data;
    struct node *left;
    struct node *right;
};
```

---

## Diagram

```text
          A
         / \
        B   C
       / \
      D   E
```

Memory Representation:

```text
   [A]
  /   \
[B]   [C]
/ \
D  E
```

---

## Advantages of Linked Representation

- Dynamic size
- No memory wastage
- Efficient insertion/deletion

---

## Disadvantages

- Extra memory for pointers
- Complex implementation
- Slower access than arrays

---

# Binary Tree Creation (C Program)

Binary Tree creation generally user input aur dynamic memory allocation ke through hoti hai.

---

## Algorithm for Binary Tree Creation

```text
Step 1:
Start

Step 2:
Create node dynamically

Step 3:
Enter data

Step 4:
Ask for left child
    If yes → create left node

Step 5:
Ask for right child
    If yes → create right node

Step 6:
Repeat recursively

Step 7:
Stop
```

---

## C Program for Binary Tree Creation

```c
#include<stdio.h>
#include<stdlib.h>
#include<conio.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
};

struct node* create()
{
    struct node *newnode;

    newnode=(struct node*)
    malloc(sizeof(struct node));

    printf("Enter Data (-1 for NULL): ");
    scanf("%d",&newnode->data);

    if(newnode->data == -1)
        return NULL;

    printf("Enter Left Child of %d\n",newnode->data);
    newnode->left = create();

    printf("Enter Right Child of %d\n",newnode->data);
    newnode->right = create();

    return newnode;
}

void main()
{
    struct node *root;

    clrscr();

    printf("Create Binary Tree\n");

    root = create();

    printf("Binary Tree Created Successfully");

    getch();
}
```

---

## Output Example

```text
Create Binary Tree
Enter Data (-1 for NULL): 10
Enter Left Child of 10
Enter Data (-1 for NULL): 20
Enter Left Child of 20
Enter Data (-1 for NULL): -1
Enter Right Child of 20
Enter Data (-1 for NULL): -1
Enter Right Child of 10
Enter Data (-1 for NULL): 30
Enter Left Child of 30
Enter Data (-1 for NULL): -1
Enter Right Child of 30
Enter Data (-1 for NULL): -1
Binary Tree Created Successfully
```

---

# Time Complexity

## Creation

Each node visit:

```text
O(n)
```

## Space Complexity

```text
O(n)
```

---

# Applications of Binary Tree

- Expression evaluation
- Searching (BST)
- File systems
- Decision trees
- Huffman coding
- Database indexing

---

# Conclusion

In conclusion, Binary Tree ek important hierarchical data structure hai jisme har node ke maximum do children hote hain. Iski properties jaise maximum nodes per level, height-based calculations aur leaf node relationships isse highly structured banati hain. Binary Tree ko array (linear) aur linked representation dono ways me store kiya ja sakta hai, lekin linked representation zyada flexible aur practical hoti hai. Binary Trees ka use modern computing systems me searching, sorting, compression aur decision-making processes me extensively hota hai.



# Q3. Explain Tree Traversal Techniques. Discuss Inorder, Preorder, and Postorder Traversal Methods with Suitable Examples, Algorithms, and C Programs. Compare All Three Traversal Methods.

# Introduction

Tree Data Structure ek non-linear hierarchical structure hai jisme data nodes ke form me store hota hai aur edges ke through connect hota hai. Tree ko efficiently process karne ke liye uske nodes ko visit karna padta hai, jise Tree Traversal kaha jata hai.

Tree Traversal ka matlab hota hai tree ke har node ko ek specific order me visit karna. Traversal ka use searching, printing, evaluation, expression trees, file systems aur AI decision making me hota hai.

Binary Tree me mainly 3 types ke traversal techniques use hote hain:

1. Inorder Traversal
2. Preorder Traversal
3. Postorder Traversal

Ye teeno traversal recursive nature ke hote hain aur stack-based implementation bhi possible hai.

---

# Example Binary Tree

```text
          A
        /   \
       B     C
      / \   / \
     D   E F   G
```

Is tree par hum traversal techniques apply karenge.

---

# 1. Preorder Traversal (Root → Left → Right)

## Definition

Preorder traversal me sabse pehle root node visit kiya jata hai, phir left subtree aur finally right subtree.

Order:

```text
Root → Left → Right
```

---

## Example

Tree:

```text
A B D E C F G
```

Traversal Output:

```text
A → B → D → E → C → F → G
```

---

## Algorithm

```text
Step 1:
Visit Root Node

Step 2:
Traverse Left Subtree (Preorder)

Step 3:
Traverse Right Subtree (Preorder)

Step 4:
Stop
```

---

## C Program (Preorder Traversal)

```c
void preorder(struct node *root)
{
    if(root != NULL)
    {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}
```

---

# 2. Inorder Traversal (Left → Root → Right)

## Definition

Inorder traversal me pehle left subtree visit hota hai, phir root node, aur phir right subtree.

Order:

```text
Left → Root → Right
```

---

## Example

Traversal Output:

```text
D → B → E → A → F → C → G
```

---

## Algorithm

```text
Step 1:
Traverse Left Subtree

Step 2:
Visit Root Node

Step 3:
Traverse Right Subtree

Step 4:
Stop
```

---

## C Program (Inorder Traversal)

```c
void inorder(struct node *root)
{
    if(root != NULL)
    {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}
```

---

# 3. Postorder Traversal (Left → Right → Root)

## Definition

Postorder traversal me pehle left subtree, phir right subtree aur last me root node visit kiya jata hai.

Order:

```text
Left → Right → Root
```

---

## Example

Traversal Output:

```text
D → E → B → F → G → C → A
```

---

## Algorithm

```text
Step 1:
Traverse Left Subtree

Step 2:
Traverse Right Subtree

Step 3:
Visit Root Node

Step 4:
Stop
```

---

## C Program (Postorder Traversal)

```c
void postorder(struct node *root)
{
    if(root != NULL)
    {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}
```

---

# Complete C Program for All Traversals

```c
#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
};

struct node* create()
{
    struct node *newnode;

    newnode = (struct node*)malloc(sizeof(struct node));

    printf("Enter Data (-1 for NULL): ");
    scanf("%d",&newnode->data);

    if(newnode->data == -1)
        return NULL;

    printf("Enter Left Child of %d\n", newnode->data);
    newnode->left = create();

    printf("Enter Right Child of %d\n", newnode->data);
    newnode->right = create();

    return newnode;
}

void preorder(struct node *root)
{
    if(root != NULL)
    {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

void inorder(struct node *root)
{
    if(root != NULL)
    {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

void postorder(struct node *root)
{
    if(root != NULL)
    {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}

void main()
{
    struct node *root;

    printf("Create Tree\n");
    root = create();

    printf("\nPreorder Traversal: ");
    preorder(root);

    printf("\nInorder Traversal: ");
    inorder(root);

    printf("\nPostorder Traversal: ");
    postorder(root);
}
```

---

# Output Example

```text
Preorder Traversal:
A B D E C F G

Inorder Traversal:
D B E A F C G

Postorder Traversal:
D E B F G C A
```

---

# Time Complexity

| Traversal Type | Time Complexity |
|----------------|----------------|
| Preorder | O(n) |
| Inorder | O(n) |
| Postorder | O(n) |

---

# Space Complexity

```text
O(h)
```

Where h = height of tree (recursion stack)

---

# Comparison of Traversals

| Feature | Preorder | Inorder | Postorder |
|----------|----------|---------|------------|
| Order | Root → Left → Right | Left → Root → Right | Left → Right → Root |
| Root Visit | First | Middle | Last |
| Use Case | Tree Copying, Prefix Expression | BST Sorted Output | Tree Deletion |
| Expression Type | Prefix | Infix | Postfix |
| Complexity | O(n) | O(n) | O(n) |
| Stack Usage | Yes | Yes | Yes |

---

# Applications

### Preorder
- Expression tree creation
- Tree cloning
- Prefix notation generation

### Inorder
- Binary Search Tree sorting
- Infix expression evaluation

### Postorder
- Tree deletion
- Postfix expression evaluation
- Memory cleanup

---

# Conclusion

In conclusion, tree traversal techniques Binary Tree processing ka fundamental part hain. Preorder, Inorder aur Postorder traversal different visiting orders follow karte hain aur har traversal ka apna specific use case hota hai. Inorder traversal BST me sorted output deta hai, Preorder structure copying me useful hota hai aur Postorder memory deletion aur expression evaluation me use hota hai. Teeno traversals ka time complexity O(n) hota hai aur ye recursive nature ke through efficiently implement kiye ja sakte hain. Tree traversal concepts database systems, compilers, AI aur operating systems me extensively use hote hain, isliye ye data structures ka ek highly important topic hai.


# Q4. Define Graph and Explain its Terminology. Discuss Graph Representation Using Adjacency Matrix. Explain the Advantages and Disadvantages of Graph Representation and Write a C Program for Graph Creation.

# Introduction

Graph Data Structure ek important non-linear data structure hai jo objects ke beech relationships ko represent karne ke liye use hota hai. Tree ek special type ka graph hota hai, lekin graph zyada general structure hota hai jisme cycles bhi ho sakte hain aur nodes multiple connections maintain kar sakte hain.

Graph ka use real-world problems ko model karne ke liye kiya jata hai jaise social networks, computer networks, GPS navigation, web pages linking, airline routes, aur communication systems. Graphs complex relationships ko simple mathematical structure me represent karte hain.

---

# Definition of Graph

Graph ek mathematical structure hai jisme:

- A set of vertices (nodes)
- A set of edges (connections between vertices)

Formal Definition:

> "A Graph G is defined as an ordered pair G = (V, E), where V is a set of vertices and E is a set of edges connecting these vertices."

---

# Example of Graph

```text
    A ----- B
    |       |
    |       |
    C ----- D
```

Vertices:

```text
A, B, C, D
```

Edges:

```text
(A,B), (A,C), (B,D), (C,D)
```

---

# Graph Terminology

Graph ko samajhne ke liye kuch basic terms important hain:

---

## Vertex (Node)

Graph ka basic unit vertex hota hai.

Example:

```text
A, B, C
```

---

## Edge

Do vertices ke beech connection ko edge kehte hain.

Example:

```text
(A, B)
```

---

## Degree

Kisi vertex se connected edges ki number ko degree kehte hain.

---

## Directed Graph

Jisme edges ka direction hota hai.

Example:

```text
A → B
```

---

## Undirected Graph

Jisme edges bidirectional hote hain.

Example:

```text
A — B
```

---

## Weighted Graph

Jisme har edge ke saath weight (cost/distance) hota hai.

---

## Path

Vertices ka sequence jo edges se connected ho.

---

## Cycle

Aisa path jo same vertex par start aur end hota hai.

---

# Graph Representation

Graph ko memory me store karne ke 2 main methods hote hain:

1. Adjacency Matrix
2. Adjacency List

Is question me hum Adjacency Matrix discuss kar rahe hain.

---

# Adjacency Matrix Representation

Adjacency Matrix ek 2D array hota hai jo graph ke edges ko represent karta hai.

Agar graph me n vertices hain to matrix size hoga:

```text
n x n
```

---

## Rule:

```text
If edge exists between i and j → matrix[i][j] = 1
If no edge → matrix[i][j] = 0
```

---

# Example Graph

```text
    A ----- B
    |       |
    |       |
    C ----- D
```

Vertices order:

```text
A, B, C, D
```

---

## Adjacency Matrix

```text
     A B C D
   ---------
A |  0 1 1 0
B |  1 0 0 1
C |  1 0 0 1
D |  0 1 1 0
```

---

# Working of Adjacency Matrix

- Row represents source vertex
- Column represents destination vertex
- Value 1 means edge exists
- Value 0 means no edge

---

# Advantages of Adjacency Matrix

### 1. Simple Representation
Graph ko easily 2D array me store kiya ja sakta hai.

---

### 2. Fast Edge Checking
Direct access:

```text
O(1)
```

---

### 3. Easy Implementation
Coding relatively simple hoti hai.

---

### 4. Suitable for Dense Graphs
Jahan edges zyada hote hain.

---

### 5. Efficient for Small Graphs
Small networks ke liye best.

---

# Disadvantages of Adjacency Matrix

### 1. High Space Complexity

```text
O(n²)
```

---

### 2. Memory Waste
Sparse graphs me zyada zeros store hote hain.

---

### 3. Inefficient for Large Graphs
Large datasets ke liye costly hota hai.

---

### 4. Adding Vertex Difficult
Matrix resize karna padta hai.

---

# Applications of Graphs

- Social Networks (Facebook, Instagram)
- Google Maps (Shortest Path)
- Computer Networks
- Airline Route Systems
- Web Page Linking
- Recommendation Systems

---

# C Program for Graph Creation Using Adjacency Matrix

```c
#include<stdio.h>
#include<conio.h>

int main()
{
    int n, i, j;

    int graph[10][10];

    clrscr();

    printf("Enter number of vertices: ");
    scanf("%d",&n);

    printf("Enter adjacency matrix:\n");

    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            scanf("%d",&graph[i][j]);
        }
    }

    printf("\nAdjacency Matrix of Graph:\n");

    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            printf("%d ",graph[i][j]);
        }
        printf("\n");
    }

    getch();
    return 0;
}
```

---

# Sample Input

```text
Enter number of vertices: 4

Enter adjacency matrix:
0 1 1 0
1 0 0 1
1 0 0 1
0 1 1 0
```

---

# Output

```text
Adjacency Matrix of Graph:

0 1 1 0
1 0 0 1
1 0 0 1
0 1 1 0
```

---

# Time Complexity

### Matrix Creation:

```text
O(n²)
```

### Edge Checking:

```text
O(1)
```

---

# Space Complexity

```text
O(n²)
```

---

# Comparison with Adjacency List

| Feature | Adjacency Matrix | Adjacency List |
|----------|----------------|----------------|
| Space | O(n²) | O(n + e) |
| Edge Check | O(1) | O(n) |
| Implementation | Easy | Moderate |
| Best For | Dense Graph | Sparse Graph |

---

# Conclusion

In conclusion, Graph ek powerful non-linear data structure hai jo real-world relationships ko represent karne ke liye use hota hai. Adjacency Matrix representation graph ko simple 2D array form me store karta hai jisme edges ko 0 aur 1 ke form me represent kiya jata hai. Is representation ka main advantage fast edge checking aur simple implementation hai, lekin iska main disadvantage high memory consumption hai.

Graphs ka use modern computing systems me extensively hota hai jaise social networks, navigation systems, networking aur AI applications. Isliye Graph Data Structure computer science ka ek highly important aur practical topic hai.



# Q5. Explain Graph Traversal Techniques in Detail. Discuss Breadth First Search (BFS) and Depth First Search (DFS) Algorithms with Suitable Examples. Write C Programs for BFS and DFS and Compare Their Applications and Complexities.

# Introduction

Graph ek non-linear data structure hai jisme vertices (nodes) aur edges (connections) hote hain. Graph ka use real-world relationships ko represent karne ke liye kiya jata hai jaise social networks, maps, networking systems aur recommendation engines.

Graph ko process karne ka sabse important concept Graph Traversal hota hai. Graph traversal ka matlab hota hai graph ke har vertex ko systematically visit karna bina kisi node ko repeat kiye.

Graph traversal ke 2 main techniques hoti hain:

1. Breadth First Search (BFS)
2. Depth First Search (DFS)

Dono algorithms ka use searching, shortest path, connectivity check aur network analysis me hota hai.

---

# 1. Breadth First Search (BFS)

## Definition

BFS ek graph traversal technique hai jisme graph ke nodes ko level by level visit kiya jata hai. Pehle starting node ke saare neighbors visit hote hain, fir next level ke nodes visit hote hain.

BFS Queue data structure use karta hai.

---

## Working Principle

- Start from source node
- Visit all adjacent nodes
- Move level by level
- Use Queue (FIFO)

---

## Example Graph

```text
    A
   / \
  B   C
 / \   \
D   E   F
```

### BFS Traversal (Starting from A):

```text
A → B → C → D → E → F
```

---

## BFS Algorithm

```text
Step 1:
Start

Step 2:
Mark all vertices unvisited

Step 3:
Enqueue starting node

Step 4:
Mark node as visited

Step 5:
While queue not empty:
    Dequeue node
    Visit node
    Enqueue all unvisited adjacent nodes

Step 6:
Stop
```

---

## C Program for BFS

```c
#include<stdio.h>

int queue[10], front = -1, rear = -1;
int visited[10] = {0};
int adj[10][10], n;

void enqueue(int v)
{
    if(rear == 9) return;
    if(front == -1) front = 0;
    queue[++rear] = v;
}

int dequeue()
{
    return queue[front++];
}

void bfs(int start)
{
    int i, v;

    enqueue(start);
    visited[start] = 1;

    while(front <= rear)
    {
        v = dequeue();
        printf("%d ", v);

        for(i = 0; i < n; i++)
        {
            if(adj[v][i] == 1 && visited[i] == 0)
            {
                enqueue(i);
                visited[i] = 1;
            }
        }
    }
}

int main()
{
    int i, j, start;

    printf("Enter number of vertices: ");
    scanf("%d",&n);

    printf("Enter adjacency matrix:\n");

    for(i = 0; i < n; i++)
        for(j = 0; j < n; j++)
            scanf("%d",&adj[i][j]);

    printf("Enter starting vertex: ");
    scanf("%d",&start);

    printf("BFS Traversal: ");
    bfs(start);

    return 0;
}
```

---

# 2. Depth First Search (DFS)

## Definition

DFS ek graph traversal technique hai jisme graph ke nodes ko depth wise explore kiya jata hai. Matlab ek path ko completely explore karne ke baad backtrack kiya jata hai.

DFS Stack (or recursion) use karta hai.

---

## Working Principle

- Start from source node
- Visit one adjacent node
- Go deep until no unvisited node remains
- Backtrack and continue

---

## Example Graph

```text
    A
   / \
  B   C
 / \   \
D   E   F
```

### DFS Traversal (Starting from A):

```text
A → B → D → E → C → F
```

(Traversal order depends on implementation)

---

## DFS Algorithm (Recursive)

```text
Step 1:
Start

Step 2:
Mark node visited

Step 3:
Print node

Step 4:
For each adjacent node:
    If not visited:
        Call DFS recursively

Step 5:
Stop
```

---

## C Program for DFS

```c
#include<stdio.h>

int adj[10][10], visited[10], n;

void dfs(int v)
{
    int i;

    printf("%d ", v);
    visited[v] = 1;

    for(i = 0; i < n; i++)
    {
        if(adj[v][i] == 1 && visited[i] == 0)
        {
            dfs(i);
        }
    }
}

int main()
{
    int i, j, start;

    printf("Enter number of vertices: ");
    scanf("%d",&n);

    printf("Enter adjacency matrix:\n");

    for(i = 0; i < n; i++)
        for(j = 0; j < n; j++)
            scanf("%d",&adj[i][j]);

    printf("Enter starting vertex: ");
    scanf("%d",&start);

    printf("DFS Traversal: ");
    dfs(start);

    return 0;
}
```

---

# Comparison of BFS and DFS

| Feature | BFS | DFS |
|----------|-----|-----|
| Full Name | Breadth First Search | Depth First Search |
| Approach | Level wise traversal | Depth wise traversal |
| Data Structure | Queue | Stack / Recursion |
| Memory Usage | Higher | Lower |
| Shortest Path | Yes (unweighted graph) | No guarantee |
| Speed | Slower in deep graphs | Faster in deep paths |
| Implementation | Slightly complex | Simple (recursive) |
| Use Case | Shortest path, networking | Path finding, backtracking |

---

# Time Complexity

Both BFS and DFS:

```text
O(V + E)
```

Where:
- V = number of vertices
- E = number of edges

---

# Space Complexity

- BFS: O(V)
- DFS: O(V)

---

# Applications of BFS

- Shortest path in unweighted graph
- Social networking (friend suggestion)
- Web crawling
- GPS navigation systems
- Broadcasting systems

---

# Applications of DFS

- Topological sorting
- Cycle detection
- Maze solving
- Backtracking problems
- Path finding algorithms

---

# Conclusion

In conclusion, graph traversal techniques BFS and DFS are fundamental algorithms used to explore graph data structures. BFS works level by level using a queue and is useful for shortest path problems, while DFS explores depth wise using recursion or stack and is useful for backtracking and path exploration problems. Both algorithms have time complexity O(V+E) and are widely used in real-world applications like networking, AI, mapping systems, and search engines. Understanding BFS and DFS is essential for solving complex graph-based problems efficiently in computer science.
