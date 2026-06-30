# Q1. Explain Function Declaration, Definition, and Function Calling in C++. Write a Program to Perform Arithmetic Operations Using User-Defined Functions.

## Introduction

Programming me jab koi task baar-baar perform karna hota hai to us code ko repeatedly likhna practical nahi hota. Is problem ko solve karne ke liye Functions ka use kiya jata hai. Function ek self-contained block of code hota hai jo kisi specific task ko perform karta hai. Functions code ko modular, reusable aur easy to maintain banate hain.

C++ me functions ka bahut important role hai. Large software projects me program ko chhote-chhote modules me divide kiya jata hai aur har module ek specific function perform karta hai. Isse debugging, testing aur maintenance easy ho jati hai.

Function ke teen important parts hote hain:

- Function Declaration
- Function Definition
- Function Calling

In tino concepts ko samajhna C++ programming ke liye essential hai.

# What is a Function?

Function statements ka ek group hota hai jo ek specific task perform karta hai aur zarurat padne par program ke kisi bhi part se call kiya ja sakta hai.

### Definition

"A function is a self-contained block of code designed to perform a particular task."

Examples:

- Addition Function
- Multiplication Function
- Factorial Function
- Interest Calculation Function

# Advantages of Functions

Functions programming ko efficient banati hain.

### Code Reusability

Ek function ko multiple times use kiya ja sakta hai.

### Easy Debugging

Errors ko easily locate kiya ja sakta hai.

### Modularity

Program ko small modules me divide kiya ja sakta hai.

### Easy Maintenance

Program update karna simple ho jata hai.

### Reduced Code Length

Repeated code likhne ki zarurat nahi padti.

# Function Declaration

Function declaration ko Function Prototype bhi kaha jata hai.

Ye compiler ko batata hai ki function ka naam kya hai, return type kya hai aur kitne parameters accept karega.

Function declaration usually main() function ke pehle likhi jati hai.

## Syntax

```cpp
return_type function_name(parameter_list);
```

## Example

```cpp
int add(int, int);
```

Yahan:

- int → Return Type
- add → Function Name
- int, int → Parameters

Compiler ko pehle hi pata chal jata hai ki add() function exist karta hai.

# Function Definition

Function definition me actual code likha jata hai jo task perform karta hai.

## Syntax

```cpp
return_type function_name(parameters)
{
    // statements
}
```

## Example

```cpp
int add(int a, int b)
{
    return a+b;
}
```

Yahan function do numbers add karke result return karega.

# Function Calling

Function call ke through function execute hota hai.

Jab function call hota hai to control function ke paas chala jata hai aur execution complete hone ke baad wapas calling statement par aa jata hai.

## Syntax

```cpp
function_name(arguments);
```

## Example

```cpp
sum = add(10,20);
```

Yahan add() function call ho raha hai.

# Working of Function

Function execution ka sequence:

### Step 1

Function declaration compiler ko information deta hai.

### Step 2

Function call execute hoti hai.

### Step 3

Control function definition me transfer hota hai.

### Step 4

Function statements execute hoti hain.

### Step 5

Result return hota hai.

### Step 6

Control calling statement par wapas aa jata hai.

# Types of User Defined Functions

### Function Without Arguments and Without Return Value

```cpp
void display();
```

### Function With Arguments and Without Return Value

```cpp
void add(int,int);
```

### Function With Arguments and Return Value

```cpp
int add(int,int);
```

### Function Without Arguments and With Return Value

```cpp
int getData();
```

# Syntax of Function Declaration, Definition and Calling

## Declaration

```cpp
int add(int,int);
```

## Definition

```cpp
int add(int a,int b)
{
    return a+b;
}
```

## Function Call

```cpp
sum=add(10,20);
```

# Algorithm

## Algorithm for Arithmetic Operations Using Functions

### Step 1

Start Program.

### Step 2

Declare function prototypes.

### Step 3

Input two numbers from user.

### Step 4

Call addition function.

### Step 5

Call subtraction function.

### Step 6

Call multiplication function.

### Step 7

Call division function.

### Step 8

Display results.

### Step 9

Stop Program.

# Program (Turbo C++)

```cpp
#include<iostream.h>
#include<conio.h>

int add(int,int);
int sub(int,int);
int mul(int,int);
float divi(int,int);

void main()
{
    clrscr();

    int a,b;

    cout<<"Enter First Number : ";
    cin>>a;

    cout<<"Enter Second Number : ";
    cin>>b;

    cout<<"\nAddition = "<<add(a,b);
    cout<<"\nSubtraction = "<<sub(a,b);
    cout<<"\nMultiplication = "<<mul(a,b);
    cout<<"\nDivision = "<<divi(a,b);

    getch();
}

int add(int x,int y)
{
    return x+y;
}

int sub(int x,int y)
{
    return x-y;
}

int mul(int x,int y)
{
    return x*y;
}

float divi(int x,int y)
{
    return (float)x/y;
}
```

