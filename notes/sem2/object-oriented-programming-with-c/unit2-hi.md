# OBJECT ORIENTED PROGRAMMING USING C++

# UNIT – FUNCTIONS IN C++

---

# Introduction to Functions

Programming mein jab program bada ho jata hai tab pura code ek hi jagah likhna difficult ho jata hai. Code:
- confusing ho jata hai
- debugging difficult ho jati hai
- program maintain karna hard ho jata hai

In problems ko solve karne ke liye:
```text
Functions
```
use kiye jate hain.

Function ek reusable block of code hota hai jo kisi specific task ko perform karta hai.

Simple words mein:
```text
Function = Kaam karne wali machine
```

Jaise:
- calculator mein addition button sirf addition karta hai
- music app mein play button sirf song play karta hai

waise hi programming mein:
- har function ka apna specific kaam hota hai.

---

# Real Life Example of Function

Suppose ek restaurant hai.

Restaurant mein:
- ek chef sirf cooking karta hai
- waiter serving karta hai
- cashier payment handle karta hai

Har person ka alag function hai.

Isi tarah programming mein bhi:
- har function ka specific kaam hota hai.

---

# Advantages of Functions

Functions use karne ke bahut advantages hote hain:

1. Code Reusability
2. Easy Debugging
3. Easy Maintenance
4. Modular Programming
5. Reduced Complexity
6. Faster Development

---

# Function Declaration

# Introduction

Function declaration ka matlab:
```text
Compiler ko pehle hi bata dena ki function exist karta hai
```

Isse compiler ko:
- function ka name
- return type
- parameters

pata chal jate hain.

Function declaration ko:
```text
Function Prototype
```
bhi bolte hain.

---

# Syntax of Function Declaration

```cpp
return_type function_name(parameters);
```

---

# Example

```cpp
int add(int,int);
```

Yahan:
- int → return type
- add → function name
- int,int → parameters

---

# Why Function Declaration Important

Suppose compiler ko function ka pata nahi hai aur hum function call kar dete hain:
- error aa sakta hai

Isliye declaration pehle diya jata hai.

---

# Real Life Example

Jaise school mein teacher pehle announce karta hai:
```text
Kal sports competition hoga
```

Waise hi function declaration compiler ko pehle information deta hai.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

int add(int,int);

void main()
{
    int a,b,sum;

    clrscr();

    cout<<"Enter Two Numbers: ";
    cin>>a>>b;

    sum=add(a,b);

    cout<<"Sum = "<<sum;

    getch();
}

int add(int x,int y)
{
    return x+y;
}
```

---

# Function Definition

# Introduction

Function definition mein actual code likha jata hai jo function execute karega.

Definition batati hai:
```text
Function kya kaam karega
```

---

# Syntax

```cpp
return_type function_name(parameters)
{
    // code
}
```

---

# Example

```cpp
int add(int x,int y)
{
    return x+y;
}
```

---

# Understanding Function Definition Deeply

Suppose ek washing machine hai.

Declaration:
```text
Machine exist karti hai
```

Definition:
```text
Machine andar kaise kaam karti hai
```

waise hi:
- declaration sirf information deta hai
- definition actual working batata hai

---

# Components of Function Definition

1. Return Type
2. Function Name
3. Parameters
4. Function Body
5. Return Statement

---

# Return Type

Batata hai function kya return karega.

Example:
```cpp
int
float
char
void
```

---

# Function Name

Function ko identify karta hai.

Example:
```cpp
add()
show()
display()
```

---

# Parameters

Input values receive karte hain.

---

# Function Body

Actual statements yahan likhe jate hain.

---

# Return Statement

Result return karta hai.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

int square(int);

void main()
{
    int num,result;

    clrscr();

    cout<<"Enter Number: ";
    cin>>num;

    result=square(num);

    cout<<"Square = "<<result;

    getch();
}

int square(int x)
{
    return x*x;
}
```

---

# Output

```text
Enter Number: 5
Square = 25
```

---

# Parameter Passing

# Introduction

Function ko values bhejne ka process:
```text
Parameter Passing
```
kehlata hai.

---

# Types of Parameter Passing

1. Call by Value
2. Call by Reference

---

# Call by Value

Original value copy hoti hai.

Changes original variable mein reflect nahi hote.

---

# Real Life Example

Suppose kisi friend ko photo ki photocopy di.

Original photo:
- safe rehti hai

Sirf copy use hoti hai.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

void change(int);

void main()
{
    int a=10;

    clrscr();

    cout<<"Before Function: "<<a;

    change(a);

    cout<<"\nAfter Function: "<<a;

    getch();
}

void change(int x)
{
    x=50;
}
```

---

# Output

```text
Before Function: 10
After Function: 10
```

Value change nahi hui because:
```text
Copy pass hui thi
```

---

# Reference Variable

# Introduction

Reference variable kisi dusre variable ka alternative naam hota hai.

---

# Syntax

```cpp
datatype &reference_name=variable;
```

---

# Example

```cpp
int a=10;

