# Q1. Explain Classes and Objects in C++. Describe Class Definition, Object Declaration, Data Members, and Member Functions. Write a C++ Program Using a Class to Store and Display Student Information.

## Introduction

Object-Oriented Programming (OOP) ka sabse important concept Classes aur Objects hain. C++ ek Object-Oriented Programming language hai jo real-world entities ko classes aur objects ke through represent karti hai. Traditional programming languages me data aur functions alag-alag hote the, lekin OOP me data aur functions ko ek single unit me organize kiya jata hai.

Classes aur Objects software development ko modular, reusable aur secure banate hain. Banking systems, Hospital Management Systems, Student Management Systems, E-Commerce Applications aur Multimedia Software jaise modern applications classes aur objects par based hote hain.

Class ek blueprint ya template hoti hai jabki object us blueprint ka actual instance hota hai. OOP ka pura structure classes aur objects ke concept par based hota hai.

# What is a Class?

Class ek user-defined data type hoti hai jo data members aur member functions ka collection hoti hai.

Class real-world entity ki properties aur behaviors ko represent karti hai.

## Definition

"A class is a user-defined data type that contains data members and member functions."

Class sirf blueprint hoti hai. Memory tab allocate hoti hai jab object create kiya jata hai.

## Example

Student Class:

Properties:

- Name
- Roll Number
- Marks

Behaviors:

- Input Data
- Display Data

Yeh sab milkar Student Class banate hain.

# Syntax of Class

```cpp
class ClassName
{
    private:
        data_members;

    public:
        member_functions;
};
```

## Example

```cpp
class Student
{
    int roll;
    char name[20];

public:
    void getData();
    void display();
};
```

# Components of a Class

Class ke andar mainly do components hote hain:

## Data Members

## Member Functions

# Data Members

Data Members class ke variables hote hain jo object ki properties ko store karte hain.

### Example

```cpp
int roll;
char name[20];
float marks;
```

Ye variables student ki information store karenge.

## Characteristics of Data Members

### Data Storage

Object ka data store karte hain.

### Encapsulation

Class ke andar protected rehte hain.

### Object Specific

Har object ke paas apni copy hoti hai.

# Member Functions

Member Functions class ke andar define kiye gaye functions hote hain jo data members par operations perform karte hain.

### Example

```cpp
void getData();
void display();
```

## Uses

### Data Input

User se data lene ke liye.

### Data Processing

Calculations perform karne ke liye.

### Data Output

Information display karne ke liye.

# Access Specifiers

Class ke members ko control karne ke liye access specifiers use kiye jate hain.

## Private

Private members directly access nahi kiye ja sakte.

```cpp
private:
int roll;
```

## Public

Public members outside class access kiye ja sakte hain.

```cpp
public:
void display();
```

## Protected

Inheritance me use hota hai.

```cpp
protected:
int marks;
```

# What is an Object?

Object class ka instance hota hai.

Object class ke data members aur member functions ko access kar sakta hai.

## Definition

"An object is an instance of a class."

Class blueprint hai.

Object actual entity hai.

## Example

Agar Student ek class hai to:

```text
Rahul
Mohan
Priya
```

Student class ke objects ho sakte hain.

# Object Declaration

Object create karne ke liye class name use kiya jata hai.

## Syntax

```cpp
ClassName object_name;
```

## Example

```cpp
Student s1;
```

Yahan:

```cpp
Student
```

Class Name hai.

Aur

```cpp
s1
```

Object hai.

# Accessing Class Members

Object dot operator (.) ke through class members access karta hai.

## Syntax

```cpp
object_name.member_name;
```

## Example

```cpp
s1.getData();
s1.display();
```

# Working of Classes and Objects

### Step 1

Class define ki jati hai.

### Step 2

Object create kiya jata hai.

### Step 3

Object memory allocate karta hai.

### Step 4

Member functions call kiye jate hain.

### Step 5

Data process aur display kiya jata hai.

# Advantages of Classes and Objects

## Data Security

Encapsulation provide karte hain.

## Code Reusability

Classes multiple objects create kar sakti hain.

## Modularity

Program small units me divide hota hai.

## Easy Maintenance

Large projects manage karna easy hota hai.

## Real World Representation

Real-world entities ko easily model kiya ja sakta hai.

# Algorithm

## Algorithm to Store and Display Student Information

### Step 1

Start Program.

### Step 2

Define Student Class.

### Step 3

Declare Data Members.

### Step 4

Create Input Function.

### Step 5

Create Display Function.

### Step 6

Create Object.

### Step 7

Input Student Details.

### Step 8

Display Student Details.

### Step 9

Stop Program.

# Turbo C++ Program

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
    int roll;
    char name[30];
    float marks;

