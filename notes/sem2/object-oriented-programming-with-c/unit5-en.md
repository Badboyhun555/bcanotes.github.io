# Q1. Define Virtual Functions. Explain Runtime Polymorphism and Write a C++ Program Demonstrating Virtual Functions.

## Introduction

Object-Oriented Programming (OOP) ka ek major objective flexibility aur reusability provide karna hai. C++ me polymorphism ek aisa feature hai jo ek hi interface ko multiple forms me use karne ki facility deta hai. Polymorphism do types ka hota hai:

1. Compile Time Polymorphism
2. Run Time Polymorphism

Run Time Polymorphism ko implement karne ke liye C++ me **Virtual Functions** use ki jati hain.

Virtual Functions inheritance aur pointers ke saath milkar kaam karti hain aur program execution ke dauran decide karti hain ki kaunsa function call hoga. Isi wajah se ise Dynamic Binding ya Late Binding bhi kaha jata hai.

Virtual Functions large software systems, multimedia applications, graphics software, operating systems aur game development me extensively use hoti hain.

---

# What is a Virtual Function?

Virtual Function ek member function hoti hai jo Base Class me declare ki jati hai aur Derived Class me redefine (override) ki ja sakti hai.

Jab Base Class pointer Derived Class object ko point karta hai to function call run-time par decide hota hai.

## Definition

"A Virtual Function is a member function declared with the keyword virtual in the base class and redefined in derived classes to achieve runtime polymorphism."

---

# Syntax of Virtual Function

```cpp
class Base
{
public:
    virtual void show()
    {
    }
};
```

---

# What is Runtime Polymorphism?

Runtime Polymorphism wo mechanism hai jisme function call execution ke dauran decide hota hai.

Compiler compile time par function decide nahi karta.

Decision run-time par object ke actual type ke according hota hai.

## Example

```cpp
Base *ptr;

ptr=&obj;
```

Function execution object type ke according hoga.

---

# Need of Runtime Polymorphism

Large software systems me ek common interface ki requirement hoti hai.

Example:

Shape

- Circle
- Rectangle
- Triangle

Sabke paas:

```cpp
area()
```

Function ho sakta hai.

Lekin implementation alag hogi.

Runtime Polymorphism correct function choose karta hai.

---

# Characteristics of Virtual Functions

## Declared using virtual keyword

```cpp
virtual void show();
```

## Must be member function

## Cannot be static

## Achieves Runtime Polymorphism

## Usually accessed through Base Class Pointer

---

# Working of Virtual Functions

### Step 1

Base Class create hoti hai.

### Step 2

Virtual Function declare hoti hai.

### Step 3

Derived Class function override karti hai.

### Step 4

Base Class Pointer create hota hai.

### Step 5

Pointer Derived Object ko point karta hai.

### Step 6

Run-time par correct function execute hota hai.

---

# Algorithm

### Step 1

Start Program.

### Step 2

Create Base Class.

### Step 3

Declare Virtual Function.

### Step 4

Create Derived Class.

### Step 5

Override Function.

### Step 6

Create Base Class Pointer.

### Step 7

Assign Derived Object.

### Step 8

Call Function.

### Step 9

Display Output.

### Step 10

Stop Program.

---

# Turbo C++ Program

```cpp
#include<iostream.h>
#include<conio.h>

class Base
{
public:

    virtual void show()
    {
        cout<<"Base Class Function"<<endl;
    }
};

class Derived : public Base
{
public:

    void show()
    {
        cout<<"Derived Class Function"<<endl;
    }
};

void main()
{
    clrscr();

    Base *ptr;

    Derived d;

    ptr=&d;

    ptr->show();

    getch();
}
```

---

# Output

```text
Derived Class Function
```

---

# Explanation

Pointer:

```cpp
Base *ptr;
```

Object:

```cpp
Derived d;
```

Assignment:

```cpp
ptr=&d;
```

Function Call:

```cpp
ptr->show();
```

Since function virtual hai, run-time par Derived Class ka function execute hoga.

---

# Advantages of Virtual Functions

## Runtime Polymorphism

Dynamic behavior provide karti hain.

## Code Reusability

Common interface use hota hai.

## Flexibility

Different implementations possible hoti hain.

## Easy Maintenance

Programs modular bante hain.

## Supports Dynamic Binding

Execution time par function selection hota hai.

---

# Applications of Virtual Functions

### Graphics Software

Shape Classes

### Multimedia Systems

Audio aur Video Classes

### Banking Systems

Account Types

### Game Development

Character Classes

### Educational Software

Student Categories

---

# Difference Between Compile Time and Runtime Polymorphism

## Compile Time Polymorphism

Function Overloading

Operator Overloading

