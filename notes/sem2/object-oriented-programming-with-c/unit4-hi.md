# OBJECT ORIENTED PROGRAMMING USING C++

# UNIT – INHERITANCE, ACCESS SPECIFIERS AND POINTERS

---

# Introduction to Inheritance

Object Oriented Programming ka ek bahut important feature:
```text
Inheritance
```
hota hai.

Inheritance ka meaning:
```text
Ek class dusri class ki properties aur functions ko use kare
```

Simple words mein:
```text
Code Reuse Karna
```

---

# Real Life Example of Inheritance

Suppose:
- Father ke paas house hai
- Son father ki property inherit karta hai

Waise hi programming mein:
- Child class parent class ki properties inherit karti hai.

---

# Why Inheritance Needed

Large programs mein:
- same code baar-baar likhna padta hai

Inheritance:
- duplicate code remove karta hai
- time save karta hai
- maintenance easy banata hai

---

# Base Class

Jis class ki properties inherit hoti hain:
```text
Base Class
```
kehlati hai.

Isko:
- Parent Class
- Super Class

bhi bolte hain.

---

# Derived Class

Jo class inherit karti hai:
```text
Derived Class
```
kehlati hai.

Isko:
- Child Class
- Sub Class

bhi bolte hain.

---

# Syntax of Inheritance

```cpp
class DerivedClass : access_specifier BaseClass
{
};
```

---

# Example

```cpp
class Father
{
};

class Son : public Father
{
};
```

---

# Program Example of Inheritance

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

1. Code Reusability
2. Easy Maintenance
3. Faster Development
4. Better Organization
5. Reduced Redundancy

---

# Types of Inheritance

1. Single Inheritance
2. Multiple Inheritance
3. Multilevel Inheritance
4. Hierarchical Inheritance
5. Hybrid Inheritance

---

# Single Inheritance

Ek derived class:
```text
Ek hi base class
```
inherit karti hai.

---

# Diagram

```text
A → B
```

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Animal
{
    public:

    void eat()
    {
        cout<<"Animal Eats";
    }
};

class Dog : public Animal
{
};

void main()
{
    Dog d;

    clrscr();

    d.eat();

    getch();
}
```

---

# Access Specifiers

# Introduction

Access specifiers decide karte hain:
```text
Kaunsa data kahan access hoga
```

---

# Types of Access Specifiers

1. Public
2. Private
3. Protected

---

# Public Access Specifier

Public members:
```text
Har jagah access ho sakte hain
```

---

# Real Life Example

Suppose school notice board:
- sab students dekh sakte hain

Ye public access jaisa hai.

---

# Example

```cpp
class Demo
{
    public:

    int x;
};
```

---

# Private Access Specifier

Private members:
```text
Sirf class ke andar access hote hain
```

Outside access allowed nahi hota.

---

# Real Life Example

Suppose ATM PIN:
- sirf owner use kar sakta hai

Ye private access jaisa hai.

---

# Example

```cpp
class Demo
{
    private:

    int salary;
};
```

---

# Protected Access Specifier

Protected members:
- class ke andar
- derived class ke andar

access ho sakte hain.

---

# Real Life Example

Suppose family locker:
- family members access kar sakte hain
- outsiders nahi

---

# Example

```cpp
class Demo
{
    protected:

    int marks;
};
```

---

# Difference Between Public, Private and Protected

| Access Specifier | Same Class | Derived Class | Outside Class |
|---|---|---|---|
| Public | Yes | Yes | Yes |
| Private | Yes | No | No |
| Protected | Yes | Yes | No |

---

# Public Inheritance

# Introduction

Public inheritance mein:
- public members public rehte hain
- protected members protected rehte hain

---

# Example

```cpp
#include<iostream.h>
#include<conio.h>

class Parent
{
    public:

    int x;

    void get()
    {
        x=10;
    }
};

class Child : public Parent
{
    public:

    void show()
    {
        cout<<"Value = "<<x;
    }
};

void main()
{
    Child c;

    clrscr();

    c.get();

    c.show();

    getch();
}
```

---

# Output

```text
Value = 10
```

---

# Private Inheritance

# Introduction

Private inheritance mein:
- public aur protected members private ban jate hain.

---

# Example

```cpp
class Child : private Parent
{
};
```

---

# Derived Class Constructors

# Introduction

Inheritance mein constructor order important hota hai.

Jab derived object create hota hai:
1. Base class constructor call hota hai
2. Derived class constructor call hota hai

---

# Real Life Example

Suppose:
- Building foundation pehle banti hai
- Rooms baad mein

Waise hi:
- Base constructor pehle execute hota hai

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Base
{
    public:

    Base()
    {
        cout<<"Base Constructor\n";
    }
};

class Derived : public Base
{
    public:

    Derived()
    {
        cout<<"Derived Constructor";
    }
};

void main()
{
    clrscr();

    Derived d;

    getch();
}
```

---

# Output

```text
Base Constructor
Derived Constructor
```

---

# Abstract Base Class

# Introduction

Jis class ka object create nahi ho sakta:
```text
Abstract Base Class
```
kehlati hai.

Ye mainly inheritance ke liye use hoti hai.

---

# Pure Virtual Function

Abstract class banane ke liye:
```text
Pure Virtual Function
```
use hota hai.