public:

    void getData()
    {
        cout<<"Enter Roll Number : ";
        cin>>roll;

        cout<<"Enter Name : ";
        cin>>name;

        cout<<"Enter Marks : ";
        cin>>marks;
    }

    void display()
    {
        cout<<"\nStudent Information";
        cout<<"\nRoll Number : "<<roll;
        cout<<"\nName : "<<name;
        cout<<"\nMarks : "<<marks;
    }
};

void main()
{
    clrscr();

    Student s1;

    s1.getData();

    s1.display();

    getch();
}
```

# Output

```text
Enter Roll Number : 101
Enter Name : Rahul
Enter Marks : 88.5

Student Information

Roll Number : 101
Name : Rahul
Marks : 88.5
```

# Applications of Classes and Objects

Classes aur Objects modern software development ka foundation hain.

### Banking Systems

Customer aur Account management.

### Hospital Management

Patient records maintain karne ke liye.

### Student Management Systems

Student information store karne ke liye.

### E-Commerce Applications

Products aur Orders manage karne ke liye.

### Multimedia Applications

Audio, Video aur Graphics objects handle karne ke liye.

### Game Development

Characters aur game entities create karne ke liye.

# Difference Between Class and Object

## Class

Class blueprint hoti hai.

Memory allocate nahi karti.

Logical entity hoti hai.

## Object

Object class ka instance hota hai.

Memory allocate karta hai.

Physical entity hoti hai.

# Conclusion

In conclusion, Classes aur Objects Object-Oriented Programming ke fundamental concepts hain. Class ek blueprint provide karti hai jo data members aur member functions ko organize karti hai, jabki Object us class ka actual instance hota hai jo memory allocate karta hai aur operations perform karta hai. Classes aur Objects data security, modularity, code reusability aur real-world modeling provide karte hain. Isi wajah se modern software development me inka extensive use kiya jata hai aur ye C++ programming ka foundation mana jata hai.




# Q2. What are Constructors and Destructors? Explain Default Constructor, Parameterized Constructor, Copy Constructor, and Destructor with Suitable Programs.

## Introduction

Object-Oriented Programming me object creation aur object destruction ko manage karne ke liye C++ special member functions provide karta hai jinhe **Constructors** aur **Destructors** kaha jata hai. Ye functions object lifecycle management ke liye use hote hain.

Jab bhi kisi class ka object create hota hai to constructor automatically call hota hai aur object ko initialize karta hai. Isi tarah jab object destroy hota hai ya program terminate hota hai to destructor automatically call hota hai aur allocated resources ko release karta hai.

Constructors aur Destructors software development me bahut important role play karte hain kyunki ye automatic initialization aur cleanup facility provide karte hain. Banking systems, database software, multimedia applications aur game development me inka extensive use hota hai.

# What is a Constructor?

Constructor class ka special member function hota hai jo object create hote hi automatically execute hota hai.

Constructor ka naam hamesha class ke naam ke same hota hai.

## Definition

"A constructor is a special member function that is automatically invoked when an object of a class is created."

## Characteristics of Constructor

### Same Name as Class

Constructor ka naam class ke naam jaisa hi hota hai.

### No Return Type

Constructor kisi bhi type ka return value nahi deta.

### Automatic Execution

Object create hote hi automatically call hota hai.

### Object Initialization

Object ko initial values provide karta hai.

## Syntax

```cpp
class Student
{
public:

    Student()
    {
        // constructor body
    }
};
```

# Types of Constructors

C++ me mainly following types ke constructors use hote hain:

- Default Constructor
- Parameterized Constructor
- Copy Constructor

# Default Constructor

Default Constructor wo constructor hota hai jo koi argument receive nahi karta.

Object create hote hi automatically execute hota hai aur default initialization perform karta hai.

## Syntax

```cpp
class Demo
{
public:

    Demo()
    {
    }
};
```

## Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
public:

    Demo()
    {
        cout<<"Default Constructor Called";
    }
};

void main()
{
    clrscr();

    Demo d1;

    getch();
}
```

## Output

```text
Default Constructor Called
```

## Advantages

- Automatic Initialization
- Easy Implementation
- Suitable for Small Programs

# Parameterized Constructor

Parameterized Constructor wo constructor hota hai jo arguments receive karta hai.

Ye object creation ke time user-defined values initialize karne ke liye use hota hai.

## Definition

"A constructor that accepts parameters is known as a Parameterized Constructor."

## Syntax

```cpp
class Demo
{
public:

    Demo(int x)
    {
    }
};
```

## Example Program

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
        cout<<"Roll Number = "<<roll;
    }
};

