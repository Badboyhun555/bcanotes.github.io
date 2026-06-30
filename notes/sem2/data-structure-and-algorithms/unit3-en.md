# Q1. What is a Linked List? Explain its Need, Structure, Advantages, and Disadvantages. Discuss the Representation of a Singly Linked List with Suitable Diagrams. Write a C Program for Creation and Traversal of a Linked List.

## Introduction

Data Structures ka main objective data ko efficiently store, organize aur manipulate karna hota hai. Arrays ek simple aur widely used data structure hain, lekin arrays ki kuch limitations bhi hoti hain. Array ka size generally fixed hota hai aur memory allocation continuous locations me hoti hai. Agar array ka size pehle se correctly estimate na kiya jaye to ya to memory waste ho sakti hai ya program ko insufficient space mil sakta hai.

In limitations ko overcome karne ke liye Linked List Data Structure ka development hua. Linked List ek dynamic data structure hai jisme memory requirement ke according nodes create aur delete kiye ja sakte hain. Linked List me elements continuous memory locations me store nahi hote, balki memory ke different locations par store hote hain aur pointers ke through ek dusre se connected rehte hain.

Linked List modern computer systems, operating systems, compilers, database management systems aur memory management applications me extensively use ki jati hai. Dynamic memory allocation aur flexible size ki wajah se Linked List Data Structures ka ek important concept mani jati hai.

---

# What is a Linked List?

Linked List ek linear data structure hai jisme data elements nodes ke form me store hote hain. Har node do parts se milkar banta hai:

1. Data Part
2. Link (Pointer) Part

Data part actual information store karta hai jabki link part next node ka address store karta hai.

## Definition

"A Linked List is a dynamic linear data structure consisting of a collection of nodes where each node contains data and a pointer to the next node."

---

# Need of Linked List

Linked List ki need arrays ki limitations ko overcome karne ke liye padti hai.

Arrays me kuch major problems hoti hain:

### Fixed Size

Array ka size pehle define karna padta hai.

---

### Memory Wastage

Extra memory allocate karne par unused space waste ho sakti hai.

---

### Insertion and Deletion Costly

Middle me insertion aur deletion ke liye shifting karni padti hai.

---

### Continuous Memory Requirement

Array ke liye contiguous memory block chahiye hota hai.

---

Linked List in sab problems ka solution provide karti hai.

---

# Structure of Linked List

Linked List nodes se milkar bani hoti hai.

Har node me:

```text
DATA | LINK
```

store hota hai.

Example:

```text
10 | *
```

Yahan:

```text
10
```

data hai aur

```text
*
```

next node ka address represent karta hai.

---

# Components of Linked List

## Node

Data aur address store karta hai.

---

## Data Field

Actual information store karta hai.

---

## Link Field

Next node ka address store karta hai.

---

## Head Pointer

Linked List ke first node ka address store karta hai.

---

# Representation of Singly Linked List

Singly Linked List me har node ke paas sirf next node ka address hota hai.

Diagram:

```text
HEAD

 |
 V

+------+------+
| 10   |  *---|----+
+------+------+
                |
                V

+------+------+
| 20   |  *---|----+
+------+------+
                |
                V

+------+------+
| 30   | NULL |
+------+------+
```

Yahan:

```text
10 -> 20 -> 30 -> NULL
```

---

# Memory Representation

Nodes memory me alag-alag locations par store hote hain.

Example:

```text
Address     Data     Link

1000         10      2000
2000         20      3000
3000         30      NULL
```

Isliye Linked List ko dynamic data structure kaha jata hai.

---

# Working of Singly Linked List

Head first node ko point karta hai.

Har node next node ka address store karti hai.

Last node ka link:

```text
NULL
```

hota hai jo list ke end ko indicate karta hai.

---

# Creation of Linked List

Linked List create karne ke liye nodes dynamically allocate kiye jate hain.

C language me:

```c
malloc()
```

function ka use hota hai.

Example:

```c
newnode=(struct node*)
malloc(sizeof(struct node));
```

---

# Traversal of Linked List

Traversal ka matlab list ke har node ko sequentially visit karna hota hai.

Traversal generally:

```c
while(ptr!=NULL)
```

loop ke through perform ki jati hai.

---

# Algorithm for Creation

```text
Step 1:
Start

Step 2:
Create New Node

Step 3:
Enter Data

Step 4:
Store Data in Node

Step 5:
Link Node with Previous Node

Step 6:
Repeat Until Required Nodes Created

Step 7:
Stop
```

---

# Algorithm for Traversal

```text
Step 1:
Start

Step 2:
Set Pointer = HEAD

Step 3:
Display Data

Step 4:
Move Pointer to Next Node

Step 5:
Repeat Until NULL

Step 6:
Stop
```

---

# C Program for Creation and Traversal of Linked List

```c
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
};

void main()
{
    struct node *head=NULL;
    struct node *temp,*newnode;

    int n,i;

    clrscr();

    printf("Enter Number of Nodes : ");
    scanf("%d",&n);

    for(i=1;i<=n;i++)
    {
        newnode=(struct node*)
        malloc(sizeof(struct node));

        printf("Enter Data : ");
        scanf("%d",&newnode->data);

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
    }

    printf("\nLinked List:\n");

    temp=head;

    while(temp!=NULL)
    {
        printf("%d -> ",
               temp->data);

        temp=temp->next;
    }

    printf("NULL");

    getch();
}
```

---

# Output

```text
Enter Number of Nodes : 3

Enter Data : 10
Enter Data : 20
Enter Data : 30

Linked List:

10 -> 20 -> 30 -> NULL
```