# Output

```text
Enter First Number : 20
Enter Second Number : 10

Addition = 30
Subtraction = 10
Multiplication = 200
Division = 2
```

# Applications of Functions

Functions almost every software application me use hoti hain.

### Banking Software

Interest calculation aur transaction processing.

### Hospital Management System

Patient record handling.

### Student Management System

Result calculation.

### Multimedia Software

Audio-video processing.

### Scientific Programs

Mathematical computations.

# Advantages of User Defined Functions

### Reusability

Ek baar likho aur multiple times use karo.

### Modularity

Program manageable modules me divide ho jata hai.

### Better Readability

Code easy to understand hota hai.

### Faster Development

Programming speed improve hoti hai.

### Easy Testing

Individual function ko separately test kiya ja sakta hai.

# Conclusion

In conclusion, Functions C++ programming ka fundamental concept hain jo code reusability, modularity aur maintainability provide karte hain. Function Declaration compiler ko function ki information deti hai, Function Definition actual implementation provide karti hai aur Function Calling execution initiate karti hai. User-defined functions large software systems ko organize karne aur repetitive tasks ko efficiently perform karne ke liye extensively use kiye jate hain. Functions ki proper understanding efficient C++ programming aur software development ke liye essential hai.



# Q2. What is Parameter Passing? Explain Call by Value and Call by Reference with Suitable Programs and Compare Both Techniques.

## Introduction

Programming me functions ka use kisi specific task ko perform karne ke liye kiya jata hai. Bahut baar function ko data provide karna padta hai taaki woh us data par processing kar sake. Function aur calling program ke beech data transfer karne ki process ko Parameter Passing kaha jata hai.

C++ me parameter passing ka concept bahut important hai kyunki isi ke through functions values receive karte hain aur operations perform karte hain. Parameter passing ke do major methods hote hain:

- Call by Value
- Call by Reference

Dono methods function ko data pass karte hain lekin unka working mechanism alag hota hai. Call by Value me data ki copy pass hoti hai jabki Call by Reference me original variable ka reference pass hota hai.

Large software systems, scientific applications, banking software aur multimedia applications me parameter passing extensively use ki jati hai.

# What is Parameter Passing?

Jab ek function ko execute karte waqt uske andar data bheja jata hai to us process ko Parameter Passing kaha jata hai.

### Definition

"Parameter Passing is the process of transferring data from the calling function to the called function."

## Example

```cpp
sum = add(10,20);
```

Yahan:

```cpp
10
20
```

Parameters hain jo add() function ko pass kiye ja rahe hain.

# Parameters and Arguments

Parameter passing ko samajhne ke liye Parameters aur Arguments ka difference samajhna important hai.

## Formal Parameters

Jo variables function definition me declare kiye jate hain unhe Formal Parameters kehte hain.

Example:

```cpp
int add(int a,int b)
```

Yahan:

```cpp
a
b
```

Formal Parameters hain.

## Actual Parameters (Arguments)

Jo values function call ke time pass ki jati hain unhe Actual Parameters ya Arguments kehte hain.

Example:

```cpp
add(10,20);
```

Yahan:

```cpp
10
20
```

Actual Parameters hain.

# Call by Value

Call by Value C++ me parameter passing ka default method hai.

Is method me actual parameter ki copy function ko pass ki jati hai.

Function ke andar agar value change bhi ho jaye to original variable par koi effect nahi padta.

## Definition

"Call by Value is a parameter passing technique in which a copy of actual arguments is passed to the function."

## Working of Call by Value

### Step 1

Actual variable ki value copy hoti hai.

### Step 2

Copy function ke formal parameter me store hoti hai.

### Step 3

Function copy par operation karta hai.

### Step 4

Original variable unchanged rehta hai.

## Syntax

```cpp
void function(int x)
{
}
```

## Example

```cpp
void change(int x)
{
    x = 100;
}
```

Agar original variable 10 hai to function ke baad bhi 10 hi rahega.

# Algorithm (Call by Value)

### Step 1

Start Program.

### Step 2

Declare variable a.

### Step 3

Assign value 10.

### Step 4

Call function change(a).

### Step 5

Function me copied value receive karo.

### Step 6

Copied value modify karo.

### Step 7

Display original value.

### Step 8

Stop Program.

# Program (Turbo C++) - Call by Value