void main()
{
    clrscr();

    Student s1(101);

    s1.display();

    getch();
}
```

## Output

```text
Roll Number = 101
```

## Advantages

### Flexible Initialization

Different values initialize ki ja sakti hain.

### Better Control

Object creation ke time data assign hota hai.

### Reduced Coding

Separate input function ki need kam ho jati hai.

# Copy Constructor

Copy Constructor ek existing object ki copy create karta hai.

Jab ek object ko dusre object se initialize kiya jata hai tab copy constructor call hota hai.

## Definition

"A constructor that initializes an object using another object of the same class is known as a Copy Constructor."

## Syntax

```cpp
ClassName(ClassName &obj)
{
}
```

## Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Number
{
    int num;

public:

    Number(int n)
    {
        num=n;
    }

    Number(Number &obj)
    {
        num=obj.num;
    }

    void display()
    {
        cout<<"Number = "<<num<<endl;
    }
};

void main()
{
    clrscr();

    Number n1(50);

    Number n2(n1);

    n1.display();
    n2.display();

    getch();
}
```

## Output

```text
Number = 50
Number = 50
```

## Advantages

### Object Duplication

Existing object ki copy create kar sakte hain.

### Easy Data Transfer

Objects ke beech data transfer easy ho jata hai.

### Memory Management

Efficient object handling possible hoti hai.

# What is a Destructor?

Destructor class ka special member function hota hai jo object destroy hone par automatically call hota hai.

Destructor allocated resources release karta hai.

## Definition

"A destructor is a special member function that is automatically invoked when an object is destroyed."

## Characteristics of Destructor

### Same Name as Class

Class name ke saath tilde (~) use hota hai.

### No Arguments

Destructor koi argument receive nahi karta.

### No Return Type

Destructor return value nahi deta.

### Automatic Execution

Object destroy hone par automatically call hota hai.

## Syntax

```cpp
~ClassName()
{
}
```

## Example

```cpp
~Demo()
{
    cout<<"Destructor Called";
}
```

# Program Demonstrating Destructor

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
public:

    Demo()
    {
        cout<<"Constructor Called"<<endl;
    }

    ~Demo()
    {
        cout<<"Destructor Called";
    }
};

void main()
{
    clrscr();

    Demo d1;

    getch();
}
```

## Output

```text
Constructor Called
Destructor Called
```

# Working of Constructor and Destructor

### Step 1

Class define hoti hai.

### Step 2

Object create hota hai.

### Step 3

Constructor automatically execute hota hai.

### Step 4

Program statements execute hoti hain.

### Step 5

Object destroy hota hai.

### Step 6

Destructor automatically execute hota hai.

# Algorithm

## Algorithm for Constructor Program

### Step 1

Start Program.

### Step 2

Create Class.

### Step 3

Define Constructor.

### Step 4

Create Object.

### Step 5

Constructor Automatically Execute Hoga.

### Step 6

Display Result.

### Step 7

Stop Program.

## Algorithm for Destructor Program

### Step 1

Start Program.

### Step 2

Create Class.

### Step 3

Define Constructor and Destructor.

### Step 4

Create Object.

### Step 5

Execute Program.

### Step 6

Destroy Object.

### Step 7

Destructor Automatically Execute Hoga.

### Step 8

Stop Program.

# Advantages of Constructors

### Automatic Initialization

Object create hote hi initialize ho jata hai.

### Better Reliability

Uninitialized objects ka problem nahi hota.

### Code Reusability

Initialization code repeatedly nahi likhna padta.

### Easy Object Creation

Object creation simple ho jata hai.

# Advantages of Destructors

### Automatic Cleanup

Resources automatically release hote hain.

### Memory Management

Memory leaks avoid hote hain.

### Resource Protection

Files aur dynamic memory properly release hoti hai.

# Difference Between Constructor and Destructor

## Constructor

Object create hone par call hota hai.

Object initialize karta hai.

Arguments receive kar sakta hai.

Multiple constructors ho sakte hain.

## Destructor

Object destroy hone par call hota hai.

Resources release karta hai.

Arguments receive nahi karta.

Class me sirf ek destructor hota hai.

# Applications

### Banking Software

Account objects initialize karne ke liye.

### Student Management Systems

Student records create karne ke liye.

### Database Applications

Database connections manage karne ke liye.

### Multimedia Software

Audio aur video resources initialize aur release karne ke liye.

### Game Development

Game objects aur resources manage karne ke liye.

# Conclusion

In conclusion, Constructors aur Destructors C++ ke powerful special member functions hain jo object lifecycle management provide karte hain. Constructors object creation ke time automatic initialization perform karte hain, jabki Destructors object destruction ke time resource cleanup perform karte hain. Default Constructor, Parameterized Constructor aur Copy Constructor different initialization requirements ko fulfill karte hain. Destructors memory management aur resource handling ke liye essential hote hain. Modern Object-Oriented Programming me Constructors aur Destructors ka bahut important role hai aur efficient software development ke liye inka proper understanding zaruri hai.



# Q3. Explain Dynamic Initialization of Objects. Write a C++ Program Demonstrating Dynamic Initialization Using Constructors.

## Introduction

Object-Oriented Programming me objects ko initialize karna bahut important hota hai. Normally object create karne ke baad values assign ki jati hain, lekin C++ me constructors ke through object creation ke time hi values initialize ki ja sakti hain. Jab object ki values run-time par user input ya calculated values ke basis par initialize ki jati hain, to ise **Dynamic Initialization of Objects** kaha jata hai.

Dynamic Initialization C++ ka ek powerful feature hai jo object ko flexible aur efficient banata hai. Is technique me constructor arguments receive karta hai aur object ke data members ko run-time values ke according initialize karta hai.

Banking Systems, Student Management Systems, Inventory Software, Multimedia Applications aur Game Development me Dynamic Initialization extensively use hota hai kyunki values pehle se fixed nahi hoti aur run-time par provide ki jati hain.

# What is Dynamic Initialization of Objects?

Dynamic Initialization ka matlab hai object ko run-time values ke through initialize karna.

Yeh initialization constructor ke through ki jati hai.

## Definition

"Dynamic Initialization of Objects is the process of initializing object data members at run-time using constructors and user-supplied values."

Static initialization me values compile-time par fixed hoti hain, jabki Dynamic Initialization me values execution ke dauran provide ki jati hain.

# Need of Dynamic Initialization

Real-world applications me data pehle se known nahi hota.

Example:

- Student Marks
- Bank Account Balance
- Employee Salary
- Product Price

Ye values user input karta hai ya database se aati hain.

Isliye Dynamic Initialization ki zarurat padti hai.

# Working of Dynamic Initialization

Dynamic Initialization constructor aur parameters ki help se perform hoti hai.

### Step 1

Class define ki jati hai.

### Step 2

Parameterized Constructor create kiya jata hai.

### Step 3

User run-time par values provide karta hai.

### Step 4

Constructor values receive karta hai.

### Step 5

Data members initialize ho jate hain.

### Step 6

Object use ke liye ready ho jata hai.

# Example of Dynamic Initialization

```cpp
Student s1(101,85);
```

Yahan:

```cpp
101
85
```

Run-time values hain.

Constructor object ko initialize karega.

# Syntax

## Class Declaration

```cpp
class ClassName
{
    data_members;

public:

