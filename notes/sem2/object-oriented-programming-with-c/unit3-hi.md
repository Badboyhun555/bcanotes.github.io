# OBJECT ORIENTED PROGRAMMING USING C++

# UNIT – CLASSES, OBJECTS, CONSTRUCTORS AND OPERATOR OVERLOADING

---

# Introduction to Classes and Objects

Object Oriented Programming ka sabse important concept:
```text
Class aur Object
```
hota hai.

C++ ek Object Oriented Programming language hai jisme:
- real world entities
- real world behavior
- real world objects

ko programming ke through represent kiya jata hai.

Programming mein agar hum directly saara code likhte rahein:
- code lengthy ho jata hai
- security kam ho jati hai
- management difficult ho jata hai

Isi problem ko solve karne ke liye:
```text
Classes and Objects
```
use kiye jate hain.

---

# Real Life Example of Classes and Objects

Suppose:
```text
Car
```
ek class hai.

Uske andar:
- color
- speed
- engine
- model

ye sab properties hongi.

Aur:
- start()
- stop()
- brake()

ye uske functions honge.

Ab:
```text
BMW
Audi
Thar
```
ye sab objects hain.

---

# Class Definition

# Introduction

Class ek blueprint ya template hoti hai jisme:
- data members
- member functions

define kiye jate hain.

Class khud memory occupy nahi karti.

---

# Syntax of Class

```cpp
class ClassName
{
    private:
        data members;

    public:
        member functions;
};
```

---

# Components of Class

1. Class Keyword
2. Class Name
3. Access Specifiers
4. Data Members
5. Member Functions

---

# Example of Class Definition

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
    private:

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

# Understanding Class Deeply

Suppose architect ek building ka map banata hai.

Map:
- actual building nahi hota
- sirf design hota hai

Waise hi:
```text
Class sirf design hoti hai
```

Actual memory tab allocate hoti hai jab:
```text
Object create hota hai
```

---

# Object Declaration

# Introduction

Object class ka instance hota hai.

Object:
- memory allocate karta hai
- actual data hold karta hai

---

# Syntax

```cpp
ClassName object_name;
```

---

# Example

```cpp
Student s1;
```

Yahan:
- Student → class
- s1 → object

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

# Multiple Objects

Ek class ke multiple objects ho sakte hain.

Example:

```cpp
Student s1,s2,s3;
```

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Car
{
    public:

    char name[20];

    void get()
    {
        cout<<"Enter Car Name: ";
        cin>>name;
    }

    void show()
    {
        cout<<"\nCar Name: "<<name;
    }
};

void main()
{
    Car c1,c2;

    clrscr();

    c1.get();
    c1.show();

    c2.get();
    c2.show();

    getch();
}
```

---

# Constructors

# Introduction

Constructor ek special member function hota hai jo automatically call hota hai jab object create hota hai.

Constructor ka main kaam:
```text
Object ko initialize karna
```

---

# Important Properties of Constructor

- Constructor ka naam class ke naam jaisa hota hai
- No return type
- Automatically execute hota hai

---

# Syntax

```cpp
class Demo
{
    public:

    Demo()
    {
    }
};
```

---

# Real Life Example

Suppose nayi mobile phone kharidte hi:
- initial setup automatically start hota hai

Waise hi constructor:
- object creation par automatically run hota hai

---

# Types of Constructors

1. Default Constructor
2. Parameterized Constructor
3. Copy Constructor

---

# Default Constructor

No parameters leta.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
    public:

    Demo()
    {
        cout<<"Constructor Called";
    }
};

void main()
{
    clrscr();

    Demo d;

    getch();
}
```

---

# Output

```text
Constructor Called
```

---

# Parameterized Constructor

Parameters receive karta hai.

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
    int roll;

    public:

    Student(int r)
    {
        roll=r;
    }

    void display()
    {
        cout<<"Roll Number: "<<roll;
    }
};

void main()
{
    clrscr();

    Student s(101);

    s.display();

    getch();
}
```

---

# Output

```text
Roll Number: 101
```

---

# Destructors

# Introduction

Destructor special member function hota hai jo object destroy hone par automatically call hota hai.

Destructor ka kaam:
```text
Memory cleanup
```

---

# Syntax

```cpp
~ClassName()
{
}
```

---

# Properties of Destructor

- Constructor jaisa naam
- ~ symbol use hota hai
- No parameters
- No return type

---

# Real Life Example

Suppose classroom close hone par:
- lights off
- fans off

ye cleanup process destructor jaisa hai.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
    public:

    Demo()
    {
        cout<<"Constructor Called\n";
    }

    ~Demo()
    {
        cout<<"Destructor Called";
    }
};

void main()
{
    clrscr();

    Demo d;

    getch();
}
```

---

# Output

```text
Constructor Called
Destructor Called
```

---

# Dynamic Initialization of Objects

# Introduction

Runtime par values initialize karna:
```text
Dynamic Initialization
```
kehlata hai.

---

# Why Needed

Kabhi values compile time par known nahi hoti.

User runtime par input deta hai.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Interest
{
    float p,r,t;

    public:

    Interest(float x,float y,float z)
    {
        p=x;
        r=y;
        t=z;
    }

    void calculate()
    {
        float si;

        si=(p*r*t)/100;

        cout<<"Simple Interest = "<<si;
    }
};

