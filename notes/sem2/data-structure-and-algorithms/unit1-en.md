# Q1. What is an Array? Explain the Classification of Arrays, Memory Representation, Advantages, Limitations, and Applications of One-Dimensional and Two-Dimensional Arrays. Write Algorithms and C Programs for Insertion and Deletion Operations in an Array. Also Analyze Their Time Complexities.

## Introduction

Array Data Structure ka sabse basic aur important concept hai. Computer programming me jab hume same data type ke bahut saare values ko store karna hota hai, tab alag-alag variables banane ki jagah Array ka use kiya jata hai. Array ek linear data structure hai jisme elements memory me sequential ya contiguous locations par store hote hain.

Data Structures ke development me Array ka bahut important role hai kyunki Stack, Queue, Matrix, Searching aur Sorting jaise concepts Arrays ke upar hi based hote hain. Array fast access provide karta hai aur data ko systematically organize karne me help karta hai.

---

# What is an Array?

Array ek collection hota hai same data type ke elements ka jo memory me consecutive locations par store hote hain.

Har element ko ek unique index ya subscript ke through access kiya jata hai.

## Definition

"An Array is a collection of similar data elements stored in contiguous memory locations and accessed using a common name with an index."

---

## Example

```c
int marks[5];
```

Yahan:

```text
marks[0]
marks[1]
marks[2]
marks[3]
marks[4]
```

5 integer values store kar sakta hai.

---

# Classification of Arrays

Arrays mainly do categories me divide kiye jate hain:

## One-Dimensional Array (1D Array)

## Two-Dimensional Array (2D Array)

---

# One-Dimensional Array

One-Dimensional Array ko Linear Array bhi kaha jata hai.

Isme sirf ek index use hota hai.

## Syntax

```c
int arr[5];
```

## Example

```text
Index    Value

0         10
1         20
2         30
3         40
4         50
```

---

# Two-Dimensional Array

Two-Dimensional Array rows aur columns ke form me data store karta hai.

Isse Matrix bhi kaha jata hai.

## Syntax

```c
int arr[3][3];
```

## Example

```text
1 2 3

4 5 6

7 8 9
```

---

# Memory Representation of Array

Array ke elements memory me contiguous locations par store hote hain.

Example:

```c
int arr[5]={10,20,30,40,50};
```

Memory Representation:

```text
Address     Value

1000         10
1002         20
1004         30
1006         40
1008         50
```

Har integer 2 bytes occupy karta hai.

---

# Address Calculation Formula

## One-Dimensional Array

```text
LOC(A[i])

= Base Address + (i × Size)
```

Example:

```text
Base = 1000

Size = 2 Bytes

A[3]

= 1000 + (3×2)

= 1006
```

---

## Two-Dimensional Array

Row Major Formula:

```text
LOC(A[i][j])

= Base + [(i×N)+j]×Size
```

---

# Advantages of Arrays

## Fast Access

Random access possible hota hai.

---

## Easy Traversal

Elements sequentially access kiye ja sakte hain.

---

## Memory Efficiency

Contiguous memory allocation hoti hai.

---

## Simple Implementation

Programming easy ho jati hai.

---

## Foundation of Other Structures

Stacks aur Queues Arrays se implement hote hain.

---

# Limitations of Arrays

## Fixed Size

Size compile time par define karna padta hai.

---

## Memory Wastage

Unused locations waste ho sakti hain.

---

## Costly Insertion

Middle insertion expensive hota hai.

---

## Costly Deletion

Elements shift karne padte hain.

---

## Homogeneous Data

Sirf same data type store hota hai.

---

# Applications of Arrays

## Matrix Representation

## Searching Algorithms

## Sorting Algorithms

## Polynomial Representation

## Stack Implementation

## Queue Implementation

## Database Records

---

# Insertion Operation in Array

Insertion ka matlab array me new element add karna hota hai.

Suppose:

```text
10 20 40 50
```

30 insert karna hai position 3 par.

Result:

```text
10 20 30 40 50
```

---

# Algorithm: Array Insertion

### Step 1

Start

### Step 2

Read Array Elements

### Step 3

Enter Position

### Step 4

Enter New Element

### Step 5

Last Element se Position tak Right Shift Karo

### Step 6

New Element Insert Karo

### Step 7

Display Array

### Step 8

Stop

---

# C Program for Array Insertion

```c
#include<stdio.h>
#include<conio.h>

void main()
{
    int arr[20],n,i,pos,item;

    clrscr();

    printf("Enter Size : ");
    scanf("%d",&n);

    printf("Enter Elements : ");

    for(i=0;i<n;i++)
    scanf("%d",&arr[i]);

    printf("Enter Position : ");
    scanf("%d",&pos);

    printf("Enter Item : ");
    scanf("%d",&item);

    for(i=n-1;i>=pos-1;i--)
    {
        arr[i+1]=arr[i];
    }

    arr[pos-1]=item;

    n++;

    printf("\nArray After Insertion:\n");

    for(i=0;i<n;i++)
    printf("%d ",arr[i]);

    getch();
}
```

---

# Time Complexity of Insertion

## Best Case

```text
O(1)
```

Last position par insertion.

---

## Worst Case

```text
O(n)
```

Beginning me insertion.

---

# Deletion Operation in Array

Deletion ka matlab array se element remove karna hota hai.

Example:

