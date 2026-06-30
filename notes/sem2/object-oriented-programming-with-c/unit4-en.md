# Q1. Define Inheritance. Explain Public, Private, and Protected Inheritance with Suitable Diagrams and Examples.

## Introduction

Object-Oriented Programming (OOP) ka sabse important feature **Inheritance** hai. Inheritance ka matlab hota hai existing class ki properties aur functions ko kisi new class me reuse karna. Is concept ki wajah se code reusability, maintainability aur extensibility increase hoti hai.

Real life me inheritance ka example family inheritance hai. Jaise ek child apne parents ke kuch characteristics inherit karta hai, waise hi C++ me ek new class existing class ke data members aur member functions inherit kar sakti hai.

Inheritance software development me bahut useful hai kyunki programmer ko same code baar-baar likhne ki zarurat nahi padti. Banking Systems, Hospital Management Systems, Student Management Systems aur Multimedia Applications me inheritance extensively use hoti hai.

## Definition of Inheritance

"Inheritance is the process by which one class acquires the properties and behaviors of another class."

Jo class properties provide karti hai use **Base Class** ya **Parent Class** kehte hain aur jo class properties inherit karti hai use **Derived Class** ya **Child Class** kehte hain.

## Need of Inheritance

Large software projects me same code ko multiple places par use karna padta hai.

Without inheritance:

- Code duplication hoti hai
- Program size increase hota hai
- Maintenance difficult ho jati hai

Inheritance ke through:

- Code reuse hota hai
- Development fast hoti hai
- Maintenance easy hoti hai

## Base Class and Derived Class

Example:

```cpp
class Student
{
};
```

Student Base Class hai.

```cpp
class Result : public Student
{
};
```

Result Derived Class hai.

Yahan Result class Student ki properties inherit karegi.

## General Syntax of Inheritance

```cpp
class DerivedClass : access_specifier BaseClass
{
};
```

Example:

```cpp
class B
{
};

class D : public B
{
};
```

## Types of Inheritance Based on Access Mode

C++ me mainly teen inheritance modes hote hain:

### Public Inheritance

### Private Inheritance

### Protected Inheritance

# 1. Public Inheritance

Public inheritance sabse commonly used inheritance mode hai.

## Syntax

```cpp
class Derived : public Base
{
};
```

## Access Rules

| Base Class Member | Derived Class Access |
|-------------------|---------------------|
| Public | Public |
| Protected | Protected |
| Private | Not Accessible |

## Diagram

```text
Base Class
    |
 Public
    |
Derived Class
```

## Example

```cpp
class Student
{
public:
    int roll;
};

class Result : public Student
{
public:
    int marks;
};
```

Yahan roll number public hi rahega.

## Advantages

- Maximum reusability
- Most natural inheritance
- Widely used in software development

# 2. Private Inheritance

Private inheritance me inherited members private ban jate hain.

## Syntax

```cpp
class Derived : private Base
{
};
```

## Access Rules

| Base Class Member | Derived Class Access |
|-------------------|---------------------|
| Public | Private |
| Protected | Private |
| Private | Not Accessible |

## Diagram

```text
Base Class
    |
 Private
    |
Derived Class
```

## Example

```cpp
class Student
{
public:
    int roll;
};

class Result : private Student
{
};
```

Yahan roll private ban jayega.

## Advantages

- Better data security
- Internal implementation hide hoti hai

## Limitations

- Reusability reduce ho sakti hai

# 3. Protected Inheritance

Protected inheritance public aur private ke beech ka mode hai.

## Syntax

```cpp
class Derived : protected Base
{
};
```

## Access Rules

| Base Class Member | Derived Class Access |
|-------------------|---------------------|
| Public | Protected |
| Protected | Protected |
| Private | Not Accessible |

## Diagram

```text
Base Class
    |
Protected
    |
Derived Class
```

## Example

```cpp
class Student
{
public:
    int roll;
};

class Result : protected Student
{
};
```

Yahan roll protected ban jayega.

## Advantages

- Controlled accessibility
- Useful in large projects

# Working of Inheritance

### Step 1

Base class create ki jati hai.

### Step 2

Derived class declare ki jati hai.

### Step 3

Inheritance mode specify kiya jata hai.

### Step 4

Derived class automatically base class members receive karti hai.

### Step 5

Objects create kiye jate hain.

### Step 6

Inherited members access kiye jate hain.

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
public:
    int roll;

    void getRoll()
    {
        cout<<"Enter Roll Number : ";
        cin>>roll;
    }
};

class Result : public Student
{
public:
    int marks;

    void getMarks()
    {
        cout<<"Enter Marks : ";
        cin>>marks;
    }

    void display()
    {
        cout<<"\nRoll Number : "<<roll;
        cout<<"\nMarks : "<<marks;
    }
};

void main()
{
    clrscr();

    Result r;

    r.getRoll();
    r.getMarks();

    r.display();

    getch();
}
```

## Output

```text
Enter Roll Number : 101
Enter Marks : 88