    ClassName(arguments)
    {
        initialization;
    }
};
```

## Object Creation

```cpp
ClassName obj(value1,value2);
```

# Dynamic Initialization Using Constructor

Dynamic Initialization generally parameterized constructor ke through ki jati hai.

Example:

```cpp
class Student
{
    int roll;

public:

    Student(int r)
    {
        roll=r;
    }
};
```

Object:

```cpp
Student s1(101);
```

Object create hote hi roll initialize ho jayega.

# Advantages of Dynamic Initialization

## Flexible Object Creation

Different objects different values receive kar sakte hain.

## Better Data Handling

Run-time data easily process kiya ja sakta hai.

## Improved Security

Object incomplete state me nahi rehta.

## Reduced Coding

Separate initialization functions ki need kam ho jati hai.

## Better Program Design

Object creation aur initialization ek hi step me ho jata hai.

# Dynamic Initialization vs Static Initialization

## Static Initialization

Values fixed hoti hain.

Example:

```cpp
int a=10;
```

Compile-time initialization hoti hai.

## Dynamic Initialization

Values run-time par milti hain.

Example:

```cpp
Student s1(roll);
```

Run-time initialization hoti hai.

# Example 1: Dynamic Initialization of Student Object

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
    int roll;
    float marks;

public:

    Student(int r,float m)
    {
        roll=r;
        marks=m;
    }

    void display()
    {
        cout<<"Roll Number = "<<roll<<endl;
        cout<<"Marks = "<<marks;
    }
};

void main()
{
    clrscr();

    Student s1(101,88.5);

    s1.display();

    getch();
}
```

## Output

```text
Roll Number = 101
Marks = 88.5
```

# Dynamic Initialization Through User Input

Real-world applications me values user se li jati hain.

# Algorithm

## Algorithm for Dynamic Initialization

### Step 1

Start Program.

### Step 2

Declare variables.

### Step 3

Input values from user.

### Step 4

Create class.

### Step 5

Create parameterized constructor.

### Step 6

Pass user values while creating object.

### Step 7

Display object data.

### Step 8

Stop Program.

# Turbo C++ Program

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
    int roll;
    float marks;

public:

    Student(int r,float m)
    {
        roll=r;
        marks=m;
    }

    void display()
    {
        cout<<"\nStudent Information";
        cout<<"\nRoll Number : "<<roll;
        cout<<"\nMarks : "<<marks;
    }
};