Decision compile time par hota hai.

## Runtime Polymorphism

Virtual Functions

Decision run time par hota hai.

---

# Limitations of Virtual Functions

### Slight Performance Overhead

### Increased Complexity

### Requires Inheritance

---

# Conclusion

In conclusion, Virtual Functions C++ ka ek powerful feature hain jo Runtime Polymorphism implement karti hain. Ye Base Class Pointer ke through Derived Class Functions ko dynamically call karne ki facility deti hain. Virtual Functions flexibility, maintainability aur code reusability improve karti hain. Isi wajah se ye modern Object-Oriented Programming aur software development ka important part mani jati hain.



# Q2. What is a Friend Function? Explain its Characteristics and Applications. Write a C++ Program Using Friend Functions.

## Introduction

Object-Oriented Programming (OOP) ka ek important principle **Data Hiding** hai. Is principle ke according class ke private aur protected data members ko directly class ke bahar access nahi kiya ja sakta. Ye feature security aur data integrity maintain karne ke liye use hota hai.

Lekin kuch situations me aisi requirement hoti hai jahan kisi external function ko class ke private members access karne ki permission deni padti hai. Isi purpose ke liye C++ me **Friend Function** ka concept provide kiya gaya hai.

Friend Function OOP ke normal access control rules ka exception hai. Ye function class ka member nahi hota, lekin class ke private aur protected members ko directly access kar sakta hai.

Friend Functions ka use operator overloading, mathematical calculations, multiple classes ke data access aur complex software systems me extensively hota hai.

---

# What is a Friend Function?

Friend Function ek non-member function hota hai jise class ke andar **friend keyword** ke through declare kiya jata hai.

Ye function class ke private aur protected members ko directly access kar sakta hai.

## Definition

"A Friend Function is a non-member function that has the right to access the private and protected members of a class."

---

# Syntax of Friend Function

```cpp
class ClassName
{
    friend return_type function_name(arguments);
};
```

## Example

```cpp
class Test
{
    int num;

public:

    friend void display(Test);
};
```

Yahan:

```cpp
display()
```

Friend Function hai.

---

# Characteristics of Friend Function

Friend Function ki kuch important characteristics hoti hain:

## Not a Member Function

Friend Function class ka member nahi hota.

---

## Declared Using Friend Keyword

Friend Function ko friend keyword ke saath declare kiya jata hai.

Example:

```cpp
friend void show();
```

---

## Access Private Members

Private data members ko directly access kar sakta hai.

---

## Access Protected Members

Protected members ko bhi access kar sakta hai.

---

## Called Like Normal Function

Member Function ki tarah object ke through call nahi hota.

Example:

```cpp
show(obj);
```

---

## No this Pointer

Friend Function ke paas this pointer available nahi hota.

---

## Can Access Multiple Classes

Ek Friend Function multiple classes ka friend ho sakta hai.

---

# Need of Friend Function

Normally:

```cpp
private:
```

Members direct access nahi hote.

Lekin kuch situations me:

- Operator Overloading
- Mathematical Operations
- Data Sharing Between Classes

Ke liye external function ko access dena padta hai.

Friend Function isi problem ko solve karti hai.

---

# Working of Friend Function

### Step 1

Class create ki jati hai.

### Step 2

Friend Function declare ki jati hai.

### Step 3

Function class ke bahar define hoti hai.

### Step 4

Object create kiya jata hai.

### Step 5

Object parameter ke roop me pass kiya jata hai.

### Step 6

Private members access kiye jate hain.

### Step 7

Output display hota hai.

---

# Syntax Example

```cpp
class Student
{
private:

    int roll;

public:

    friend void display(Student);
};
```

Function Definition:

```cpp
void display(Student s)
{
}
```

---

# Algorithm

### Step 1

Start Program.

### Step 2

Create Class.

### Step 3

Declare Private Data Members.

### Step 4

Declare Friend Function.

### Step 5

Define Friend Function Outside Class.

### Step 6

Create Object.

### Step 7

Call Friend Function.

### Step 8

Display Output.

### Step 9

Stop Program.

---

# Turbo C++ Program Using Friend Function

```cpp
#include<iostream.h>
#include<conio.h>

class Student
{
private:

    int roll;

public:

    Student()
    {
        roll=101;
    }

    friend void display(Student);
};

void display(Student s)
{
    cout<<"Roll Number = "
        <<s.roll;
}

void main()
{
    clrscr();

    Student s;

    display(s);

    getch();
}
```

---

# Output

```text
Roll Number = 101
```

---

# Explanation

Class:

```cpp
Student
```

Private Member:

```cpp
roll
```

Friend Function:

```cpp
display(Student);
```

Function:

```cpp
display()
```

Directly:

```cpp
s.roll
```

Access kar sakti hai, jo normal function nahi kar sakta.

---

# Friend Function Accessing Two Classes

Friend Function multiple classes ka friend bhi ho sakta hai.

## Example

```cpp
class A;
class B;

friend void show(A,B);
```

Ye function dono classes ke private members access kar sakta hai.

---

# Program: Friend Function with Two Classes

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
        x=10;
    }

    friend void sum(A,B);
};

class B
{
    int y;

public:

    B()
    {
        y=20;
    }

    friend void sum(A,B);
};

void sum(A a,B b)
{
    cout<<"Sum = "
        <<a.x+b.y;
}

void main()
{
    clrscr();

    A obj1;
    B obj2;

    sum(obj1,obj2);

    getch();
}
```

---

# Output

```text
Sum = 30
```

---

# Advantages of Friend Function

## Access Private Members

Private data ko direct access kar sakti hai.

---

## Increases Flexibility

External functions ko controlled access milta hai.

---

## Useful in Operator Overloading

Complex operators overload karne me helpful hai.

---

## Can Access Multiple Classes

Multiple classes ke private data ko access kar sakti hai.

---

## Simplifies Complex Operations

Complex calculations easily perform ki ja sakti hain.

---

# Applications of Friend Function

## Operator Overloading

Particularly Binary Operators ke liye.

Example:

```cpp
+
-
*
/
```

---

## Mathematical Calculations

Complex Number Addition.

---

## Data Sharing

Multiple classes ke beech data sharing.

---

## Graphics Applications

Coordinates aur shapes calculations.

---

## Multimedia Systems

Audio aur Video object interactions.

---

## Banking Software

Account data processing.

---

# Limitations of Friend Function

## Breaks Data Hiding

Private data external function access kar sakti hai.

---

## Reduces Encapsulation

Encapsulation principle partially violate hota hai.

---

## Increased Dependency

Class aur friend function tightly coupled ho sakte hain.

---

## Security Risk

Improper usage data security affect kar sakti hai.

---

# Difference Between Member Function and Friend Function

## Member Function

Class ka member hota hai.

Object ke through call hota hai.

Has access to private members.

Uses this pointer.

Example:

```cpp
obj.show();
```

---

## Friend Function

Class ka member nahi hota.

Normal function ki tarah call hota hai.

Private members access kar sakta hai.

No this pointer.

Example:

```cpp
show(obj);
```

---

# Real Life Example

Banking System me Account class ka balance private ho sakta hai.

Interest Calculation Function ko balance access karna ho to usse Friend Function banaya ja sakta hai.

Isi tarah:

- Student Management System
- Multimedia Software
- Graphics Applications

Me Friend Functions useful hoti hain.

---

# Conclusion

In conclusion, Friend Function C++ ka ek special feature hai jo non-member functions ko class ke private aur protected members access karne ki permission deta hai. Ye function friend keyword ke through declare kiya jata hai aur class ke bahar define hota hai. Friend Functions flexibility provide karti hain aur operator overloading, mathematical calculations aur multi-class operations me extensively use hoti hain. Halanki ye encapsulation ko partially affect karti hain, lekin proper use ke saath ye Object-Oriented Programming ka ek powerful tool sabit hoti hain.




# Q3. Explain File Handling in C++. Discuss File Streams and File Operation Functions. Write Programs for Creating a File, Writing into a File, Reading from a File, and Appending Data. Include Syntax and Algorithms.

## Introduction

Programming me data ko permanently store karna bahut important hota hai. Variables aur arrays me store kiya gaya data sirf program execution tak hi available rehta hai. Jaise hi program terminate hota hai, data memory se remove ho jata hai.

Permanent data storage ke liye files ka use kiya jata hai. C++ me file handling ek important feature hai jo data ko files me store, retrieve aur modify karne ki facility provide karta hai.

File Handling ke through programmer student records, employee details, banking information, multimedia files aur database records ko permanently store kar sakta hai.

C++ me file operations ko perform karne ke liye **fstream.h** header file use ki jati hai.

---

# What is File Handling?

File Handling ka matlab hai files ke saath operations perform karna.

Jaise:

- File Create Karna
- File Open Karna
- Data Write Karna
- Data Read Karna
- Data Append Karna
- File Close Karna

## Definition

"File Handling is the process of storing, retrieving and managing data in files."

---

# Need of File Handling

Normal variables:

```cpp
int a=10;
```

Program terminate hone par data destroy ho jata hai.

File Handling:

```text
Student Records
Employee Records
Banking Data
Multimedia Data
```

Permanent storage provide karti hai.

---

# Advantages of File Handling

## Permanent Storage

Data permanently store hota hai.

## Large Data Storage

Large amount of data store kiya ja sakta hai.

## Data Sharing

Files different programs ke saath share ki ja sakti hain.

## Easy Retrieval

Stored data easily access kiya ja sakta hai.

## Efficient Record Management

Records maintain karna easy hota hai.

---

# File Streams in C++

C++ me files ko manage karne ke liye streams use hoti hain.

Stream data ka flow hota hai.

## Types of File Streams

### ifstream

Input File Stream

### ofstream

Output File Stream

### fstream

Input + Output File Stream

---

# 1. ifstream

File se data read karne ke liye use hota hai.

## Syntax

```cpp
ifstream fin;
```

---

# 2. ofstream

File me data write karne ke liye use hota hai.

## Syntax

```cpp
ofstream fout;
```

---

# 3. fstream

Read aur Write dono operations ke liye use hota hai.

## Syntax

```cpp
fstream file;
```

---

# File Operation Functions

## open()

File open karta hai.

### Syntax

```cpp
file.open("test.txt");
```

---

## close()

File close karta hai.

### Syntax

```cpp
file.close();
```

---

## getline()

Line read karta hai.

### Syntax

```cpp
getline(file,str);
```

---

## eof()

End of file check karta hai.

### Syntax

```cpp
file.eof();
```

---

## put()

Single character write karta hai.

### Syntax

```cpp
file.put(ch);
```

---

## get()

Single character read karta hai.

### Syntax

```cpp
file.get(ch);
```

---

# Creating a File

## Introduction

Jab ofstream object ke through file open ki jati hai aur file exist nahi karti to automatically create ho jati hai.

---

# Syntax

```cpp
ofstream fout;