Roll Number : 101
Marks : 88
```

# Advantages of Inheritance

### Code Reusability

Existing code reuse kiya ja sakta hai.

### Faster Development

Programming time reduce hota hai.

### Easy Maintenance

Changes easily manage hote hain.

### Better Organization

Program structured rehta hai.

### Supports Polymorphism

Inheritance polymorphism ka base hai.

# Applications of Inheritance

### Banking Systems

Account → Saving Account → Current Account

### Hospital Management

Person → Doctor → Specialist

### Educational Systems

Student → UG Student → PG Student

### Multimedia Applications

Media → Audio → Video

### Game Development

Character → Warrior → Knight

# Difference Between Public, Private and Protected Inheritance

## Public Inheritance

Public members public rehte hain.

Most commonly used.

## Private Inheritance

Public members private ban jate hain.

Highest restriction.

## Protected Inheritance

Public members protected ban jate hain.

Moderate restriction.

# Conclusion

In conclusion, Inheritance C++ ka ek powerful Object-Oriented feature hai jo code reusability aur extensibility provide karta hai. Iske through ek class dusri class ki properties aur behaviors inherit kar sakti hai. Public, Private aur Protected inheritance different accessibility levels provide karte hain. Public inheritance sabse commonly used hai kyunki ye maximum reusability provide karti hai. Modern software development me inheritance ka bahut important role hai aur ye OOP ka foundation mana jata hai.



# Q2. Explain Base Class and Derived Class. Write C++ Programs Demonstrating Single Inheritance, Multiple Inheritance, Multilevel Inheritance, Hierarchical Inheritance and Hybrid Inheritance. Include Syntax and Algorithm.

## Introduction

Inheritance C++ ka ek important Object-Oriented Programming feature hai jo code reusability aur extensibility provide karta hai. Inheritance ke through ek class dusri class ki properties aur member functions ko inherit kar sakti hai. Is process me do important terms use hoti hain: **Base Class** aur **Derived Class**.

Base Class wo class hoti hai jisme original data members aur member functions define kiye jate hain. Derived Class wo class hoti hai jo Base Class ki properties ko inherit karti hai aur apne additional members bhi add kar sakti hai.

Inheritance software development me bahut useful hai kyunki isse duplicate code kam hota hai aur program ka structure organized rehta hai.

# Base Class

Base Class ko Parent Class ya Super Class bhi kaha jata hai.

Ye class apne data members aur functions ko derived classes ke liye provide karti hai.

## Example

```cpp
class Student
{
public:
    int roll;
};
```

Yahan Student Base Class hai.

# Derived Class

Derived Class ko Child Class ya Sub Class bhi kaha jata hai.

Ye class Base Class ki properties inherit karti hai.

## Example

```cpp
class Result : public Student
{
};
```

Yahan Result Derived Class hai.

# Syntax of Inheritance

```cpp
class DerivedClass : access_mode BaseClass
{
};
```

Example:

```cpp
class B
{
};

class D : public B
{
};
```

# Types of Inheritance

C++ me inheritance ke mainly five types hote hain:

1. Single Inheritance
2. Multiple Inheritance
3. Multilevel Inheritance
4. Hierarchical Inheritance
5. Hybrid Inheritance

# 1. Single Inheritance

Single Inheritance me ek Derived Class sirf ek Base Class se inherit karti hai.

## Diagram

```text
Base Class
     |
     |
Derived Class
```

## Syntax

```cpp
class A
{
};

class B : public A
{
};
```

## Algorithm

### Step 1

Create Base Class.

### Step 2

Create Derived Class.

### Step 3

Inherit Base Class.

### Step 4

Create Object.

### Step 5

Access Members.

### Step 6

Display Output.

### Step 7

Stop.

## Program

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
public:
    int roll;

    void getRoll()
    {
        cout<<"Enter Roll Number : ";
        cin>>roll;
    }
};

class Result : public Student
{
public:
    int marks;

    void getMarks()
    {
        cout<<"Enter Marks : ";
        cin>>marks;
    }

    void display()
    {
        cout<<"\nRoll Number : "<<roll;
        cout<<"\nMarks : "<<marks;
    }
};

void main()
{
    clrscr();

    Result r;

    r.getRoll();
    r.getMarks();

    r.display();

    getch();
}
```

## Output

```text
Enter Roll Number : 101
Enter Marks : 85

Roll Number : 101
Marks : 85
```

# 2. Multiple Inheritance

Multiple Inheritance me ek Derived Class multiple Base Classes se inherit karti hai.

## Diagram

```text
 Base1      Base2
    \        /
     \      /
      Derived
```

## Syntax

```cpp
class C : public A, public B
{
};
```

## Algorithm

### Step 1

Create Two Base Classes.

### Step 2

Create Derived Class.

### Step 3

Inherit Both Classes.

### Step 4

Create Object.

### Step 5

Access Members.

### Step 6

Display Output.

### Step 7

Stop.

## Program

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
public:
    void student()
    {
        cout<<"Student Information"<<endl;
    }
};

class Marks
{
public:
    void marks()
    {
        cout<<"Marks Information"<<endl;
    }
};