void main()
{
    clrscr();

    int r;
    float m;

    cout<<"Enter Roll Number : ";
    cin>>r;

    cout<<"Enter Marks : ";
    cin>>m;

    Student s1(r,m);

    s1.display();

    getch();
}
```

# Output

```text
Enter Roll Number : 101
Enter Marks : 89.5

Student Information

Roll Number : 101
Marks : 89.5
```

# Example 2: Dynamic Initialization of Bank Account

```cpp
#include<iostream.h>
#include<conio.h>

class Account
{
    float balance;

public:

    Account(float b)
    {
        balance=b;
    }

    void display()
    {
        cout<<"Balance = "<<balance;
    }
};

void main()
{
    clrscr();

    float amount;

    cout<<"Enter Balance : ";
    cin>>amount;

    Account a1(amount);

    a1.display();

    getch();
}
```

# Output

```text
Enter Balance : 5000

Balance = 5000
```

# Applications of Dynamic Initialization

Dynamic Initialization practical software development me extensively use hota hai.

## Banking Systems

Account balance initialize karne ke liye.

## Student Management Systems

Student information store karne ke liye.

## Hospital Management Systems

Patient records initialize karne ke liye.

## Multimedia Applications

Audio aur video properties initialize karne ke liye.

## E-Commerce Software

Product details initialize karne ke liye.

## Game Development

Game characters aur objects create karne ke liye.

# Advantages of Dynamic Initialization

### Run-Time Flexibility

Values execution ke time provide ki ja sakti hain.

### Better Object Control

Object creation aur initialization ek saath hota hai.

### Improved Reliability

Uninitialized objects ka issue nahi hota.

### Better Resource Utilization

Required values ke according objects create hote hain.

### Easy Maintenance

Code simple aur manageable rehta hai.

# Limitations

### Constructor Dependency

Parameterized constructor required hota hai.

### User Input Errors

Wrong values initialization ko affect kar sakti hain.

### Slightly Complex

Static initialization se thoda complex hota hai.

# Real Life Example

Bank Account Opening ko consider karo.

Har customer ka:

- Name
- Account Number
- Balance

Different hota hai.

Object creation ke time hi ye values assign karni padti hain.

Ye Dynamic Initialization ka practical example hai.

# Conclusion

In conclusion, Dynamic Initialization of Objects C++ ka ek important feature hai jo constructors ke through objects ko run-time values ke saath initialize karne ki facility provide karta hai. Is technique me object creation aur initialization ek hi step me complete ho jata hai, jisse code efficient aur reliable ban jata hai. Dynamic Initialization flexibility, security aur better object management provide karta hai. Banking systems, multimedia applications, database systems aur modern software development me iska extensive use hota hai. Isliye Dynamic Initialization ko C++ Object-Oriented Programming ka ek essential concept mana jata hai.




# Q4. Define Operator Overloading. Explain Rules and Advantages of Operator Overloading. Write Programs to Overload Unary Operator and Binary Operator.

## Introduction

C++ ki sabse powerful features me se ek feature **Operator Overloading** hai. Object-Oriented Programming me kai baar hume user-defined data types (objects) par bhi operators ka use karna padta hai. Normally operators jaise (+, -, *, ++, --) built-in data types ke liye kaam karte hain, lekin C++ hume in operators ko objects ke liye redefine karne ki facility deta hai.

Isi process ko Operator Overloading kaha jata hai.

Operator Overloading compile-time polymorphism ka example hai. Iske through operators ko new meaning diya ja sakta hai bina unke original purpose ko change kiye.

For example:

```cpp
a + b
```

Integers ke liye addition karta hai.

Lekin:

```cpp
obj1 + obj2
```

Objects ke liye bhi meaningful operation perform kar sakta hai.

# What is Operator Overloading?

Operator Overloading ek mechanism hai jisme existing operators ko user-defined objects ke liye redefine kiya jata hai.

## Definition

"Operator Overloading is the process of giving additional meaning to an existing operator so that it can work with user-defined data types."

Operator ka symbol same rehta hai lekin uska behavior programmer define karta hai.

# Need of Operator Overloading

Object-Oriented Programming me objects par operations perform karne ki zarurat hoti hai.

Example:

```cpp
Complex C1,C2,C3;