---

# Time Complexity Analysis

## Creation

n nodes create karne par:

```text
O(n)
```

---

## Traversal

Complete list visit karni padti hai:

```text
O(n)
```

---

# Advantages of Linked List

### Dynamic Size

Runtime par size change ho sakta hai.

---

### Efficient Insertion

Shifting ki zarurat nahi.

---

### Efficient Deletion

Node remove karna easy hota hai.

---

### Better Memory Utilization

Required memory hi allocate hoti hai.

---

### No Contiguous Memory Required

Nodes different locations par store ho sakte hain.

---

# Disadvantages of Linked List

### Extra Memory Requirement

Pointer ke liye additional memory chahiye.

---

### Sequential Access

Random access possible nahi.

---

### Complex Implementation

Arrays se complex hoti hai.

---

### Traversal Slow

Direct indexing available nahi.

---

# Applications of Linked List

## Dynamic Memory Management

---

## Operating Systems

---

## Polynomial Representation

---

## Graph Representation

---

## Database Systems

---

## Undo Functionality

---

## Music Playlists

---

## Browser History

---

# Linked List vs Array

| Array | Linked List |
|---------|------------|
| Fixed Size | Dynamic Size |
| Contiguous Memory | Non-Contiguous Memory |
| Fast Random Access | Sequential Access |
| Insertion Costly | Insertion Easy |
| Deletion Costly | Deletion Easy |
| Less Memory Overhead | Extra Pointer Memory |

---

# Conclusion

In conclusion, Linked List ek dynamic linear data structure hai jo nodes ke collection se milkar banti hai. Har node data aur next node ka address store karti hai. Linked Lists arrays ki limitations ko overcome karti hain aur dynamic memory allocation provide karti hain. Singly Linked List me har node sirf next node ko point karti hai. Creation aur traversal Linked List ke fundamental operations hain. Dynamic memory management, operating systems, databases aur many real-world applications me Linked Lists ka extensive use hota hai. Isi wajah se Linked List Data Structures ka ek fundamental aur highly important concept mana jata hai.



# Q2. Explain Insertion and Deletion Operations in a Singly Linked List. Discuss Insertion at Beginning, End, and Any Position. Write Algorithms and C Programs for Each Operation.

## Introduction

Linked List ek dynamic linear data structure hai jisme data nodes ke form me store kiya jata hai. Har node do parts se milkar banta hai: Data Field aur Link Field. Data Field actual information store karta hai jabki Link Field next node ka address store karta hai. Linked List ki sabse badi advantage ye hai ki isme insertion aur deletion operations arrays ki comparison me bahut efficiently perform kiye ja sakte hain.

Arrays me insertion aur deletion ke liye elements ko shift karna padta hai, jisse time complexity badh jati hai. Linked List me sirf pointers ko update karke insertion aur deletion perform kiya ja sakta hai. Isi wajah se Linked List dynamic applications aur memory management systems me extensively use ki jati hai.

Singly Linked List me insertion teen major positions par perform kiya ja sakta hai:

1. Insertion at Beginning
2. Insertion at End
3. Insertion at Any Position

Isi tarah deletion bhi different positions se kiya ja sakta hai. In operations ko samajhna Linked List implementation ka sabse important part hai.

---

# Insertion in Singly Linked List

Insertion ka matlab Linked List me ek naya node add karna hota hai.

General Steps:

```text
1. New Node Create Karo
2. Data Insert Karo
3. Links Update Karo
4. Node Ko List Se Connect Karo
```

---

# Insertion at Beginning

Insertion at Beginning me naya node Linked List ke first position par insert kiya jata hai.

### Before Insertion

```text
HEAD

 |
 V

10 -> 20 -> 30 -> NULL
```

### Insert 5

### After Insertion

```text
HEAD

 |
 V

5 -> 10 -> 20 -> 30 -> NULL
```

Yahan naya node first node ban jata hai.

---

## Algorithm: Insertion at Beginning

```text
Step 1:
Create New Node

Step 2:
Enter Data

Step 3:
newnode->next = head

Step 4:
head = newnode

Step 5:
Stop
```

---

## C Program: Insertion at Beginning

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

void insert_begin()
{
    struct node *newnode;

    newnode=(struct node*)
    malloc(sizeof(struct node));

    printf("Enter Data : ");
    scanf("%d",&newnode->data);

    newnode->next=head;

    head=newnode;
}

void display()
{
    struct node *temp=head;

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

    insert_begin();
    insert_begin();
    insert_begin();

    display();

    getch();
}
```

---

# Insertion at End

Insertion at End me naya node Linked List ke last position par insert kiya jata hai.

### Before Insertion

```text
10 -> 20 -> 30 -> NULL
```

### Insert 40

### After Insertion

```text
10 -> 20 -> 30 -> 40 -> NULL
```

---

## Algorithm: Insertion at End

```text
Step 1:
Create New Node

Step 2:
Enter Data

Step 3:
newnode->next = NULL

Step 4:
Move Pointer To Last Node

Step 5:
last->next = newnode

Step 6:
Stop
```

---

## C Program: Insertion at End

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

void insert_end()
{
    struct node *newnode,*temp;

    newnode=(struct node*)
    malloc(sizeof(struct node));

    printf("Enter Data : ");
    scanf("%d",&newnode->data);

    newnode->next=NULL;

    if(head==NULL)
    {
        head=newnode;
    }
    else
    {
        temp=head;

        while(temp->next!=NULL)
        {
            temp=temp->next;
        }

        temp->next=newnode;
    }
}
```