class Result : public Student, public Marks
{
};

void main()
{
    clrscr();

    Result r;

    r.student();
    r.marks();

    getch();
}
```

## Output

```text
Student Information
Marks Information
```

# 3. Multilevel Inheritance

Multilevel Inheritance me inheritance chain form me hoti hai.

## Diagram

```text
Class A
   |
Class B
   |
Class C
```

## Syntax

```cpp
class B : public A
{
};

class C : public B
{
};
```

## Algorithm

### Step 1

Create Base Class.

### Step 2

Create Intermediate Class.

### Step 3

Create Final Derived Class.

### Step 4

Create Object.

### Step 5

Access Members.

### Step 6

Display Result.

### Step 7

Stop.

## Program

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
public:
    void show1()
    {
        cout<<"Student Class"<<endl;
    }
};

class Marks : public Student
{
public:
    void show2()
    {
        cout<<"Marks Class"<<endl;
    }
};

class Result : public Marks
{
public:
    void show3()
    {
        cout<<"Result Class"<<endl;
    }
};

void main()
{
    clrscr();

    Result r;

    r.show1();
    r.show2();
    r.show3();

    getch();
}
```

## Output

```text
Student Class
Marks Class
Result Class
```

# 4. Hierarchical Inheritance

Hierarchical Inheritance me ek Base Class se multiple Derived Classes inherit karti hain.

## Diagram

```text
        Base
       /    \
      /      \
Derived1   Derived2
```

## Syntax

```cpp
class B : public A
{
};

class C : public A
{
};
```

## Algorithm

### Step 1

Create Base Class.

### Step 2

Create Multiple Derived Classes.

### Step 3

Create Objects.

### Step 4

Access Members.

### Step 5

Display Result.

### Step 6

Stop.

## Program

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
public:
    void show()
    {
        cout<<"Student Information"<<endl;
    }
};

class Result : public Student
{
};

class Sports : public Student
{
};

void main()
{
    clrscr();

    Result r;
    Sports s;

    r.show();
    s.show();

    getch();
}
```

## Output

```text
Student Information
Student Information
```

# 5. Hybrid Inheritance

Hybrid Inheritance do ya do se adhik inheritance types ka combination hota hai.

Ye practical software development me bahut common hai.

## Diagram

```text
      A
     / \
    B   C
     \ /
      D
```

## Syntax

```cpp
class B : public A
{
};

class C : public A
{
};

class D : public B, public C
{
};
```

## Algorithm

### Step 1

Create Base Class.

### Step 2

Create Derived Classes.

### Step 3

Combine Inheritance Types.

### Step 4

Create Object.

### Step 5

Access Members.

### Step 6

Display Output.

### Step 7

Stop.

## Program

```cpp
#include<iostream.h>
#include<conio.h>

class A
{
public:
    void display()
    {
        cout<<"Base Class"<<endl;
    }
};

class B : public A
{
};

class C : public A
{
};

class D : public B, public C
{
};

void main()
{
    clrscr();

    D obj;

    obj.B::display();

    getch();
}
```

## Output

```text
Base Class
```

# Advantages of Inheritance

### Code Reusability

Same code ko multiple classes me use kiya ja sakta hai.

### Reduced Program Size

Duplicate code avoid hota hai.

### Easy Maintenance

Changes ek hi place par karne padte hain.

### Faster Development

Development time reduce hota hai.

### Better Program Structure

Program modular aur organized banta hai.

# Applications of Inheritance

### Banking Systems

Account → Savings Account → Current Account

### Hospital Management

Person → Doctor → Specialist

### Educational Systems

Student → UG Student → PG Student

### Multimedia Applications

Media → Audio → Video

### Game Development

Character → Warrior → Knight

### E-Commerce Systems

Product → Electronics → Mobile

# Comparison of Different Types of Inheritance

## Single Inheritance

One Base → One Derived

## Multiple Inheritance

Multiple Base → One Derived

## Multilevel Inheritance

Inheritance Chain

## Hierarchical Inheritance

One Base → Multiple Derived

## Hybrid Inheritance

Combination of Multiple Types

# Conclusion

In conclusion, Base Class aur Derived Class inheritance ke fundamental components hain. Base Class properties aur behaviors provide karti hai jabki Derived Class unhe inherit karti hai. Single, Multiple, Multilevel, Hierarchical aur Hybrid inheritance different programming requirements ko fulfill karte hain. Inheritance code reusability, maintainability aur modularity provide karti hai, isliye modern Object-Oriented Programming aur software development me iska bahut important role hai.



# Q3. What is Multiple Inheritance? Explain Constructor Invocation in Multiple Inheritance and Discuss Ambiguity Problems with Suitable Programs.

## Introduction

Inheritance Object-Oriented Programming ka ek important feature hai jo code reusability aur extensibility provide karta hai. C++ me inheritance ke kai types hote hain, jinme se **Multiple Inheritance** sabse powerful aur advanced inheritance type mana jata hai.

Multiple Inheritance me ek Derived Class ek se adhik Base Classes se properties aur member functions inherit karti hai. Is feature ki wajah se programmer different classes ki functionalities ko combine karke ek powerful class create kar sakta hai.

Real-world software systems jaise Multimedia Applications, Graphics Software, Banking Systems aur Game Development me Multiple Inheritance extensively use hota hai.

Lekin Multiple Inheritance ke saath kuch challenges bhi aate hain, jaise Constructor Invocation aur Ambiguity Problem. In concepts ko samajhna C++ programming ke liye bahut important hai.

# What is Multiple Inheritance?

Multiple Inheritance wo inheritance type hai jisme ek Derived Class multiple Base Classes se inherit karti hai.

## Definition

"Multiple Inheritance is a type of inheritance in which a single derived class inherits properties and behaviors from more than one base class."

## Example

Agar ek class Student Information store karti hai aur dusri class Marks Information store karti hai, to Result class dono classes ko inherit kar sakti hai.

# Diagram of Multiple Inheritance

```text
     Student      Marks
         \         /
          \       /
            Result