```text
10 20 30 40 50
```

30 delete karne par:

```text
10 20 40 50
```

---

# Algorithm: Array Deletion

### Step 1

Start

### Step 2

Read Array

### Step 3

Enter Position

### Step 4

Elements Left Shift Karo

### Step 5

Reduce Size

### Step 6

Display Array

### Step 7

Stop

---

# C Program for Array Deletion

```c
#include<stdio.h>
#include<conio.h>

void main()
{
    int arr[20],n,i,pos;

    clrscr();

    printf("Enter Size : ");
    scanf("%d",&n);

    printf("Enter Elements : ");

    for(i=0;i<n;i++)
    scanf("%d",&arr[i]);

    printf("Enter Position : ");
    scanf("%d",&pos);

    for(i=pos-1;i<n-1;i++)
    {
        arr[i]=arr[i+1];
    }

    n--;

    printf("\nArray After Deletion:\n");

    for(i=0;i<n;i++)
    printf("%d ",arr[i]);

    getch();
}
```

---

# Time Complexity of Deletion

## Best Case

```text
O(1)
```

Last element delete karne par.

---

## Worst Case

```text
O(n)
```

First element delete karne par.

---

# Comparison of Insertion and Deletion

| Operation | Best Case | Worst Case |
|------------|------------|------------|
| Insertion | O(1) | O(n) |
| Deletion | O(1) | O(n) |

---

# Real Life Example

Student Record System me:

```text
Roll Numbers
Marks
Attendance
```

Arrays ke form me store kiye ja sakte hain.

Multimedia Applications me:

```text
Pixel Values
Audio Samples
Video Frames
```

Arrays ka use karke represent kiye jate hain.

---

# Conclusion

In conclusion, Array ek important linear data structure hai jo same type ke data elements ko contiguous memory locations me store karta hai. One-Dimensional aur Two-Dimensional Arrays data organization ke liye extensively use hote hain. Arrays fast access aur simple implementation provide karte hain, lekin fixed size aur costly insertion-deletion jaise limitations bhi rakhte hain. Insertion aur deletion operations generally O(n) time complexity tak pahunch sakte hain. Arrays modern programming aur advanced data structures ka foundation hote hain aur software development me bahut important role play karte hain.




# Q2. Define Stack and Explain its Characteristics as a Linear Data Structure. Discuss Array Representation of Stack, PUSH, POP, and PEEK Operations, Overflow and Underflow Conditions. Write Algorithms and a C Program for Stack Implementation and Discuss its Applications.

## Introduction

Stack Data Structure computer science ke sabse important linear data structures me se ek hai. Stack ka use data ko ek specific order me store aur retrieve karne ke liye kiya jata hai. Stack ka working principle **LIFO (Last In First Out)** hota hai, yani jo element sabse last me insert hota hai wahi sabse pehle remove hota hai.

Real life me Stack ke examples bahut common hain. Jaise plates ka stack, books ka stack ya coins ka stack. Agar hum plates ko ek dusre ke upar rakhte hain to jo plate sabse last me rakhi gayi hogi wahi sabse pehle nikali jayegi. Isi principle par computer memory aur programming languages me stack ka use kiya jata hai.

Stack recursion, function calling, expression evaluation, syntax checking aur operating systems ke memory management me extensively use hota hai.

---

# What is a Stack?

Stack ek linear data structure hai jisme insertion aur deletion sirf ek end se perform kiye jate hain. Is end ko **TOP** kaha jata hai.

## Definition

"A Stack is a linear data structure in which insertion and deletion operations are performed only at one end called TOP and follows the LIFO (Last In First Out) principle."

---

# Characteristics of Stack

## Linear Data Structure

Elements ek sequence me arranged hote hain.

---

## LIFO Principle

Last inserted element pehle remove hota hai.

Example:

```text
Push 10
Push 20
Push 30

Pop

Output = 30
```

---

## Single Access Point

Insertion aur deletion sirf TOP se hoti hai.

---

## Dynamic Behavior

Elements continuously add aur remove ho sakte hain.

---

## Easy Implementation

Arrays aur Linked Lists dono se implement kiya ja sakta hai.

---

# Stack Representation

Stack ko mainly do tariko se implement kiya jata hai:

## Array Representation

## Linked List Representation

Is question me Array Representation discuss karenge.

---

# Array Representation of Stack

Stack ko array ke through represent kiya ja sakta hai.

Example:

```c
int stack[5];
```

Ek variable:

```c
top
```

maintain kiya jata hai jo stack ke last element ka index store karta hai.

Initially:

```c
top = -1;
```

---

# Diagram of Stack

```text
TOP
 |
30
20
10
```

Array Representation:

```text
Index   Value

0        10
1        20
2        30

top = 2
```

---

# Basic Operations of Stack

Stack ke major operations:

## PUSH

## POP

## PEEK

## isEmpty

## isFull

---

# PUSH Operation

PUSH operation stack me new element insert karta hai.

Example:

```text
Before Push

20
10

After Push(30)

30
20
10
```

---

## Algorithm: PUSH

### Step 1

Check Overflow Condition

### Step 2

If Stack Full

Display Overflow

### Step 3

Else

Increment TOP

### Step 4

Insert Element

### Step 5

Stop

---

## Pseudocode