fout.open("student.txt");
```

---

# Algorithm (Create File)

### Step 1

Start Program.

### Step 2

Create ofstream Object.

### Step 3

Open File.

### Step 4

Close File.

### Step 5

Stop Program.

---

# Program: Creating a File

```cpp
#include<fstream.h>
#include<conio.h>

void main()
{
    clrscr();

    ofstream fout;

    fout.open("student.txt");

    fout.close();

    getch();
}
```

---

# Output

```text
File Created Successfully
```

---

# Writing into a File

## Introduction

Writing operation ka use file me data store karne ke liye kiya jata hai.

---

# Syntax

```cpp
ofstream fout;

fout.open("student.txt");

fout<<"Hello";
```

---

# Algorithm (Write into File)

### Step 1

Start Program.

### Step 2

Open File.

### Step 3

Write Data.

### Step 4

Close File.

### Step 5

Stop Program.

---

# Program: Writing into a File

```cpp
#include<fstream.h>
#include<conio.h>

void main()
{
    clrscr();

    ofstream fout;

    fout.open("student.txt");

    fout<<"Welcome To C++ File Handling";

    fout.close();

    getch();
}
```

---

# Output (File Content)

```text
Welcome To C++ File Handling
```

---

# Reading from a File

## Introduction

Reading operation file me stored data ko retrieve karne ke liye use hoti hai.

---

# Syntax

```cpp
ifstream fin;

fin.open("student.txt");
```

---

# Algorithm (Read File)

### Step 1

Start Program.

### Step 2

Open File.

### Step 3

Read Data.

### Step 4

Display Data.

### Step 5

Close File.

### Step 6

Stop Program.

---

# Program: Reading from a File

```cpp
#include<iostream.h>
#include<fstream.h>
#include<conio.h>

void main()
{
    clrscr();

    char ch;

    ifstream fin;

    fin.open("student.txt");

    while(fin.get(ch))
    {
        cout<<ch;
    }

    fin.close();

    getch();
}
```

---

# Output

```text
Welcome To C++ File Handling
```

---

# Appending Data into a File

## Introduction

Append operation existing file ke end me new data add karti hai.

Existing data delete nahi hota.

---

# Append Mode

```cpp
ios::app
```

---

# Syntax

```cpp
ofstream fout;

fout.open("student.txt",
ios::app);
```

---

# Algorithm (Append Data)

### Step 1

Start Program.

### Step 2

Open File in Append Mode.

### Step 3

Write New Data.

### Step 4

Close File.

### Step 5

Stop Program.

---

# Program: Appending Data

```cpp
#include<fstream.h>
#include<conio.h>

