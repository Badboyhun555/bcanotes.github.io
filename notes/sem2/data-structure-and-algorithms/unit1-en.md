# DATA STRUCTURES AND ALGORITHMS – UNIT 1

# Elementary Data Structures and STACKS in C

---

# Introduction to Data Structures

A Data Structure is a way of organizing and storing data in computer memory so that it can be used efficiently.

Data structures help:
- Store data properly
- Access data quickly
- Process data efficiently
- Reduce time complexity

Without proper data structures:
- Programs become slow
- Memory usage increases
- Data handling becomes difficult

---

# Real Life Example of Data Structure

Suppose a school stores:
- Student records
- Attendance
- Marks

If records are randomly placed:
- Searching becomes difficult

But if records are properly organized:
- Data can be accessed quickly

Similarly, data structures organize computer data efficiently.

---

# Types of Data Structures

Mainly two types:

1. Linear Data Structures
2. Non-Linear Data Structures

---

# Linear Data Structures

Data elements are arranged sequentially.

Examples:
- Arrays
- Stack
- Queue
- Linked List

---

# Non-Linear Data Structures

Data elements are not arranged sequentially.

Examples:
- Tree
- Graph

---

# ARRAY

# Introduction to Arrays

An array is a collection of similar data elements stored at contiguous memory locations.

All elements in array:
- Have same data type
- Share same name
- Are accessed using index

---

# Real Life Example of Array

Suppose a classroom has:
- 50 students
- Roll numbers stored sequentially

Instead of creating:
```c
student1
student2
student3
```

we use array:
```c
student[50]
```

---

# Characteristics of Arrays

- Fixed size
- Same data type
- Continuous memory allocation
- Fast access using index

---

# Syntax of Array

```c
datatype arrayname[size];
```

---

# Example

```c
int marks[5];
```

---

# Memory Representation of Array

```md
![Array Representation](images/array-representation.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/5/5a/Array.png

---

# Example Program of Array in C

```c
#include<stdio.h>
#include<conio.h>

void main()
{
    int arr[5];
    int i;

    clrscr();

    printf("Enter 5 Elements:\n");

    for(i=0;i<5;i++)
    {
        scanf("%d",&arr[i]);
    }

    printf("\nArray Elements are:\n");

    for(i=0;i<5;i++)
    {
        printf("%d ",arr[i]);
    }

    getch();
}
```

---

# Output

```text
Enter 5 Elements:
10
20
30
40
50