```text
PUSH(item)

IF TOP = MAX-1

    Overflow

ELSE

    TOP = TOP + 1

    STACK[TOP] = item

ENDIF
```

---

# POP Operation

POP operation stack ke top element ko remove karta hai.

Example:

```text
Before POP

30
20
10

After POP

20
10
```

---

## Algorithm: POP

### Step 1

Check Underflow

### Step 2

If Stack Empty

Display Underflow

### Step 3

Else

Remove Top Element

### Step 4

Decrease TOP

### Step 5

Stop

---

## Pseudocode

```text
POP()

IF TOP = -1

   Underflow

ELSE

   ITEM = STACK[TOP]

   TOP = TOP - 1

ENDIF
```

---

# PEEK Operation

PEEK operation stack ke top element ko display karta hai bina delete kiye.

---

## Algorithm: PEEK

### Step 1

Check Empty Condition

### Step 2

Display STACK[TOP]

### Step 3

Stop

---

## Example

```text
Stack

30
20
10

PEEK

Output = 30
```

---

# Overflow Condition

Overflow tab hota hai jab stack full ho aur fir bhi new element insert karne ki koshish ki jaye.

Example:

Stack Size:

```text
5
```

Already:

```text
10
20
30
40
50
```

Push(60)

Result:

```text
STACK OVERFLOW
```

---

# Overflow Condition Formula

```c
top == MAX-1
```

---

# Underflow Condition

Underflow tab hota hai jab empty stack se element remove karne ki koshish ki jaye.

Example:

```text
Empty Stack

POP()
```

Output:

```text
STACK UNDERFLOW
```

---

# Underflow Condition Formula

```c
top == -1
```

---

# Complete Algorithm for Stack

### Step 1

Initialize TOP = -1

### Step 2

Display Menu

### Step 3

Perform PUSH/POP/PEEK

### Step 4

Repeat Until Exit

### Step 5

Stop

---

# C Program for Stack Implementation

```c
#include<stdio.h>
#include<conio.h>

#define MAX 5

int stack[MAX];
int top=-1;

void push()
{
    int item;

    if(top==MAX-1)
    {
        printf("\nStack Overflow");
        return;
    }

    printf("Enter Element : ");
    scanf("%d",&item);

    top++;

    stack[top]=item;
}

void pop()
{
    if(top==-1)
    {
        printf("\nStack Underflow");
        return;
    }

    printf("\nDeleted Element = %d",
           stack[top]);

    top--;
}

void peek()
{
    if(top==-1)
    {
        printf("\nStack Empty");
        return;
    }

    printf("\nTop Element = %d",
           stack[top]);
}

void display()
{
    int i;

    if(top==-1)
    {
        printf("\nStack Empty");
        return;
    }

    printf("\nStack Elements:\n");

    for(i=top;i>=0;i--)
    {
        printf("%d\n",stack[i]);
    }
}

void main()
{
    int ch;

    clrscr();

    do
    {
        printf("\n1.Push");
        printf("\n2.Pop");
        printf("\n3.Peek");
        printf("\n4.Display");
        printf("\n5.Exit");

        printf("\nEnter Choice : ");
        scanf("%d",&ch);

        switch(ch)
        {
            case 1:
            push();
            break;

            case 2:
            pop();
            break;

            case 3:
            peek();
            break;

            case 4:
            display();
            break;
        }

    }while(ch!=5);

    getch();
}
```

---

# Time Complexity Analysis

## PUSH

Insertion TOP par hoti hai.

```text
Time Complexity = O(1)
```

---

## POP

Deletion TOP se hoti hai.

```text
Time Complexity = O(1)
```

---

## PEEK

Sirf TOP value display hoti hai.

```text
Time Complexity = O(1)
```

---

## DISPLAY

Sab elements traverse karne padte hain.

```text
Time Complexity = O(n)
```

---

# Applications of Stack

## Function Calling

Program ke function calls stack me store hote hain.

---

## Recursion

Recursive calls stack memory ka use karti hain.

---

## Expression Evaluation

Postfix aur Prefix evaluation me stack use hota hai.

---

## Parenthesis Matching

Compiler syntax checking ke liye stack use karta hai.

---

## Undo Operation

MS Word aur Photoshop me Undo feature stack use karta hai.

---

## Browser History

Back button stack concept par based hota hai.

---

## Operating Systems

Memory management aur process execution me stack use hota hai.

---

## Compiler Design

Parsing aur syntax analysis me stack ka use hota hai.

---

# Advantages of Stack

## Fast Operations

Push aur Pop O(1) me perform hote hain.

---

## Easy Implementation

Simple structure hai.

---

## Efficient Memory Usage

LIFO operations efficiently perform hoti hain.

---

## Supports Recursion

Recursive programming possible banata hai.

---

# Limitations of Stack

## Limited Access

Sirf top element access hota hai.

---

## Fixed Size (Array Implementation)

Memory overflow ka risk hota hai.

---

## Not Suitable for Random Access

Middle elements directly access nahi kar sakte.

---

# Real Life Examples of Stack

### Plate Stack

Last plate pehle niklegi.

### Browser Back Button

Recent page pehle return hoga.

### Undo Feature

Latest action pehle undo hota hai.

### Call Stack

Latest function call pehle complete hota hai.

---

# Conclusion