---

# Insertion at Any Position

Kabhi-kabhi node ko list ke middle me insert karna padta hai.

Example:

### Before

```text
10 -> 20 -> 30 -> NULL
```

Insert:

```text
25
```

Position:

```text
3
```

### After

```text
10 -> 20 -> 25 -> 30 -> NULL
```

---

## Algorithm: Insertion at Any Position

```text
Step 1:
Create New Node

Step 2:
Enter Data

Step 3:
Move Pointer To Previous Position

Step 4:
newnode->next=temp->next

Step 5:
temp->next=newnode

Step 6:
Stop
```

---

## C Program: Insertion at Any Position

```c
void insert_pos()
{
    struct node *newnode,*temp;

    int pos,i;

    newnode=(struct node*)
    malloc(sizeof(struct node));

    printf("Enter Data : ");
    scanf("%d",&newnode->data);

    printf("Enter Position : ");
    scanf("%d",&pos);

    temp=head;

    for(i=1;i<pos-1;i++)
    {
        temp=temp->next;
    }

    newnode->next=temp->next;

    temp->next=newnode;
}
```

---

# Deletion in Singly Linked List

Deletion operation ka use kisi node ko Linked List se remove karne ke liye kiya jata hai.

Deletion ke baad node ki memory free kar di jati hai.

General Steps:

```text
1. Delete Node Identify Karo

2. Links Update Karo

3. Memory Free Karo
```

---

# Deletion from Beginning

List ke first node ko remove kiya jata hai.

### Before

```text
10 -> 20 -> 30 -> NULL
```

### After

```text
20 -> 30 -> NULL
```

---

## Algorithm: Deletion from Beginning

```text
Step 1:
temp=head

Step 2:
head=head->next

Step 3:
free(temp)

Step 4:
Stop
```

---

## C Program

```c
void delete_begin()
{
    struct node *temp;

    temp=head;

    head=head->next;

    free(temp);
}
```

---

# Deletion from End

Last node ko remove kiya jata hai.

### Before

```text
10 -> 20 -> 30 -> NULL
```

### After

```text
10 -> 20 -> NULL
```

---

## Algorithm

```text
Step 1:
Move To Second Last Node

Step 2:
temp->next=NULL

Step 3:
Delete Last Node

Step 4:
Stop
```

---

## C Program

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

# Deletion at Any Position

List ke kisi specific position se node delete kiya jata hai.

### Before

```text
10 -> 20 -> 25 -> 30 -> NULL
```

Delete Position:

```text
3
```

### After

```text
10 -> 20 -> 30 -> NULL
```

---

## Algorithm

```text
Step 1:
Move To Previous Node

Step 2:
temp=ptr->next

Step 3:
ptr->next=temp->next

Step 4:
free(temp)

Step 5:
Stop
```

---

## C Program

```c
void delete_pos()
{
    struct node *temp,*ptr;

    int pos,i;

    printf("Enter Position : ");
    scanf("%d",&pos);

    ptr=head;

    for(i=1;i<pos-1;i++)
    {
        ptr=ptr->next;
    }

    temp=ptr->next;

    ptr->next=temp->next;

    free(temp);
}
```

---

# Time Complexity Analysis

| Operation | Time Complexity |
|------------|----------------|
| Insert Beginning | O(1) |
| Insert End | O(n) |
| Insert Position | O(n) |
| Delete Beginning | O(1) |
| Delete End | O(n) |
| Delete Position | O(n) |

---

# Advantages of Linked List Insertion and Deletion

### No Element Shifting Required

---

### Dynamic Memory Allocation

---

### Efficient Updates

---

### Flexible Structure

---

### Better Than Arrays for Frequent Modifications

---

# Disadvantages

### Sequential Traversal Required

---

### Extra Memory for Pointer

---

### Complex Pointer Handling

---

### Random Access Not Possible

---

# Applications

Linked List insertion aur deletion operations ka use Operating Systems, Memory Management, Browser History, Music Playlists, Undo-Redo Systems, Graph Representation aur Database Applications me extensively kiya jata hai. Dynamic applications me Linked Lists arrays se zyada useful hoti hain kyunki nodes runtime par efficiently add aur remove kiye ja sakte hain.

---

# Conclusion

In conclusion, insertion aur deletion Singly Linked List ke sabse important operations hain. Insertion beginning, end aur any position par perform ki ja sakti hai, jabki deletion bhi different positions se possible hai. Linked Lists me insertion aur deletion arrays ki comparison me zyada efficient hoti hain kyunki shifting ki requirement nahi hoti. Dynamic memory allocation aur flexible size ki wajah se Linked Lists modern computer systems aur software applications me extensively use ki jati hain.


# Q3. Explain Searching in a Linked List. Discuss Linear Search Technique, Algorithm, C Program, and Time Complexity Analysis. Compare Searching in Arrays and Linked Lists.

## Introduction

Data Structures me searching ek fundamental operation hai jiska objective kisi specific element ko data collection ke andar locate karna hota hai. Jab data ka size chhota hota hai to searching relatively easy hoti hai, lekin large datasets me efficient searching techniques ki zarurat padti hai. Searching ka use database systems, operating systems, information retrieval systems, banking applications aur almost har software application me hota hai.

Linked List ek dynamic linear data structure hai jisme elements nodes ke form me store hote hain. Har node me data aur next node ka address store hota hai. Kyunki Linked List ke nodes memory me continuous locations par store nahi hote, isliye Linked List me direct indexing possible nahi hoti. Isi wajah se searching ka process arrays ki comparison me different hota hai.