void main()
{
    clrscr();

    ofstream fout;

    fout.open("student.txt",
    ios::app);

    fout<<"\nFile Handling Example";

    fout.close();

    getch();
}
```

---

# Output (File Content)

```text
Welcome To C++ File Handling
File Handling Example
```

---

# File Opening Modes

## ios::in

Reading Mode

```cpp
ios::in
```

---

## ios::out

Writing Mode

```cpp
ios::out
```

---

## ios::app

Append Mode

```cpp
ios::app
```

---

## ios::binary

Binary Mode

```cpp
ios::binary
```

---

# Types of Files

## Text Files

Human readable format.

Example:

```text
student.txt
```

---

## Binary Files

Machine readable format.

Example:

```text
student.dat
```

---

# Applications of File Handling

## Student Management Systems

Student records store karne ke liye.

---

## Banking Software

Customer details aur transactions store karne ke liye.

---

## Hospital Management Systems

Patient records maintain karne ke liye.

---

## Multimedia Applications

Audio aur video metadata store karne ke liye.

---

## Inventory Systems

Product information manage karne ke liye.

---

## Database Applications

Data storage ke liye.

---

# Advantages of File Handling

### Permanent Data Storage

### Large Data Management

### Easy Data Retrieval

### Efficient Record Keeping

### Data Sharing

### Improved Performance

---

# Limitations of File Handling

### File Corruption Risk

### Security Issues

### Additional Storage Required

### Slower Than RAM Access

---

# Difference Between Text and Binary Files

## Text File

Human readable hoti hai.

Characters ke form me data store hota hai.

Example:

```text
ABC
```

---

## Binary File

Human readable nahi hoti.

Machine format me data store hota hai.

Faster access provide karti hai.

---

# Real Life Example

College Management System me:

- Student Name
- Roll Number
- Marks

File me permanently store kiye jate hain.

Isi tarah:

- Banking Applications
- Multimedia Software
- Hospital Systems

Sab file handling use karte hain.

---

# Conclusion

In conclusion, File Handling C++ ka ek important feature hai jo data ko permanently store aur retrieve karne ki facility provide karta hai. C++ me ifstream, ofstream aur fstream classes file operations perform karne ke liye use hoti hain. File creation, writing, reading aur appending software development ke fundamental operations hain. File Handling student management systems, banking applications, multimedia software aur database systems me extensively use hoti hai. Isliye File Handling C++ programming ka ek essential concept mana jata hai.



# Q4. Explain Streams in C++. Discuss Input Stream, Output Stream, and File Streams. Compare cin, cout, ifstream, ofstream, and fstream.

## Introduction

C++ me data transfer ka concept bahut important hai. Jab program user se input leta hai ya screen par output display karta hai, tab data ek jagah se doosri jagah move karta hai. Isi data movement ko **Stream** kehte hain.

Stream C++ ke Input/Output (I/O) system ka foundation hai. Stream ek logical path hota hai jiske through data source se destination tak flow karta hai.

Example:

- Keyboard se Program
- Program se Monitor
- File se Program
- Program se File

Ye sab stream ke through hi perform hote hain.

C++ me stream concept ko implement karne ke liye **iostream.h** aur **fstream.h** header files use ki jati hain.

Streams modern software development, operating systems, multimedia applications, networking software aur database systems me extensively use hoti hain.

---

# What is a Stream?

Stream data ke flow ko represent karti hai.

Data ek source se destination ki taraf continuously move karta hai.

## Definition

"A Stream is a sequence of bytes flowing between a source and a destination."

---

# Example of Stream

Input:

```text
Keyboard → Program
```

Output:

```text
Program → Monitor
```

File:

```text
File → Program → File
```

---

# Need of Streams

Programming me data ko receive aur send karna hota hai.

Without streams:

- Input difficult hota
- Output difficult hota
- File handling impossible hoti

Streams:

- Data transfer simplify karti hain
- Standard interface provide karti hain
- Efficient communication enable karti hain

---

# Types of Streams

C++ me streams mainly teen categories me divide hoti hain:

## Input Stream

## Output Stream

## File Stream

---

# 1. Input Stream

Input Stream data ko external source se program me transfer karti hai.

Source ho sakta hai:

- Keyboard
- File
- Network

## Diagram

```text
Keyboard
    |
    V
 Program
```

---

## Example

```cpp
cin>>num;
```

Yahan:

```cpp
cin
```

Input Stream hai.

---

## Characteristics

### Data Receive Karti Hai

### Source Se Program Tak Flow

### User Input Handle Karti Hai

### Keyboard Input Support Karti Hai

---

# 2. Output Stream

Output Stream data ko program se external device tak transfer karti hai.

Destination ho sakta hai:

- Monitor
- Printer
- File

## Diagram

```text
Program
   |
   V
