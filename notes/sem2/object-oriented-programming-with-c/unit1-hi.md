# OBJECT ORIENTED PROGRAMMING USING C++

# UNIT – 1

# Introduction to Object Oriented Programming (OOP)

Programming duniya mein mainly do types ke programming approaches famous hain:

1. Procedural Programming
2. Object Oriented Programming (OOP)

Purane time mein mostly procedural programming use hoti thi jaise:
- C Language

Lekin jaise-jaise software bade hone lage:
- Security problem
- Code management problem
- Reusability problem
- Complexity problem

ye sab problems aane lagi.

In sab problems ko solve karne ke liye:
```text
Object Oriented Programming
```
introduce hui.

---

# Real Life Example of OOP

Suppose ek car hai.

Car ke:
- color
- speed
- engine
- brake

ye sab uski properties hain.

Aur:
- start()
- stop()
- accelerate()

ye uske functions hain.

OOP mein bhi hum real world objects ko programming ke andar represent karte hain.

---

# Features of OOP

Main features:
1. Class
2. Object
3. Encapsulation
4. Inheritance
5. Polymorphism
6. Abstraction

---

# Concept of Class

Class ek blueprint ya template hoti hai.

Class:
- variables define karti hai
- functions define karti hai

Lekin class khud memory occupy nahi karti.

---

# Real Life Example of Class

Suppose:
```text
Car
```

ek class hai.

Uske andar:
- color
- model
- speed

ye sab define honge.

Lekin actual car tab banegi jab object create hoga.

---

# Syntax of Class

```cpp
class ClassName
{
    data members;

    member functions;
};
```

---

# Example Program of Class

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
    int roll;
    char name[20];

    public:

    void getdata()
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

    clrscr();

    s1.getdata();

    s1.display();

    getch();
}
```

---

# Output

```text
Enter Roll Number: 101
Enter Name: Rahul

Roll Number: 101
Name: Rahul
```

---

# Concept of Object

Object class ka instance hota hai.

Simple words mein:
```text
Object = Real Entity
```

Class sirf design hoti hai.
Object actual memory occupy karta hai.

---

# Real Life Example

Class:
```text
Mobile
```

Objects:
```text
Samsung
iPhone
Realme
```

---

# Object Declaration

```cpp
Student s1;
```

Yahan:
- Student → class
- s1 → object

---

# Advantages of Object

- Real world representation
- Data security
- Code reusability

---

# Inheritance

# Introduction

Inheritance ka matlab:
```text
Ek class dusri class ki properties use kare
```

---

# Real Life Example

Suppose:
- Father ki property beta inherit karta hai.

Waise hi programming mein:
- child class parent class ki properties inherit karti hai.

---

# Types of Inheritance

1. Single Inheritance
2. Multiple Inheritance
3. Multilevel Inheritance
4. Hierarchical Inheritance

---

# Example Program of Inheritance

```cpp
#include<iostream.h>
#include<conio.h>

class Father
{
    public:

    void house()
    {
        cout<<"Father has House";
    }
};

class Son : public Father
{
};

void main()
{
    Son s;

    clrscr();

    s.house();

    getch();
}
```

---

# Output

```text
Father has House
```

---

# Advantages of Inheritance

- Code reuse
- Easy maintenance
- Less coding

---

# Encapsulation

# Introduction

Encapsulation ka matlab:
```text
Data aur functions ko ek single unit mein wrap karna
```

Ye security provide karta hai.

---

# Real Life Example

Medicine capsule ke andar:
- alag-alag chemicals hidden rehte hain.

User directly access nahi kar sakta.

Waise hi:
- data hidden rehta hai.

---

# Example

```cpp
class Student
{
    int marks;

    public:

    void setMarks(int m)
    {
        marks=m;
    }

    void show()
    {
        cout<<marks;
    }
};
```

Yahan:
- marks hidden hai
- directly access nahi ho sakta

---

# Advantages of Encapsulation

- Data security
- Controlled access
- Better maintenance

---

# Polymorphism

# Introduction

Poly means:
```text
Many
```

Morphism means:
```text
Forms
```

Polymorphism ka matlab:
```text
One thing behaving in multiple ways
```

---

# Real Life Example

Suppose:
```text
Person
```

Ek hi person:
- Teacher bhi ho sakta hai
- Father bhi
- Friend bhi

Situation ke according behavior change hota hai.

---

# Types of Polymorphism

1. Compile Time Polymorphism
2. Run Time Polymorphism

---

# Example of Function Overloading

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
        cout<<"\nFloat Sum: "<<a+b;
    }
};

void main()
{
    Demo d;

    clrscr();

    d.add(10,20);

    d.add(2.5,3.5);

    getch();
}
```

---

# Structure of C++ Program