Singly Linked List me searching generally **Linear Search Technique** ke through perform ki jati hai. Is technique me list ke first node se traversal start hota hai aur required element milne tak har node ko sequentially check kiya jata hai. Agar element mil jata hai to search successful mani jati hai, otherwise search unsuccessful hoti hai.

Searching operation Linked List ke practical implementation ka ek important part hai kyunki insertion, deletion aur update operations perform karne se pehle required node ko search karna zaruri hota hai.

---

# What is Searching in a Linked List?

Searching ka matlab Linked List ke andar kisi specific element ya node ko locate karna hota hai.

Example:

```text
10 -> 20 -> 30 -> 40 -> 50 -> NULL
```

Agar hume:

```text
40
```

search karna hai to list ke har node ko ek-ek karke check karna padega.

Searching ka objective:

```text
Element Present Hai Ya Nahi
```

aur

```text
Element Kis Position Par Hai
```

ye determine karna hota hai.

---

# Need of Searching

Linked List me searching kai important operations ke liye required hoti hai.

### Record Retrieval

Specific information retrieve karne ke liye.

---

### Update Operations

Particular node ka data modify karne ke liye.

---

### Deletion Operations

Delete karne se pehle node locate karni padti hai.

---

### Insertion at Specific Position

Correct position identify karne ke liye.

---

### Database Management

Records search karne ke liye.

---

# Linear Search Technique

Linear Search Linked List me sabse commonly used searching method hai.

Is technique me traversal first node se start hota hai aur har node ka data required value se compare kiya jata hai.

Agar matching value mil jaye to search successful hoti hai.

Agar NULL tak pahunch jaye aur element na mile to search unsuccessful hoti hai.

---

# Working of Linear Search

Example:

```text
10 -> 20 -> 30 -> 40 -> 50 -> NULL
```

Search:

```text
40
```

Steps:

```text
10 ≠ 40

20 ≠ 40

30 ≠ 40

40 = 40
```

Element Found.

---

# Diagram of Linear Search

```text
HEAD

 |
 V

10 -> 20 -> 30 -> 40 -> 50 -> NULL
                   ^
                   |
              Element Found
```

---

# Algorithm for Linear Search

```text
Step 1:
Start

Step 2:
Set Pointer = HEAD

Step 3:
Compare Current Node Data with Key

Step 4:
If Match Found

       Display Position

       Stop

Step 5:
Move Pointer to Next Node

Step 6:
Repeat Until NULL

Step 7:
If NULL Reached

       Display Not Found

Step 8:
Stop
```

---

# Example of Linear Search

Linked List:

```text
5 -> 10 -> 15 -> 20 -> 25 -> NULL
```

Search Element:

```text
20
```

Comparisons:

```text
5

10

15

20
```

Element fourth node par mil gaya.

---

# C Program for Searching in a Linked List

```c
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
};

void main()
{
    struct node *head=NULL;
    struct node *temp,*newnode;

    int n,i,key,pos=1,found=0;

    clrscr();

    printf("Enter Number of Nodes : ");
    scanf("%d",&n);

    for(i=1;i<=n;i++)
    {
        newnode=(struct node*)
        malloc(sizeof(struct node));

        printf("Enter Data : ");
        scanf("%d",&newnode->data);

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
    }

    printf("\nEnter Element to Search : ");
    scanf("%d",&key);

    temp=head;

    while(temp!=NULL)
    {
        if(temp->data==key)
        {
            found=1;

            printf("\nElement Found at Position %d",
                   pos);

            break;
        }

        temp=temp->next;

        pos++;
    }

    if(found==0)
    {
        printf("\nElement Not Found");
    }

    getch();
}
```

---

# Output Example

```text
Enter Number of Nodes : 5

Enter Data : 10
Enter Data : 20
Enter Data : 30
Enter Data : 40
Enter Data : 50

Enter Element to Search : 40

Element Found at Position 4
```

---

# Another Example

Linked List:

```text
10 -> 20 -> 30 -> 40 -> NULL
```

Search:

```text
60
```

Output:

```text
Element Not Found
```

---

# Time Complexity Analysis

Time Complexity searching ke performance ko measure karti hai.

---

## Best Case

Element first node par mil jaye.

Example:

```text
10 -> 20 -> 30
```

Search:

```text
10
```

Comparisons:

```text
1
```

Complexity:

```text
O(1)
```

---

## Worst Case

Element last node par ho ya present na ho.

Example:

```text
10 -> 20 -> 30 -> 40 -> 50
```

Search:

```text
50
```

Comparisons:

```text
5
```

Complexity:

```text
O(n)
```

---

## Average Case

Average comparisons:

```text
n/2
```

Complexity:

```text
O(n)
```

---

# Advantages of Linear Search in Linked List

### Simple Implementation

Algorithm easy hota hai.

---

### No Sorting Required

Sorted list ki requirement nahi.

---

### Dynamic Structure Support

Linked List ke saath naturally work karta hai.

---

### Suitable for Small Lists

Small datasets ke liye efficient.

---

### Less Overhead

Extra memory required nahi.

---

# Disadvantages of Linear Search

### Slow for Large Lists

Large datasets me performance reduce ho jati hai.

---

### Sequential Access

Har node visit karni padti hai.

---

### No Random Access

Direct indexing possible nahi.

---

### High Search Time

Worst case me pura list traverse karna padta hai.

---

# Searching in Arrays

Arrays me searching direct indexing ke through perform ki ja sakti hai.

Example:

```c
arr[4]
```

