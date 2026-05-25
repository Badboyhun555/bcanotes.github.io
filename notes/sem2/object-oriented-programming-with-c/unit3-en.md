# UNIT 3 – Classes, Objects, Constructors, Destructors and Operator Overloading in C++

# Introduction to Classes and Objects

Classes and objects are the foundation of Object Oriented Programming (OOP). OOP is based on real-world entities, and classes and objects help programmers represent those entities in software.

Before understanding classes and objects, think about real life.

Suppose there is a blueprint of a house.

The blueprint only defines:
- Number of rooms
- Structure
- Design
- Doors and windows

But the blueprint itself is not a real house.

Actual houses are built using that blueprint.

Similarly:
- Class = Blueprint
- Object = Real Entity

---

# What is a Class?

A class is a user-defined data type that contains:
- Data members (variables)
- Member functions (functions)

A class defines the structure and behavior of objects.

It acts as a template for creating objects.

---

# Real Life Example of Class

Suppose we create a class called `Student`.

Every student has:
- Name
- Roll Number
- Course
- Marks

And every student can perform:
- Study()
- AttendClass()
- GiveExam()

All these things are defined inside the class.

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
    public:

    int roll;
    char name[20];

    void display()
    {
        cout<<"Roll Number: "<<roll;
        cout<<"\nName: "<<name;
    }
};

void main()
{
    Student s;

    s.roll=101;

    strcpy(s.name,"Rahul");

    s.display();

    getch();
}
```

---

# Explanation of Program

## `class Student`

Creates a class named Student.

---

## `int roll`

Data member storing roll number.

---

## `char name[20]`

Stores student name.

---

## `void display()`

Member function to display data.

---

## `Student s`

Creates object named `s`.

---

## `s.roll=101`

Accessing data member using object.

---

## `s.display()`

Calling member function.

---

# Memory Allocation in Class

A class itself does not occupy memory.

Memory is allocated only when objects are created.

Example:

```cpp
Student s1,s2,s3;
```

Each object gets separate memory.

---

# Access Specifiers in Class

Access specifiers control accessibility of members.

Three types:
1. Private
2. Public
3. Protected

---

# 1. Private

Private members cannot be accessed directly outside class.

Default access specifier in C++ class is private.

---

# Example

```cpp
class Demo
{
    private:

    int x;
};
```

---

# 2. Public

Public members can be accessed from outside class.

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

# 3. Protected

Protected members are mainly used in inheritance.

They can be accessed in derived classes.

---

# What is an Object?

An object is an instance of a class.

Objects represent real entities.

---

# Real Life Example

Class:
- Car

Objects:
- BMW
- Audi
- Toyota

All cars have same structure but different values.

---

# Object Declaration

Object declaration means creating objects of a class.

---

# Syntax

```cpp
ClassName objectName;
```

---

# Example

```cpp
Student s1;
```

---

# Multiple Objects

```cpp
Student s1,s2,s3;
```

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Employee
{
    public:

    int id;
    char name[20];

    void input()
    {
        cout<<"Enter ID: ";
        cin>>id;

        cout<<"Enter Name: ";
        cin>>name;
    }

    void display()
    {
        cout<<"\nID: "<<id;
        cout<<"\nName: "<<name;
    }
};

void main()
{
    Employee e1;

    e1.input();

    e1.display();

    getch();
}
```

---

# Explanation

- `Employee` is class.
- `e1` is object.
- `input()` takes input.
- `display()` shows output.

---

# Constructors in C++

A constructor is a special member function used to initialize objects automatically.

Constructor name must be same as class name.

A constructor executes automatically when object is created.

---

# Characteristics of Constructor

- Same name as class
- No return type
- Called automatically
- Used for initialization

---

# Why Constructors are Needed

Without constructor, programmers must initialize objects manually every time.

Constructors make initialization automatic.

---

# Real Life Example

Suppose when you buy a mobile phone:
- Battery already exists
- Default apps already installed
- Settings already initialized

Similarly, constructor initializes object automatically.

---

# Syntax of Constructor

```cpp
class Demo
{
    public:

    Demo()
    {
        statements;
    }
};
```

---

# Default Constructor

A constructor with no arguments is called default constructor.

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Test
{
    public:

    Test()
    {
        cout<<"Constructor Called";
    }
};

void main()
{
    Test t;

    getch();
}
```

---

# Output

```text
Constructor Called
```

---

# Explanation

As soon as object `t` is created, constructor runs automatically.

---

# Parameterized Constructor

A constructor with parameters is called parameterized constructor.

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
    Student s(101);

    s.display();

    getch();
}
```

---

# Explanation

- Constructor accepts parameter.
- Value initializes object.

---

# Constructor Overloading

Multiple constructors with different parameters.

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
    public:

    Demo()
    {
        cout<<"Default Constructor\n";
    }

    Demo(int x)
    {
        cout<<"Parameterized Constructor";
    }
};