In conclusion, Stack ek important linear data structure hai jo LIFO (Last In First Out) principle par kaam karta hai. Stack me insertion aur deletion operations sirf TOP end par perform kiye jate hain. PUSH, POP aur PEEK stack ke basic operations hain, jabki Overflow aur Underflow exceptional conditions hain. Stack ka implementation arrays ya linked lists ke through kiya ja sakta hai. Recursion, function calling, expression evaluation, compiler design aur operating systems me Stack ka bahut important role hai. Isliye Stack Data Structures ka ek fundamental aur widely used concept mana jata hai.



# Q3. Explain the Role of Stack in Recursion and Function Calling. Discuss Recursion with Suitable Examples and Write a Recursive C Program for Factorial or Fibonacci Series. Explain How Stack Memory is Utilized During Recursion.

## Introduction

Stack Data Structure ka sabse important application **Function Calling** aur **Recursion** me hota hai. Jab bhi koi function call hota hai, us function ki information memory ke ek special area me store ki jati hai jise **Call Stack** kaha jata hai. Isi tarah recursion me jab ek function khud ko repeatedly call karta hai, tab har function call stack me store hoti rehti hai.

Programming languages jaise C, C++, Java aur Python recursion ko implement karne ke liye stack memory ka use karti hain. Agar stack na ho to recursion aur nested function calls ko manage karna bahut difficult ho jayega.

Compiler aur Operating System function execution ko control karne ke liye stack ka use karte hain. Isi wajah se stack ko programming ka backbone bhi kaha jata hai.

---

# What is Recursion?

Recursion ek programming technique hai jisme koi function apne aap ko call karta hai jab tak koi stopping condition (Base Condition) satisfy na ho jaye.

## Definition

"Recursion is a process in which a function calls itself repeatedly until a specified condition is met."

---

# Basic Structure of Recursion

Har recursive function me do important parts hote hain:

## Base Condition

Ye recursion ko stop karti hai.

## Recursive Call

Ye function ko dobara call karti hai.

---

## Example

```c
void demo()
{
    demo();
}
```

Ye infinite recursion hai kyunki isme base condition nahi hai.

---

## Correct Example

```c
void demo(int n)
{
    if(n==0)
        return;

    demo(n-1);
}
```

---

# Characteristics of Recursion

## Self Calling Function

Function khud ko call karta hai.

---

## Base Condition Required

Infinite recursion avoid karne ke liye.

---

## Uses Stack Memory

Har function call stack me store hoti hai.

---

## Simplifies Complex Problems

Tree traversal aur divide-and-conquer algorithms me useful.

---

# Role of Stack in Function Calling

Jab koi function call hota hai to compiler us function ki information stack me push karta hai.

Information me generally:

- Function Parameters
- Local Variables
- Return Address
- Saved Registers

Store kiye jate hain.

Jab function complete ho jata hai to uska stack frame remove kar diya jata hai.

---

# Example of Function Calling

```c
main()
{
    fun1();
}
```

```c
fun1()
{
    fun2();
}
```

Execution:

```text
main()

↓
fun1()

↓
fun2()
```

Stack:

```text
TOP
-----
fun2
-----
fun1
-----
main
-----
```

Function complete hone par reverse order me remove honge.

---

# Function Call Stack

Har function call ke liye stack me ek memory block create hota hai jise **Stack Frame** kehte hain.

Stack Frame store karta hai:

- Function Arguments
- Return Address
- Local Variables

---

# What is a Stack Frame?

Stack Frame ek temporary memory area hota hai jo function execution ke dauran create hota hai.

Example:

```c
void sum(int a,int b)
{
    int c;
}
```

Stack Frame:

```text
c
b
a
Return Address
```

---

# Role of Stack in Recursion

Recursion me function baar-baar call hota hai.

Har recursive call ke liye ek naya stack frame create hota hai.

Jab base condition achieve ho jati hai tab stack frames reverse order me remove hote hain.

Isi process ko **Stack Unwinding** kehte hain.

---

# Example of Recursion

Factorial:

```text
5!

=
5 × 4 × 3 × 2 × 1

=
120
```

Recursive Formula:

```text
n!

=
n × (n-1)!
```

Base Condition:

```text
0! = 1
```

---

# Algorithm: Recursive Factorial

### Step 1

Start

### Step 2

Input Number n

### Step 3

If n = 0 or n = 1

Return 1

### Step 4

Else

Return n × factorial(n-1)

### Step 5

Display Result

### Step 6

Stop

---

# C Program: Recursive Factorial

```c
#include<stdio.h>
#include<conio.h>

long int factorial(int n)
{
    if(n==0 || n==1)
        return 1;

    return n*factorial(n-1);
}

void main()
{
    int n;

    clrscr();

    printf("Enter Number : ");
    scanf("%d",&n);

    printf("Factorial = %ld",
           factorial(n));

    getch();
}
```

---

# Output

```text
Enter Number : 5

Factorial = 120
```

---

# Working of Recursive Factorial

Suppose:

```text
factorial(5)
```

Calls:

```text
factorial(5)

=
5 × factorial(4)

=
5 × 4 × factorial(3)

=
5 × 4 × 3 × factorial(2)

=
5 × 4 × 3 × 2 × factorial(1)

=
5 × 4 × 3 × 2 × 1

=
120
```

---

# Stack Memory During Factorial

Recursive Calls:

```text
factorial(5)

factorial(4)

factorial(3)

factorial(2)

factorial(1)
```