```

Yahan Result class dono base classes ki properties inherit karegi.

# Syntax of Multiple Inheritance

```cpp
class DerivedClass :
public BaseClass1,
public BaseClass2
{
};
```

## Example

```cpp
class Student
{
};

class Marks
{
};

class Result :
public Student,
public Marks
{
};
```

# Working of Multiple Inheritance

### Step 1

Multiple Base Classes create ki jati hain.

### Step 2

Derived Class declare ki jati hai.

### Step 3

Base Classes inherit ki jati hain.

### Step 4

Object create hota hai.

### Step 5

Inherited members access kiye jate hain.

### Step 6

Output display hota hai.

# Program Demonstrating Multiple Inheritance

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
public:

    void showStudent()
    {
        cout<<"Student Information"<<endl;
    }
};

class Marks
{
public:

    void showMarks()
    {
        cout<<"Marks Information"<<endl;
    }
};

class Result :
public Student,
public Marks
{
};

void main()
{
    clrscr();

    Result r;

    r.showStudent();
    r.showMarks();

    getch();
}
```

# Output

```text
Student Information
Marks Information
```

# Advantages of Multiple Inheritance

## Code Reusability

Multiple classes ka code reuse kiya ja sakta hai.

## Reduced Program Size

Duplicate code avoid hota hai.

## Better Modularity

Different functionalities separate classes me organize hoti hain.

## Improved Maintainability

Software manage karna easy ho jata hai.

## Supports Complex Systems

Large-scale applications ke liye useful hai.

# Constructor Invocation in Multiple Inheritance

## Introduction

Jab Derived Class ka object create hota hai to constructors automatically execute hote hain.

Multiple Inheritance me question aata hai:

"Sabse pehle kaunsa constructor execute hoga?"

C++ me Base Class constructors pehle execute hote hain aur Derived Class constructor baad me execute hota hai.

# Rule of Constructor Invocation

### Rule 1

Base Class Constructors First Execute.

### Rule 2

Order inheritance declaration ke according hota hai.

### Rule 3

Derived Class Constructor sabse last me execute hota hai.

# Example

```cpp
class A
{
};

class B
{
};

class C : public A, public B
{
};
```

Execution Order:

```text
A Constructor
B Constructor
C Constructor
```

# Program Demonstrating Constructor Invocation

```cpp
#include<iostream.h>
#include<conio.h>

class A
{
public:

    A()
    {
        cout<<"Constructor of A"<<endl;
    }
};

class B
{
public:

    B()
    {
        cout<<"Constructor of B"<<endl;
    }
};

class C :
public A,
public B
{
public:

    C()
    {
        cout<<"Constructor of C"<<endl;
    }
};

void main()
{
    clrscr();

    C obj;

    getch();
}
```

# Output

```text
Constructor of A
Constructor of B
Constructor of C
```

# Explanation

Object:

```cpp
C obj;
```

Create hote hi:

1. Constructor A
2. Constructor B
3. Constructor C

Execute honge.

# Destructor Invocation

Constructors ke opposite order me destructors execute hote hain.

Example:

```text
Destructor of C
Destructor of B
Destructor of A
```

# Ambiguity Problem in Multiple Inheritance

## Introduction

Multiple Inheritance ka sabse common problem **Ambiguity Problem** hai.

Jab do Base Classes me same naam ka function ya variable hota hai aur Derived Class dono ko inherit karti hai, to compiler confuse ho jata hai.

Isi situation ko Ambiguity Problem kehte hain.

## Definition

"Ambiguity occurs when the compiler cannot determine which inherited member should be used."

# Example of Ambiguity

```cpp
class A
{
public:
    void show()
    {
    }
};

class B
{
public:
    void show()
    {
    }
};

class C :
public A,
public B
{
};
```

Ab:

```cpp
C obj;

obj.show();
```

Compiler decide nahi kar paega ki:

```cpp
A::show()
```

call kare ya

```cpp
B::show()
```

# Program Showing Ambiguity

