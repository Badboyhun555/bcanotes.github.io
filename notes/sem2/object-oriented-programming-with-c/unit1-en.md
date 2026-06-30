# Q1. Define Object Oriented Programming. Explain the Concepts of Class, Object, Encapsulation, Inheritance, and Polymorphism with Suitable Examples. Compare OOP with Procedure-Oriented Programming.

## Introduction

Object Oriented Programming (OOP) modern software development ka ek important programming paradigm hai jo real-world entities ko objects ke form me represent karta hai. Traditional programming approaches me programs functions aur procedures ke around organize kiye jate the, lekin OOP data aur functions ko ek single unit me combine karke software development ko more secure, reusable aur manageable banata hai.

C++ ek powerful Object-Oriented Programming language hai jo programmers ko classes aur objects ke through complex software systems develop karne ki facility provide karti hai. OOP ka main objective real-world problems ko efficiently solve karna aur software maintenance ko easy banana hota hai.

Large-scale applications jaise Banking Systems, Hospital Management Systems, E-Commerce Platforms, Mobile Applications aur Game Development me OOP extensively use ki jati hai.

## Definition of Object Oriented Programming

Object Oriented Programming ek programming approach hai jisme data aur functions ko objects ke form me organize kiya jata hai.

In OOP, programs real-world entities ko objects ke roop me represent karte hain aur objects ke beech interaction ke through tasks perform kiye jate hain.

### Definition

"Object Oriented Programming is a programming methodology that organizes software design around objects containing data and functions."

OOP ka focus data security, code reusability aur modularity par hota hai.

## Features of OOP

Object Oriented Programming ki kuch important features hain:

- Class
- Object
- Encapsulation
- Inheritance
- Polymorphism
- Abstraction
- Data Hiding
- Code Reusability

Ye features software development ko efficient aur systematic banate hain.

# Class

Class OOP ka fundamental building block hai.

Class ek user-defined data type hoti hai jo objects create karne ke liye blueprint ya template provide karti hai.

Class data members aur member functions ka collection hoti hai.

## Definition of Class

Class ek logical entity hai jo object ki properties aur behaviors define karti hai.

### Example

Student Class:

Properties:

- Name
- Roll Number
- Marks

Behaviors:

- Input Data
- Display Data

### C++ Example

```cpp
class Student
{
public:
    string name;
    int roll;
};
```

Yahan Student ek class hai.

## Advantages of Class

- Code Organization
- Reusability
- Modularity
- Easy Maintenance

# Object

Object class ka instance hota hai.

Object memory occupy karta hai aur class ke members ko access kar sakta hai.

Real-world entities ko OOP me objects ke roop me represent kiya jata hai.

## Example

Agar "Student" ek class hai to:

Rahul, Mohan aur Priya us class ke objects ho sakte hain.

### C++ Example

```cpp
Student s1;
Student s2;
```

Yahan s1 aur s2 Student class ke objects hain.

## Characteristics of Object

### State

Object ki properties.

### Behavior

Object ke functions.

### Identity

Object ka unique existence.

# Encapsulation

Encapsulation OOP ka important concept hai.

Isme data aur functions ko ek single unit me combine kiya jata hai.

Data ko unauthorized access se protect bhi kiya jata hai.

## Definition

"Encapsulation is the process of wrapping data and functions into a single unit."

### Example

Bank Account

Account Balance ko directly access nahi kiya ja sakta.

Deposit aur Withdraw functions ke through hi modify kiya ja sakta hai.

### C++ Example

```cpp
class Account
{
private:
    int balance;

public:
    void deposit(int amount)
    {
        balance += amount;
    }
};
```

## Advantages of Encapsulation

### Data Security

Sensitive data protected rehta hai.

### Better Control

Data access control possible hota hai.

### Improved Maintenance

Code management easy ho jata hai.

# Inheritance

Inheritance ek mechanism hai jisme ek class dusri class ki properties aur functions inherit karti hai.

Inheritance code reusability ko increase karta hai.

## Definition

"Inheritance is the process by which one class acquires the properties and behaviors of another class."

## Types of Inheritance

### Single Inheritance

One Base Class → One Derived Class

### Multiple Inheritance

Multiple Base Classes → One Derived Class

### Multilevel Inheritance

Class A → Class B → Class C

### Hierarchical Inheritance

One Base Class → Multiple Derived Classes

### Hybrid Inheritance

Combination of multiple inheritance types.

### Example

Vehicle → Car

Car Vehicle ki properties inherit karegi.

### C++ Example

```cpp
class Vehicle
{
public:
    void start()
    {
        cout<<"Vehicle Started";
    }
};

class Car : public Vehicle
{
};
```

## Advantages of Inheritance

- Code Reusability
- Faster Development
- Easy Maintenance
- Reduced Redundancy

# Polymorphism

Polymorphism ka matlab hai "Many Forms".

Ek hi function ya object multiple forms me behave kar sakta hai.