Direct access possible hai.

Searching methods:

### Linear Search

### Binary Search

(Binary Search sorted arrays me use hoti hai)

---

# Searching in Linked Lists

Linked Lists me direct indexing available nahi hoti.

Example:

```text
10 -> 20 -> 30 -> 40
```

Agar fourth node access karni hai to pehle teen nodes traverse karni padengi.

Isliye Linked Lists me Binary Search practical nahi hoti.

---

# Comparison: Searching in Arrays vs Linked Lists

| Basis | Array | Linked List |
|---------|---------|------------|
| Memory Allocation | Contiguous | Non-Contiguous |
| Random Access | Available | Not Available |
| Direct Indexing | Yes | No |
| Binary Search | Possible | Not Practical |
| Linear Search Complexity | O(n) | O(n) |
| Binary Search Complexity | O(log n) | Not Applicable |
| Traversal Required | Optional | Mandatory |
| Search Speed | Faster | Slower |
| Memory Overhead | Less | More |
| Dynamic Nature | Fixed Size | Dynamic Size |

---

# Applications of Searching in Linked Lists

Searching operation ka use many real-world applications me hota hai.

### Student Record Systems

Student details search karne ke liye.

---

### Employee Management Systems

Employee information locate karne ke liye.

---

### Database Applications

Specific records retrieve karne ke liye.

---

### Contact Management

Phonebook entries search karne ke liye.

---

### Inventory Systems

Product information locate karne ke liye.

---

### Operating Systems

Process aur memory structures search karne ke liye.

---

# Conclusion

In conclusion, searching Linked List ka ek important operation hai jo required node ya element ko locate karne ke liye use kiya jata hai. Linked Lists me generally Linear Search Technique use hoti hai kyunki direct indexing available nahi hoti. Linear Search first node se start hokar sequentially har node ko check karti hai. Iski best case complexity O(1) aur worst case complexity O(n) hoti hai. Arrays ki comparison me Linked List searching slower hoti hai kyunki random access available nahi hota. Phir bhi dynamic memory allocation aur flexible structure ki wajah se Linked Lists modern computer systems aur applications me extensively use ki jati hain.



# Q4. Define Circular Linked List. Explain its Structure, Advantages, Disadvantages, and Applications. Write Algorithms and a C Program for Creation and Traversal of a Circular Linked List.

# Introduction

Linked List Data Structure dynamic memory allocation par based ek important linear data structure hai. Singly Linked List aur Doubly Linked List ke alawa ek aur important variation hoti hai jise Circular Linked List kaha jata hai. Circular Linked List ka concept Singly Linked List ki limitations ko overcome karne aur traversal ko more flexible banane ke liye develop kiya gaya tha.

Singly Linked List me last node ka link field NULL store karta hai, jisse traversal last node par pahunchkar terminate ho jata hai. Lekin kai practical situations me data ko continuously circular manner me process karna padta hai. Aise cases me Circular Linked List bahut useful hoti hai.

Circular Linked List me last node ka link NULL ko point nahi karta, balki first node ya Head node ko point karta hai. Is wajah se list ek circle ki form me convert ho jati hai aur traversal kisi bhi node se continuously perform kiya ja sakta hai. Circular Linked Lists Operating Systems, CPU Scheduling, Multimedia Applications, Real-Time Systems aur Network Management me extensively use ki jati hain.

Circular Linked List memory utilization aur traversal flexibility ke perspective se ek efficient data structure mani jati hai. Isi wajah se Data Structures ke syllabus me iska bahut important place hai.

---

# Definition of Circular Linked List

Circular Linked List ek linked list hai jisme last node ka link first node ko point karta hai.

Simple words me:

> "A Circular Linked List is a linked list in which the last node points back to the first node instead of containing NULL."

Is structure me list ka koi actual end nahi hota.

---

# Structure of Circular Linked List

Singly Linked List me:

```text
10 -> 20 -> 30 -> NULL
```

Circular Linked List me:

```text
10 -> 20 -> 30
^            |
|____________|
```

Yahan:

```text
Last Node → First Node
```

ko point karti hai.

Isi wajah se list circular structure form kar leti hai.

---

# Node Structure of Circular Linked List

Har node do parts se milkar banti hai:

### Data Field

Actual information store karta hai.

### Link Field

Next node ka address store karta hai.

Structure:

```c
struct node
{
    int data;
    struct node *next;
};
```

Yeh structure Singly Linked List jaisa hi hota hai.

Difference sirf last node ke link me hota hai.

---

# Representation of Circular Linked List

Example:

```text
HEAD

 |
 V

+-----+-----+
| 10  |  *------+
+-----+-----+   |
                V

+-----+-----+
| 20  |  *------+
+-----+-----+   |
                V

+-----+-----+
| 30  |  *------+
+-----+-----+   |
                |
                |
                +-------> HEAD
```

Yahan:

```text
30 ke next me NULL nahi hai.
```

Woh:

```text
10
```

ko point kar raha hai.

---

# Memory Representation

Suppose memory addresses:

```text
Address     Data     Next

1000         10      2000
2000         20      3000
3000         30      1000
```

Last node ka next:

```text
1000
```

hai jo first node ka address hai.

---

# Working of Circular Linked List

Circular Linked List me traversal kisi bhi node se start kiya ja sakta hai.

Example:

```text
10 -> 20 -> 30 -> 40
^                |
|________________|
```

Agar traversal 20 se start kare:

```text
20 → 30 → 40 → 10 → 20
```

Ye continuously repeat ho sakta hai.

