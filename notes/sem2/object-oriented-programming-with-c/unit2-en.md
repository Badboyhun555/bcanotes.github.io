# UNIT 2 – Functions in C++

# Introduction to Functions

A function is a block of code that performs a specific task. Functions help in dividing large programs into smaller and manageable parts. Instead of writing the same code again and again, we can create a function once and call it whenever needed.

Functions improve:
- Code reusability
- Readability
- Maintenance
- Debugging
- Program organization

In C++, functions are extremely important because large software is developed using many small functions.

---

# Real Life Example of Function

Think about a calculator.

Different tasks are performed by different buttons:
- Addition
- Subtraction
- Multiplication
- Division

Each task is separate.

Similarly, in programming, functions perform separate tasks.

Example:
- `add()` → addition
- `login()` → user login
- `printBill()` → printing bill

---

# Advantages of Functions

- Reduces code repetition
- Makes program modular
- Easy debugging
- Improves readability
- Saves development time
- Easy maintenance

---

# Structure of Function

A function mainly contains:
1. Function Declaration
2. Function Definition
3. Function Call

---

# 1. Function Declaration

Function declaration tells the compiler:
- Function name
- Return type
- Parameters

It informs the compiler that the function exists.

Function declaration is also called:
- Function Prototype

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

Explanation:
- `int` = return type
- `add` = function name
- `(int,int)` = parameters

---

# Real Life Example

Suppose in school notice board it is written:

"Math class will happen at 10 AM."

This only gives information.

Similarly, function declaration only informs the compiler.

---

# 2. Function Definition

Function definition contains the actual code of the function.

It defines:
- What function does
- Statements to execute

---

# Syntax of Function Definition

```cpp
return_type function_name(parameters)
{
    statements;
}
```

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

int add(int,int);

void main()
{
    int result;

    result=add(10,20);

    cout<<"Sum is: "<<result;

    getch();
}

int add(int a,int b)
{
    return a+b;
}
```

---

# Explanation

## `int add(int,int);`

Function declaration.

---

## `result=add(10,20);`

Function call.

---

## `int add(int a,int b)`

Function definition.

---

## `return a+b;`

Returns sum to main function.

---

# 3. Function Call

When we use a function in program, it is called function calling.

Example:

```cpp
add(10,20);
```

Control transfers to function and after execution returns back.

---

# Real Life Example of Function Call

Suppose you order food in restaurant.

- You place order
- Chef prepares food
- Food returns to you

Similarly:
- Function call sends control
- Function performs task
- Returns result

---

# Types of Functions

## 1. Library Functions

Predefined functions provided by compiler.

Examples:
- `sqrt()`
- `strlen()`
- `clrscr()`

---

## 2. User Defined Functions

Functions created by programmer.

Examples:
- `add()`
- `display()`
- `login()`

---

# Parameter Passing in Functions

Parameters are values passed to functions.

Example:

```cpp
add(10,20);
```

Here:
- `10`
- `20`

are arguments.

---

# Types of Parameter Passing

1. Call by Value
2. Call by Reference

---

# 1. Call by Value

In call by value, copies of variables are passed to function.

Changes inside function do not affect original variables.

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void change(int x)
{
    x=100;

    cout<<"Inside Function: "<<x;
}

void main()
{
    int a=10;

    change(a);

    cout<<"\nOutside Function: "<<a;

    getch();
}
```

---

# Output

```text
Inside Function: 100
Outside Function: 10
```

---

# Explanation

- Copy of `a` is passed.
- Original value remains unchanged.

---

# Real Life Example

Suppose you give photocopy of document to someone.

Changes in photocopy do not affect original document.

---

# 2. Call by Reference

In call by reference, original variable is passed.

Changes inside function affect original variable.

---

# Reference Variable

A reference variable is another name of existing variable.

Syntax:

```cpp
data_type &reference_name = variable;
```

---

# Example

```cpp
int a=10;
int &b=a;
```

Here:
- `b` is reference of `a`

Both refer to same memory location.

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

void change(int &x)
{
    x=100;

    cout<<"Inside Function: "<<x;
}