## Definition

"Polymorphism is the ability of a function or object to take multiple forms."

## Types of Polymorphism

### Compile Time Polymorphism

Function Overloading

Operator Overloading

### Run Time Polymorphism

Function Overriding

Virtual Functions

### Example

```cpp
class Shape
{
public:
    void draw()
    {
        cout<<"Drawing Shape";
    }
};
```

Different shapes same draw() function ko different ways me implement kar sakte hain.

## Advantages of Polymorphism

### Flexibility

Same interface multiple implementations support karta hai.

### Code Reusability

Less code duplication hoti hai.

### Extensibility

New features easily add ki ja sakti hain.

# Comparison Between OOP and Procedure-Oriented Programming

## Program Structure

Procedure-Oriented Programming functions ke around organized hoti hai.

OOP objects aur classes ke around organized hoti hai.

## Focus

POP functions par focus karti hai.

OOP data aur objects par focus karti hai.

## Data Security

POP me data less secure hota hai.

OOP me encapsulation ke through data secure rehta hai.

## Code Reusability

POP me limited reusability hoti hai.

OOP inheritance ke through high reusability provide karti hai.

## Maintenance

POP large projects me difficult ho sakti hai.

OOP maintenance-friendly hoti hai.

## Real-World Modeling

POP real-world entities ko efficiently represent nahi karti.

OOP real-world modeling ke liye ideal hai.

## Examples

POP Languages:

- C
- Pascal

OOP Languages:

- C++
- Java
- C#
- Python

# Applications of OOP

Object Oriented Programming ka use:

### Banking Systems

Customer aur Account management.

### Hospital Management Systems

Patient records handling.

### E-Commerce Applications

Products aur orders management.

### Game Development

Characters aur objects creation.

### Mobile Applications

Android aur iOS development.

### Enterprise Software

Large business applications.

# Advantages of OOP

### Code Reusability

Inheritance ke through.

### Security

Encapsulation ke through.

### Modularity

Program manageable modules me divide hota hai.

### Easy Maintenance

Large projects maintain karna easy hota hai.

### Scalability

New features easily add ki ja sakti hain.

# Conclusion

In conclusion, Object Oriented Programming modern software development ka powerful programming paradigm hai jo classes aur objects ke through real-world problems ko efficiently solve karta hai. Class object ka blueprint provide karti hai, Object class ka instance hota hai, Encapsulation data security provide karti hai, Inheritance code reusability increase karti hai aur Polymorphism flexibility provide karta hai. Procedure-Oriented Programming ke comparison me OOP more secure, reusable aur maintainable approach hai. Isi wajah se aaj ke most modern software systems OOP concepts par based hote hain.


# Q2. Explain the Structure of a C++ Program. Discuss Tokens, Identifiers, Keywords, Constants, Variables, and Data Types with Suitable Examples.

## Introduction

C++ ek powerful, general-purpose aur Object-Oriented Programming language hai jo software development, system programming, game development, embedded systems aur enterprise applications me extensively use ki jati hai. C++ ko Bjarne Stroustrup ne develop kiya tha aur ye C language ka extension hai. C++ procedural aur object-oriented dono programming paradigms ko support karti hai.

Kisi bhi programming language ko effectively use karne ke liye uski basic structure aur fundamental elements ko samajhna bahut important hota hai. C++ program different components se milkar bana hota hai jaise tokens, identifiers, keywords, constants, variables aur data types. Ye sab components milkar program ko meaningful aur executable banate hain.

Programmer ko C++ program ki structure aur syntax ki proper knowledge honi chahiye taaki error-free aur efficient programs develop kiye ja saken.

# Structure of a C++ Program

C++ program ek predefined structure follow karta hai. Is structure ke different parts specific functions perform karte hain.

## Basic Structure of a C++ Program

```cpp
#include <iostream>
using namespace std;

int main()
{
    cout << "Hello World";
    return 0;
}
```

Ye ek simple C++ program hai jo screen par "Hello World" print karta hai.

## Components of C++ Program Structure

### 1. Documentation Section

Program ke beginning me comments likhe jate hain jo program ke purpose ko explain karte hain.

Example:

```cpp
// Program to display Hello World
```

Comments compiler dwara execute nahi kiye jate.

### 2. Preprocessor Directive

Header files include karne ke liye use hoti hai.

Example:

```cpp
#include <iostream>
```

Yahan iostream input-output operations ke liye required header file hai.

### 3. Namespace Declaration

Namespace standard library components ko access karne ke liye use hota hai.

Example:

```cpp
using namespace std;
```

Iske bina hume cout aur cin ke saath std:: likhna padega.

### 4. Main Function

Program execution hamesha main() function se start hota hai.

Example:

```cpp
int main()
{
}
```

### 5. Program Statements

Program ke actual instructions yahan likhe jate hain.

Example:

```cpp
cout << "Hello";
```

### 6. Return Statement