```cpp
#include<iostream.h>
#include<conio.h>

class A
{
public:

    void show()
    {
        cout<<"Class A"<<endl;
    }
};

class B
{
public:

    void show()
    {
        cout<<"Class B"<<endl;
    }
};

class C :
public A,
public B
{
};

void main()
{
    clrscr();

    C obj;

    obj.show();

    getch();
}
```

Compiler Error:

```text
Ambiguous Function Call
```

# Resolving Ambiguity Using Scope Resolution Operator

Ambiguity ko solve karne ke liye Scope Resolution Operator (::) use kiya jata hai.

# Correct Program

```cpp
#include<iostream.h>
#include<conio.h>

class A
{
public:

    void show()
    {
        cout<<"Class A"<<endl;
    }
};

class B
{
public:

    void show()
    {
        cout<<"Class B"<<endl;
    }
};

class C :
public A,
public B
{
};

void main()
{
    clrscr();

    C obj;

    obj.A::show();

    obj.B::show();

    getch();
}
```

# Output

```text
Class A
Class B
```

# Diamond Problem

Multiple Inheritance me ek special ambiguity problem hoti hai jise Diamond Problem kehte hain.

## Diagram

```text
        A
       / \
      /   \
     B     C
      \   /
       \ /
        D
```

Class D ko A ke members do paths se milte hain:

```text
A → B → D

A → C → D
```

Is wajah se ambiguity create ho sakti hai.

# Solution of Diamond Problem

Virtual Base Class use ki jati hai.

Example:

```cpp
class B : virtual public A
{
};

class C : virtual public A
{
};
```

# Algorithm

## Algorithm for Constructor Invocation

### Step 1

Create Base Classes.

### Step 2

Define Constructors.

### Step 3

Create Derived Class.

### Step 4

Create Object.

### Step 5

Observe Constructor Execution Order.

### Step 6

Display Result.

### Step 7

Stop.

# Algorithm for Ambiguity Resolution

### Step 1

Create Two Base Classes.

### Step 2

Define Same Function Name.

### Step 3

Create Derived Class.

### Step 4

Create Object.

### Step 5

Use Scope Resolution Operator.

### Step 6

Display Output.

### Step 7

Stop.

# Applications of Multiple Inheritance

## Multimedia Systems

Audio + Video Features combine karne ke liye.

## Game Development

Character + Weapon Classes combine karne ke liye.

## Graphics Applications

Shape + Color Classes combine karne ke liye.

## Banking Software

Customer + Account Classes combine karne ke liye.

## Scientific Software

Multiple functionalities integrate karne ke liye.

# Advantages of Multiple Inheritance

### Code Reusability

### Better Modularity

### Reduced Development Time

### Flexible Program Design

### Supports Complex Applications

# Limitations of Multiple Inheritance

### Ambiguity Problem

### Diamond Problem

### Increased Complexity

### Difficult Debugging

### Maintenance Challenges

# Conclusion

In conclusion, Multiple Inheritance C++ ka ek powerful feature hai jo ek Derived Class ko multiple Base Classes ki properties aur behaviors inherit karne ki facility provide karta hai. Iske through code reusability aur modularity improve hoti hai. Multiple Inheritance me Constructor Invocation inheritance order ke according hota hai aur Base Class constructors pehle execute hote hain. Is inheritance type ka major drawback Ambiguity Problem hai, jise Scope Resolution Operator aur Virtual Base Classes ke through solve kiya ja sakta hai. Modern software development, multimedia systems aur large-scale applications me Multiple Inheritance ka important role hai.



# Q4. Explain Abstract Base Class and Pure Virtual Functions. Write a C++ Program Illustrating an Abstract Base Class.

## Introduction

Object-Oriented Programming (OOP) ka main objective real-world entities ko software me represent karna hai. C++ me inheritance aur polymorphism jaise powerful features isi purpose ko achieve karne ke liye use kiye jate hain. Polymorphism ko effectively implement karne ke liye C++ **Abstract Base Class** aur **Pure Virtual Functions** provide karta hai.

Kai situations me programmer ek aisi base class create karna chahta hai jo sirf common structure define kare lekin uska object create na kiya ja sake. Is purpose ke liye Abstract Base Class use ki jati hai.

Abstract Base Class derived classes ke liye blueprint provide karti hai aur ensure karti hai ki derived classes required functions ko implement karein. Is concept ka use large software systems, multimedia applications, graphics software, game development aur database management systems me extensively hota hai.

# What is an Abstract Base Class?

Abstract Base Class ek aisi class hoti hai jisme kam se kam ek Pure Virtual Function present hota hai.

Abstract Base Class ka object create nahi kiya ja sakta.

Ye sirf inheritance ke liye use hoti hai.

## Definition

"An Abstract Base Class is a class that contains at least one Pure Virtual Function and cannot be instantiated."

Abstract Base Class derived classes ke liye common interface provide karti hai.

# Need of Abstract Base Class

Large applications me multiple derived classes hoti hain jo same type ke operations perform karti hain.

Example:

- Circle
- Rectangle
- Triangle