```cpp
#include<iostream.h>
#include<conio.h>

void change(int);

void main()
{
    clrscr();

    int a=10;

    cout<<"Before Function Call = "<<a<<endl;

    change(a);

    cout<<"After Function Call = "<<a;

    getch();
}

void change(int x)
{
    x=100;

    cout<<"Inside Function = "<<x<<endl;
}
```

# Output

```text
Before Function Call = 10
Inside Function = 100
After Function Call = 10
```

## Explanation

Function ke andar value 100 ho gayi lekin original variable 10 hi raha.

Ye Call by Value ka main feature hai.

# Advantages of Call by Value

### Data Security

Original data modify nahi hota.

### Easy Debugging

Unexpected changes nahi hote.

### Simple Implementation

Program easy hota hai.

## Disadvantages of Call by Value

### Extra Memory Required

Data copy create hoti hai.

### Slower Performance

Large data structures me performance reduce ho sakti hai.

### No Direct Modification

Original variable change nahi kiya ja sakta.

# Call by Reference

Call by Reference me actual variable ka address/reference function ko pass kiya jata hai.

Function directly original variable par operation karta hai.

Agar function value modify kare to original variable bhi modify ho jata hai.

## Definition

"Call by Reference is a parameter passing technique in which the reference of the original variable is passed to the function."

## Working of Call by Reference

### Step 1

Original variable ka reference pass hota hai.

### Step 2

Function directly original memory location access karta hai.

### Step 3

Changes original variable me reflect hoti hain.

## Syntax

```cpp
void change(int &x)
{
}
```

## Example

```cpp
void change(int &x)
{
    x=100;
}
```

# Algorithm (Call by Reference)

### Step 1

Start Program.

### Step 2

Declare variable a.

### Step 3

Assign value 10.

### Step 4

Call function change(a).

### Step 5

Reference parameter receive karo.

### Step 6

Value modify karo.

### Step 7

Display original variable.

### Step 8

Stop Program.

# Program (Turbo C++) - Call by Reference

```cpp
#include<iostream.h>
#include<conio.h>

void change(int &);

void main()
{
    clrscr();

    int a=10;

    cout<<"Before Function Call = "<<a<<endl;

    change(a);

    cout<<"After Function Call = "<<a;

    getch();
}

void change(int &x)
{
    x=100;

    cout<<"Inside Function = "<<x<<endl;
}
```

# Output

```text
Before Function Call = 10
Inside Function = 100
After Function Call = 100
```

## Explanation

Function ne original variable ko modify kar diya kyunki reference pass hua tha.

# Practical Example: Swapping Numbers

Call by Reference ka common use swapping me hota hai.

```cpp
void swap(int &a,int &b)
{
    int temp;

    temp=a;
    a=b;
    b=temp;
}
```

Function original values ko directly swap kar deta hai.

# Comparison Between Call by Value and Call by Reference

## Data Passed

Call by Value me data ki copy pass hoti hai.

Call by Reference me original variable ka reference pass hota hai.

## Effect on Original Variable

Call by Value me original variable change nahi hota.

Call by Reference me original variable change ho jata hai.

## Memory Usage

Call by Value me extra memory lagti hai.

Call by Reference me extra copy create nahi hoti.

## Performance

Call by Value comparatively slower ho sakti hai.

Call by Reference faster hoti hai.

## Data Security

Call by Value zyada secure hai.

Call by Reference me accidental modification possible hai.

## Large Data Structures

Call by Value less efficient hai.

Call by Reference more efficient hai.

# Applications of Parameter Passing

### Banking Systems

Transaction details pass karne ke liye.

### Student Management Systems

Marks aur records process karne ke liye.

### Multimedia Software

Audio aur video data processing ke liye.

### Scientific Applications

Complex calculations ke liye.

### Database Systems

Record manipulation ke liye.

# Advantages of Parameter Passing

### Modularity

Functions reusable bante hain.

### Flexibility

Different values ke saath function use kiya ja sakta hai.

### Better Organization

Code structured rehta hai.

### Efficient Programming

Repeated code avoid hota hai.

# Conclusion

In conclusion, Parameter Passing C++ programming ka fundamental concept hai jo functions aur calling program ke beech data transfer karne ki facility provide karta hai. Call by Value me actual data ki copy pass hoti hai aur original variable unchanged rehta hai, jabki Call by Reference me original variable ka reference pass hota hai aur changes directly original data me reflect hoti hain. Dono techniques ki apni advantages aur limitations hain. Small aur secure operations ke liye Call by Value suitable hai, jabki large data processing aur efficient memory usage ke liye Call by Reference better choice hai. Modern C++ programming me dono techniques ka extensive use kiya jata hai.




# Q3. Define Reference Variables. Explain Their Significance in C++ and Write Programs Demonstrating Reference Variables and Return by Reference.

## Introduction