Program successful execution indicate karta hai.

Example:

```cpp
return 0;
```

# Tokens in C++

Token C++ program ki smallest individual unit hoti hai.

Compiler program ko tokens ke form me analyze karta hai.

## Definition

"A token is the smallest meaningful element of a C++ program."

### Example

```cpp
int a = 10;
```

Is statement ke tokens hain:

```cpp
int
a
=
10
;
```

## Types of Tokens

- Keywords
- Identifiers
- Constants
- Operators
- Special Symbols
- Strings

# Keywords

Keywords predefined reserved words hote hain jinhe compiler specific meaning assign karta hai.

Programmer keywords ko variable ya function names ke roop me use nahi kar sakta.

## Examples of Keywords

```cpp
int
float
double
char
if
else
while
for
return
class
public
private
```

### Example

```cpp
int age;
```

Yahan int ek keyword hai.

## Characteristics of Keywords

- Predefined Meaning
- Reserved Words
- Compiler Recognized
- User Defined Nahi Ho Sakte

## Common C++ Keywords

| Keyword | Purpose |
|----------|----------|
| int | Integer Data Type |
| float | Floating Point Data Type |
| if | Decision Making |
| else | Alternative Condition |
| while | Looping |
| class | Class Declaration |
| return | Return Value |

# Identifiers

Identifiers user-defined names hote hain jo variables, functions, classes aur objects ko identify karte hain.

## Definition

"Identifiers are names assigned by the programmer to various program elements."

### Examples

```cpp
student
marks
total
calculateSalary
Employee
```

## Rules for Identifiers

### Rule 1

Identifier letter ya underscore se start hona chahiye.

Correct:

```cpp
student
_name
```

Wrong:

```cpp
1student
```

### Rule 2

Spaces allowed nahi hote.

Wrong:

```cpp
student name
```

### Rule 3

Keywords identifiers nahi ban sakte.

Wrong:

```cpp
int int;
```

### Rule 4

Special symbols allowed nahi hote.

Wrong:

```cpp
student@
```

## Example

```cpp
int marks;
```

Yahan marks ek identifier hai.

# Constants

Constants fixed values hoti hain jo program execution ke dauran change nahi hoti.

## Definition

"A constant is a value that remains unchanged during program execution."

## Types of Constants

### Integer Constants

Examples:

```cpp
10
25
1000
```

### Floating Point Constants

Examples:

```cpp
3.14
2.5
45.67
```

### Character Constants

Examples:

```cpp
'A'
'B'
'Z'
```

### String Constants

Examples:

```cpp
"Hello"
"C++"
```

### Boolean Constants

Examples:

```cpp
true
false
```

## Example

```cpp
const float PI = 3.14;
```

Yahan PI constant hai.

## Advantages of Constants

- Better Readability
- Easy Maintenance
- Error Prevention

# Variables

Variable memory location ka naam hota hai jisme data store kiya jata hai.

Variable ki value program execution ke dauran change ho sakti hai.

## Definition

"A variable is a named memory location used to store data."

### Example

```cpp
int age = 20;
```

Yahan age variable hai.

## Variable Declaration

Syntax:

```cpp
data_type variable_name;
```

Example:

```cpp
int marks;
float salary;
char grade;
```

## Variable Initialization

Example:

```cpp
int age = 18;
```

## Advantages of Variables

### Dynamic Storage

Data store kar sakte hain.

### Easy Processing

Calculations perform ki ja sakti hain.

### Memory Management

Efficient memory utilization possible hota hai.

# Data Types in C++

Data Type define karta hai ki variable kis type ka data store karega.

Data type memory allocation aur operations determine karta hai.

## Definition

"A data type specifies the type of data a variable can store."

# Types of Data Types

C++ me data types ko mainly three categories me divide kiya jata hai.

## 1. Fundamental Data Types

Ye basic built-in data types hote hain.

### int

Integer values store karta hai.

Example:

```cpp
int age = 20;
```

### float

Decimal values store karta hai.

Example:

```cpp
float salary = 25000.50;
```

### double

Large precision decimal values store karta hai.

Example:

```cpp
double pi = 3.141592;
```

### char

Single character store karta hai.

Example:

```cpp
char grade = 'A';
```

### bool

Boolean values store karta hai.

Example:

```cpp
bool status = true;
```

### void

No value represent karta hai.

Example:

```cpp
void display();
```

# 2. Derived Data Types

Basic data types se derive kiye jate hain.

Examples:

### Array

```cpp
int marks[5];
```

### Pointer

```cpp
int *ptr;
```

### Function

```cpp
int sum();
```

# 3. User Defined Data Types

Programmer khud create karta hai.

Examples:

### Structure

```cpp
struct Student
{
    int roll;
};
```

### Class

```cpp
class Employee
{
};
```

### Union

```cpp
union Data
{
};
```

### Enum

```cpp
enum Day
{
    Mon,
    Tue
};
```