Monitor
```

---

## Example

```cpp
cout<<"Hello";
```

Yahan:

```cpp
cout
```

Output Stream hai.

---

## Characteristics

### Data Send Karti Hai

### Program Se Device Tak Flow

### Result Display Karti Hai

### Screen Output Support Karti Hai

---

# 3. File Stream

File Stream files ke saath communication ke liye use hoti hai.

Ye Input aur Output dono support karti hai.

## Diagram

```text
File <----> Program
```

---

## Characteristics

### Permanent Storage

### Read and Write Operations

### File Management

### Large Data Handling

---

# Stream Class Hierarchy

C++ stream classes hierarchy follow karti hain.

```text
ios
 |
 ----------------
 |              |
istream      ostream
 |              |
 ----------------
        |
      iostream
```

File streams:

```text
ifstream
ofstream
fstream
```

---

# cin Stream

## Introduction

cin ka full form hai:

```text
Console Input
```

Ye keyboard se input receive karta hai.

---

## Syntax

```cpp
cin>>variable;
```

---

## Example

```cpp
int age;

cin>>age;
```

---

## Working

User value enter karta hai aur cin us value ko variable me store kar deta hai.

---

# cout Stream

## Introduction

cout ka full form hai:

```text
Console Output
```

Ye output screen par display karta hai.

---

## Syntax

```cpp
cout<<"Message";
```

---

## Example

```cpp
cout<<"Hello";
```

---

## Working

Program output monitor par display hota hai.

---

# ifstream

## Introduction

ifstream ka full form hai:

```text
Input File Stream
```

Ye file se data read karne ke liye use hota hai.

---

## Syntax

```cpp
ifstream fin;
```

---

## Example

```cpp
ifstream fin("data.txt");
```

---

## Uses

### File Reading

### Data Retrieval

### Record Processing

---

# ofstream

## Introduction

ofstream ka full form hai:

```text
Output File Stream
```

Ye file me data write karne ke liye use hota hai.

---

## Syntax

```cpp
ofstream fout;
```

---

## Example

```cpp
ofstream fout("data.txt");
```

---

## Uses

### File Writing

### Report Generation

### Record Storage

---

# fstream

## Introduction

fstream ka full form hai:

```text
File Stream
```

Ye file me read aur write dono operations perform kar sakta hai.

---

## Syntax

```cpp
fstream file;
```

---

## Example

```cpp
fstream file("data.txt");
```

---

## Uses

### Reading

### Writing

### Updating Records

### File Management

---

# Comparison: cin, cout, ifstream, ofstream and fstream

| Stream | Full Form | Purpose | Direction |
|----------|------------|----------|-----------|
| cin | Console Input | Input from Keyboard | Input |
| cout | Console Output | Output to Screen | Output |
| ifstream | Input File Stream | Read from File | Input |
| ofstream | Output File Stream | Write to File | Output |
| fstream | File Stream | Read + Write File | Both |

---

# Example Program Using cin and cout

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int age;

    cout<<"Enter Age : ";

    cin>>age;

    cout<<"Age = "<<age;

    getch();
}
```

---

# Output

```text
Enter Age : 20

Age = 20
```

---

# Example Program Using File Streams

```cpp
#include<fstream.h>
#include<conio.h>

void main()
{
    clrscr();

    ofstream fout;

    fout.open("data.txt");

    fout<<"C++ Streams";

    fout.close();

    getch();
}
```

---

# Advantages of Streams

## Easy Data Transfer

Input aur output simplify ho jata hai.

---

## Device Independence

Same syntax multiple devices ke liye use hoti hai.

---

## Efficient Communication

Fast data transfer provide karti hai.

---

## Supports File Handling

Permanent storage possible hoti hai.

---

## Reusability

Standard library classes available hoti hain.

---

# Applications of Streams

## Operating Systems

Input-output management.

---

## Multimedia Applications

Audio aur video data transfer.

---

## Database Systems

Record processing.

---

## Banking Software

Transaction handling.

---

## Networking Applications

Data communication.

---

## Educational Software

Student record management.

---

# Difference Between Input and Output Stream

## Input Stream

Data receive karti hai.

Example:

```cpp
cin
```

Direction:

```text
Device → Program
```

---

## Output Stream

Data send karti hai.

Example:

```cpp
cout
```

Direction:

```text
Program → Device
```

---

# Real Life Example

ATM Machine me:

Input:

```text
PIN Number
```

Output:

```text
Balance Information
```

Bank Server:

```text
File Streams
```

Use karta hai.

Isi tarah Multimedia Applications:

- Audio Files
- Video Files

Ko streams ke through process karti hain.

---

# Conclusion

In conclusion, Streams C++ ke Input/Output system ka fundamental concept hain jo data ke flow ko represent karti hain. Input Stream data ko source se program tak transfer karti hai, Output Stream data ko program se destination tak bhejti hai aur File Streams files ke saath communication provide karti hain. cin, cout, ifstream, ofstream aur fstream C++ ke important stream objects hain jo different input-output operations perform karte hain. Streams software development, multimedia applications, database systems aur networking software me extensively use hoti hain aur efficient data communication provide karti hain.