Array Elements are:
10 20 30 40 50
```

---

# Advantages of Arrays

- Easy access
- Fast searching
- Efficient memory usage

---

# Disadvantages of Arrays

- Fixed size
- Insertion/deletion difficult
- Memory wastage possible

---

# STACK

# Introduction to Stack

A Stack is a linear data structure that follows:
```text
LIFO (Last In First Out)
```

Meaning:
- Last inserted element removes first.

---

# Real Life Example of Stack

Examples:
- Stack of plates
- Books piled on table
- Browser history

Suppose plates are stacked:
- Last plate placed is removed first.

Similarly stack works in computer memory.

---

# Memory Representation of Stack

```md
![Stack Representation](images/stack-representation.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png

---

# Basic Operations on Stack

Main operations:
1. PUSH
2. POP
3. PEEK
4. DISPLAY

---

# PUSH Operation

Push means inserting element into stack.

---

# POP Operation

Pop means removing top element from stack.

---

# PEEK Operation

Peek returns top element without deleting it.

---

# STACK OVERFLOW

Occurs when:
- Stack becomes full
- Further insertion attempted

---

# STACK UNDERFLOW

Occurs when:
- Stack becomes empty
- Deletion attempted

---

# Array Implementation of Stack

Stack can be implemented using:
- Arrays
- Linked Lists

Here we use arrays.

---

# Algorithm for PUSH

```text
1. Check if stack is full
2. Increment TOP
3. Insert element
```

---

# Algorithm for POP

```text
1. Check if stack is empty
2. Return top element
3. Decrement TOP
```

---

# C Program for Stack Operations

```c
#include<stdio.h>
#include<conio.h>

#define SIZE 5

int stack[SIZE];
int top=-1;

void push()
{
    int value;

    if(top==SIZE-1)
    {
        printf("\nStack Overflow");
    }
    else
    {
        printf("\nEnter Value: ");
        scanf("%d",&value);

        top++;

        stack[top]=value;

        printf("\n%d Inserted",value);
    }
}

void pop()
{
    if(top==-1)
    {
        printf("\nStack Underflow");
    }
    else
    {
        printf("\nDeleted Element: %d",stack[top]);

        top--;
    }
}

void peek()
{
    if(top==-1)
    {
        printf("\nStack Empty");
    }
    else
    {
        printf("\nTop Element: %d",stack[top]);
    }
}

void display()
{
    int i;

    if(top==-1)
    {
        printf("\nStack Empty");
    }
    else
    {
        printf("\nStack Elements:\n");

        for(i=top;i>=0;i--)
        {
            printf("%d\n",stack[i]);
        }
    }
}

void main()
{
    int choice;

    clrscr();

    while(1)
    {
        printf("\n1.Push");
        printf("\n2.Pop");
        printf("\n3.Peek");
        printf("\n4.Display");
        printf("\n5.Exit");

        printf("\nEnter Choice: ");
        scanf("%d",&choice);

        switch(choice)
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

            case 5:
                exit(0);

            default:
                printf("\nInvalid Choice");
        }
    }

    getch();
}
```

---

# Applications of Stack

Stacks are used in:
- Function calls
- Expression evaluation
- Browser history
- Undo operation
- Parenthesis matching
- Recursion

---

# RECURSION

# Introduction to Recursion

Recursion means a function calling itself repeatedly.

A recursive function solves problem by dividing it into smaller subproblems.

---

# Real Life Example

Suppose standing between two mirrors:
- Infinite reflections appear

Similarly recursive function calls itself repeatedly.

---

# Components of Recursion

1. Base Condition
2. Recursive Call

---

# Example of Recursion

Factorial:
```text
5! = 5 × 4 × 3 × 2 × 1
```

---

# Recursive Function for Factorial

```c
#include<stdio.h>
#include<conio.h>

int fact(int n)
{
    if(n==1)
    {
        return 1;
    }

    return n*fact(n-1);
}

void main()
{
    int n;

    clrscr();

    printf("Enter Number: ");
    scanf("%d",&n);

    printf("Factorial = %d",fact(n));

    getch();
}
```

---

# Output

```text
Enter Number: 5
Factorial = 120
```

---

# Advantages of Recursion

- Simple code
- Easy problem solving

---

# Disadvantages of Recursion

- More memory usage
- Slower execution

---

# Arithmetic Expressions

Expressions are combinations of:
- Operands
- Operators

Example:
```text
A+B
```

---

# Types of Expressions

1. Infix
2. Prefix
3. Postfix

---

# INFIX EXPRESSION

Operator between operands.

Example:
```text
A+B
```

---

# PREFIX EXPRESSION

Operator before operands.

Example:
```text
+AB
```

---

# POSTFIX EXPRESSION

Operator after operands.

Example:
```text
AB+
```

---

# Difference Between Infix, Prefix and Postfix

| Type | Example |
|---|---|
| Infix | A+B |
| Prefix | +AB |
| Postfix | AB+ |

---

# Evaluation of Postfix Expression Using Stack

Stack is used because:
- Operators require previous operands

---

# Algorithm

```text
1. Scan expression left to right
2. Push operands into stack
3. When operator found:
   Pop two operands
   Perform operation
   Push result
4. Final result remains in stack
```

---

# Example

Postfix:
```text
23+5*
```

Step-by-step:
```text
2 3 + → 5
5 5 * → 25
```

Result:
```text
25
```

---

# Memory Representation

```md
![Postfix Evaluation](images/postfix-evaluation.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/5/5c/Postfix-stack.png

---

# Program for Postfix Evaluation

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

    printf("Enter Postfix Expression: ");
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

    printf("Result = %d",result);

    getch();
}
```

---

# Parenthesis Matching Using Stack

Stack checks whether parentheses are balanced.

---

# Example of Balanced Parentheses

```text
(a+b)
```

---

# Example of Unbalanced Parentheses

```text
(a+b
```

---

# Algorithm

```text
1. Scan expression
2. Push opening bracket
3. Pop for closing bracket
4. If stack empty at end → Balanced
```

---

# Real Life Example

Parentheses behave like:
- Opening and closing doors

Every opening bracket must have matching closing bracket.

---

# Program for Parenthesis Matching

```c
#include<stdio.h>
#include<conio.h>

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

void main()
{
    char exp[20];
    int i;

    clrscr();

    printf("Enter Expression: ");
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
                printf("Unbalanced");
                getch();
                return;
            }

            pop();
        }
    }

    if(top==-1)
    {
        printf("Balanced Parentheses");
    }
    else
    {
        printf("Unbalanced Parentheses");
    }

    getch();
}
```

---

# Output

```text
Enter Expression: (a+b)

Balanced Parentheses
```

---

# Advantages of Stack

- Simple implementation
- Efficient memory usage
- Useful in recursion and parsing

---

# Disadvantages of Stack

- Limited size
- Random access not possible

---

# Important Points to Remember

- Array stores similar elements.
- Stack follows LIFO principle.
- PUSH inserts element.
- POP removes element.
- Stack Overflow occurs when full.
- Stack Underflow occurs when empty.
- Recursion means function calling itself.
- Prefix operator appears before operands.
- Postfix operator appears after operands.
- Stack is used for postfix evaluation.
- Parenthesis matching checks expression validity.

---

# Conclusion

Arrays and stacks are important linear data structures used in computer science and software development. Arrays help store data sequentially, while stacks provide efficient LIFO-based processing.

Stacks are widely used in recursion, compiler design, arithmetic expression evaluation, browser history, undo operations, and parenthesis matching. Understanding these concepts is essential because they form the foundation of advanced data structures and algorithms.