# Example Program Demonstrating Variables and Data Types

```cpp
#include <iostream>
using namespace std;

int main()
{
    int age = 20;
    float marks = 85.5;
    char grade = 'A';

    cout << age << endl;
    cout << marks << endl;
    cout << grade << endl;

    return 0;
}
```

## Output

```text
20
85.5
A
```

# Importance of Tokens, Variables and Data Types

### Program Execution

Compiler program ko correctly understand karta hai.

### Memory Management

Data types proper memory allocation ensure karte hain.

### Error Prevention

Type checking possible hoti hai.

### Efficient Programming

Program performance improve hoti hai.

### Readability

Program easy to understand ban jata hai.

# Applications of C++

C++ ka use:

### System Software

Operating systems aur compilers.

### Game Development

Modern games aur graphics engines.

### Banking Systems

Transaction management applications.

### Embedded Systems

Hardware control software.

### Scientific Applications

Research aur simulation programs.

### Enterprise Applications

Large-scale business software.

# Conclusion

In conclusion, C++ program ek well-defined structure follow karta hai jisme preprocessor directives, namespace declarations, main function aur executable statements include hote hain. Tokens program ki smallest meaningful units hoti hain. Keywords predefined reserved words hote hain, identifiers programmer-defined names hote hain, constants fixed values hoti hain aur variables data storage ke liye use kiye jate hain. Data types determine karte hain ki variable kis type ka data store karega. In fundamental concepts ki understanding efficient aur error-free C++ programming ke liye essential hai aur ye advanced programming concepts ka foundation provide karti hai.


# Q3. Describe Various Operators Available in C++. Explain Arithmetic, Relational, Logical, Assignment, Increment/Decrement, Conditional, and Type Cast Operators with Examples.

## Introduction

C++ ek powerful programming language hai jisme data manipulation aur calculations perform karne ke liye operators ka use kiya jata hai. Operators special symbols hote hain jo operands par specific operations perform karte hain. Kisi bhi programming language me operators ka role bahut important hota hai kyunki bina operators ke calculations, comparisons aur decision making possible nahi hoti.

C++ me different types ke operators available hain jo mathematical calculations, logical decisions, data assignment aur type conversion jaise tasks perform karte hain. Operators programming ko simple aur efficient banate hain.

## What is an Operator?

Operator ek special symbol hota hai jo operands par operation perform karta hai aur result produce karta hai.

### Example

```cpp
a + b
```

Yahan:

- `a` aur `b` operands hain.
- `+` operator hai.

## Classification of Operators in C++

C++ operators ko mainly following categories me divide kiya jata hai:

- Arithmetic Operators
- Relational Operators
- Logical Operators
- Assignment Operators
- Increment/Decrement Operators
- Conditional Operator
- Type Cast Operators

# 1. Arithmetic Operators

Arithmetic operators mathematical calculations perform karte hain.

## Types of Arithmetic Operators

| Operator | Meaning |
|-----------|----------|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus |

### Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=20,b=10;

    cout<<"Addition = "<<a+b<<endl;
    cout<<"Subtraction = "<<a-b<<endl;
    cout<<"Multiplication = "<<a*b<<endl;
    cout<<"Division = "<<a/b<<endl;
    cout<<"Modulus = "<<a%b;

    getch();
}
```

### Output

```text
Addition = 30
Subtraction = 10
Multiplication = 200
Division = 2
Modulus = 0
```

## Uses

- Mathematical calculations
- Scientific programs
- Financial applications

# 2. Relational Operators

Relational operators do values ko compare karte hain aur result True (1) ya False (0) return karte hain.

## Types of Relational Operators

| Operator | Meaning |
|-----------|----------|
| == | Equal To |
| != | Not Equal To |
| > | Greater Than |
| < | Less Than |
| >= | Greater Than Equal To |
| <= | Less Than Equal To |

### Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=10,b=20;

    cout<<(a==b)<<endl;
    cout<<(a!=b)<<endl;
    cout<<(a>b)<<endl;
    cout<<(a<b);

    getch();
}
```

### Output

```text
0
1
0
1
```

## Uses

- Decision Making
- Conditional Statements
- Loop Control

# 3. Logical Operators

Logical operators multiple conditions ko combine karne ke liye use hote hain.

## Types of Logical Operators

| Operator | Meaning |
|-----------|----------|
| && | Logical AND |
| || | Logical OR |
| ! | Logical NOT |

### Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=10,b=20;

    cout<<((a<20)&&(b>10))<<endl;
    cout<<((a>20)||(b>10))<<endl;
    cout<<!(a==10);

    getch();
}
```

### Output

```text
1
1
0
```

## Uses

- Complex Conditions
- Validation
- Authentication Systems

# 4. Assignment Operators

Assignment operators variables me values assign karne ke liye use hote hain.

## Types of Assignment Operators

| Operator | Example |
|-----------|----------|
| = | a=10 |
| += | a+=5 |
| -= | a-=5 |
| *= | a*=5 |
| /= | a/=5 |
| %= | a%=5 |

### Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=10;

    a+=5;
    cout<<a<<endl;

    a-=3;
    cout<<a<<endl;

    a*=2;
    cout<<a;

    getch();
}
```