Sab shapes hain aur sabka area calculate kiya ja sakta hai.

Lekin har shape ka area formula different hota hai.

Isliye Base Class sirf function declare karti hai aur implementation derived classes provide karti hain.

# Characteristics of Abstract Base Class

## Cannot Create Objects

Abstract Base Class ka object create nahi kiya ja sakta.

## Supports Polymorphism

Run-time polymorphism implement karne me help karti hai.

## Contains Pure Virtual Functions

Kam se kam ek Pure Virtual Function zarur hota hai.

## Acts as a Blueprint

Derived classes ke liye structure provide karti hai.

# What is a Virtual Function?

Virtual Function ek member function hota hai jo run-time polymorphism support karta hai.

Base class me declare kiya jata hai aur derived class me redefine kiya ja sakta hai.

## Syntax

```cpp
virtual void display()
{
}
```

# What is a Pure Virtual Function?

Pure Virtual Function wo virtual function hota hai jiska implementation Base Class me nahi diya jata.

Sirf declaration di jati hai.

## Definition

"A Pure Virtual Function is a virtual function with no implementation in the base class."

## Syntax

```cpp
virtual void display() = 0;
```

Yahan:

```cpp
= 0
```

Pure Virtual Function ko indicate karta hai.

# Example of Pure Virtual Function

```cpp
class Shape
{
public:

    virtual void area() = 0;
};
```

Yahan:

```cpp
area()
```

Pure Virtual Function hai.

Aur:

```cpp
Shape
```

Abstract Base Class ban gayi.

# Relationship Between Abstract Base Class and Pure Virtual Function

Jab kisi class me Pure Virtual Function declare hota hai to wo class automatically Abstract Base Class ban jati hai.

Example:

```cpp
class Shape
{
public:

    virtual void area() = 0;
};
```

Is class ka object create nahi ho sakta.

# Working of Abstract Base Class

### Step 1

Base Class create ki jati hai.

### Step 2

Pure Virtual Function declare kiya jata hai.

### Step 3

Derived Class function implement karti hai.

### Step 4

Base Class pointer create kiya jata hai.

### Step 5

Pointer derived object ko point karta hai.

### Step 6

Run-time par correct function execute hota hai.

# Syntax of Abstract Base Class

```cpp
class Base
{
public:

    virtual void show() = 0;
};
```

Derived Class:

```cpp
class Derived : public Base
{
public:

    void show()
    {
    }
};
```

# Example Without Program

Consider:

```text
Animal
```

Base Class hai.

Animals:

- Dog
- Cat
- Cow

Sab sound produce karte hain.

Lekin:

```text
Dog → Bark

Cat → Meow

Cow → Moo
```

Sound ka implementation different hai.

Isliye:

```cpp
virtual void sound()=0;
```

use kiya jata hai.

# Algorithm

## Algorithm for Abstract Base Class Program

### Step 1

Start Program.

### Step 2

Create Abstract Base Class.

### Step 3

Declare Pure Virtual Function.

### Step 4

Create Derived Class.

### Step 5

Implement Function.

### Step 6

Create Object.

### Step 7

Create Base Class Pointer.

### Step 8

Call Function.

### Step 9

Display Result.

### Step 10

Stop Program.

# Turbo C++ Program

```cpp
#include<iostream.h>
#include<conio.h>

class Shape
{
public:

    virtual void area() = 0;
};

class Rectangle : public Shape
{
    int length,breadth;

public:

    Rectangle(int l,int b)
    {
        length=l;
        breadth=b;
    }

    void area()
    {
        cout<<"Area = "
            <<length*breadth;
    }
};

void main()
{
    clrscr();

    Shape *ptr;

    Rectangle r(10,5);

    ptr=&r;

    ptr->area();

    getch();
}
```

# Output

```text
Area = 50
```

# Explanation

Abstract Base Class:

```cpp
Shape
```

Pure Virtual Function:

```cpp
virtual void area()=0;
```

Derived Class:

```cpp
Rectangle
```

Function Implementation:

```cpp
void area()
{
}
```

Base Pointer:

```cpp
Shape *ptr;
```

Pointer derived object ko point karta hai aur run-time par correct function call hota hai.

# Another Example

```cpp
class Animal
{
public:

    virtual void sound() = 0;
};
```

Derived Classes:

```cpp
Dog
Cat
Cow
```

Har class apna sound function implement karegi.

# Advantages of Abstract Base Class

## Code Reusability

Common functionality ek place par define hoti hai.

## Better Program Structure

Program organized rehta hai.

## Supports Polymorphism

Run-time polymorphism possible hota hai.

## Data Abstraction

Implementation details hide hoti hain.

## Easy Maintenance

Changes manage karna easy hota hai.

# Advantages of Pure Virtual Functions

### Mandatory Implementation

Derived classes ko function implement karna hi padta hai.

### Interface Creation

Common interface provide karti hain.

### Better Flexibility

Different implementations possible hoti hain.

### Improved Software Design

Programs modular bante hain.

# Applications of Abstract Base Class