Stack:

```text
TOP
---------
factorial(1)
---------
factorial(2)
---------
factorial(3)
---------
factorial(4)
---------
factorial(5)
---------
```

Base condition achieve hone par stack unwind hota hai.

---

# Fibonacci Series Using Recursion

Fibonacci Sequence:

```text
0 1 1 2 3 5 8 13 ...
```

Formula:

```text
F(n)

=
F(n-1)+F(n-2)
```

---

# Algorithm: Fibonacci

### Step 1

Start

### Step 2

Input n

### Step 3

If n=0 Return 0

### Step 4

If n=1 Return 1

### Step 5

Return Fibonacci(n-1)+Fibonacci(n-2)

### Step 6

Display Result

### Step 7

Stop

---

# C Program: Fibonacci Using Recursion

```c
#include<stdio.h>
#include<conio.h>

int fib(int n)
{
    if(n==0)
        return 0;

    if(n==1)
        return 1;

    return fib(n-1)+fib(n-2);
}

void main()
{
    int i,n;

    clrscr();

    printf("Enter Terms : ");
    scanf("%d",&n);

    for(i=0;i<n;i++)
    {
        printf("%d ",fib(i));
    }

    getch();
}
```

---

# Output

```text
Enter Terms : 7

0 1 1 2 3 5 8
```

---

# How Stack Memory is Utilized During Recursion

Recursion me har function call stack me push hoti hai.

Example:

```c
factorial(3)
```

Calls:

```text
factorial(3)

factorial(2)

factorial(1)
```

Stack:

```text
TOP
---------
factorial(1)
---------
factorial(2)
---------
factorial(3)
---------
```

Return Process:

```text
factorial(1)

↓

factorial(2)

↓

factorial(3)
```

Ye process Stack Unwinding kehlata hai.

---

# Advantages of Recursion

## Simple Code

Complex problems ko short code me solve kar sakte hain.

---

## Easy Tree Traversal

Binary Trees aur Graphs me useful.

---

## Divide and Conquer

Merge Sort aur Quick Sort me use hota hai.

---

## Better Problem Representation

Mathematical problems ke liye suitable.

---

# Limitations of Recursion

## High Memory Usage

Har call stack memory consume karti hai.

---

## Slow Execution

Repeated function calls expensive hoti hain.

---

## Stack Overflow Risk

Excessive recursion stack overflow cause kar sakti hai.

---

## Difficult Debugging

Execution trace karna difficult ho sakta hai.

---

# Applications of Recursion

## Factorial Calculation

## Fibonacci Series

## Tower of Hanoi

## Tree Traversal

## Graph Algorithms

## Directory Navigation

## Compiler Design

---

# Difference Between Recursion and Iteration

| Recursion | Iteration |
|------------|------------|
| Function calls use karta hai | Loops use karta hai |
| Stack memory required | Extra stack memory nahi |
| Easy to write | Efficient execution |
| Slow ho sakta hai | Generally faster |

---

# Real Life Example

Folder structure ko consider karo:

```text
Folder
 ├── Folder1
 │    ├── Folder2
 │    └── Folder3
```

Operating System recursive traversal aur stack ka use karke folders access karta hai.

Isi tarah:

- Compiler
- Web Browsers
- Database Engines

Recursion aur stack ka extensively use karte hain.

---

# Conclusion

In conclusion, Stack Data Structure function calling aur recursion ka fundamental component hai. Jab bhi koi function call hota hai ya recursive function execute hota hai, uski information stack memory me stack frames ke form me store hoti hai. Recursion complex problems ko simple tarike se solve karne ki facility deti hai, lekin ye additional stack memory consume karti hai. Factorial aur Fibonacci recursive algorithms ke common examples hain. Compiler, Operating Systems aur modern software systems recursion aur stack ka extensively use karte hain, isliye ye concepts Data Structures aur Programming ke liye bahut important hain.


# Q4. What are Arithmetic Expressions? Differentiate Between Infix, Prefix, and Postfix Notations. Explain the Conversion of Infix Expressions into Prefix and Postfix Forms Using Stack with Suitable Examples, Algorithms, and C Programs.

## Introduction

Computer programming aur Data Structures me arithmetic expressions ka bahut important role hota hai. Jab hum mathematical operations jaise addition, subtraction, multiplication aur division perform karte hain, tab unhe expressions ke form me represent kiya jata hai.

Hum normally jo expressions likhte hain unhe compiler directly process nahi karta. Compiler aur calculators expressions ko efficiently evaluate karne ke liye Prefix aur Postfix notations ka use karte hain. In notations me parenthesis aur precedence handling easy ho jati hai.

Expression conversion aur evaluation ke liye Stack Data Structure ka use kiya jata hai. Compiler Design, Expression Evaluation, Syntax Analysis aur Calculator Software me Stack based conversion extensively use hoti hai.

---

# What is an Arithmetic Expression?

Arithmetic Expression operands aur operators ka combination hota hai jo mathematical calculation represent karta hai.

## Definition

"An Arithmetic Expression is a combination of operands and operators used to perform mathematical operations."

---

## Operands

Operands wo values hoti hain jin par operation perform hota hai.

Example:

```text
A
B
10
20
```

---

## Operators

Operators operation perform karte hain.

Example:

```text
+
-
*
/
%
```

---