### Output

```text
15
12
24
```

## Uses

- Value Assignment
- Updating Variables
- Efficient Calculations

# 5. Increment and Decrement Operators

Ye operators variable ki value ko 1 se increase ya decrease karte hain.

## Types

### Increment Operator (++)

Value ko 1 se increase karta hai.

### Decrement Operator (--)

Value ko 1 se decrease karta hai.

## Pre-Increment

```cpp
++a
```

## Post-Increment

```cpp
a++
```

## Pre-Decrement

```cpp
--a
```

## Post-Decrement

```cpp
a--
```

### Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=10;

    cout<<++a<<endl;
    cout<<a++<<endl;
    cout<<a<<endl;

    cout<<--a<<endl;
    cout<<a--<<endl;
    cout<<a;

    getch();
}
```

### Output

```text
11
11
12
11
11
10
```

## Uses

- Loop Counters
- Array Traversal
- Repetitive Operations

# 6. Conditional Operator

Conditional operator ko Ternary Operator bhi kaha jata hai.

Ye if-else ka short form hota hai.

## Syntax

```cpp
condition ? expression1 : expression2;
```

### Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=20,b=10;

    int max=(a>b)?a:b;

    cout<<"Maximum = "<<max;

    getch();
}
```

### Output

```text
Maximum = 20
```

## Advantages

- Short Code
- Faster Decision Making
- Easy Readability

# 7. Type Cast Operators

Type casting ek data type ko dusre data type me convert karne ke liye use hoti hai.

## Syntax

```cpp
(type)data;
```

### Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    float a=12.75;

    cout<<(int)a;

    getch();
}
```

### Output

```text
12
```

## Uses

- Data Conversion
- Type Compatibility
- Memory Optimization

# Complete Turbo C++ Program Demonstrating Operators

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int a=20,b=10;

    cout<<"Arithmetic Operators"<<endl;
    cout<<"Addition = "<<a+b<<endl;
    cout<<"Subtraction = "<<a-b<<endl;

    cout<<"\nRelational Operators"<<endl;
    cout<<(a>b)<<endl;

    cout<<"\nLogical Operators"<<endl;
    cout<<((a>b)&&(b<50))<<endl;

    cout<<"\nAssignment Operator"<<endl;
    a+=5;
    cout<<a<<endl;

    cout<<"\nIncrement Operator"<<endl;
    cout<<++a<<endl;

    cout<<"\nConditional Operator"<<endl;
    cout<<((a>b)?a:b)<<endl;

    cout<<"\nType Casting"<<endl;
    float x=12.5;
    cout<<(int)x;

    getch();
}
```

## Output

```text
Arithmetic Operators
Addition = 30
Subtraction = 10

Relational Operators
1

Logical Operators
1

Assignment Operator
25

Increment Operator
26

Conditional Operator
26

Type Casting
12
```

# Conclusion

In conclusion, Operators C++ programming ka fundamental part hain jo data par different operations perform karte hain. Arithmetic operators calculations ke liye, relational operators comparison ke liye, logical operators conditions combine karne ke liye, assignment operators values assign karne ke liye, increment/decrement operators value modify karne ke liye, conditional operator decision making ke liye aur type cast operators data conversion ke liye use hote hain. In operators ki proper understanding efficient aur error-free C++ programming ke liye essential hai.



# Q4. Explain Type Conversion and Type Casting in C++. Write a C++ Program Demonstrating Implicit and Explicit Type Conversion.
## Also Write:
- Algorithm
- Syntax of Type Casting
- Program
- Output

## Introduction

Programming languages me different types ke data ko process karna ek common requirement hoti hai. Kabhi-kabhi hume integer value ko float me convert karna padta hai, kabhi float ko integer me, aur kabhi character ko integer me. Jab ek data type ki value ko kisi dusre data type me convert kiya jata hai to ise Type Conversion ya Type Casting kaha jata hai.

C++ ek strongly typed programming language hai, isliye compiler har variable ka data type check karta hai. Agar different data types ke operands kisi expression me use kiye jayein to compiler automatically conversion perform kar sakta hai ya programmer manually conversion perform kar sakta hai.

Type conversion ka use calculations ki accuracy improve karne, memory management optimize karne aur data compatibility ensure karne ke liye kiya jata hai. Multimedia applications, scientific software, banking systems aur business applications me type conversion ka bahut important role hota hai.

## What is Type Conversion?

Type Conversion ek process hai jisme ek data type ki value ko automatically ya manually kisi dusre data type me convert kiya jata hai.

### Definition

"Type Conversion is the process of converting data from one data type to another data type."

Example:

```cpp
int a = 10;
float b;

b = a;
```

Yahan integer value automatically float me convert ho rahi hai.

## Need of Type Conversion

Programming me type conversion ki zarurat kai situations me padti hai.

### Data Compatibility

Different data types ke variables ko ek saath use karne ke liye.

### Accurate Calculations

Decimal calculations perform karne ke liye.

### Memory Optimization

Required data type use karne ke liye.

### Data Processing

Different sources se aane wale data ko handle karne ke liye.

## Types of Type Conversion

C++ me type conversion do major categories me divide ki jati hai:

### 1. Implicit Type Conversion

### 2. Explicit Type Conversion (Type Casting)

# Implicit Type Conversion

Implicit Type Conversion ko Automatic Type Conversion bhi kaha jata hai.

Isme conversion automatically compiler perform karta hai aur programmer ko manually kuch nahi likhna padta.

Jab small data type ko larger data type me convert kiya jata hai tab generally implicit conversion hoti hai.

## Definition

"Implicit Type Conversion is the automatic conversion performed by the compiler."

### Example

```cpp
int num = 25;
float result;

result = num;
```

Compiler automatically integer ko float me convert kar dega.

## Working of Implicit Conversion

Compiler data loss avoid karne ke liye lower data type ko higher data type me convert karta hai.

### Example

```cpp
int a = 10;
float b = 2.5;

float c = a + b;
```

Yahan integer value 10 automatically float 10.0 me convert ho jayegi.

## Advantages of Implicit Conversion

### Automatic Processing

Programmer ko extra code nahi likhna padta.

### Easy Programming

Code simple aur readable rehta hai.

### Faster Development

Development time reduce hota hai.

## Limitations of Implicit Conversion

### Unwanted Conversion

Kabhi-kabhi unexpected results mil sakte hain.

### Less Control

Programmer ka direct control nahi hota.

# Explicit Type Conversion (Type Casting)

Explicit Type Conversion ko Type Casting bhi kaha jata hai.

Isme programmer manually specify karta hai ki value ko kis data type me convert karna hai.

## Definition

"Explicit Type Conversion is the manual conversion of one data type into another using type casting operators."

### Example

```cpp
float a = 12.75;

int b = (int)a;
```

Result:

```text
12
```

Decimal part remove ho jayega.

## Need of Explicit Conversion

### Better Control

Programmer conversion ko control kar sakta hai.

### Specific Requirements

Special calculations perform kar sakte hain.

### Data Formatting

Output ko desired format me display kar sakte hain.

# Syntax of Type Casting

Turbo C++ aur traditional C++ me commonly use hone wali syntax:

```cpp
(data_type)expression
```

### Example

```cpp
(int)12.75
```

Output:

```text
12
```

### Another Example

```cpp
(float)10
```

Output:

```text
10.000000
```

## Examples of Type Casting

### Float to Integer

```cpp
float num = 15.85;

int result = (int)num;
```

Output:

```text
15
```

### Integer to Float

```cpp
int a = 10;

float b = (float)a;
```

Output:

```text
10.0
```

### Character to Integer

```cpp
char ch='A';

cout<<(int)ch;
```

Output:

```text
65
```

ASCII value display hogi.

# Difference Between Implicit and Explicit Conversion

## Conversion Method

Implicit conversion automatically compiler karta hai.

Explicit conversion programmer manually karta hai.

## Control

Implicit conversion me programmer ka control nahi hota.

Explicit conversion me complete control hota hai.

## Syntax

Implicit conversion ke liye special syntax nahi hoti.

Explicit conversion me type cast operator use hota hai.

## Safety

Implicit conversion generally safer hoti hai.

Explicit conversion me data loss possible hota hai.

# Algorithm

## Algorithm for Demonstrating Implicit and Explicit Type Conversion

### Step 1

Start Program.

### Step 2

Declare integer variable `a`.

### Step 3

Declare float variable `b`.

### Step 4

Assign integer value to float variable.

### Step 5

Display implicit conversion result.

### Step 6

Declare float variable `x`.

### Step 7

Convert float value into integer using type casting.

### Step 8

Display explicit conversion result.

### Step 9

Stop Program.

# C++ Program (Turbo C++)

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int a = 25;
    float b;

    b = a;

    cout<<"Implicit Type Conversion"<<endl;
    cout<<"Integer Value = "<<a<<endl;
    cout<<"Converted Float Value = "<<b<<endl;

    float x = 15.75;
    int y;

    y = (int)x;

    cout<<endl;
    cout<<"Explicit Type Conversion"<<endl;
    cout<<"Float Value = "<<x<<endl;
    cout<<"Converted Integer Value = "<<y<<endl;

    getch();
}
```

# Output

```text
Implicit Type Conversion

Integer Value = 25
Converted Float Value = 25

Explicit Type Conversion