Isi wajah se Circular Linked List continuous processing systems me useful hoti hai.

---

# Creation of Circular Linked List

Circular Linked List create karne ke liye nodes dynamically allocate kiye jate hain.

Sabhi nodes ko normal linked list ki tarah connect kiya jata hai.

Last node create hone ke baad:

```c
last->next=head;
```

assign kiya jata hai.

Isi statement ki wajah se list circular ban jati hai.

---

# Algorithm for Creation of Circular Linked List

```text
Step 1:
Start

Step 2:
Create First Node

Step 3:
Store Address in HEAD

Step 4:
Create Remaining Nodes

Step 5:
Link Each Node With Next Node

Step 6:
Move To Last Node

Step 7:
last->next = head

Step 8:
Stop
```

---

# Traversal of Circular Linked List

Traversal Circular Linked List ka important operation hai.

Singly Linked List me traversal:

```c
while(ptr!=NULL)
```

se hoti hai.

Lekin Circular Linked List me NULL present nahi hota.

Isliye traversal ke liye:

```c
do-while
```

loop use kiya jata hai.

Traversal tab tak continue hoti hai jab tak pointer dobara HEAD par na pahunch jaye.

---

# Algorithm for Traversal

```text
Step 1:
Start

Step 2:
ptr = head

Step 3:
Display Node Data

Step 4:
ptr = ptr->next

Step 5:
Repeat Until ptr=head

Step 6:
Stop
```

---

# C Program for Creation and Traversal of Circular Linked List

```c
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
};

void main()
{
    struct node *head=NULL;
    struct node *newnode;
    struct node *temp;

    int n,i;

    clrscr();

    printf("Enter Number of Nodes : ");
    scanf("%d",&n);

    for(i=1;i<=n;i++)
    {
        newnode=(struct node*)
        malloc(sizeof(struct node));

        printf("Enter Data : ");
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
    }

    temp->next=head;

    printf("\nCircular Linked List:\n");

    temp=head;

    do
    {
        printf("%d -> ",
               temp->data);

        temp=temp->next;

    }while(temp!=head);

    printf("(Back To Head)");

    getch();
}
```

---

# Output

```text
Enter Number of Nodes : 4

Enter Data : 10
Enter Data : 20
Enter Data : 30
Enter Data : 40

Circular Linked List:

10 -> 20 -> 30 -> 40
(Back To Head)
```

---

# Time Complexity Analysis

## Creation

For n nodes:

```text
O(n)
```

---

## Traversal

All nodes visit karni padti hain:

```text
O(n)
```

---

## Searching

Worst Case:

```text
O(n)
```

---

## Insertion at Beginning

```text
O(1)
```

(With tail pointer)

---

## Insertion at End

```text
O(n)
```

---

# Advantages of Circular Linked List

### Continuous Traversal

List continuously traverse ki ja sakti hai.

---

### No NULL Pointer

Last node NULL store nahi karti.

---

### Efficient for Cyclic Processing

Round Robin Scheduling me useful.

---

### Better Memory Utilization

Traversal logic simple ho sakta hai.

---

### Suitable for Queues

Circular Queues implementation me use hoti hai.

---

### Fast Switching Between Nodes

Repeated traversal ke liye efficient.

---

### Ideal for Real-Time Systems

Continuous processing environments me useful.

---

# Disadvantages of Circular Linked List

### Complex Traversal

Infinite loop ka risk rehta hai.

---

### Difficult Debugging

Errors identify karna difficult ho sakta hai.

---

### Complex Deletion

Deletion operations relatively complex hoti hain.

---

### No End Marker

NULL absent hone ki wajah se termination condition carefully define karni padti hai.

---

### More Careful Pointer Handling

Pointer mistakes se complete structure corrupt ho sakta hai.

---

# Applications of Circular Linked List

## CPU Scheduling

Round Robin Scheduling Circular Linked List ka major application hai.

Processes circular order me execute hoti hain.

---

## Multiplayer Games

Players ko circular sequence me manage kiya jata hai.

---

## Music Playlists

Songs continuously repeat ho sakti hain.

---

## Multimedia Applications

Video aur audio streaming loops me use hota hai.

---

## Operating Systems

Task scheduling aur process management me.

---

## Traffic Control Systems

Signal rotation management me.

---

## Network Management

Token Ring Networks Circular Linked Lists ka concept use karti hain.

---

## Embedded Systems

Continuous cyclic processing ke liye.

---

# Circular Linked List vs Singly Linked List

| Basis | Singly Linked List | Circular Linked List |
|---------|------------------|---------------------|
| Last Node | NULL | First Node |
| Traversal End | NULL | Head |
| Continuous Traversal | No | Yes |
| Round Robin Scheduling | Difficult | Easy |
| Complexity | Simple | More Complex |
| Applications | General Purpose | Cyclic Processing |

---

# Real-Life Example

Circular Linked List ko clock ke concept se samjha ja sakta hai.

Clock me:

```text
12 → 1 → 2 → 3 → ... → 12
```

Continuous cycle repeat hoti rehti hai.

Exactly isi tarah Circular Linked List work karti hai.

---

# Conclusion

In conclusion, Circular Linked List ek advanced dynamic data structure hai jisme last node first node ko point karti hai aur list circular form me organize hoti hai. Iska sabse bada advantage continuous traversal aur cyclic processing support karna hai. Circular Linked Lists Round Robin CPU Scheduling, Multimedia Systems, Music Playlists, Embedded Systems aur Network Applications me extensively use ki jati hain. Although iska implementation aur debugging Singly Linked List se thoda complex hota hai, lekin continuous processing environments me ye bahut efficient aur useful data structure mani jati hai. Data Structures ke practical aur theoretical dono perspectives se Circular Linked List ka study bahut important hai.