C3 = C1 + C2;
```

Normally compiler objects ko directly add nahi kar sakta.

Operator Overloading ke through '+' operator ko complex number addition ke liye define kiya ja sakta hai.

# Advantages of Operator Overloading

## Better Readability

Code natural aur easy to understand hota hai.

Example:

```cpp
C3 = C1 + C2;
```

Instead of:

```cpp
C3 = add(C1,C2);
```

## Code Reusability

Existing operators objects ke saath use kiye ja sakte hain.

## Object-Oriented Design

Objects ko real-world behavior milta hai.

## Easy Programming

Complex operations simple lagte hain.

## Compile Time Polymorphism

Operator Overloading compile-time polymorphism provide karti hai.

# Rules of Operator Overloading

Operator Overloading use karte waqt kuch important rules follow karne padte hain.

## Rule 1

Sirf existing operators overload kiye ja sakte hain.

New operators create nahi kiye ja sakte.

Valid:

```cpp
+
-
*
/
```

Invalid:

```cpp
**
%%
```

## Rule 2

Operator precedence change nahi ki ja sakti.

## Rule 3

Operator associativity change nahi ki ja sakti.

## Rule 4

At least ek operand user-defined type ka hona chahiye.

## Rule 5

Some operators overload nahi kiye ja sakte.

### Non-Overloadable Operators

```cpp
::
.
.*
?:
sizeof
```

# Syntax of Operator Overloading

## General Syntax

```cpp
return_type operator op(arguments)
{
    statements;
}
```

## Example

```cpp
void operator ++()
{
}
```

# Types of Operator Overloading

Mainly do types exam me pooche jate hain:

## Unary Operator Overloading

Single operand use karta hai.

Examples:

```cpp
++
--
-
!
```

## Binary Operator Overloading

Do operands use karta hai.

Examples:

```cpp
+
-
*
/
```

# Unary Operator Overloading

Unary Operator ek operand par kaam karta hai.

Example:

```cpp
++a
```

Operator Overloading ke through object ko increment kar sakte hain.

# Algorithm (Unary Operator)

### Step 1

Start Program.

### Step 2

Create Class.

### Step 3

Declare Data Member.

### Step 4

Create Constructor.

### Step 5

Overload ++ Operator.

### Step 6

Create Object.

### Step 7

Apply ++ Operator.

### Step 8

Display Result.

### Step 9

Stop Program.

# Program: Unary Operator Overloading (++)

```cpp
#include<iostream.h>
#include<conio.h>

class Number
{
    int num;

public:

    Number()
    {
        num=10;
    }

    void operator ++()
    {
        ++num;
    }

    void display()
    {
        cout<<"Number = "<<num;
    }
};

void main()
{
    clrscr();

    Number n1;

    ++n1;

    n1.display();

    getch();
}
```

# Output

```text
Number = 11
```

# Explanation

Initial value:

```cpp
10
```

After:

```cpp
++n1;
```

Value becomes:

```cpp
11
```

# Binary Operator Overloading

Binary Operator do operands par operation perform karta hai.

Example:

```cpp
a+b
```

Objects ke liye bhi '+' operator overload kiya ja sakta hai.

# Algorithm (Binary Operator)

### Step 1

Start Program.

### Step 2

Create Class.

### Step 3

Declare Data Member.

### Step 4

Create Constructor.

### Step 5

Overload + Operator.

### Step 6

Create Objects.

### Step 7

Add Objects.

### Step 8

Display Result.

### Step 9

Stop Program.

# Program: Binary Operator Overloading (+)

```cpp
#include<iostream.h>
#include<conio.h>

class Number
{
    int num;

public:

    Number()
    {
        num=0;
    }

    Number(int n)
    {
        num=n;
    }

    Number operator +(Number obj)
    {
        Number temp;

        temp.num=num+obj.num;

        return temp;
    }

    void display()
    {
        cout<<"Number = "<<num;
    }
};