## Example of Arithmetic Expression

```text
A + B
```

```text
(A+B)*C
```

```text
A+B-C
```

---

# Types of Expression Notations

Arithmetic expressions ko teen tariko se represent kiya ja sakta hai:

## Infix Notation

## Prefix Notation

## Postfix Notation

---

# Infix Notation

Infix notation me operator operands ke beech me likha jata hai.

Ye sabse common notation hai jo humans use karte hain.

---

## Example

```text
A + B
```

```text
A * B
```

```text
(A+B)*C
```

---

## Characteristics

- Human readable
- Parenthesis required
- Compiler ke liye directly evaluate karna difficult

---

# Prefix Notation

Prefix notation me operator operands se pehle likha jata hai.

Isse Polish Notation bhi kehte hain.

---

## Example

Infix:

```text
A+B
```

Prefix:

```text
+AB
```

---

## Example 2

Infix:

```text
(A+B)*C
```

Prefix:

```text
*+ABC
```

---

## Characteristics

- Parenthesis ki zarurat nahi
- Fast evaluation
- Compiler friendly

---

# Postfix Notation

Postfix notation me operator operands ke baad likha jata hai.

Isse Reverse Polish Notation bhi kehte hain.

---

## Example

Infix:

```text
A+B
```

Postfix:

```text
AB+
```

---

## Example 2

Infix:

```text
(A+B)*C
```

Postfix:

```text
AB+C*
```

---

## Characteristics

- Parenthesis required nahi
- Easy evaluation
- Stack based processing

---

# Difference Between Infix, Prefix and Postfix

| Infix | Prefix | Postfix |
|---------|---------|---------|
| A+B | +AB | AB+ |
| Operator beech me | Operator pehle | Operator baad me |
| Human readable | Machine friendly | Machine friendly |
| Parenthesis required | Parenthesis not required | Parenthesis not required |
| Evaluation difficult | Evaluation easy | Evaluation easy |

---

# Operator Precedence

Expression conversion me precedence important hoti hai.

| Operator | Priority |
|-----------|-----------|
| ^ | Highest |
| * / % | High |
| + - | Low |

---

# Need of Stack in Expression Conversion

Stack operators ko temporarily store karta hai.

Advantages:

- Precedence maintain karta hai
- Parenthesis handle karta hai
- Expression conversion easy banata hai

---

# Infix to Postfix Conversion

## Example

Infix:

```text
A+B*C
```

Output:

```text
ABC*+
```

---

## Conversion Rules

### Operand

Direct output me add karo.

### (

Stack me push karo.

### )

Opening bracket tak pop karo.

### Operator

Precedence compare karo aur accordingly push/pop karo.

---

# Algorithm: Infix to Postfix

### Step 1

Start

### Step 2

Scan expression left to right

### Step 3

Agar operand mile

Output me add karo

### Step 4

Agar '(' mile

Stack me push karo

### Step 5

Agar ')' mile

'(' tak pop karo

### Step 6

Agar operator mile

Higher precedence operators pop karo

Current operator push karo

### Step 7

Remaining operators pop karo

### Step 8

Stop

---

# Example: Infix to Postfix

Expression:

```text
A+B*C
```

Process:

```text
A

AB

ABC

ABC*

ABC*+
```

Result:

```text
ABC*+
```

---

# C Program: Infix to Postfix

```c
#include<stdio.h>
#include<conio.h>
#include<string.h>

char stack[20];
int top=-1;

void push(char x)
{
    stack[++top]=x;
}

char pop()
{
    return stack[top--];
}

int priority(char x)
{
    if(x=='(')
        return 0;

    if(x=='+'||x=='-')
        return 1;

    if(x=='*'||x=='/')
        return 2;

    return 3;
}

void main()
{
    char exp[20],*e,x;

    clrscr();

    printf("Enter Expression : ");
    scanf("%s",exp);

    e=exp;

    while(*e!='\0')
    {
        if(isalnum(*e))
            printf("%c",*e);

        else if(*e=='(')
            push(*e);

        else if(*e==')')
        {
            while((x=pop())!='(')
                printf("%c",x);
        }

        else
        {
            while(priority(stack[top])>=priority(*e))
                printf("%c",pop());

            push(*e);
        }

        e++;
    }

    while(top!=-1)
        printf("%c",pop());

    getch();
}
```

---

# Infix to Prefix Conversion

Prefix conversion ke liye generally:

### Step 1

Expression reverse karo

### Step 2

Brackets interchange karo

### Step 3

Infix → Postfix conversion karo

### Step 4

Result reverse karo

---

# Example

Infix:

```text
(A+B)*C
```

Reverse:

```text
C*(B+A)
```

Postfix:

```text
CBA+*
```

Reverse:

```text
*+ABC
```

Result:

```text
*+ABC
```

---

# Algorithm: Infix to Prefix

### Step 1

Reverse expression

### Step 2

Interchange brackets

### Step 3

Convert into Postfix

### Step 4

Reverse result

### Step 5

Display Prefix

### Step 6

Stop

---

# Example of Prefix Conversion

Infix:

```text
A+B*C
```

Prefix:

```text
+A*BC
```

---

# Applications of Expression Conversion

## Compiler Design

Compiler expressions ko postfix me convert karta hai.

---

## Calculator Software

Fast expression evaluation.

---

## Programming Languages