Float Value = 15.75
Converted Integer Value = 15
```

# Real-Life Applications of Type Conversion

Type conversion practical programming me bahut useful hoti hai.

### Banking Software

Interest calculations me integer aur decimal values convert ki jati hain.

### Multimedia Applications

Audio aur video processing me different data types use hote hain.

### Scientific Calculations

Accurate decimal computations ke liye conversions required hoti hain.

### Graphics Programming

Coordinates aur dimensions convert kiye jate hain.

### Database Applications

Different field types ko process karne ke liye.

# Advantages of Type Conversion

### Flexibility

Different data types ke saath operations possible hote hain.

### Better Compatibility

Programs more versatile bante hain.

### Efficient Processing

Complex calculations easily perform hoti hain.

### Improved Usability

Programmer required format me data use kar sakta hai.

# Disadvantages of Type Conversion

### Data Loss

Float se integer conversion me decimal part remove ho jata hai.

### Precision Loss

Large values convert karte waqt accuracy reduce ho sakti hai.

### Performance Overhead

Excessive conversions performance affect kar sakti hain.

# Conclusion

In conclusion, Type Conversion C++ programming ka ek important concept hai jo ek data type ki value ko dusre data type me convert karne ki facility provide karta hai. Implicit Type Conversion compiler automatically perform karta hai, jabki Explicit Type Conversion ya Type Casting programmer manually control karta hai. Type conversion data compatibility, accurate calculations aur efficient programming ke liye essential hai. Banking systems, multimedia applications, scientific software aur business applications me type conversion extensively use ki jati hai. Isliye C++ programmer ke liye type conversion aur type casting concepts ko properly samajhna bahut important hai.




# Q5. Explain Console Input/Output Using cin and cout. Discuss All Control Statements (if, if-else, nested if, loops, break, continue, goto) and Write a C++ Program Demonstrating Their Use.

## Introduction

C++ programming me Input aur Output operations ka bahut important role hota hai. Kisi bhi program ko useful banane ke liye user se data lena aur result display karna zaruri hota hai. C++ me console input aur output ke liye `cin` aur `cout` objects ka use kiya jata hai jo `iostream.h` header file me defined hote hain.

Input-Output ke alawa program flow ko control karne ke liye Control Statements ka use kiya jata hai. Control statements decide karte hain ki program kaunsi statement execute karega aur kis order me karega. Decision making, looping aur program control ke liye if, if-else, nested if, loops, break, continue aur goto statements use kiye jate hain.

Large software systems, banking applications, multimedia software, management systems aur scientific programs me control statements extensively use kiye jate hain.

# Console Input and Output in C++

Console Input ka matlab user se keyboard ke through data lena hai aur Console Output ka matlab monitor screen par result display karna hai.

C++ me ye kaam cin aur cout ke through kiya jata hai.

# cin Statement

`cin` ka full form Character Input hota hai.

Ye user se input lene ke liye use hota hai.

## Syntax

```cpp
cin >> variable;
```

## Example

```cpp
int age;

cin >> age;
```

Yahan user keyboard se value enter karega jo age variable me store ho jayegi.

## Program Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int age;

    cout<<"Enter Age: ";
    cin>>age;

    cout<<"Age = "<<age;

    getch();
}
```

# cout Statement

`cout` ka full form Character Output hota hai.

Ye screen par output display karne ke liye use hota hai.

## Syntax

```cpp
cout << value;
```

## Example

```cpp
cout<<"Hello World";
```

## Program Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    cout<<"Welcome to C++";

    getch();
}
```

# Control Statements

Control Statements program execution flow ko control karte hain.

Mainly control statements teen categories me divide hote hain:

### Decision Making Statements

- if
- if-else
- nested if

### Looping Statements

- for
- while
- do-while

### Jump Statements

- break
- continue
- goto

# if Statement

if statement kisi condition ko check karti hai.

Agar condition true ho to statements execute hoti hain.

## Syntax

```cpp
if(condition)
{
    statements;
}
```

## Example

```cpp
if(age>=18)
{
    cout<<"Eligible";
}
```

## Flow of if Statement

1. Condition check hoti hai.
2. True hone par statements execute hoti hain.
3. False hone par statements skip ho jati hain.

# if-else Statement

if-else do alternative paths provide karti hai.

## Syntax

```cpp
if(condition)
{
    statements1;
}
else
{
    statements2;
}
```

## Example

```cpp
if(marks>=40)
{
    cout<<"Pass";
}
else
{
    cout<<"Fail";
}
```

## Working

Condition true hone par if block execute hota hai.

Condition false hone par else block execute hota hai.

# Nested if Statement

Jab ek if statement ke andar dusri if statement likhi jati hai to use Nested if kehte hain.

## Syntax

```cpp
if(condition1)
{
    if(condition2)
    {
        statements;
    }
}
```

## Example

```cpp
if(age>=18)
{
    if(citizen==1)
    {
        cout<<"Eligible to Vote";
    }
}
```

## Uses

- Complex Decision Making
- Multiple Condition Checking
- Validation Systems

# for Loop

for loop fixed number of repetitions ke liye use hoti hai.

## Syntax

```cpp
for(initialization; condition; increment)
{
    statements;
}
```

## Example

```cpp
for(int i=1;i<=5;i++)
{
    cout<<i;
}
```

## Output

```text
12345
```

## Working

Initialization ek baar execute hoti hai.

Condition har iteration me check hoti hai.

Increment iteration ke baad execute hota hai.

# while Loop

while loop tab tak execute hoti hai jab tak condition true rahe.

## Syntax

```cpp
while(condition)
{
    statements;
}
```

## Example

```cpp
int i=1;