void main()
{
    clrscr();

    Number n1(10);
    Number n2(20);

    Number n3;

    n3=n1+n2;

    n3.display();

    getch();
}
```

# Output

```text
Number = 30
```

# Explanation

Objects:

```cpp
n1 = 10
n2 = 20
```

Expression:

```cpp
n3 = n1+n2;
```

Result:

```cpp
30
```

# Working of Operator Overloading

Compiler internally overloaded operator ko function call me convert kar deta hai.

Example:

```cpp
n1+n2
```

Internally:

```cpp
n1.operator +(n2);
```

Execute hota hai.

# Real Life Example

Complex Number Addition:

```cpp
C3 = C1 + C2;
```

Vector Addition:

```cpp
V3 = V1 + V2;
```

Matrix Addition:

```cpp
M3 = M1 + M2;
```

Ye sab Operator Overloading ki wajah se possible hai.

# Applications of Operator Overloading

## Mathematical Software

Complex number calculations.

## Scientific Computing

Vector aur matrix operations.

## Graphics Applications

Coordinate manipulation.

## Multimedia Software

Image processing calculations.

## Game Development

Position aur object calculations.

## CAD Software

Engineering design calculations.

# Difference Between Function Overloading and Operator Overloading

## Function Overloading

Function name same hota hai.

Different parameter list hoti hai.

Example:

```cpp
add()
```

## Operator Overloading

Operator symbol same hota hai.

Different object behavior define hota hai.

Example:

```cpp
+
```

# Advantages

### Natural Syntax

Code readable lagta hai.

### Easy Maintenance

Programs simple rehte hain.

### Better OOP Support

Objects real-world entities ki tarah behave karte hain.

### Reusable Code

Operators multiple objects ke saath use kiye ja sakte hain.

### Compile Time Efficiency

Compiler compile time par resolve karta hai.

# Limitations

### Overuse Confusion Create Kar Sakta Hai

### Debugging Difficult Ho Sakti Hai

### Wrong Design Readability Reduce Kar Sakta Hai

### Only Existing Operators Overload Ho Sakte Hain

# Conclusion

In conclusion, Operator Overloading C++ ka ek powerful feature hai jo existing operators ko user-defined objects ke liye redefine karne ki facility provide karta hai. Ye compile-time polymorphism ka important example hai aur code ko readable, reusable aur object-oriented banata hai. Unary aur Binary operators dono overload kiye ja sakte hain aur mathematical, scientific, multimedia aur graphics applications me extensively use hote hain. Operator Overloading modern C++ programming ka important concept hai jo real-world object behavior ko effectively represent karta hai.


# Q5. Explain Data Type Conversion and Object Conversion in C++. Discuss Conversion: Basic Type → Class Type, Class Type → Basic Type, and Class Type → Another Class Type. Write Suitable C++ Programs for Each.

## Introduction

C++ ek powerful Object-Oriented Programming language hai jo built-in data types aur user-defined data types dono ko support karti hai. Real-world applications me kai baar different data types ke beech data transfer karna padta hai. Isi process ko **Data Type Conversion** kaha jata hai.

C++ me conversion sirf basic data types ke beech hi nahi balki objects aur classes ke beech bhi possible hai. Constructors aur conversion functions ki help se programmer ek type ko dusre type me convert kar sakta hai.

Object Conversion C++ ka important feature hai jo flexibility aur interoperability provide karta hai. Banking software, multimedia applications, graphics software aur database systems me data type conversion extensively use hota hai.

# What is Data Type Conversion?

Data Type Conversion ka matlab hai ek data type ki value ko kisi doosre data type me convert karna.

## Definition

"Data Type Conversion is the process of transforming data from one type to another."

Example:

```cpp
int a = 10;

float b = a;
```

Yahan integer value float me convert ho gayi.

# Need of Data Type Conversion

Programming me alag-alag data types use hote hain.

Example:

- Integer
- Float
- Double
- Objects

Inke beech data exchange karne ke liye conversion ki zarurat padti hai.

# Types of Conversion in C++

Object-Oriented Programming me mainly teen conversions important hain:

### Basic Type → Class Type

### Class Type → Basic Type

### Class Type → Another Class Type

# 1. Basic Type → Class Type Conversion

## Introduction

Jab kisi built-in data type ki value ko class object me convert kiya jata hai to ise Basic Type to Class Type Conversion kehte hain.

Ye conversion generally constructor ke through perform ki jati hai.

## Definition

"Conversion of a built-in data type into an object of a class is known as Basic Type to Class Type Conversion."

# Working

### Step 1

Basic type value available hoti hai.

### Step 2

Parameterized constructor receive karta hai.

### Step 3

Object initialize ho jata hai.

# Syntax

```cpp
ClassName object = value;
```

Ya

```cpp
ClassName object(value);
```

# Program: Basic Type → Class Type

```cpp
#include<iostream.h>
#include<conio.h>

class Number
{
    int num;

public:

    Number(int n)
    {
        num=n;
    }

    void display()
    {
        cout<<"Number = "<<num;
    }
};

void main()
{
    clrscr();

    int x=50;

    Number n1=x;

    n1.display();

    getch();
}
```

# Output

```text
Number = 50
```

# Explanation

Integer value:

```cpp
50
```

Constructor ke through object me convert ho gayi.

# Advantages

### Easy Object Creation

### Automatic Conversion

### Better Flexibility

# 2. Class Type → Basic Type Conversion

## Introduction

Kabhi-kabhi object ki value ko basic data type me convert karna padta hai.

Ye conversion conversion function ke through perform hoti hai.

## Definition

"Conversion of an object into a built-in data type is known as Class Type to Basic Type Conversion."

# Conversion Function

Conversion function special member function hota hai.

## Syntax

```cpp
operator data_type()
{
}
```

## Example

```cpp
operator int()
{
    return num;
}
```

# Working

### Step 1

Object create hota hai.

### Step 2

Conversion operator call hota hai.

### Step 3

Object value basic type me convert ho jati hai.

# Program: Class Type → Basic Type

```cpp
#include<iostream.h>
#include<conio.h>