C++ ki sabse important aur powerful features me se ek feature **Reference Variables** hai. Reference variables programmer ko ek variable ka alternate name (alias) provide karti hain. Jab reference variable create ki jati hai to woh kisi existing variable ko refer karti hai aur us variable ki memory location ko share karti hai.

Reference variables ka concept C language me available nahi tha. Ye feature specially C++ me introduce kiya gaya tha taaki parameter passing, memory management aur program efficiency ko improve kiya ja sake. Reference variables ka use Call by Reference, Function Overloading, Operator Overloading aur Return by Reference jaise advanced concepts me hota hai.

Modern software development me reference variables ka bahut important role hai kyunki ye unnecessary copying ko avoid karti hain aur execution speed improve karti hain.

# What is a Reference Variable?

Reference Variable kisi existing variable ka doosra naam hota hai.

Ek reference variable aur original variable dono same memory location ko represent karte hain.

### Definition

"A reference variable is an alternative name given to an existing variable."

Jab bhi reference variable ko access kiya jata hai, actual me original variable hi access hota hai.

## Example

```cpp
int a = 10;

int &b = a;
```

Yahan:

```cpp
a
```

Original Variable hai.

Aur

```cpp
b
```

Reference Variable hai.

Dono same memory location ko refer karte hain.

# Working of Reference Variables

Reference variable create hone ke baad original variable aur reference variable me koi difference nahi rehta.

Agar original variable ki value change karein to reference variable ki value bhi automatically change ho jati hai.

Similarly, agar reference variable ki value change karein to original variable bhi change ho jata hai.

## Example

```cpp
int a = 10;

int &b = a;

b = 50;
```

Ab:

```cpp
a = 50
b = 50
```

Dono values same hongi.

# Syntax of Reference Variable

## Syntax

```cpp
data_type &reference_name = variable_name;
```

## Example

```cpp
int marks = 80;

int &m = marks;
```

Yahan m, marks ka reference hai.

# Characteristics of Reference Variables

Reference variables ki kuch important characteristics hoti hain.

### Must Be Initialized

Reference variable declare karte waqt initialize karna mandatory hota hai.

Correct:

```cpp
int a=10;

int &b=a;
```

Wrong:

```cpp
int &b;
```

### Cannot Be Null

Reference variable null nahi ho sakti.

### Same Memory Location

Reference aur original variable same memory location share karte hain.

### No New Memory Allocation

Reference variable generally separate memory allocate nahi karti.

# Significance of Reference Variables in C++

Reference variables C++ programming me bahut important role play karti hain.

## Efficient Memory Usage

Reference variables unnecessary copies create nahi karti.

Isse memory save hoti hai.

## Faster Execution

Copying avoid hone ki wajah se execution speed improve hoti hai.

## Call by Reference

Functions original variables ko directly modify kar sakte hain.

## Cleaner Syntax

Pointers ke comparison me reference variables easy aur readable hoti hain.

## Return by Reference

Functions values ko efficiently return kar sakte hain.

# Example of Reference Variable

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int a = 100;

    int &b = a;

    cout<<"Value of a = "<<a<<endl;
    cout<<"Value of b = "<<b<<endl;

    b = 200;

    cout<<"\nAfter Modification"<<endl;

    cout<<"Value of a = "<<a<<endl;
    cout<<"Value of b = "<<b;

    getch();
}
```

# Output

```text
Value of a = 100
Value of b = 100

After Modification

Value of a = 200
Value of b = 200
```

## Explanation

Reference variable b ko modify karne par original variable a bhi modify ho gaya.

Ye prove karta hai ki dono same memory location share kar rahe hain.

# Advantages of Reference Variables

### Memory Efficient

Extra copies create nahi hoti.

### Easy Syntax

Pointers se simpler hoti hain.

### Better Performance

Execution speed improve hoti hai.

### Safe Access

Null reference ka issue generally nahi hota.

### Useful in Functions

Call by Reference implementation easy ho jati hai.

# Limitations of Reference Variables

### Mandatory Initialization

Declaration ke time initialize karna zaruri hai.

### Cannot Be Reassigned

Ek baar reference assign ho gayi to kisi aur variable ko refer nahi kar sakti.

### Less Flexible Than Pointers

Pointers ke comparison me flexibility kam hoti hai.

# Return by Reference

Normally functions values return karti hain.

Lekin C++ me function reference bhi return kar sakta hai.

Is concept ko Return by Reference kaha jata hai.

## Definition

"Return by Reference is a mechanism in which a function returns a reference to a variable instead of returning a copy of the value."

Return by Reference memory efficient hota hai kyunki value ki copy create nahi hoti.

# Syntax of Return by Reference

```cpp
data_type& function_name()
{
}
```

## Example

```cpp
int& getValue()
{
    return num;
}
```

# Working of Return by Reference

### Step 1

Function reference return karta hai.

### Step 2

Returned reference original variable ko point karti hai.

### Step 3

Caller directly original variable ko modify kar sakta hai.

# Program Demonstrating Return by Reference

## Turbo C++ Program

```cpp
#include<iostream.h>
#include<conio.h>