# Q5. Explain Doubly Linked List with Suitable Diagrams. Discuss Node Structure, Insertion, Deletion, Forward Traversal, and Backward Traversal. Write Algorithms and C Programs and Compare it with Singly Linked List.

# Introduction

Linked List ek important dynamic data structure hai jo nodes ke collection se milkar banti hai. Singly Linked List me har node ke paas sirf next node ka address hota hai, jiski wajah se traversal sirf forward direction me possible hoti hai. Kai practical applications me data ko forward aur backward dono directions me access karna zaruri hota hai. Isi requirement ko fulfill karne ke liye Doubly Linked List ka development kiya gaya.

Doubly Linked List Linked List ka ek advanced form hai jisme har node ke paas do links hote hain. Pehla link previous node ka address store karta hai aur doosra link next node ka address store karta hai. Is structure ki wajah se list ko dono directions me traverse kiya ja sakta hai. Doubly Linked List browser history, undo-redo systems, music playlists, navigation systems aur operating systems jaise applications me extensively use ki jati hai.

Doubly Linked List insertion aur deletion operations ko bhi kaafi flexible bana deti hai kyunki kisi node ke previous aur next dono neighbors ka direct access available hota hai. Isi wajah se ye Data Structures ka ek important topic mana jata hai.

---

# What is a Doubly Linked List?

Doubly Linked List ek linear dynamic data structure hai jisme har node teen parts se milkar banti hai:

1. Previous Pointer (Prev)
2. Data Field
3. Next Pointer (Next)

## Definition

"A Doubly Linked List is a linked list in which each node contains two links, one pointing to the previous node and another pointing to the next node."

---

# Structure of Doubly Linked List

Node Structure:

```text
+--------+--------+--------+
| PREV   | DATA   | NEXT   |
+--------+--------+--------+
```

Example:

```text
NULL <- 10 <-> 20 <-> 30 -> NULL
```

Yahan:

- Prev previous node ko point karta hai.
- Next next node ko point karta hai.

---

# Diagram of Doubly Linked List

```text
NULL

  ^
  |

+------+------+------+
|NULL | 10   |  *----|----+
+------+------+------+    |
                           v

                    +------+------+------+
                    |  *---| 20   | *----|----+
                    +------+------+------+    |
                                               v

                                        +------+------+------+
                                        | *----| 30   |NULL |
                                        +------+------+------+
```

---

# Node Structure in C

```c
struct node
{
    int data;
    struct node *prev;
    struct node *next;
};
```

Yahan:

```c
prev
```

previous node ka address store karta hai.

Aur

```c
next
```

next node ka address store karta hai.

---

# Memory Representation

Example:

```text
Address   Prev    Data   Next

1000      NULL     10    2000

2000      1000     20    3000

3000      2000     30    NULL
```

Is representation ki wajah se forward aur backward traversal dono possible ho jati hain.

---

# Advantages of Doubly Linked List Structure

Doubly Linked List ka sabse bada advantage ye hai ki traversal dono directions me ki ja sakti hai.

Example:

Forward:

```text
10 -> 20 -> 30
```

Backward:

```text
30 -> 20 -> 10
```

Singly Linked List me backward traversal possible nahi hoti.

---

# Creation of Doubly Linked List

Doubly Linked List create karte waqt har node ke prev aur next pointers ko properly assign karna padta hai.

General Steps:

```text
Create Node

Store Data

Assign Prev Pointer

Assign Next Pointer

Link With Existing Nodes
```

---

# Insertion in Doubly Linked List

Insertion kisi bhi position par perform ki ja sakti hai.

Major Types:

1. Insertion at Beginning
2. Insertion at End
3. Insertion at Any Position

---

# Insertion at Beginning

Before:

```text
10 <-> 20 <-> 30
```

Insert:

```text
5
```

After:

```text
5 <-> 10 <-> 20 <-> 30
```

---

## Algorithm

```text
Step 1:
Create New Node

Step 2:
Store Data

Step 3:
newnode->next=head

Step 4:
head->prev=newnode

Step 5:
newnode->prev=NULL

Step 6:
head=newnode

Step 7:
Stop
```

---

# Insertion at End

Before:

```text
10 <-> 20 <-> 30
```

Insert:

```text
40
```

After:

```text
10 <-> 20 <-> 30 <-> 40
```

---

## Algorithm

```text
Step 1:
Create New Node

Step 2:
Move To Last Node

Step 3:
last->next=newnode

Step 4:
newnode->prev=last

Step 5:
newnode->next=NULL

Step 6:
Stop
```

---

# Insertion at Any Position

Before:

```text
10 <-> 20 <-> 30
```

Insert:

```text
25
```

After:

```text
10 <-> 20 <-> 25 <-> 30
```

---

## Algorithm

```text
Step 1:
Move To Required Position

Step 2:
Create New Node

Step 3:
Adjust Prev Link

Step 4:
Adjust Next Link

Step 5:
Connect New Node

Step 6:
Stop
```

---

# Deletion in Doubly Linked List

Deletion operation me node ko remove karke links update kiye jate hain.

Major Types:

1. Delete from Beginning
2. Delete from End
3. Delete from Any Position

---

# Deletion from Beginning

Before:

```text
10 <-> 20 <-> 30
```

After:

```text
20 <-> 30
```

---

## Algorithm