class Number
{
    int num;

public:

    Number(int n)
    {
        num=n;
    }

    operator int()
    {
        return num;
    }
};

void main()
{
    clrscr();

    Number n1(100);

    int x;

    x=n1;

    cout<<"Value = "<<x;

    getch();
}
```

# Output

```text
Value = 100
```

# Explanation

Object:

```cpp
n1
```

Conversion operator ke through integer me convert ho gaya.

# Advantages

### Easy Data Extraction

### Better Compatibility

### Flexible Programming

# 3. Class Type → Another Class Type Conversion

## Introduction

Kai situations me ek class ke object ko doosri class ke object me convert karna padta hai.

Example:

```text
Rupee → Dollar

Meter → Centimeter
```

Ye conversion constructor aur conversion function ki help se ki jati hai.

## Definition

"Conversion of an object of one class into an object of another class is known as Class Type to Another Class Type Conversion."

# Working

### Step 1

Source Class Object create hota hai.

### Step 2

Conversion Function value return karta hai.

### Step 3

Target Class Constructor value receive karta hai.

### Step 4

New Object initialize ho jata hai.

# Program: Class Type → Another Class Type

```cpp
#include<iostream.h>
#include<conio.h>

class A
{
    int num;

public:

    A()
    {
        num=50;
    }

    int getValue()
    {
        return num;
    }
};

class B
{
    int value;

public:

    B(A obj)
    {
        value=obj.getValue();
    }

    void display()
    {
        cout<<"Value = "<<value;
    }
};

void main()
{
    clrscr();

    A objA;

    B objB=objA;

    objB.display();

    getch();
}
```

# Output

```text
Value = 50
```

# Explanation

Object:

```cpp
objA
```

Class A se Class B me convert hua.

# Algorithm

## Algorithm for Basic Type → Class Type

### Step 1

Start Program.

### Step 2

Create Class.

### Step 3

Create Parameterized Constructor.

### Step 4

Declare Integer Variable.

### Step 5

Convert Integer into Object.

### Step 6

Display Result.

### Step 7

Stop Program.

# Algorithm for Class Type → Basic Type

### Step 1

Start Program.

### Step 2

Create Class.

### Step 3

Create Conversion Operator.

### Step 4

Create Object.

### Step 5

Convert Object into Integer.

### Step 6

Display Result.

### Step 7

Stop Program.

# Algorithm for Class Type → Another Class Type

### Step 1

Start Program.

### Step 2

Create Source Class.

### Step 3

Create Target Class.

### Step 4

Create Conversion Constructor.

### Step 5

Create Source Object.

### Step 6

Convert into Target Object.

### Step 7

Display Result.

### Step 8

Stop Program.

# Applications of Data Type Conversion

## Banking Systems

Currency conversion ke liye.

## Multimedia Applications

Audio aur video data conversion ke liye.

## Graphics Software

Coordinate conversion ke liye.

## Database Systems

Different data formats handle karne ke liye.

## Scientific Applications

Measurement conversions ke liye.

## Game Development

Object property conversions ke liye.

# Advantages of Object Conversion

### Flexibility

Different types ke beech communication possible hoti hai.

### Better Reusability

Existing classes ko reuse kiya ja sakta hai.

### Easy Data Exchange

Classes aur basic types ke beech transfer easy ho jata hai.

### Improved Program Design

Code modular aur maintainable banta hai.

# Limitations

### Improper Conversion Errors

Wrong conversions logical errors create kar sakti hain.

### Increased Complexity

Program thoda complex ho sakta hai.

### Ambiguity

Multiple conversion paths confusion create kar sakte hain.

# Difference Between the Three Conversions

## Basic Type → Class Type

Built-in value object me convert hoti hai.

Constructor use hota hai.

## Class Type → Basic Type

Object built-in type me convert hota hai.

Conversion Operator use hota hai.

## Class Type → Another Class Type

Ek object doosre object me convert hota hai.

Constructor aur Conversion Function dono use ho sakte hain.

# Conclusion

In conclusion, Data Type Conversion aur Object Conversion C++ ke important features hain jo different data types aur classes ke beech communication provide karte hain. Basic Type → Class Type conversion constructors ke through hoti hai, Class Type → Basic Type conversion conversion operators ke through hoti hai aur Class Type → Another Class Type conversion constructors aur conversion functions ki help se implement ki jati hai. Ye techniques flexibility, reusability aur efficient data handling provide karti hain. Modern software development, multimedia systems, banking applications aur scientific computing me inka extensive use hota hai. Isliye Data Type Conversion C++ Object-Oriented Programming ka ek essential concept mana jata hai.