## Graphics Software

Shape → Circle, Rectangle, Triangle

## Multimedia Applications

Media → Audio, Video

## Banking Systems

Account → Savings, Current

## Game Development

Character → Warrior, Archer

## Database Systems

Database → MySQL, Oracle

## Educational Software

Student → UG, PG

# Difference Between Virtual Function and Pure Virtual Function

## Virtual Function

Implementation available hoti hai.

Object create ho sakta hai.

Optional overriding hoti hai.

Example:

```cpp
virtual void show()
{
}
```

## Pure Virtual Function

Implementation available nahi hoti.

Abstract Class create hoti hai.

Overriding compulsory hoti hai.

Example:

```cpp
virtual void show()=0;
```

# Limitations of Abstract Base Class

### Cannot Create Objects

Direct object creation possible nahi.

### Slightly Complex

Beginners ke liye difficult ho sakta hai.

### Extra Design Effort

Proper hierarchy design karni padti hai.

# Real Life Example

Shape Class ko consider karo.

Har shape:

- Area calculate karti hai.
- Perimeter calculate karti hai.

Lekin formula har shape ke liye different hota hai.

Isliye:

```cpp
virtual void area()=0;
```

Base class me define karte hain aur implementation derived classes provide karti hain.

# Conclusion

In conclusion, Abstract Base Class aur Pure Virtual Functions C++ ke powerful Object-Oriented features hain jo abstraction aur polymorphism provide karte hain. Abstract Base Class ek blueprint ki tarah kaam karti hai aur uska object create nahi kiya ja sakta. Pure Virtual Functions derived classes ko compulsory implementation provide karne ke liye force karti hain. Ye concepts large-scale software development, multimedia applications, graphics systems aur game development me extensively use hote hain. Isliye Abstract Base Class aur Pure Virtual Functions C++ programming ke fundamental concepts mane jate hain.


# Q5. Explain Pointers in C++. Discuss Addresses, Pointers, Pointers with Strings, and Dynamic Memory Allocation Using new and delete. Write Programs for Pointer Basics, Pointer to String, and Dynamic Memory Allocation.

## Introduction

Pointers C++ ki sabse powerful aur important features me se ek hain. Pointers programmer ko memory ke saath directly work karne ki facility provide karte hain. C language ki tarah C++ me bhi pointers extensively use hote hain aur ye efficient memory management, dynamic memory allocation aur advanced programming techniques ke liye bahut important hote hain.

Har variable memory me kisi na kisi location par store hota hai aur us location ka ek unique address hota hai. Pointer ek special variable hota hai jo kisi doosre variable ka address store karta hai.

Pointers ka use Data Structures, Operating Systems, Database Systems, Multimedia Applications, Game Development aur System Software me extensively hota hai.

# What is a Pointer?

Pointer ek aisa variable hota hai jo kisi doosre variable ka memory address store karta hai.

## Definition

"A pointer is a variable that stores the memory address of another variable."

Example:

```cpp
int a = 10;
```

Agar variable:

```cpp
a
```

Memory location:

```text
1000
```

Par store hai to pointer us address ko store karega.

# Memory Address

Computer memory bahut saare memory locations ka collection hoti hai.

Har location ka unique address hota hai.

Example:

```text
Variable     Value     Address

a             10       1000
b             20       1002
```

Address ko access karne ke liye Address Operator (&) use kiya jata hai.

## Syntax

```cpp
&variable_name
```

## Example

```cpp
int a=10;

cout<<&a;
```

# Pointer Declaration

Pointer declare karne ke liye asterisk (*) use kiya jata hai.

## Syntax

```cpp
data_type *pointer_name;
```

## Example

```cpp
int *ptr;
```

Yahan:

```cpp
ptr
```

Integer variable ka address store karega.

# Pointer Initialization

Pointer ko kisi variable ke address se initialize kiya jata hai.

## Syntax

```cpp
pointer = &variable;
```

## Example

```cpp
int a=10;

int *ptr;

ptr=&a;
```

# Dereferencing Operator

Pointer ke through actual value access karne ke liye * operator use hota hai.

## Syntax

```cpp
*pointer_name
```

## Example

```cpp
cout<<*ptr;
```

Output:

```text
10
```

# Working of Pointer

### Step 1

Variable create hota hai.

### Step 2

Memory allocate hoti hai.

### Step 3

Pointer address store karta hai.

### Step 4

Dereference operator value access karta hai.

# Pointer Basics

## Example

```cpp
int a=10;

int *ptr=&a;
```

Memory Representation:

```text
a = 10

Address of a = 1000

ptr = 1000

*ptr = 10
```

# Syntax of Pointer Basics

```cpp
int a;

int *ptr;

ptr=&a;
```

# Algorithm (Pointer Basics)

### Step 1

Start Program.

### Step 2

Declare Integer Variable.

### Step 3

Declare Pointer.

### Step 4

Store Address.

### Step 5

Display Value and Address.

### Step 6

Stop Program.

