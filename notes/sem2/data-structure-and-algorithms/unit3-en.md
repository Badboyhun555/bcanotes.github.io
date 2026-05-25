# DATA STRUCTURES AND ALGORITHMS

# UNIT – LINKED LISTS

---

# Introduction to Linked List

A Linked List is a dynamic linear data structure in which elements are stored in separate memory locations and connected using pointers.

Unlike arrays:
- Linked list elements are NOT stored in continuous memory locations.
- Each element points to next element.

Each element in linked list is called:
```text
Node
```

---

# Why Linked List is Needed

Arrays have some limitations:
- Fixed size
- Memory wastage
- Difficult insertion and deletion

Linked list solves these problems because:
- Memory allocated dynamically
- Easy insertion and deletion
- Flexible size

---

# Real Life Example of Linked List

Suppose:
- Treasure hunt clues placed at different locations
- Each clue contains address of next clue

Similarly:
- Every node stores address of next node

---

# Another Real Life Example

Imagine train coaches:
- Every coach connected to next coach

If one coach removed:
- Remaining train still works

This is similar to linked list.

---

# Basic Structure of Linked List Node

Each node contains:
1. Data
2. Address of next node

---

# Structure Representation

```text
+------+------+
| DATA | NEXT |
+------+------+
```

---

# Image Representation of Linked List

