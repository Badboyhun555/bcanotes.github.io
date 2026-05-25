# UNIT 1 – Introduction to Object Oriented Programming and C++

# 1. Basic Concept of Object Oriented Programming (OOP)

Object Oriented Programming (OOP) is a programming method in which programs are created using objects and classes. Earlier programming languages mainly used Procedural Programming, where the focus was only on functions and step-by-step instructions. But in OOP, the focus shifts from functions to objects that represent real-world entities.

In real life, everything around us can be considered an object.

Examples:
- Car
- Mobile phone
- Student
- Teacher
- ATM machine
- Bank account

Every object has:
1. Properties (Data)
2. Behaviors (Functions)

Example of a Car:

## Properties
- Color
- Brand
- Speed
- Price

## Behaviors
- Start()
- Stop()
- Accelerate()
- Brake()

Similarly, in programming, we create software using objects.

Suppose we are creating a school management system.

Objects can be:
- Student
- Teacher
- Principal
- Classroom

Each object contains its own data and functions.

---

# Why OOP Was Introduced

In procedural programming, programs become difficult to manage when the software size increases.

Problems in Procedural Programming:
- Large code becomes difficult to understand
- Data security is weak
- Code reuse is difficult
- Maintenance becomes hard
- Updating software takes more time

To solve these problems, Object Oriented Programming was introduced.

OOP provides:
- Better security
- Easy maintenance
- Code reusability
- Modular programming
- Real-world representation

Modern software like games, banking systems, hospital management systems, and social media applications use OOP concepts.

---

# Main Features of OOP

## 1. Class

A class is a blueprint or design of an object.

Example:

A building map is not the real building, but it defines how the building will look.

Similarly, a class defines:
- What data objects will store
- What functions objects can perform

### Syntax of Class

```cpp
class ClassName
{
    data members;

    member functions;
};
```

### Example Program

```cpp
#include<iostream.h>
#include<conio.h>
#include<string.h>

class Car
{
    public:

    char company[20];
    int speed;

    void display()
    {
        cout<<"Company: "<<company;
        cout<<"\nSpeed: "<<speed;
    }
};

void main()
{
    Car c;

    strcpy(c.company,"Toyota");
    c.speed=180;

    c.display();

    getch();
}
```

### Explanation

- `Car` is the class.
- `company` and `speed` are data members.
- `display()` is a member function.
- `c` is the object.

---

# 2. Object

An object is an instance of a class.

When a class is created, no memory is allocated. Memory is allocated only when objects are created.

Example:

If `Student` is a class, then:
- Rahul
- Aman
- Priya

can be different objects of that class.

### Syntax

```cpp
ClassName objectName;
```

Example:

```cpp
Student s1;
```

### Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
    public:

    int roll;
    char name[20];

    void input()
    {
        cout<<"Enter Roll Number: ";
        cin>>roll;

        cout<<"Enter Name: ";
        cin>>name;
    }

    void display()
    {
        cout<<"\nRoll Number: "<<roll;
        cout<<"\nName: "<<name;
    }
};

void main()
{
    Student s1;

    s1.input();
    s1.display();

    getch();
}
```

### Real Life Example

Think of class `Bike`.

Objects can be:
- Hero Bike
- Honda Bike
- Yamaha Bike

All objects have same structure but different values.

---

# 3. Inheritance

Inheritance is an important feature of OOP where one class acquires properties and functions of another class.

The existing class is called:
- Base Class
- Parent Class

The new class is called:
- Derived Class
- Child Class

Inheritance helps in code reuse.

### Real Life Example

Suppose there is a class called `Animal`.

Functions:
- eat()
- sleep()

A class `Dog` can inherit these properties.

Dog can also have:
- bark()

### Syntax

```cpp
class DerivedClass : public BaseClass
{
};
```

### Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Animal
{
    public:

    void eat()
    {
        cout<<"Animal can eat\n";
    }
};

class Dog : public Animal
{
    public:

    void bark()
    {
        cout<<"Dog can bark";
    }
};

void main()
{
    Dog d;

    d.eat();
    d.bark();

    getch();
}
```

### Advantages of Inheritance

- Code reuse
- Reduces redundancy
- Faster development
- Better organization

---

# 4. Encapsulation

Encapsulation means binding data and functions together into one unit.

A class is an example of encapsulation.

Encapsulation also provides data hiding.

### Real Life Example

ATM machine hides internal processing from users.

Users only see:
- Withdraw
- Deposit
- Balance Check

### Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Employee
{
    private:

    int salary;

    public:

    void setSalary(int s)
    {
        salary=s;
    }

    void getSalary()
    {
        cout<<"Salary is: "<<salary;
    }
};

void main()
{
    Employee e;

    e.setSalary(30000);
    e.getSalary();

    getch();
}
```

### Explanation

- `salary` is private.
- It cannot be accessed directly outside class.
- `setSalary()` changes value.
- `getSalary()` displays value.

### Advantages of Encapsulation

- Better security
- Controlled access
- Easy maintenance
- Improves reliability

---

# 5. Polymorphism

Polymorphism means “many forms”.

The same function can behave differently in different situations.

Example:
- `+` operator adds integers
- `+` operator joins strings

This is polymorphism.

---

# Types of Polymorphism

## 1. Compile Time Polymorphism

Achieved using:
- Function overloading
- Operator overloading

## 2. Run Time Polymorphism

Achieved using:
- Virtual functions

---

# Function Overloading Example

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
    public:

    void add(int a,int b)
    {
        cout<<"Sum: "<<a+b;
    }

    void add(float a,float b)
    {
        cout<<"\nSum: "<<a+b;
    }
};

void main()
{
    Demo d;

    d.add(10,20);
    d.add(5.5,2.5);

    getch();
}
```