void main()
{
    float p,r,t;

    clrscr();

    cout<<"Enter Principal: ";
    cin>>p;

    cout<<"Enter Rate: ";
    cin>>r;

    cout<<"Enter Time: ";
    cin>>t;

    Interest i(p,r,t);

    i.calculate();

    getch();
}
```

---

# Copy Constructor

# Introduction

Ek object ka data dusre object mein copy karna:
```text
Copy Constructor
```
kehlata hai.

---

# Syntax

```cpp
ClassName(ClassName &obj)
{
}
```

---

# Real Life Example

Suppose:
- ek notebook ki exact photocopy banayi

Waise hi object ki copy create hoti hai.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
    int x;

    public:

    Demo(int a)
    {
        x=a;
    }

    Demo(Demo &obj)
    {
        x=obj.x;
    }

    void show()
    {
        cout<<"Value = "<<x<<endl;
    }
};

void main()
{
    clrscr();

    Demo d1(10);

    Demo d2(d1);

    d1.show();
    d2.show();

    getch();
}
```

---

# Output

```text
Value = 10
Value = 10
```

---

# Operator Overloading

# Introduction

Operators ko custom behavior dena:
```text
Operator Overloading
```
kehlata hai.

---

# Why Needed

Normally:
```cpp
+
```
sirf numbers add karta hai.

Lekin OOP mein:
- objects bhi add kar sakte hain.

---

# Real Life Example

Suppose:
```text
+ operator
```

- numbers add kare
- strings join kare

Behavior different ho gaya.

---

# Syntax

```cpp
return_type operator symbol(parameters)
{
}
```

---

# Unary Operator Overloading

# Introduction

Unary operator:
```text
Single operand
```
par work karta hai.

Example:
```text
++
--
!
```

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
    int x;

    public:

    Demo()
    {
        x=5;
    }

    void operator ++()
    {
        ++x;
    }

    void show()
    {
        cout<<"Value = "<<x;
    }
};

void main()
{
    clrscr();

    Demo d;

    ++d;

    d.show();

    getch();
}
```

---

# Output

```text
Value = 6
```

---

# Binary Operator Overloading

# Introduction

Binary operators:
```text
Two operands
```
par work karte hain.

Example:
```text
+
-
*
/
```

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
    int x;

    public:

    Demo()
    {
        x=0;
    }

    Demo(int a)
    {
        x=a;
    }

    Demo operator +(Demo d)
    {
        Demo temp;

        temp.x=x+d.x;

        return temp;
    }

    void show()
    {
        cout<<"Value = "<<x;
    }
};

void main()
{
    clrscr();

    Demo d1(10),d2(20),d3;

    d3=d1+d2;

    d3.show();

    getch();
}
```

---

# Output

```text
Value = 30
```

---

# Data Conversion

# Introduction

Ek data type ko dusre data type mein convert karna:
```text
Data Conversion
```
kehlata hai.

---

# Types

1. Basic to Basic
2. Basic to Class
3. Class to Basic
4. Class to Class

---

# Basic to Basic Conversion

```cpp
int a=10;

float b=a;
```

---

# Type Conversion Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=10;

    float b;

    clrscr();

    b=a;

    cout<<"Value of b = "<<b;

    getch();
}
```

---

# Conversion Among Objects

# Introduction

Ek class object ko dusri class object mein convert karna.

---

# Real Life Example

Suppose:
- Hindi marks grading
- Percentage grading

Dono formats convert ho sakte hain.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class A
{
    int x;

    public:

    A()
    {
        x=10;
    }

    int getx()
    {
        return x;
    }
};

class B
{
    int y;

    public:

    B()
    {
        y=0;
    }

    void operator =(A obj)
    {
        y=obj.getx();
    }

    void show()
    {
        cout<<"Value = "<<y;
    }
};

void main()
{
    clrscr();

    A a1;

    B b1;

    b1=a1;

    b1.show();

    getch();
}
```

---

# Output

```text
Value = 10
```

---

# Important Points to Remember

- Class blueprint hoti hai.
- Object actual instance hota hai.
- Constructor object initialize karta hai.
- Destructor cleanup karta hai.
- Copy constructor object copy karta hai.
- Operator overloading operators ko custom behavior deta hai.
- Unary operator single operand use karta hai.
- Binary operator two operands use karta hai.
- Dynamic initialization runtime par hota hai.
- Data conversion data type change karta hai.

---

# Advantages of Constructors

- Automatic initialization
- Cleaner code
- Easy object management

---

# Advantages of Operator Overloading

- Better readability
- Natural object operations
- Flexible programming

---

# Conclusion

Classes aur objects Object Oriented Programming ka foundation hain. Constructors object initialization ko easy banate hain aur destructors memory management handle karte hain. Operator overloading C++ ko powerful aur flexible language banata hai jisse objects bhi normal data types ki tarah behave kar sakte hain.

Ye concepts advanced software development, game engines, operating systems aur real-world applications mein extensively use hote hain. In topics ko deeply samajhna advanced C++ programming ke liye bahut important hai.