# Program: Pointer Basics

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int a=10;

    int *ptr;

    ptr=&a;

    cout<<"Value of a = "<<a<<endl;

    cout<<"Address of a = "<<ptr<<endl;

    cout<<"Value using Pointer = "
        <<*ptr;

    getch();
}
```

# Output

```text
Value of a = 10

Address of a = 65524

Value using Pointer = 10
```

# Pointers with Strings

## Introduction

Strings character arrays hoti hain.

Pointer string ke first character ka address store karta hai.

String pointers text processing aur string manipulation ke liye use hote hain.

# Syntax

```cpp
char *ptr;
```

## Example

```cpp
char str[]="HELLO";

char *ptr=str;
```

# Working

### Step 1

String create hoti hai.

### Step 2

Pointer first character ka address store karta hai.

### Step 3

Pointer string access karta hai.

# Algorithm (Pointer to String)

### Step 1

Start Program.

### Step 2

Create String.

### Step 3

Declare Character Pointer.

### Step 4

Store String Address.

### Step 5

Display String.

### Step 6

Stop Program.

# Program: Pointer to String

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    char str[]="MULTIMEDIA";

    char *ptr;

    ptr=str;

    cout<<"String = "<<ptr;

    getch();
}
```

# Output

```text
String = MULTIMEDIA
```

# Advantages of String Pointers

### Fast Processing

### Efficient Memory Usage

### Easy String Manipulation

### Useful in Text Processing

# Dynamic Memory Allocation

## Introduction

Normal variables compile-time memory allocation use karte hain.

Kabhi-kabhi program execution ke dauran memory allocate karni padti hai.

Is process ko Dynamic Memory Allocation kehte hain.

C++ me:

```cpp
new
```

Aur

```cpp
delete
```

Operators use kiye jate hain.

# new Operator

new operator run-time par memory allocate karta hai.

## Syntax

```cpp
pointer = new data_type;
```

## Example

```cpp
int *ptr;

ptr=new int;
```

# delete Operator

delete operator dynamically allocated memory release karta hai.

## Syntax

```cpp
delete pointer;
```

## Example

```cpp
delete ptr;
```

# Working of Dynamic Memory Allocation

### Step 1

Pointer create hota hai.

### Step 2

new memory allocate karta hai.

### Step 3

Data store hota hai.

### Step 4

delete memory release karta hai.

# Algorithm (Dynamic Memory Allocation)

### Step 1

Start Program.

### Step 2

Declare Pointer.

### Step 3

Allocate Memory using new.

### Step 4

Store Value.

### Step 5

Display Value.

### Step 6

Release Memory using delete.

### Step 7

Stop Program.

# Program: Dynamic Memory Allocation

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int *ptr;

    ptr=new int;

    *ptr=100;

    cout<<"Value = "<<*ptr;

    delete ptr;

    getch();
}
```

# Output

```text
Value = 100
```

# Advantages of Dynamic Memory Allocation

## Efficient Memory Usage

Required memory hi allocate hoti hai.

## Run-Time Flexibility

Program execution ke dauran memory allocate ho sakti hai.

## Better Resource Management

Unused memory release ki ja sakti hai.

## Useful for Large Applications

Large software systems me useful hai.

# Applications of Pointers

## Data Structures

Linked List

Stack

Queue

Tree

Graph

## Operating Systems

Memory Management

## Database Systems

Record Handling

## Multimedia Applications

Audio aur Video Buffer Management

## Game Development

Dynamic Objects

## Networking Software

Packet Processing

# Advantages of Pointers

### Fast Access

Memory directly access hoti hai.

### Dynamic Memory Management

### Efficient Programming

### Supports Advanced Data Structures

### Better Performance

# Limitations of Pointers

### Memory Leaks

delete na karne par memory leak ho sakti hai.

### Dangling Pointers

Invalid memory access ho sakta hai.

### Complex Debugging

Errors find karna difficult ho sakta hai.

### Security Risks

Wrong pointer usage crashes cause kar sakti hai.

# Difference Between Static and Dynamic Memory Allocation

## Static Memory Allocation

Compile-time allocation hoti hai.

Size fixed hota hai.

Example:

```cpp
int a;
```

## Dynamic Memory Allocation

Run-time allocation hoti hai.

Size flexible hota hai.

Example:

```cpp
int *ptr=new int;
```

# Real Life Example

Hospital Management System me patients ki exact count pehle se known nahi hoti.

Program run-time par memory allocate karta hai.

Isi tarah:

- Student Records
- Database Entries
- Multimedia Buffers

Dynamic memory allocation use karte hain.

# Conclusion

In conclusion, Pointers C++ ka ek powerful feature hain jo memory addresses ko store aur manipulate karne ki facility provide karte hain. Pointers efficient memory access, string processing aur advanced programming techniques ke liye use hote hain. Dynamic Memory Allocation ke through programmer run-time par memory allocate aur release kar sakta hai using new and delete operators. Pointers Data Structures, Operating Systems, Multimedia Applications aur Game Development me extensively use hote hain. Isliye pointers ko C++ programming ka ek fundamental aur essential concept mana jata hai.