int num = 10;

int& value()
{
    return num;
}

void main()
{
    clrscr();

    cout<<"Before Modification = "<<num<<endl;

    value() = 100;

    cout<<"After Modification = "<<num;

    getch();
}
```

# Output

```text
Before Modification = 10
After Modification = 100
```

## Explanation

Function value() ne num ka reference return kiya.

Statement:

```cpp
value() = 100;
```

Directly original variable num ko modify kar rahi hai.

# Algorithm for Reference Variable Program

### Step 1

Start Program.

### Step 2

Declare integer variable.

### Step 3

Create reference variable.

### Step 4

Display both values.

### Step 5

Modify reference variable.

### Step 6

Display updated values.

### Step 7

Stop Program.

# Algorithm for Return by Reference Program

### Step 1

Start Program.

### Step 2

Declare global variable.

### Step 3

Create function returning reference.

### Step 4

Return original variable.

### Step 5

Modify value through function.

### Step 6

Display updated value.

### Step 7

Stop Program.

# Applications of Reference Variables

Reference variables ka use bahut se real-world applications me hota hai.

### Banking Software

Account data efficiently handle karne ke liye.

### Database Systems

Large records process karne ke liye.

### Multimedia Applications

Audio aur video data processing me.

### Scientific Computing

Large datasets handle karne ke liye.

### Game Development

Objects aur game entities ko efficiently access karne ke liye.

# Difference Between Normal Variable and Reference Variable

## Memory

Normal variable apni memory allocate karti hai.

Reference variable existing memory ko share karti hai.

## Initialization

Normal variable initialize karna optional hai.

Reference variable initialize karna compulsory hai.

## Modification

Normal variable independent hoti hai.

Reference variable original variable ko affect karti hai.

## Usage

Normal variable data store karti hai.

Reference variable alias provide karti hai.

# Conclusion

In conclusion, Reference Variables C++ ki ek powerful feature hain jo existing variables ke aliases create karne ki facility provide karti hain. Ye memory efficient, fast aur easy-to-use mechanism hai jo Call by Reference aur Return by Reference jaise concepts ko implement karne me help karta hai. Reference variables unnecessary copying ko avoid karti hain aur program performance improve karti hain. Modern C++ programming me reference variables ka extensive use kiya jata hai, especially large applications, multimedia systems, database management aur scientific computing me. Isliye reference variables ko samajhna C++ programmer ke liye bahut important hai.



# Q4. What is Function Overloading? Explain the Concept with Suitable Examples. Write a C++ Program to Overload a Function for Different Parameter Lists.

## Introduction

C++ ek Object-Oriented Programming language hai jo programmer ko code reusability aur flexibility provide karti hai. C++ ki sabse important features me se ek feature **Function Overloading** hai. Function Overloading compile-time polymorphism ka ek example hai jisme ek hi function name ko different parameter lists ke saath multiple times define kiya ja sakta hai.

Traditional programming languages me har task ke liye alag function name rakhna padta tha. Jaise do integers add karne ke liye `addInt()`, do float values add karne ke liye `addFloat()` aur teen numbers add karne ke liye `addThree()` function banana padta tha. C++ me Function Overloading ke through ek hi naam `add()` ko different forms me use kiya ja sakta hai.

Function Overloading code ko simple, readable aur maintainable banati hai. Isi wajah se ye modern software development me extensively use ki jati hai.

# What is Function Overloading?

Function Overloading ek mechanism hai jisme ek hi function name ko multiple times define kiya jata hai lekin har function ki parameter list different hoti hai.

Compiler function ko parameters ki type aur number ke basis par identify karta hai.

### Definition

"Function Overloading is the process of defining multiple functions with the same name but different parameter lists."

Is technique ke through programmer ek hi logical operation ko different types ke data par perform kar sakta hai.

# Need of Function Overloading

Programming me kai baar ek hi operation different data types par perform karna padta hai.

Example:

- Integer Addition
- Float Addition
- Double Addition

Agar Function Overloading na ho to har operation ke liye alag function banana padega.

Function Overloading ke through code simple aur organized ban jata hai.

# Characteristics of Function Overloading

Function Overloading ki kuch important characteristics hoti hain.

### Same Function Name

Sabhi overloaded functions ka naam same hota hai.

### Different Parameter List

Har function ki parameter list alag honi chahiye.

### Compile Time Decision

Compiler compile time par decide karta hai ki kaunsa function execute hoga.

### Return Type Alone Cannot Overload

Sirf return type change karne se function overload nahi hota.

# Rules of Function Overloading

Function Overloading successful hone ke liye kuch rules follow karne padte hain.

## Different Number of Parameters

```cpp
sum(int a,int b)