### Explanation

Same function `add()` behaves differently depending on arguments.

---

# 6. Structure of C++ Program

A C++ program follows a proper structure.

### Example Structure

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
    public:

    void show()
    {
        cout<<"Hello";
    }
};

void main()
{
    Demo d;

    d.show();

    getch();
}
```

---

# Components of C++ Program

## 1. Header Files

```cpp
#include<iostream.h>
#include<conio.h>
```

These provide library functions.

---

## 2. Class Declaration

Defines structure of object.

---

## 3. Main Function

Program execution starts from `main()`.

---

## 4. Statements

Actual instructions written inside program.

---

## 5. getch()

Used in Turbo C++ to stop screen.

---

# 7. Tokens and Identifiers

## Tokens

Smallest units in a C++ program are called tokens.

### Types of Tokens

- Keywords
- Identifiers
- Constants
- Operators
- Special symbols

---

## Keywords

Reserved words with predefined meaning.

Examples:
- int
- float
- class
- public

---

## Identifiers

Names given by programmer.

Examples:
- total
- marks
- studentName

---

## Rules for Identifiers

- Cannot start with number
- No spaces allowed
- Keywords cannot be used
- Can contain underscore

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int marks=90;

    cout<<"Marks are: "<<marks;

    getch();
}
```

Here:
- `int` = keyword
- `marks` = identifier
- `90` = constant
- `=` = operator

---

# 8. Data Types in C++

Data types define what type of value a variable can store.

## Basic Data Types

| Data Type | Meaning |
|---|---|
| int | Integer values |
| float | Decimal values |
| char | Character values |
| double | Large decimal values |
| void | No value |

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int age=18;
    float marks=88.5;
    char grade='A';

    cout<<"Age: "<<age;
    cout<<"\nMarks: "<<marks;
    cout<<"\nGrade: "<<grade;

    getch();
}
```

---

# 9. Operators in C++

Operators are symbols used to perform operations.

## Arithmetic Operators

| Operator | Meaning |
|---|---|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus |

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=10,b=5;

    cout<<"Addition: "<<a+b;
    cout<<"\nSubtraction: "<<a-b;

    getch();
}
```

---

# 10. Type Conversion and Type Casting

## Type Conversion

Automatic conversion of one data type into another.

Example:

```cpp
int a=10;
float b;

b=a;
```

---

## Type Casting

Manual conversion by programmer.

### Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=10,b=3;

    float c;

    c=(float)a/b;

    cout<<"Result: "<<c;

    getch();
}
```

---

# 11. Console Input and Output – cin and cout

C++ uses `cin` and `cout` for input and output.

## cout

Used to display output.

## cin

Used to take input.

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int age;

    cout<<"Enter Age: ";
    cin>>age;

    cout<<"Your age is: "<<age;

    getch();
}
```

---

# 12. Control Statements

Control statements control flow of execution.

Types:
- if statement
- loops
- break
- continue
- goto

---

# 13. if Statement

Used for decision making.

### Syntax

```cpp
if(condition)
{
    statements;
}
```

### Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int age;

    cout<<"Enter Age: ";
    cin>>age;

    if(age>=18)
    {
        cout<<"Eligible for voting";
    }

    getch();
}
```

---

# 14. Loops

Loops repeat statements multiple times.

---

# for Loop

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int i;

    for(i=1;i<=5;i++)
    {
        cout<<i<<" ";
    }

    getch();
}
```

---

# while Loop

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int i=1;

    while(i<=5)
    {
        cout<<i<<" ";
        i++;
    }

    getch();
}
```

---

# do while Loop

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int i=1;

    do
    {
        cout<<i<<" ";
        i++;
    }
    while(i<=5);

    getch();
}
```

---

# 15. break Statement

Used to terminate loop immediately.

### Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int i;

    for(i=1;i<=10;i++)
    {
        if(i==5)
        {
            break;
        }

        cout<<i<<" ";
    }

    getch();
}
```

Output:
```text
1 2 3 4
```

---

# 16. continue Statement

Used to skip current iteration and move to next iteration.

### Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int i;

    for(i=1;i<=5;i++)
    {
        if(i==3)
        {
            continue;
        }

        cout<<i<<" ";
    }

    getch();
}
```

Output:
```text
1 2 4 5
```

---

# 17. goto Statement

Used to transfer control to another part of program.

### Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int i=1;

start:

    cout<<i<<" ";
    i++;

    if(i<=5)
    {
        goto start;
    }

    getch();
}
```

---

# Disadvantages of goto

- Makes program confusing
- Difficult debugging
- Reduces readability

Modern programming avoids excessive use of `goto`.

---

# Conclusion

Unit 1 introduces the foundation of Object Oriented Programming and C++. It explains concepts like class, object, inheritance, encapsulation, and polymorphism. These concepts help programmers build real-world applications efficiently.

The unit also covers:
- Structure of C++ program
- Tokens and identifiers
- Data types
- Operators
- Type conversion
- cin and cout
- Control statements

Understanding these concepts is extremely important because they form the base for advanced C++ topics.