while(i<=5)
{
    cout<<i;
    i++;
}
```

## Output

```text
12345
```

# do-while Loop

do-while loop me body kam se kam ek baar execute hoti hi hai.

## Syntax

```cpp
do
{
    statements;
}
while(condition);
```

## Example

```cpp
int i=1;

do
{
    cout<<i;
    i++;
}
while(i<=5);
```

## Output

```text
12345
```

## Advantage

Loop body minimum one time execute hoti hai.

# break Statement

break loop ya switch ko immediately terminate kar deta hai.

## Syntax

```cpp
break;
```

## Example

```cpp
for(int i=1;i<=10;i++)
{
    if(i==5)
        break;

    cout<<i;
}
```

## Output

```text
1234
```

## Uses

- Early Exit
- Search Operations
- Menu Driven Programs

# continue Statement

continue current iteration ko skip karke next iteration start kar deta hai.

## Syntax

```cpp
continue;
```

## Example

```cpp
for(int i=1;i<=5;i++)
{
    if(i==3)
        continue;

    cout<<i;
}
```

## Output

```text
1245
```

## Uses

- Specific Values Skip Karna
- Filtering Operations
- Data Processing

# goto Statement

goto control ko directly specified label par transfer karta hai.

## Syntax

```cpp
goto label;

label:
statements;
```

## Example

```cpp
goto start;

start:
cout<<"Welcome";
```

## Working

Program execution direct label par jump kar jati hai.

## Limitations

- Program difficult to understand ho sakta hai.
- Structured programming principles violate karta hai.

Isi liye modern programming me goto ka use generally avoid kiya jata hai.

# Algorithm

## Algorithm to Demonstrate Control Statements

### Step 1

Start Program.

### Step 2

Input a number from user.

### Step 3

Check number using if-else.

### Step 4

Execute nested if condition.

### Step 5

Run for loop.

### Step 6

Use break statement.

### Step 7

Run another loop using continue statement.

### Step 8

Display results.

### Step 9

Stop Program.

# Turbo C++ Program

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int num;

    cout<<"Enter Number: ";
    cin>>num;

    if(num>0)
    {
        cout<<"Positive Number"<<endl;
    }
    else
    {
        cout<<"Negative Number"<<endl;
    }

    if(num>0)
    {
        if(num%2==0)
        {
            cout<<"Positive Even Number"<<endl;
        }
    }

    cout<<"\nFor Loop"<<endl;

    for(int i=1;i<=5;i++)
    {
        cout<<i<<" ";
    }

    cout<<"\n\nBreak Statement"<<endl;

    for(int j=1;j<=10;j++)
    {
        if(j==6)
            break;

        cout<<j<<" ";
    }

    cout<<"\n\nContinue Statement"<<endl;

    for(int k=1;k<=5;k++)
    {
        if(k==3)
            continue;

        cout<<k<<" ";
    }

    goto end;

end:
    cout<<"\n\nGoto Executed";

    getch();
}
```

# Output

```text
Enter Number: 8

Positive Number
Positive Even Number

For Loop
1 2 3 4 5

Break Statement
1 2 3 4 5

Continue Statement
1 2 4 5

Goto Executed
```

# Applications of Control Statements

### Banking Software

Transaction validation ke liye.

### Examination Systems

Result processing ke liye.

### Multimedia Applications

Menu navigation aur user interaction ke liye.

### Gaming Software

Character movement aur game logic ke liye.

### Management Systems

Record searching aur updating ke liye.

# Advantages of Control Statements

### Decision Making

Different situations handle kar sakte hain.

### Repetition

Loops repetitive tasks automate karti hain.

### Better Program Control

Execution flow manage kiya ja sakta hai.

### Reduced Code Length

Repeated code likhne ki zarurat nahi padti.

# Conclusion

In conclusion, `cin` aur `cout` C++ ke fundamental input-output tools hain jo user interaction ko possible banate hain. Control statements jaise if, if-else, nested if, for, while, do-while, break, continue aur goto program execution ko control karte hain aur decision making aur repetition ko implement karte hain. Ye concepts C++ programming ka foundation hain aur practical software development me extensively use kiye jate hain. In control statements ki proper understanding efficient aur logical program development ke liye essential hai.