Expression parsing.

---

## Artificial Intelligence

Symbolic computation.

---

## Database Query Processing

Expression optimization.

---

## Mathematical Software

MATLAB, Mathematica etc.

---

# Advantages of Prefix and Postfix

## No Parenthesis Required

---

## Fast Evaluation

---

## Easy Stack Implementation

---

## Less Ambiguity

---

## Compiler Friendly

---

# Limitations

## Human Readability Kam Hoti Hai

---

## Conversion Required Hoti Hai

---

## Large Expressions Difficult Ho Sakte Hain

---

# Real Life Example

Scientific calculators aur programming language compilers expressions ko internally Prefix ya Postfix notation me convert karke process karte hain.

Example:

```text
(5+3)*2
```

Human:

```text
Infix
```

Machine:

```text
Postfix

53+2*
```

---

# Conclusion

In conclusion, Arithmetic Expressions programming aur mathematical computation ka important part hain. Expressions ko Infix, Prefix aur Postfix notations me represent kiya ja sakta hai. Infix notation human-friendly hoti hai, jabki Prefix aur Postfix machine-friendly notations hain. Stack Data Structure expression conversion aur evaluation me central role play karta hai. Compiler Design, Calculator Software aur Expression Processing systems me Infix to Prefix aur Infix to Postfix conversion extensively use hoti hai. Isliye expression conversion Stack ke sabse important applications me se ek mana jata hai.


# Q5. Explain Expression Evaluation Using Stack. Discuss the Algorithm and C Program for Postfix Expression Evaluation. Also Explain Parenthesis Matching Using Stack with Suitable Examples and Applications.

## Introduction

Stack Data Structure ka sabse important application **Expression Evaluation** aur **Parenthesis Matching** me hota hai. Compiler Design, Calculator Software, Programming Languages aur Syntax Checking Systems me Stack ka extensive use kiya jata hai.

Arithmetic expressions ko directly evaluate karna kabhi-kabhi difficult hota hai, especially jab expression me multiple operators aur precedence involved ho. Is problem ko solve karne ke liye expressions ko Prefix ya Postfix form me convert kiya jata hai. Postfix notation ka evaluation Stack ke through bahut efficiently kiya ja sakta hai.

Isi tarah programming languages me parentheses, braces aur brackets ka proper matching bahut important hota hai. Agar matching correct na ho to syntax errors generate ho jate hain. Parenthesis Matching problem ko bhi Stack ke through efficiently solve kiya jata hai.

Isliye Expression Evaluation aur Parenthesis Matching Stack ke sabse important practical applications mane jate hain.

---

# Expression Evaluation Using Stack

Expression Evaluation ka matlab arithmetic expression ka final result calculate karna hota hai.

Example:

```text
5 + 3
```

Result:

```text
8
```

Computer systems me expression evaluation ke liye Stack ka use kiya jata hai.

---

# Why Postfix Expression?

Infix expressions me precedence aur parentheses ko handle karna padta hai.

Example:

```text
A+B*C
```

Compiler ko pehle multiplication aur fir addition perform karna hota hai.

Postfix notation me precedence automatically handle ho jati hai.

Example:

```text
ABC*+
```

Isliye Postfix Expression Evaluation easy hota hai.

---

# What is Postfix Expression?

Postfix notation me operator operands ke baad likha jata hai.

Example:

Infix:

```text
A+B
```

Postfix:

```text
AB+
```

---

## Example

Infix:

```text
(5+3)*2
```

Postfix:

```text
53+2*
```

---

# Rules of Postfix Evaluation

### Operand

Stack me PUSH karo.

### Operator

Top ke do operands POP karo.

Operation perform karo.

Result ko dobara PUSH karo.

### End

Final value Stack ke TOP par hogi.

---

# Example of Postfix Evaluation

Expression:

```text
53+2*
```

---

## Step 1

Read:

```text
5
```

Push

Stack:

```text
5
```

---

## Step 2

Read:

```text
3
```

Push

Stack:

```text
3
5
```

---

## Step 3

Read:

```text
+
```

Pop:

```text
3
5
```

Calculate:

```text
5+3=8
```

Push:

```text
8
```

Stack:

```text
8
```

---

## Step 4

Read:

```text
2
```

Push

Stack:

```text
2
8
```

---

## Step 5

Read:

```text
*
```

Pop:

```text
2
8
```

Calculate:

```text
8*2=16
```

Push:

```text
16
```

Stack:

```text
16
```

Final Answer:

```text
16
```

---

# Algorithm: Postfix Expression Evaluation

### Step 1

Start

### Step 2

Scan Postfix Expression Left to Right

### Step 3

If Operand

Push into Stack

### Step 4

If Operator

Pop Two Operands

Perform Operation

Push Result

### Step 5

Repeat Until End

### Step 6

Display Top Element

### Step 7

Stop

---

# C Program: Postfix Expression Evaluation

```c
#include<stdio.h>
#include<conio.h>
#include<ctype.h>

int stack[20];
int top=-1;

void push(int x)
{
    stack[++top]=x;
}

int pop()
{
    return stack[top--];
}

void main()
{
    char exp[20];
    int i,a,b,result;

    clrscr();

    printf("Enter Postfix Expression : ");
    scanf("%s",exp);

    for(i=0;exp[i]!='\0';i++)
    {
        if(isdigit(exp[i]))
        {
            push(exp[i]-48);
        }
        else
        {
            b=pop();
            a=pop();

            switch(exp[i])
            {
                case '+':
                push(a+b);
                break;

                case '-':
                push(a-b);
                break;

                case '*':
                push(a*b);
                break;

                case '/':
                push(a/b);
                break;
            }
        }
    }

    result=pop();

    printf("\nResult = %d",result);

    getch();
}
```