void main()
{
    Demo d1;

    Demo d2(10);

    getch();
}
```

---

# Destructors in C++

Destructor is a special member function used to destroy objects.

It is automatically called when object goes out of scope.

---

# Characteristics of Destructor

- Same name as class
- Starts with `~`
- No return type
- No parameters
- Called automatically

---

# Why Destructor is Needed

Destructor releases:
- Memory
- Files
- Resources

It prevents memory wastage.

---

# Real Life Example

Suppose after using classroom:
- Lights turned off
- Fans turned off
- Doors closed

Similarly destructor cleans resources.

---

# Syntax of Destructor

```cpp
~ClassName()
{
    statements;
}
```

---

# Example Program

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

Dynamic initialization means initializing objects during runtime using constructors.

Values are provided while program runs.

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Interest
{
    float principal,rate,time;

    public:

    Interest(float p,float r,float t)
    {
        principal=p;
        rate=r;
        time=t;
    }

    void calculate()
    {
        float si;

        si=(principal*rate*time)/100;

        cout<<"Simple Interest: "<<si;
    }
};

void main()
{
    Interest i(1000,5,2);

    i.calculate();

    getch();
}
```

---

# Explanation

Values initialize object dynamically during execution.

---

# Real Life Example

Suppose ATM asks:
- Amount
- PIN
- Account number

during runtime.

Similarly dynamic initialization happens during execution.

---

# Copy Constructor

A copy constructor initializes one object using another object of same class.

---

# Syntax

```cpp
ClassName(ClassName &obj)
{
}
```

---

# Why Copy Constructor is Used

Used when:
- One object copied into another
- Passing object to function
- Returning object from function

---

# Example Program

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

    void display()
    {
        cout<<"Value: "<<x;
    }
};

void main()
{
    Demo d1(10);

    Demo d2(d1);

    d2.display();

    getch();
}
```

---

# Explanation

- `d1` stores value 10.
- `d2(d1)` copies object.
- Copy constructor executes automatically.

---

# Operator Overloading

Operator overloading means giving additional meaning to operators.

C++ allows operators to work with user-defined objects.

---

# Example

Normally:
```cpp
10 + 20
```

performs addition.

But with operator overloading:
```cpp
obj1 + obj2
```

can also perform addition of objects.

---

# Why Operator Overloading is Needed

It makes programs:
- More readable
- Natural
- Flexible

---

# Operators That Can Be Overloaded

Examples:
- +
- -
- *
- /
- ++
- --

---

# Unary Operator Overloading

Unary operators work on one operand.

Examples:
- ++
- --
- !

---

# Example Program

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

    void display()
    {
        cout<<"Value: "<<x;
    }
};

void main()
{
    Demo d;

    ++d;

    d.display();

    getch();
}
```

---

# Explanation

`++d` increases value of object member.

---

# Binary Operator Overloading

Binary operators work on two operands.

Examples:
- +
- -
- *
- /

---

# Example Program

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

    Demo operator +(Demo obj)
    {
        Demo temp;

        temp.x=x+obj.x;

        return temp;
    }

    void display()
    {
        cout<<"Value: "<<x;
    }
};

void main()
{
    Demo d1(10),d2(20),d3;

    d3=d1+d2;

    d3.display();

    getch();
}
```

---

# Explanation

`d1+d2` adds objects using overloaded operator.

---

# Data Conversion in C++

Data conversion means changing one type into another.

Two types:
1. Basic to class
2. Class to basic
3. Class to class

---

# Basic Type to Class Type Conversion

Converting normal data type into class object.

---

# Example Program

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

    void display()
    {
        cout<<"Value: "<<x;
    }
};

void main()
{
    Demo d=10;

    d.display();

    getch();
}
```

---

# Explanation

Integer automatically converts into object.

---

# Class to Basic Type Conversion

Converting object into normal data type.

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
    int x;

    public:

    Demo()
    {
        x=50;
    }

    operator int()
    {
        return x;
    }
};

void main()
{
    Demo d;

    int a;

    a=d;

    cout<<"Value: "<<a;

    getch();
}
```

---

# Explanation

Object converts into integer.

---

# Class to Class Conversion

Converting one class object into another class object.

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class B;

class A
{
    int x;

    public:

    A()
    {
        x=100;
    }

    int getX()
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

    B(A obj)
    {
        y=obj.getX();
    }

    void display()
    {
        cout<<"Value: "<<y;
    }
};

void main()
{
    A a;

    B b=a;

    b.display();

    getch();
}
```

---

# Explanation

Object of class A converts into object of class B.

---

# Important Points to Remember

- Class is blueprint.
- Object is instance of class.
- Constructors initialize objects.
- Destructors destroy objects.
- Copy constructor copies objects.
- Dynamic initialization happens during runtime.
- Operator overloading gives extra meaning to operators.
- Unary operators use one operand.
- Binary operators use two operands.
- Data conversion changes type of data or objects.

---

# Conclusion

Classes and objects are the heart of Object Oriented Programming. Constructors and destructors help in automatic initialization and cleanup of objects. Copy constructors and dynamic initialization improve flexibility in object management.

Operator overloading makes C++ more powerful by allowing operators to work with objects naturally. Data conversion between objects and basic types increases compatibility and flexibility.

These concepts are extremely important because advanced C++ programming and real-world software development heavily depend on them.