sum(int a,int b,int c)
```

Valid Overloading.

## Different Data Types

```cpp
sum(int a,int b)

sum(float a,float b)
```

Valid Overloading.

## Different Order of Parameters

```cpp
sum(int,float)

sum(float,int)
```

Valid Overloading.

## Only Return Type Different

```cpp
int sum(int,int)

float sum(int,int)
```

Invalid Overloading.

Compiler confusion me pad jayega.

# How Function Overloading Works

Jab overloaded function call hota hai to compiler parameter list ko check karta hai.

Compiler matching function select karta hai.

Is process ko **Compile Time Binding** ya **Static Binding** kaha jata hai.

Example:

```cpp
sum(10,20);
```

Compiler integer version call karega.

```cpp
sum(10.5,20.5);
```

Compiler float version call karega.

# Example of Function Overloading

```cpp
int add(int a,int b)
{
    return a+b;
}

float add(float a,float b)
{
    return a+b;
}
```

Dono functions ka naam same hai lekin parameter types different hain.

# Types of Function Overloading

Function Overloading mainly following ways se ki ja sakti hai.

## Overloading by Number of Parameters

Example:

```cpp
show()

show(int)
```

## Overloading by Data Type

Example:

```cpp
show(int)

show(float)
```

## Overloading by Parameter Order

Example:

```cpp
show(int,float)

show(float,int)
```

# Advantages of Function Overloading

Function Overloading software development ko easier banati hai.

### Code Reusability

Same function name multiple situations me use kiya ja sakta hai.

### Better Readability

Program easy to understand hota hai.

### Easy Maintenance

Functions manage karna simple ho jata hai.

### Compile Time Efficiency

Compiler fast decision leta hai.

### Supports Polymorphism

Compile Time Polymorphism implement karti hai.

# Limitations of Function Overloading

### Compiler Complexity

Compiler ko matching function search karna padta hai.

### Ambiguity Errors

Wrong parameter combinations ambiguity create kar sakte hain.

### Increased Compilation Time

Large programs me compilation thodi slow ho sakti hai.

# Syntax of Function Overloading

## Function Declaration

```cpp
int add(int,int);

float add(float,float);

int add(int,int,int);
```

## Function Definitions

```cpp
int add(int a,int b)
{
    return a+b;
}

float add(float a,float b)
{
    return a+b;
}
```

# Algorithm

## Algorithm for Function Overloading Program

### Step 1

Start Program.

### Step 2

Declare overloaded functions.

### Step 3

Create integer addition function.

### Step 4

Create float addition function.

### Step 5

Create three-number addition function.

### Step 6

Call functions with different arguments.

### Step 7

Display results.

### Step 8

Stop Program.

# Turbo C++ Program

```cpp
#include<iostream.h>
#include<conio.h>

int add(int,int);
float add(float,float);
int add(int,int,int);

void main()
{
    clrscr();

    cout<<"Addition of Two Integers = "
        <<add(10,20)<<endl;

    cout<<"Addition of Two Floats = "
        <<add(10.5f,20.5f)<<endl;

    cout<<"Addition of Three Integers = "
        <<add(10,20,30)<<endl;

    getch();
}

int add(int a,int b)
{
    return a+b;
}

float add(float a,float b)
{
    return a+b;
}

int add(int a,int b,int c)
{
    return a+b+c;
}
```

# Output

```text
Addition of Two Integers = 30

Addition of Two Floats = 31

Addition of Three Integers = 60
```

# Another Example

Function area() ko different shapes ke liye overload kiya ja sakta hai.

```cpp
float area(float r)
{
    return 3.14*r*r;
}

int area(int l,int b)
{
    return l*b;
}
```

Yahan:

- Circle Area
- Rectangle Area

Dono ke liye same function name use hua hai.

# Function Overloading and Polymorphism

Function Overloading Compile Time Polymorphism ka example hai.

Polymorphism ka meaning hai:

"One Name, Multiple Forms"

Function Overloading me ek hi function name multiple behaviors show karta hai.

Example:

```cpp
add(10,20)

add(10.5,20.5)