---

# Output

Input:

```text
53+2*
```

Output:

```text
Result = 16
```

---

# Time Complexity of Postfix Evaluation

Har symbol ko sirf ek baar process kiya jata hai.

```text
Time Complexity = O(n)
```

---

# Space Complexity

Stack me maximum n elements store ho sakte hain.

```text
Space Complexity = O(n)
```

---

# Parenthesis Matching Using Stack

Programming languages me parentheses ka correct matching bahut important hota hai.

Example:

Correct:

```text
(A+B)
```

Incorrect:

```text
(A+B
```

Compiler syntax checking ke liye Stack ka use karta hai.

---

# What is Parenthesis Matching?

Parenthesis Matching ek process hai jisme opening aur closing brackets ki correctness check ki jati hai.

Brackets:

```text
()
{}
[]
```

---

# Working Principle

### Opening Bracket

Stack me PUSH karo.

### Closing Bracket

Stack se matching opening bracket POP karo.

### End

Agar Stack Empty ho to expression balanced hai.

---

# Example 1

Expression:

```text
(A+B)
```

---

Read:

```text
(
```

Push

Stack:

```text
(
```

---

Read:

```text
)
```

Pop

Stack:

```text
Empty
```

Result:

```text
Balanced
```

---

# Example 2

Expression:

```text
((A+B)
```

Process:

```text
(
(
)
```

Stack me ek bracket bach jayega.

Result:

```text
Unbalanced
```

---

# Algorithm: Parenthesis Matching

### Step 1

Start

### Step 2

Scan Expression

### Step 3

If Opening Bracket

Push

### Step 4

If Closing Bracket

Check Stack

Pop Matching Bracket

### Step 5

Repeat

### Step 6

If Stack Empty

Balanced

Else

Unbalanced

### Step 7

Stop

---

# C Program: Parenthesis Matching

```c
#include<stdio.h>
#include<conio.h>

char stack[20];
int top=-1;

void push(char ch)
{
    stack[++top]=ch;
}

char pop()
{
    return stack[top--];
}

void main()
{
    char exp[50];
    int i;

    clrscr();

    printf("Enter Expression : ");
    scanf("%s",exp);

    for(i=0;exp[i]!='\0';i++)
    {
        if(exp[i]=='(')
        {
            push(exp[i]);
        }

        else if(exp[i]==')')
        {
            if(top==-1)
            {
                printf("\nUnbalanced");
                getch();
                return;
            }

            pop();
        }
    }

    if(top==-1)
        printf("\nBalanced Expression");

    else
        printf("\nUnbalanced Expression");

    getch();
}
```

---

# Output

Input:

```text
((A+B)*(C-D))
```

Output:

```text
Balanced Expression
```

---

# Time Complexity of Parenthesis Matching

Expression ke har character ko ek baar scan kiya jata hai.

```text
Time Complexity = O(n)
```

---

# Space Complexity

Worst case me saare opening brackets stack me store ho sakte hain.

```text
Space Complexity = O(n)
```

---

# Applications of Postfix Evaluation

## Compiler Design

Expressions evaluate karne ke liye.

---

## Calculator Software

Scientific calculators internally postfix use karte hain.

---

## Programming Languages

Expression parsing.

---

## Database Query Processing

Query optimization.

---

## Artificial Intelligence

Symbolic computation.

---

# Applications of Parenthesis Matching

## Compiler Design

Syntax checking.

---

## Code Editors

Bracket highlighting.

---

## Web Development

HTML/XML tag validation.

---

## Mathematical Software

Formula validation.

---

## Database Systems

Query validation.

---

# Advantages of Stack in Expression Processing

## Fast Evaluation

---

## Easy Implementation

---

## Less Memory Overhead

---

## Efficient Syntax Checking

---

## Compiler Friendly

---

# Limitations

## Extra Memory Required

---

## Large Expressions May Consume More Stack Space

---

## Stack Overflow Possible in Very Large Inputs

---

# Real Life Example

Jab programmer C ya C++ code likhta hai:

```c
if((a+b)>c)
```

Compiler pehle brackets check karta hai.

Agar bracket mismatch ho:

```c
if((a+b>c)
```

Compiler error generate karta hai.

Ye checking Stack ke through perform hoti hai.

Isi tarah calculator:

```text
(5+3)*2
```

ko internally postfix form me convert karke evaluate karta hai.

---

# Conclusion

In conclusion, Stack Data Structure expression evaluation aur parenthesis matching ke liye ek powerful tool hai. Postfix Expression Evaluation me operands stack me push kiye jate hain aur operators ke aane par calculations perform ki jati hain. Parenthesis Matching me Stack opening brackets ko store karta hai aur closing brackets ke saath matching verify karta hai. Dono algorithms O(n) time complexity me efficiently kaam karte hain. Compiler Design, Programming Languages, Calculator Software aur Syntax Analysis systems me Stack ka ye application bahut important mana jata hai.