Har C++ program ka ek basic structure hota hai.

---

# Basic Structure

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

    clrscr();

    d.show();

    getch();
}
```

---

# Components of C++ Program

1. Header Files
2. Class Declaration
3. Main Function
4. Object Creation
5. Function Calling

---

# Header Files

```cpp
#include<iostream.h>
#include<conio.h>
```

Ye libraries include karti hain.

---

# main() Function

Program execution:
```text
main()
```
se start hota hai.

---

# Tokens in C++

# Introduction

Smallest individual unit of program:
```text
Token
```
kehlata hai.

---

# Types of Tokens

1. Keywords
2. Identifiers
3. Constants
4. Operators
5. Special Symbols

---

# Example

```cpp
int a=10;
```

Tokens:
```text
int
a
=
10
;
```

---

# Identifier

Identifier variable/function/class ka naam hota hai.

---

# Rules of Identifier

- Number se start nahi hona chahiye
- Special symbol allowed nahi
- Keywords use nahi kar sakte

---

# Valid Identifiers

```text
name
student1
total_marks
```

---

# Invalid Identifiers

```text
1name
float
total-marks
```

---

# Data Types in C++

Data type batata hai:
```text
Variable kis type ka data store karega
```

---

# Types of Data Types

1. int
2. float
3. char
4. double
5. void

---

# Example

```cpp
int age=20;
float marks=85.5;
char grade='A';
```

---

# Operators in C++

Operators operations perform karte hain.

---

# Types of Operators

1. Arithmetic
2. Relational
3. Logical
4. Assignment
5. Increment/Decrement

---

# Arithmetic Operators

| Operator | Meaning |
|---|---|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=10,b=5;

    clrscr();

    cout<<"Addition: "<<a+b;
    cout<<"\nSubtraction: "<<a-b;
    cout<<"\nMultiplication: "<<a*b;
    cout<<"\nDivision: "<<a/b;

    getch();
}
```

---

# Type Conversion

Automatic conversion of one data type into another.

---

# Example

```cpp
int a=10;
float b;

b=a;
```

Integer automatically float ban gaya.

---

# Type Casting

Manual conversion:
```text
Type Casting
```

---

# Example

```cpp
float x=5.7;

int y=(int)x;
```

Output:
```text
5
```

---

# Console Input and Output

C++ mein:
- cin → input
- cout → output

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int age;

    clrscr();

    cout<<"Enter Age: ";
    cin>>age;

    cout<<"Your Age is "<<age;

    getch();
}
```

---

# if Statement

Condition checking ke liye use hota hai.

---

# Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int age;

    clrscr();

    cout<<"Enter Age: ";
    cin>>age;

    if(age>=18)
    {
        cout<<"Eligible for Voting";
    }

    getch();
}
```

---

# Loops in C++

Loops repeated execution ke liye use hote hain.

---

# Types of Loops

1. for loop
2. while loop
3. do while loop

---

# for Loop

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int i;

    clrscr();

    for(i=1;i<=5;i++)
    {
        cout<<"\nHello";
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

    clrscr();

    while(i<=5)
    {
        cout<<"\nWelcome";

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

    clrscr();

    do
    {
        cout<<"\nC++";

        i++;

    }while(i<=5);

    getch();
}
```

---

# break Statement

Loop ko immediately terminate karta hai.

---

# Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int i;

    clrscr();

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

---

# continue Statement

Current iteration skip karta hai.

---

# Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int i;

    clrscr();

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

---

# goto Statement

Program control directly kisi label par transfer karta hai.

---

# Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int n;

    clrscr();

start:

    cout<<"Enter Positive Number: ";
    cin>>n;

    if(n<0)
    {
        goto start;
    }

    cout<<"Valid Number";

    getch();
}
```

---

# Advantages of OOP

- Security
- Reusability
- Easy maintenance
- Real world modeling
- Modular programming

---

# Disadvantages of OOP

- Complex for beginners
- Large program size
- More memory usage

---

# Important Points to Remember

- Class is blueprint.
- Object is real instance.
- Inheritance reuses code.
- Encapsulation provides security.
- Polymorphism means many forms.
- cin used for input.
- cout used for output.
- Loops perform repetition.
- break exits loop.
- continue skips iteration.

---

# Conclusion

Object Oriented Programming modern programming ka foundation hai. C++ ek powerful OOP language hai jo real-world problems ko efficiently solve karti hai. Concepts like class, object, inheritance, encapsulation aur polymorphism software development ko secure, reusable aur manageable banate hain.

C++ ka use:
- Game development
- Operating systems
- Banking software
- Embedded systems
- AI applications

mein extensively hota hai. OOP concepts samajhna advanced programming aur software engineering ke liye bahut important hai.