add(10,20,30)
```

Sabhi cases me function name same hai lekin behavior different hai.

# Applications of Function Overloading

Function Overloading practical software development me extensively use hoti hai.

### Mathematical Libraries

Addition, subtraction aur multiplication functions.

### Graphics Software

Different shapes draw karne ke liye.

### Banking Applications

Different transaction calculations ke liye.

### Multimedia Applications

Audio aur video processing functions ke liye.

### Scientific Software

Complex calculations ke liye.

### Database Systems

Different types ke records handle karne ke liye.

# Difference Between Function Overloading and Function Overriding

## Function Overloading

Same class me hoti hai.

Compile Time Polymorphism provide karti hai.

Parameter list different hoti hai.

## Function Overriding

Inheritance me use hoti hai.

Run Time Polymorphism provide karti hai.

Function signature same hoti hai.

# Real Life Example

Calculator ko consider karo.

User:

```text
10 + 20
```

Bhi calculate kar sakta hai.

Aur:

```text
10.5 + 20.5
```

Bhi calculate kar sakta hai.

Program internally same function name use kar sakta hai.

Ye Function Overloading ka practical example hai.

# Conclusion

In conclusion, Function Overloading C++ ki ek powerful feature hai jo same function name ko different parameter lists ke saath multiple times define karne ki facility provide karti hai. Ye Compile Time Polymorphism ka important example hai aur code reusability, readability aur maintainability improve karti hai. Function Overloading ke through programmer different data types aur different numbers of parameters ke liye same function name use kar sakta hai. Modern software development, multimedia systems, scientific applications aur business software me Function Overloading extensively use ki jati hai. Isliye C++ programming me Function Overloading ka concept bahut important mana jata hai.



# Q5. Explain Inline Functions, Default Arguments, and Return by Reference. Write Separate C++ Programs Illustrating Each Concept.

## Introduction

C++ Object-Oriented Programming language me functions ka bahut important role hota hai. Functions code reusability, modularity aur maintainability provide karte hain. C++ traditional functions ke alawa kuch advanced features bhi provide karti hai jo programming ko aur efficient banate hain. Inme Inline Functions, Default Arguments aur Return by Reference ka special importance hai.

Inline Functions function call overhead ko reduce karti hain aur execution speed improve karti hain. Default Arguments programmer ko flexible function calls ki facility deti hain. Return by Reference memory efficient programming ko support karta hai aur unnecessary copying ko avoid karta hai.

Ye tino concepts modern C++ programming ke important features hain aur practical software development me extensively use kiye jate hain.

# Inline Functions

## Introduction to Inline Functions

Normally jab bhi function call hota hai to program control function ke paas transfer hota hai aur execution complete hone ke baad wapas calling statement par return hota hai. Is process me kuch extra execution time lagta hai jise Function Call Overhead kaha jata hai.

Small functions ke case me ye overhead unnecessary hota hai. Is problem ko solve karne ke liye C++ Inline Functions provide karti hai.

## Definition

"An Inline Function is a function whose code is expanded at the point of function call instead of performing a normal function call."

Compiler function body ko directly function call ki jagah insert kar deta hai.

## Syntax

```cpp
inline return_type function_name(parameters)
{
    statements;
}
```

## Example

```cpp
inline int square(int x)
{
    return x*x;
}
```

Agar program me:

```cpp
square(5);
```

Likha ho to compiler internally:

```cpp
5*5
```

Insert kar sakta hai.

## Working of Inline Functions

### Step 1

Compiler inline function ko identify karta hai.

### Step 2

Function body ko memory me store karta hai.

### Step 3

Function call ke time code directly insert kar deta hai.

### Step 4

Normal function call overhead avoid ho jata hai.

## Advantages of Inline Functions

### Faster Execution

Function call overhead remove ho jata hai.

### Better Performance

Small functions efficiently execute hoti hain.

### Easy Implementation

Syntax simple hoti hai.

### Suitable for Small Functions

Frequently called functions ke liye useful hai.

## Limitations of Inline Functions

### Large Functions

Large functions ke liye suitable nahi hoti.

### Increased Program Size

Code expansion ke karan executable size increase ho sakta hai.

### Compiler Decision

Compiler inline request ko ignore bhi kar sakta hai.

# Program for Inline Function (Turbo C++)

```cpp
#include<iostream.h>
#include<conio.h>

inline int square(int x)
{
    return x*x;
}