---

# Syntax

```cpp
virtual void show()=0;
```

---

# Real Life Example

Suppose:
```text
Shape
```
ek abstract concept hai.

Actual objects:
- Circle
- Rectangle
- Triangle

hote hain.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Shape
{
    public:

    virtual void draw()=0;
};

class Circle : public Shape
{
    public:

    void draw()
    {
        cout<<"Drawing Circle";
    }
};

void main()
{
    Circle c;

    clrscr();

    c.draw();

    getch();
}
```

---

# Output

```text
Drawing Circle
```

---

# Multiple Inheritance

# Introduction

Jab ek class:
```text
Multiple base classes
```
inherit karti hai.

---

# Diagram

```text
A   B
 \ /
  C
```

---

# Real Life Example

Suppose:
- Student sports bhi karta hai
- academics bhi

Toh dono qualities inherit hui.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Father
{
    public:

    void house()
    {
        cout<<"House\n";
    }
};

class Mother
{
    public:

    void jewelry()
    {
        cout<<"Jewelry\n";
    }
};

class Son : public Father, public Mother
{
};

void main()
{
    Son s;

    clrscr();

    s.house();

    s.jewelry();

    getch();
}
```

---

# Output

```text
House
Jewelry
```

---

# Ambiguity in Inheritance

# Introduction

Kabhi same function multiple base classes mein hota hai.

Derived class confuse ho jati hai:
```text
Kaunsa function use kare
```

Is problem ko:
```text
Ambiguity
```
bolte hain.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class A
{
    public:

    void show()
    {
        cout<<"Class A";
    }
};

class B
{
    public:

    void show()
    {
        cout<<"Class B";
    }
};

class C : public A, public B
{
};

void main()
{
    C c;

    clrscr();

    c.A::show();

    getch();
}
```

---

# Output

```text
Class A
```

---

# Member Functions in Inheritance

Derived class:
- base class functions use kar sakti hai
- apne khud ke functions bhi bana sakti hai

---

# Example

```cpp
class Child : public Parent
{
    public:

    void ownFunction()
    {
    }
};
```

---

# POINTERS

# Introduction

Pointer ek special variable hota hai jo:
```text
Memory address store karta hai
```

---

# Real Life Example

Suppose:
- kisi house ka address likha hua hai

Address:
- house nahi hota
- sirf location batata hai

Waise hi pointer:
- data nahi
- memory address store karta hai

---

# Address Operator

```cpp
&
```

Memory address nikalta hai.

---

# Example

```cpp
int a=10;

cout<<&a;
```

---

# Pointer Declaration

# Syntax

```cpp
datatype *pointer_name;
```

---

# Example

```cpp
int *p;
```

---

# Pointer Initialization

```cpp
int a=10;

int *p=&a;
```

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=10;

    int *p;

    p=&a;

    clrscr();

    cout<<"Value of a = "<<a;

    cout<<"\nAddress of a = "<<p;

    cout<<"\nValue using Pointer = "<<*p;

    getch();
}
```

---

# Output

```text
Value of a = 10
Address of a = 65524
Value using Pointer = 10
```

---

# Dereferencing Operator

```cpp
*
```

Pointer ke address par stored value access karta hai.

---

# Pointers and Strings

Strings ko pointers ke through bhi handle kar sakte hain.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    char *name="Rahul";

    clrscr();

    cout<<name;

    getch();
}
```

---

# Output

```text
Rahul
```

---

# Memory Management

# Introduction

Program execution ke time memory allocate aur free karna:
```text
Dynamic Memory Management
```
kehlata hai.

---

# Why Needed

Kabhi memory requirement:
- compile time par unknown hoti hai

Runtime par memory allocate karni padti hai.

---

# new Operator

Memory dynamically allocate karta hai.

---

# Syntax

```cpp
pointer = new datatype;
```

---

# Example

```cpp
int *p;

p=new int;
```

---

# delete Operator

Allocated memory free karta hai.

---

# Syntax

```cpp
delete pointer;
```

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int *p;

    p=new int;

    clrscr();

    *p=100;

    cout<<"Value = "<<*p;

    delete p;

    getch();
}
```

---

# Output

```text
Value = 100
```

---

# Advantages of Dynamic Memory Allocation

1. Efficient memory usage
2. Runtime allocation
3. Flexible programming
4. Large applications support

---

# Important Points to Remember

- Inheritance code reuse karta hai.
- Base class parent class hoti hai.
- Derived class child class hoti hai.
- Public members everywhere accessible hote hain.
- Private members secure hote hain.
- Protected derived class mein accessible hote hain.
- Constructors automatically execute hote hain.
- Abstract class ka object nahi banta.
- Pointer address store karta hai.
- new memory allocate karta hai.
- delete memory free karta hai.

---

# Conclusion

Inheritance Object Oriented Programming ka powerful feature hai jo code reuse aur software organization improve karta hai. Access specifiers data security provide karte hain aur pointers memory management ko efficient banate hain.

C++ mein inheritance aur pointers bahut important concepts hain jo:
- operating systems
- game engines
- embedded systems
- databases
- software applications

mein extensively use hote hain. In topics ko deeply samajhna advanced programming aur software development ke liye bahut important hai.