# Q5. Explain Templates and Exception Handling in C++. Write Programs for Function Template, Class Template, and Try–Throw–Catch Exception Handling. Include Syntax, Algorithm, Program, and Advantages.

## Introduction

C++ ek powerful Object-Oriented Programming language hai jo code reusability, flexibility aur reliability provide karti hai. Large software systems me programmers ko kai baar same logic different data types ke liye likhna padta hai. Isi problem ko solve karne ke liye C++ me **Templates** provide kiye gaye hain.

Isi tarah program execution ke dauran unexpected errors bhi aa sakte hain, jaise divide by zero, invalid input, file opening failure etc. In errors ko handle karne ke liye C++ me **Exception Handling** ka feature diya gaya hai.

Templates aur Exception Handling dono modern C++ programming ke important concepts hain. Templates code reusability provide karte hain jabki Exception Handling program ko abnormal situations me bhi safely execute karne me help karti hai.

---

# Part A : Templates in C++

# What is a Template?

Template C++ ka generic programming feature hai jo ek hi code ko multiple data types ke saath use karne ki facility deta hai.

Template ek blueprint ki tarah kaam karta hai jisse compiler required data type ke according function ya class generate karta hai.

## Definition

"A Template is a generic definition of a function or class that can operate with different data types."

---

# Need of Templates

Without Templates:

```cpp
int add(int,int);

float add(float,float);

double add(double,double);
```

Same logic baar-baar likhna padta hai.

Templates use karne par:

```cpp
template<class T>
T add(T,T);
```

Ek hi function sabhi data types ke liye work karega.

---

# Types of Templates

## Function Template

Functions ke liye.

## Class Template

Classes ke liye.

---

# Function Template

## Introduction

Function Template ek generic function create karta hai jo multiple data types ke saath work kar sakta hai.

---

# Syntax of Function Template

```cpp
template<class T>

return_type function_name(T a,T b)
{
}
```

---

# Example

```cpp
template<class T>

T add(T a,T b)
{
    return a+b;
}
```

---

# Algorithm (Function Template)

### Step 1

Start Program.

### Step 2

Create Template Function.

### Step 3

Pass Values.

### Step 4

Perform Operation.

### Step 5

Display Result.

### Step 6

Stop Program.

---

# Program: Function Template

```cpp
#include<iostream.h>
#include<conio.h>

template<class T>

T maximum(T a,T b)
{
    if(a>b)
        return a;
    else
        return b;
}

void main()
{
    clrscr();

    cout<<"Maximum = "
        <<maximum(10,20);

    cout<<endl;

    cout<<"Maximum = "
        <<maximum(10.5,5.2);

    getch();
}
```

---

# Output

```text
Maximum = 20

Maximum = 10.5
```

---

# Advantages of Function Templates

### Code Reusability

### Reduced Code Duplication

### Easy Maintenance

### Better Flexibility

---

# Class Template

## Introduction

Class Template ek generic class create karti hai jo multiple data types ke saath work kar sakti hai.

---

# Syntax of Class Template

```cpp
template<class T>

class ClassName
{
};
```

---

# Example

```cpp
template<class T>

class Test
{
};
```

---

# Working of Class Template

### Step 1

Template Class Create Hoti Hai.

### Step 2

Data Type Specify Hota Hai.

### Step 3

Object Create Hota Hai.

### Step 4

Operations Perform Hoti Hain.

---

# Algorithm (Class Template)

### Step 1

Start Program.

### Step 2

Create Template Class.

### Step 3

Declare Data Member.

### Step 4

Create Constructor.

### Step 5

Display Data.

### Step 6

Create Object.

### Step 7

Display Output.

### Step 8

Stop Program.

---

# Program: Class Template

```cpp
#include<iostream.h>
#include<conio.h>

template<class T>

class Sample
{
    T data;

public:

    Sample(T x)
    {
        data=x;
    }

    void display()
    {
        cout<<"Data = "
            <<data;
    }
};

void main()
{
    clrscr();

    Sample<int> s1(100);

    s1.display();

    cout<<endl;

    Sample<float> s2(10.5);

    s2.display();

    getch();
}
```

---

# Output

```text
Data = 100

Data = 10.5
```

---

# Advantages of Class Templates

### Generic Classes

### Code Reusability

### Improved Maintainability

### Type Safety

### Better Flexibility

---

# Applications of Templates

## Data Structures

Stack

Queue

Linked List

---

## Database Systems

Generic Record Handling