```md
![Linked List](images/linked-list.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg

---

# Structure of Node in C

```c
struct node
{
    int data;
    struct node *next;
};
```

---

# Advantages of Linked List

- Dynamic size
- Easy insertion
- Easy deletion
- Efficient memory utilization

---

# Disadvantages of Linked List

- Extra memory for pointers
- Sequential access only
- Slower searching

---

# Types of Linked List

1. Singly Linked List
2. Circular Linked List
3. Doubly Linked List

---

# SINGLY LINKED LIST

# Introduction

In Singly Linked List:
- Each node contains address of next node only.

Traversal possible in:
```text
Forward direction only
```

---

# Structure of Singly Linked List

```text
[10|*] → [20|*] → [30|NULL]
```

---

# Image Representation

```md
![Singly Linked List](images/singly-linked-list.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg

---

# Components of Singly Linked List

1. Data field
2. Next pointer
3. Head pointer

---

# HEAD Pointer

Head stores address of first node.

---

# NULL Pointer

Last node points to:
```text
NULL
```

meaning:
```text
End of list
```

---

# Creation of Singly Linked List

Nodes created dynamically using:
```c
malloc()
```

---

# Program to Create and Display Singly Linked List

```c
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *head=NULL;

void create()
{
    struct node *newnode,*temp;
    int value,choice;

    do
    {
        newnode=(struct node*)malloc(sizeof(struct node));

        printf("Enter Data: ");
        scanf("%d",&value);

        newnode->data=value;
        newnode->next=NULL;

        if(head==NULL)
        {
            head=temp=newnode;
        }
        else
        {
            temp->next=newnode;
            temp=newnode;
        }

        printf("Press 1 to Continue: ");
        scanf("%d",&choice);

    }while(choice==1);
}

void display()
{
    struct node *temp;

    temp=head;

    printf("\nLinked List:\n");

    while(temp!=NULL)
    {
        printf("%d -> ",temp->data);

        temp=temp->next;
    }

    printf("NULL");
}

void main()
{
    clrscr();

    create();

    display();

    getch();
}
```

---

# Output

```text
Enter Data: 10
Press 1 to Continue: 1

Enter Data: 20
Press 1 to Continue: 1

Enter Data: 30
Press 1 to Continue: 0

Linked List:
10 -> 20 -> 30 -> NULL
```

---

# INSERTION IN LINKED LIST

# Introduction

Insertion means adding new node into linked list.

---

# Types of Insertion

1. Insertion at Beginning
2. Insertion at End
3. Insertion at Middle

---

# Insertion at Beginning

New node becomes first node.

---

# Working

1. Create node
2. Point new node to head
3. Move head to new node

---

# Diagram

```text
Before:
HEAD → 10 → 20 → NULL

Insert 5

After:
HEAD → 5 → 10 → 20 → NULL
```

---

# Program for Insertion at Beginning

```c
void insert_begin()
{
    struct node *newnode;
    int value;

    newnode=(struct node*)malloc(sizeof(struct node));

    printf("Enter Data: ");
    scanf("%d",&value);

    newnode->data=value;

    newnode->next=head;

    head=newnode;
}
```

---

# Insertion at End

Node inserted after last node.

---

# Working

1. Traverse till last node
2. Attach new node

---

# Program for Insertion at End

```c
void insert_end()
{
    struct node *newnode,*temp;
    int value;

    newnode=(struct node*)malloc(sizeof(struct node));

    printf("Enter Data: ");
    scanf("%d",&value);

    newnode->data=value;
    newnode->next=NULL;

    temp=head;

    while(temp->next!=NULL)
    {
        temp=temp->next;
    }

    temp->next=newnode;
}
```

---

# DELETION IN LINKED LIST

# Introduction

Deletion means removing node from linked list.

---

# Types of Deletion

1. Delete from Beginning
2. Delete from End
3. Delete Specific Node

---

# Deletion from Beginning

First node removed.

---

# Working

1. Store head node
2. Move head to next node
3. Free old node

---

# Program

```c
void delete_begin()
{
    struct node *temp;

    temp=head;

    head=head->next;

    free(temp);

    printf("Node Deleted");
}
```

---

# Deletion from End

Last node removed.

---

# Program

```c
void delete_end()
{
    struct node *temp,*prev;

    temp=head;

    while(temp->next!=NULL)
    {
        prev=temp;

        temp=temp->next;
    }

    prev->next=NULL;

    free(temp);
}
```

---

# SEARCHING IN LINKED LIST

# Introduction

Searching means finding specific element in linked list.

---

# Working

1. Start from head
2. Compare data
3. Traverse till found

---

# Real Life Example

Like checking names in attendance list one-by-one.

---

# Program for Searching

```c
void search()
{
    struct node *temp;
    int item,pos=1,found=0;

    temp=head;

    printf("Enter Element to Search: ");
    scanf("%d",&item);

    while(temp!=NULL)
    {
        if(temp->data==item)
        {
            found=1;

            printf("Element Found at Position %d",pos);

            break;
        }

        temp=temp->next;

        pos++;
    }

    if(found==0)
    {
        printf("Element Not Found");
    }
}
```

---

# Time Complexity of Searching

```text
O(n)
```

---

# CIRCULAR LINKED LIST

# Introduction

In Circular Linked List:
- Last node points back to first node.

There is:
```text
No NULL pointer
```

---

# Structure

```text
10 → 20 → 30
↑         ↓
← ← ← ← ←
```

---

# Image Representation

```md
![Circular Linked List](images/circular-linked-list.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/d/df/Circularly_linked_list.svg

---

# Advantages of Circular Linked List

- Continuous traversal possible
- Efficient memory usage
- Useful in scheduling

---

# Applications

- CPU scheduling
- Multiplayer games
- Music playlists

---

# Program to Create Circular Linked List

```c
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *head=NULL,*temp;

void create()
{
    struct node *newnode;
    int choice;

    do
    {
        newnode=(struct node*)malloc(sizeof(struct node));

        printf("Enter Data: ");
        scanf("%d",&newnode->data);

        if(head==NULL)
        {
            head=temp=newnode;
        }
        else
        {
            temp->next=newnode;
            temp=newnode;
        }

        temp->next=head;

        printf("Press 1 to Continue: ");
        scanf("%d",&choice);

    }while(choice==1);
}

void display()
{
    struct node *temp;

    temp=head;

    do
    {
        printf("%d -> ",temp->data);

        temp=temp->next;

    }while(temp!=head);

    printf("HEAD");
}

void main()
{
    clrscr();

    create();

    display();

    getch();
}
```

---

# DOUBLY LINKED LIST

# Introduction

In Doubly Linked List:
- Each node contains:
  - Previous pointer
  - Next pointer

Traversal possible in:
```text
Both directions
```

---

# Structure of Doubly Linked List

```text
NULL ← 10 ⇄ 20 ⇄ 30 → NULL
```

---

# Image Representation

```md
![Doubly Linked List](images/doubly-linked-list.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg

---

# Node Structure

```c
struct node
{
    int data;
    struct node *prev;
    struct node *next;
};
```

---

# Advantages of Doubly Linked List

- Forward traversal
- Backward traversal
- Easy deletion

---

# Disadvantages

- Extra memory required
- Complex implementation

---

# Program for Doubly Linked List

```c
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *prev;
    struct node *next;
};

struct node *head=NULL,*temp;

void create()
{
    struct node *newnode;
    int choice;

    do
    {
        newnode=(struct node*)malloc(sizeof(struct node));

        printf("Enter Data: ");
        scanf("%d",&newnode->data);

        newnode->prev=NULL;
        newnode->next=NULL;

        if(head==NULL)
        {
            head=temp=newnode;
        }
        else
        {
            temp->next=newnode;
            newnode->prev=temp;
            temp=newnode;
        }

        printf("Press 1 to Continue: ");
        scanf("%d",&choice);

    }while(choice==1);
}

void display()
{
    struct node *temp;

    temp=head;

    while(temp!=NULL)
    {
        printf("%d <-> ",temp->data);

        temp=temp->next;
    }

    printf("NULL");
}

void main()
{
    clrscr();

    create();

    display();

    getch();
}
```

---

# APPLICATIONS OF LINKED LIST

Linked lists are heavily used in computer science.

---

# 1. Music Playlist

Songs connected sequentially.

Next song address stored.

---

# 2. Browser History

Web pages linked together.

---

# 3. Undo-Redo Operations

Editors use linked list.

---

# 4. Dynamic Memory Allocation

Operating systems use linked list.

---

# 5. Polynomial Representation

Polynomials stored efficiently.

---

# 6. Graph Representation

Adjacency list uses linked list.

---

# Difference Between Arrays and Linked List

| Array | Linked List |
|---|---|
| Fixed size | Dynamic size |
| Continuous memory | Non-continuous memory |
| Fast access | Sequential access |
| Difficult insertion | Easy insertion |

---

# Important Points to Remember

- Linked list stores nodes dynamically.
- Each node contains data and pointer.
- Singly linked list has one pointer.
- Circular linked list connects last node to first.
- Doubly linked list has previous and next pointers.
- Insertion and deletion are easy.
- Linked lists use dynamic memory allocation.

---

# Conclusion

Linked List is one of the most important and powerful dynamic data structures in computer science. It solves many problems of arrays by providing dynamic memory allocation and easy insertion/deletion operations.

Singly linked list, circular linked list, and doubly linked list are widely used in operating systems, browsers, music players, editors, scheduling systems, and database applications.

Understanding linked lists is essential because they form the base of advanced data structures like stacks, queues, trees, graphs, and hash tables.