void main()
{
    int a=10;

    change(a);

    cout<<"\nOutside Function: "<<a;

    getch();
}
```

---

# Output

```text
Inside Function: 100
Outside Function: 100
```

---

# Explanation

- Original variable is passed.
- Changes affect original value.

---

# Real Life Example

Suppose two people share same notebook.

If one changes content, other also sees changes.

---

# Advantages of Call by Reference

- Saves memory
- Faster execution
- Original data can be modified
- Useful for large programs

---

# Difference Between Call by Value and Call by Reference

| Call by Value | Call by Reference |
|---|---|
| Copy of variable passed | Original variable passed |
| Original value unchanged | Original value changes |
| More memory used | Less memory used |
| Slower | Faster |

---

# Overloaded Functions

Function overloading means creating multiple functions with same name but different parameters.

Compiler differentiates functions using:
- Number of parameters
- Type of parameters

---

# Why Function Overloading is Used

It improves readability because same function name can perform similar tasks.

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

class Demo
{
    public:

    void add(int a,int b)
    {
        cout<<"Integer Sum: "<<a+b;
    }

    void add(float a,float b)
    {
        cout<<"\nFloat Sum: "<<a+b;
    }

    void add(int a,int b,int c)
    {
        cout<<"\nThree Number Sum: "<<a+b+c;
    }
};

void main()
{
    Demo d;

    d.add(10,20);
    d.add(5.5,2.5);
    d.add(1,2,3);

    getch();
}
```

---

# Explanation

Same function name `add()` behaves differently.

Compiler identifies function based on parameters.

---

# Real Life Example

Suppose one person named Rahul works:
- As student in school
- As son at home
- As employee in office

Same person performs different roles.

Similarly, same function performs different tasks.

---

# Advantages of Function Overloading

- Better readability
- Easy coding
- Reduces confusion
- Increases flexibility

---

# Inline Functions

An inline function is a function expanded directly at place of function call.

Compiler replaces function call with actual function code.

---

# Why Inline Functions are Used

Normal function call takes extra time because:
- Control transfers to function
- Returns back again

Inline function removes this overhead.

Useful for:
- Small functions
- Frequently used functions

---

# Syntax

```cpp
inline return_type function_name(parameters)
{
    statements;
}
```

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

inline int square(int x)
{
    return x*x;
}

void main()
{
    cout<<"Square is: "<<square(5);

    getch();
}
```

---

# Explanation

Compiler replaces:

```cpp
square(5)
```

with:

```cpp
5*5
```

directly.

---

# Advantages of Inline Functions

- Faster execution
- Reduces function call overhead
- Improves performance

---

# Disadvantages of Inline Functions

- Increases program size
- Not suitable for large functions

---

# Real Life Example

Suppose you frequently use calculator for simple addition.

Instead of opening full calculator app every time, quick calculation happens instantly.

That instant operation is similar to inline function.

---

# Default Arguments

Default arguments are values automatically assigned to function parameters if user does not provide values.

---

# Syntax

```cpp
function(parameter = value);
```

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

int add(int a,int b=10)
{
    return a+b;
}

void main()
{
    cout<<"Sum is: "<<add(5);

    getch();
}
```

---

# Output

```text
Sum is: 15
```

---

# Explanation

- Only one argument passed.
- `b` automatically becomes `10`.

---

# Another Example

```cpp
#include<iostream.h>
#include<conio.h>

void display(int a=10,int b=20)
{
    cout<<"A = "<<a;
    cout<<"\nB = "<<b;
}

void main()
{
    display();

    getch();
}
```

---

# Output

```text
A = 10
B = 20
```

---

# Advantages of Default Arguments

- Reduces number of functions
- Makes code simple
- Improves flexibility

---

# Real Life Example

Suppose food delivery app automatically selects:
- Standard delivery charge
- Default payment option

unless user changes it.

Similarly, default arguments work automatically.

---

# Return by Reference

Normally functions return values.

But in C++, functions can also return references.

This means function returns original variable instead of copy.

---

# Syntax

```cpp
return_type &function_name();
```

---

# Example Program

```cpp
#include<iostream.h>
#include<conio.h>

int &value(int &x)
{
    return x;
}

void main()
{
    int a=10;

    value(a)=100;

    cout<<"Value of a: "<<a;

    getch();
}
```

---

# Output

```text
Value of a: 100
```

---

# Explanation

- Function returns reference of `a`
- Changes affect original variable

---

# Advantages of Return by Reference

- Faster execution
- Saves memory
- No duplicate copies created

---

# Real Life Example

Suppose teacher directly edits original report card instead of photocopy.

Changes happen in original document itself.

---

# Important Points to Remember

- Functions divide program into smaller parts.
- Function declaration informs compiler.
- Function definition contains actual code.
- Parameters transfer data to functions.
- Call by value passes copy.
- Call by reference passes original variable.
- Function overloading supports polymorphism.
- Inline functions improve speed.
- Default arguments provide automatic values.
- Return by reference returns original variable.

---

# Conclusion

Functions are one of the most important concepts in C++. They help programmers create modular, reusable, and organized programs. Features like function overloading, inline functions, reference variables, default arguments, and return by reference make C++ extremely powerful and flexible.

Understanding functions properly is essential because advanced programming concepts heavily depend on functions.