void main()
{
    clrscr();

    cout<<"Square of 5 = "
        <<square(5);

    getch();
}
```

## Output

```text
Square of 5 = 25
```

# Default Arguments

## Introduction to Default Arguments

Normally function call karte waqt jitne parameters function definition me hote hain utne hi arguments pass karne padte hain. Lekin kai situations me kuch parameters commonly same value use karte hain.

C++ Default Arguments provide karti hai jisse function parameters ko predefined values assign ki ja sakti hain.

## Definition

"Default Arguments are predefined values assigned to function parameters which are automatically used if no value is supplied during function call."

## Syntax

```cpp
return_type function_name
(parameter=value);
```

## Example

```cpp
int sum(int a,int b=10)
{
    return a+b;
}
```

Function call:

```cpp
sum(5);
```

Automatically:

```cpp
5 + 10
```

Calculate karega.

## Working of Default Arguments

### Step 1

Function declaration me default values define ki jati hain.

### Step 2

Function call ke time missing arguments identify hote hain.

### Step 3

Compiler default values assign karta hai.

### Step 4

Function execute hota hai.

## Advantages of Default Arguments

### Flexible Function Calls

Different number of arguments pass kiye ja sakte hain.

### Reduced Code

Multiple overloaded functions ki zarurat kam ho jati hai.

### Better Readability

Code easy to understand hota hai.

### Easy Maintenance

Changes easily manage kiye ja sakte hain.

## Rules of Default Arguments

### Rule 1

Default arguments rightmost parameters se start honi chahiye.

Correct:

```cpp
int add(int a,int b=10);
```

Wrong:

```cpp
int add(int a=10,int b);
```

### Rule 2

Default value declaration me deni chahiye.

# Program for Default Arguments (Turbo C++)

```cpp
#include<iostream.h>
#include<conio.h>

int add(int,int=10);

void main()
{
    clrscr();

    cout<<"Result 1 = "
        <<add(5)<<endl;

    cout<<"Result 2 = "
        <<add(5,20);

    getch();
}

int add(int a,int b)
{
    return a+b;
}
```

## Output

```text
Result 1 = 15
Result 2 = 25
```

# Return by Reference

## Introduction to Return by Reference

Normally functions values return karti hain. Jab function value return karta hai to us value ki copy caller ko milti hai. Large data structures ke case me ye copying inefficient ho sakti hai.

C++ Return by Reference provide karti hai jisme function value ki copy return karne ke bajay original variable ka reference return karta hai.

## Definition

"Return by Reference is a mechanism in which a function returns a reference to a variable instead of returning a copy of its value."

## Syntax

```cpp
data_type& function_name()
{
}
```

## Example

```cpp
int num=10;

int& value()
{
    return num;
}
```

## Working of Return by Reference

### Step 1

Function reference return karta hai.

### Step 2

Returned reference original variable ko refer karti hai.

### Step 3

Caller original variable ko directly access kar sakta hai.

### Step 4

No extra copy create hoti.

## Advantages of Return by Reference

### Memory Efficient

Extra copies create nahi hoti.

### Faster Execution

Performance improve hoti hai.

### Direct Modification

Original variable directly modify ho sakta hai.

### Suitable for Large Objects

Large structures aur objects efficiently handle hote hain.

## Limitations of Return by Reference

### Risky Usage

Local variables ka reference return nahi karna chahiye.

### Side Effects

Original data accidentally modify ho sakta hai.

# Program for Return by Reference (Turbo C++)

```cpp
#include<iostream.h>
#include<conio.h>

int num=10;

int& value()
{
    return num;
}

void main()
{
    clrscr();

    cout<<"Before = "
        <<num<<endl;

    value() = 100;

    cout<<"After = "
        <<num;

    getch();
}
```

## Output

```text
Before = 10
After = 100
```

## Explanation

Function ne num ka reference return kiya.

Statement:

```cpp
value() = 100;
```

Directly original variable ko modify kar rahi hai.

# Comparison of Inline Functions, Default Arguments and Return by Reference

## Purpose

Inline Function execution speed improve karti hai.

Default Arguments flexibility provide karti hain.

Return by Reference memory efficiency provide karta hai.

## Main Benefit

Inline Function function call overhead reduce karti hai.

Default Arguments multiple function versions ki need reduce karti hain.

Return by Reference copying avoid karta hai.

## Usage

Inline Function small frequently-used functions me use hoti hai.

Default Arguments optional parameters ke liye use hoti hain.

Return by Reference large data handling ke liye use hota hai.

# Applications

## Inline Functions

- Mathematical Calculations
- Graphics Programming
- Scientific Software

## Default Arguments

- Menu Driven Programs
- Database Applications
- Report Generation Systems

## Return by Reference

- Banking Systems
- Multimedia Applications
- Game Development
- Large Data Processing

# Conclusion

In conclusion, Inline Functions, Default Arguments aur Return by Reference C++ ke important advanced function features hain. Inline Functions function call overhead ko reduce karke execution speed improve karti hain. Default Arguments flexible function calls ki facility provide karti hain aur code complexity reduce karti hain. Return by Reference memory efficient programming ko support karta hai aur unnecessary copying avoid karta hai. Ye tino concepts modern software development me extensively use kiye jate hain aur efficient, optimized aur maintainable C++ programs develop karne me important role play karte hain.