---

## Scientific Applications

Mathematical Computations

---

## Multimedia Software

Generic Data Processing

---

## Graphics Applications

Shape Processing

---

# Part B : Exception Handling

# What is Exception Handling?

Program execution ke dauran unexpected situations aa sakti hain.

Example:

- Divide By Zero
- Invalid Input
- File Not Found
- Memory Allocation Failure

Aise errors ko safely handle karne ki technique ko Exception Handling kehte hain.

---

## Definition

"Exception Handling is a mechanism used to detect and handle runtime errors."

---

# Need of Exception Handling

Without Exception Handling:

Program crash ho sakta hai.

With Exception Handling:

Program safely execute hota hai.

---

# Components of Exception Handling

C++ me Exception Handling teen keywords par based hoti hai:

## try

Risky code likhne ke liye.

## throw

Exception generate karne ke liye.

## catch

Exception handle karne ke liye.

---

# Working of Exception Handling

### Step 1

try block execute hota hai.

### Step 2

Error detect hota hai.

### Step 3

throw statement execute hoti hai.

### Step 4

Control catch block me transfer hota hai.

### Step 5

Exception handle hoti hai.

### Step 6

Program continue karta hai.

---

# Syntax of Exception Handling

```cpp
try
{
}
catch(type variable)
{
}
```

---

# Example

```cpp
try
{
    throw 10;
}

catch(int x)
{
}
```

---

# Algorithm (Exception Handling)

### Step 1

Start Program.

### Step 2

Enter try Block.

### Step 3

Check Condition.

### Step 4

Throw Exception.

### Step 5

Transfer Control to Catch Block.

### Step 6

Handle Error.

### Step 7

Display Message.

### Step 8

Stop Program.

---

# Program: Try–Throw–Catch

```cpp
#include<iostream.h>
#include<conio.h>

void main()
{
    clrscr();

    int a=10;
    int b=0;

    try
    {
        if(b==0)
            throw b;

        cout<<a/b;
    }

    catch(int)
    {
        cout<<"Division By Zero Error";
    }

    getch();
}
```

---

# Output

```text
Division By Zero Error
```

---

# Explanation

Condition:

```cpp
if(b==0)
```

True hai.

Exception:

```cpp
throw b;
```

Generate hoti hai.

Control:

```cpp
catch(int)
```

Block me transfer hota hai.

Error handle ho jati hai.

---

# Advantages of Exception Handling

## Prevents Program Crash

Program abnormal termination se bach jata hai.

---

## Better Error Management

Errors systematically handle hoti hain.

---

## Improves Reliability

Software zyada reliable banta hai.

---

## Easy Debugging

Errors identify karna easy hota hai.

---

## Improved Maintainability

Large applications manage karna easy hota hai.

---

# Applications of Exception Handling

## Banking Software

Invalid Transactions

---

## Database Systems

Connection Errors

---

## Operating Systems

Resource Failures

---

## Multimedia Applications

Audio/Video File Errors

---

## Networking Software

Communication Failures

---

## Web Applications

Input Validation

---

# Difference Between Compile Time Error and Runtime Error

## Compile Time Error

Compilation ke dauran detect hoti hai.

Example:

```cpp
Missing Semicolon
```

---

## Runtime Error

Execution ke dauran detect hoti hai.

Example:

```cpp
Divide By Zero
```

---

# Difference Between Templates and Exception Handling

| Templates | Exception Handling |
|------------|-------------------|
| Code Reusability Provide Karte Hain | Runtime Errors Handle Karte Hain |
| Generic Programming Ke Liye | Error Management Ke Liye |
| Compile Time Feature | Runtime Feature |
| Function/Class Templates Use Karte Hain | try, throw, catch Use Karte Hain |

---

# Real Life Example

ATM Machine me:

Agar customer wrong PIN enter kare:

```text
Exception Handling
```

Use hoti hai.

Banking Software me:

Different account types:

```text
Templates
```

Use kar sakte hain.

Multimedia Software me:

Audio, Video aur Image processing ke liye Templates aur Exception Handling dono extensively use hote hain.

---

# Conclusion

In conclusion, Templates aur Exception Handling C++ ke bahut important features hain. Templates generic programming aur code reusability provide karte hain, jisse same code multiple data types ke liye use kiya ja sakta hai. Function Templates aur Class Templates development time aur code duplication ko reduce karte hain. Exception Handling runtime errors ko safely handle karti hai aur try, throw aur catch keywords ke through program ko crash hone se bachati hai. Modern software development, multimedia systems, database applications aur networking software me Templates aur Exception Handling ka bahut important role hai. Isi liye ye C++ programming ke advanced aur essential concepts mane jate hain.