int &b=a;
```

Yahan:
- b actually a ko refer kar raha hai.

---

# Real Life Example

Suppose:
- "Udit"
- "Monitor"

dono ek hi person ke naam hain.

Waise hi:
- reference variable same memory location use karta hai.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    int a=10;

    int &b=a;

    clrscr();

    cout<<"a = "<<a;
    cout<<"\nb = "<<b;

    b=50;

    cout<<"\nAfter Change";
    cout<<"\na = "<<a;

    getch();
}
```

---

# Output

```text
a = 10
b = 10

After Change
a = 50
```

---

# Call by Reference

# Introduction

Original variable ka reference pass hota hai.

Changes original value mein reflect hote hain.

---

# Real Life Example

Suppose:
- original room ki key kisi ko de di

Ab:
- woh original room change kar sakta hai

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

void swap(int &,int &);

void main()
{
    int a=10,b=20;

    clrscr();

    cout<<"Before Swap";
    cout<<"\na = "<<a;
    cout<<"\nb = "<<b;

    swap(a,b);

    cout<<"\nAfter Swap";
    cout<<"\na = "<<a;
    cout<<"\nb = "<<b;

    getch();
}

void swap(int &x,int &y)
{
    int temp;

    temp=x;
    x=y;
    y=temp;
}
```

---

# Output

```text
Before Swap
a = 10
b = 20

After Swap
a = 20
b = 10
```

---

# Function Overloading

# Introduction

Same function name with different parameters:
```text
Function Overloading
```
kehlata hai.

---

# Real Life Example

Suppose:
```text
add()
```

- 2 integers add kar sakta hai
- 2 floats add kar sakta hai

Kaam same:
```text
Addition
```

Lekin data type different.

---

# Advantages

- Code readability
- Easy programming
- Flexibility

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
    public:

    void add(int a,int b)
    {
        cout<<"Integer Sum = "<<a+b;
    }

    void add(float a,float b)
    {
        cout<<"\nFloat Sum = "<<a+b;
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

# Output

```text
Integer Sum = 30
Float Sum = 6
```

---

# Inline Functions

# Introduction

Small functions ko compiler directly replace kar deta hai.

Is process ko:
```text
Inline Function
```
bolte hain.

---

# Why Inline Function Used

Normal function call mein:
- time lagta hai

Inline function:
- faster execution deta hai

---

# Syntax

```cpp
inline return_type function_name()
{
}
```

---

# Real Life Example

Suppose:
- calculator directly answer de deta hai

Beech mein extra process nahi hota.

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

inline int cube(int x)
{
    return x*x*x;
}

void main()
{
    clrscr();

    cout<<"Cube = "<<cube(3);

    getch();
}
```

---

# Output

```text
Cube = 27
```

---

# Default Arguments

# Introduction

Function parameters ko default values dena:
```text
Default Arguments
```
kehlata hai.

Agar user value pass nahi kare:
- default value use hoti hai.

---

# Real Life Example

Suppose pizza order:
- agar size nahi bataya
- medium size automatically select ho jaye

---

# Syntax

```cpp
int add(int a,int b=5)
```

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

int add(int,int=5);

void main()
{
    clrscr();

    cout<<"Sum = "<<add(10);

    getch();
}

int add(int a,int b)
{
    return a+b;
}
```

---

# Output

```text
Sum = 15
```

---

# Return by Reference

# Introduction

Function directly variable ka reference return karta hai.

---

# Why Important

- Memory efficient
- Faster execution
- Original variable modify ho sakta hai

---

# Real Life Example

Suppose:
- original notebook hi de di

Ab direct original notebook modify hogi.

---

# Syntax

```cpp
int& function_name()
```

---

# Program Example

```cpp
#include<iostream.h>
#include<conio.h>

int a=10;

int& value()
{
    return a;
}

void main()
{
    clrscr();

    value()=50;

    cout<<"a = "<<a;

    getch();
}
```

---

# Output

```text
a = 50
```

---

# Difference Between Call by Value and Call by Reference

| Call by Value | Call by Reference |
|---|---|
| Copy pass hoti hai | Original variable pass hota hai |
| Changes reflect nahi hote | Changes reflect hote hain |
| More memory | Less memory |

---

# Important Points to Remember

- Function reusable block hota hai.
- Declaration compiler ko information deta hai.
- Definition actual working batati hai.
- Parameters input receive karte hain.
- Call by value original data change nahi karta.
- Reference variable alternative name hota hai.
- Function overloading same name use karti hai.
- Inline functions fast hote hain.
- Default arguments optional values provide karte hain.
- Return by reference original variable return karta hai.

---

# Conclusion

Functions programming ko modular, reusable aur manageable banate hain. C++ mein advanced function concepts jaise:
- function overloading
- inline functions
- default arguments
- reference variables

programming ko powerful aur efficient banate hain.

Functions software development ka core concept hain aur inhe samajhna advanced C++ programming ke liye bahut important hai.