```text
Step 1:
temp=head

Step 2:
head=head->next

Step 3:
head->prev=NULL

Step 4:
free(temp)

Step 5:
Stop
```

---

# Deletion from End

Before:

```text
10 <-> 20 <-> 30
```

After:

```text
10 <-> 20
```

---

## Algorithm

```text
Step 1:
Move To Last Node

Step 2:
temp->prev->next=NULL

Step 3:
free(temp)

Step 4:
Stop
```

---

# Deletion at Any Position

Before:

```text
10 <-> 20 <-> 25 <-> 30
```

Delete:

```text
25
```

After:

```text
10 <-> 20 <-> 30
```

---

## Algorithm

```text
Step 1:
Move To Node

Step 2:
Adjust Previous Link

Step 3:
Adjust Next Link

Step 4:
Free Node

Step 5:
Stop
```

---

# Forward Traversal

Forward Traversal first node se start hoti hai aur next pointers follow karti hai.

Example:

```text
10 <-> 20 <-> 30 <-> 40
```

Output:

```text
10 20 30 40
```

---

## Algorithm

```text
Step 1:
ptr=head

Step 2:
Display Data

Step 3:
ptr=ptr->next

Step 4:
Repeat Until NULL

Step 5:
Stop
```

---

# Backward Traversal

Backward Traversal last node se start hoti hai aur prev pointers follow karti hai.

Example:

```text
10 <-> 20 <-> 30 <-> 40
```

Output:

```text
40 30 20 10
```

---

## Algorithm

```text
Step 1:
Move To Last Node

Step 2:
Display Data

Step 3:
ptr=ptr->prev

Step 4:
Repeat Until NULL

Step 5:
Stop
```

---

# C Program for Creation and Traversal of Doubly Linked List

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

void main()
{
    struct node *head=NULL;
    struct node *temp,*newnode;

    int n,i;

    clrscr();

    printf("Enter Number of Nodes : ");
    scanf("%d",&n);

    for(i=1;i<=n;i++)
    {
        newnode=(struct node*)
        malloc(sizeof(struct node));

        printf("Enter Data : ");
        scanf("%d",&newnode->data);

        newnode->next=NULL;

        if(head==NULL)
        {
            newnode->prev=NULL;
            head=temp=newnode;
        }
        else
        {
            temp->next=newnode;
            newnode->prev=temp;
            temp=newnode;
        }
    }

    printf("\nForward Traversal:\n");

    temp=head;

    while(temp!=NULL)
    {
        printf("%d ",
               temp->data);

        if(temp->next==NULL)
            break;

        temp=temp->next;
    }

    printf("\nBackward Traversal:\n");

    while(temp!=NULL)
    {
        printf("%d ",
               temp->data);

        temp=temp->prev;
    }

    getch();
}
```

---

# Output

```text
Enter Number of Nodes : 4

Enter Data : 10
Enter Data : 20
Enter Data : 30
Enter Data : 40

Forward Traversal:

10 20 30 40

Backward Traversal:

40 30 20 10
```

---

# Time Complexity Analysis

| Operation | Complexity |
|------------|-----------|
| Traversal | O(n) |
| Searching | O(n) |
| Insertion at Beginning | O(1) |
| Deletion at Beginning | O(1) |
| Insertion at End | O(n) |
| Deletion at End | O(n) |

---

# Advantages of Doubly Linked List

### Bidirectional Traversal

Forward aur backward dono directions me movement possible hai.

---

### Easy Deletion

Previous node ka address already available hota hai.

---

### Efficient Navigation

Browser history aur playlists ke liye useful.

---

### Better Flexibility

Node operations easy ho jati hain.

---

### Suitable for Complex Applications

Operating Systems aur Editors me extensively use hoti hai.

---

# Disadvantages of Doubly Linked List

### More Memory Requirement

Extra prev pointer store karna padta hai.

---

### Complex Structure

Singly Linked List se zyada complex hoti hai.

---

### More Pointer Manipulation

Errors ke chances increase hote hain.

---

### Slightly Slower Updates

Extra pointer updates required hote hain.

---

# Applications of Doubly Linked List

## Browser History

Back aur Forward navigation.

---

## Undo/Redo Operations

Text editors aur graphics software me.

---

## Music Playlists

Previous aur Next song navigation.

---

## Image Viewers

Forward aur backward image browsing.

---

## Operating Systems

Memory management aur scheduling.

---

## Navigation Systems

Page movement aur menu traversal.

---

# Comparison Between Singly Linked List and Doubly Linked List

| Basis | Singly Linked List | Doubly Linked List |
|---------|------------------|-------------------|
| Number of Links | One | Two |
| Memory Usage | Less | More |
| Forward Traversal | Yes | Yes |
| Backward Traversal | No | Yes |
| Insertion | Easy | Slightly Complex |
| Deletion | More Difficult | Easier |
| Structure | Simple | Complex |
| Applications | Basic Lists | Advanced Navigation |

---

# Conclusion

In conclusion, Doubly Linked List ek advanced dynamic data structure hai jisme har node previous aur next dono nodes ke addresses store karti hai. Is structure ki wajah se forward aur backward traversal possible hoti hai, jo ise Singly Linked List se zyada flexible banati hai. Insertion, deletion aur navigation operations Doubly Linked List me efficiently perform kiye ja sakte hain. Browser history, undo-redo systems, multimedia applications aur operating systems me iska extensive use hota hai. Yadyapi isme extra memory aur pointer management ki requirement hoti hai, phir bhi advanced applications ke liye Doubly Linked List ek powerful aur highly useful data structure mani jati hai.

