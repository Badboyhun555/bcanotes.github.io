# DATA STRUCTURES AND ALGORITHMS

# UNIT – SEARCHING, SORTING AND HASHING

---

# Introduction to Searching and Sorting

Searching and sorting are among the most important concepts in Data Structures and Algorithms.

In computer science:
- Huge amounts of data are stored
- Data must be searched quickly
- Data must be arranged properly

Searching helps:
```text
Find data
```

Sorting helps:
```text
Arrange data
```

Without efficient searching and sorting:
- Programs become slow
- Data handling becomes difficult

---

# Real Life Example of Searching

Examples:
- Searching contact number in mobile
- Searching student roll number
- Searching book in library

Suppose books in library are randomly placed:
- Searching takes more time

But if books are arranged alphabetically:
- Searching becomes faster

---

# Real Life Example of Sorting

Examples:
- Ranking students by marks
- Sorting names alphabetically
- Arranging products by price

---

# SEARCHING

# Introduction to Searching

Searching means finding a particular element from collection of data.

---

# Types of Searching

Main searching techniques:
1. Sequential Search
2. Binary Search

---

# Sequential Searching

# Introduction

Sequential searching is also called:
```text
Linear Search
```

In this method:
- Elements are checked one-by-one sequentially.

---

# Working of Sequential Search

1. Start from first element
2. Compare target value
3. Continue until element found

---

# Real Life Example

Suppose teacher checks attendance register:
- One name at a time

This is sequential searching.

---

# Advantages of Sequential Search

- Simple implementation
- No sorting required

---

# Disadvantages

- Slow for large data
- More comparisons required

---

# Time Complexity

```text
Best Case  : O(1)
Worst Case : O(n)
```

---

# Image Representation of Sequential Search

```md
![Sequential Search](images/sequential-search.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/7/78/Linear_search.gif

---

# Algorithm of Sequential Search

```text
1. Start from first element
2. Compare target value
3. If found:
      return position
4. Else continue
5. If end reached:
      element not found
```

---

# C Program for Sequential Search

```c
#include<stdio.h>
#include<conio.h>

void main()
{
    int arr[10],n,i,item,found=0;

    clrscr();

    printf("Enter Number of Elements: ");
    scanf("%d",&n);

    printf("Enter Elements:\n");

    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }

    printf("Enter Element to Search: ");
    scanf("%d",&item);

    for(i=0;i<n;i++)
    {
        if(arr[i]==item)
        {
            found=1;

            printf("Element Found at Position %d",i+1);

            break;
        }
    }

    if(found==0)
    {
        printf("Element Not Found");
    }

    getch();
}
```

---

# Binary Searching

# Introduction

Binary search is an efficient searching technique.

It works only on:
```text
Sorted arrays
```

---

# Working of Binary Search

1. Find middle element
2. Compare target value
3. If smaller:
      search left half
4. If greater:
      search right half

---

# Real Life Example

Suppose dictionary contains words alphabetically.

Instead of checking one-by-one:
- We open middle page first

This is binary search concept.

---

# Advantages of Binary Search

- Very fast
- Efficient for large data

---

# Disadvantages

- Requires sorted data

---

# Time Complexity

```text
Best Case  : O(1)
Worst Case : O(log n)
```

---

# Image Representation of Binary Search

```md
![Binary Search](images/binary-search.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg

---

# Algorithm of Binary Search

```text
1. Find middle element
2. Compare with target
3. If equal:
      found
4. If smaller:
      search right half
5. Else:
      search left half
```

---

# C Program for Binary Search

```c
#include<stdio.h>
#include<conio.h>

void main()
{
    int arr[10],n,i,item;
    int low,high,mid,found=0;

    clrscr();

    printf("Enter Number of Elements: ");
    scanf("%d",&n);

    printf("Enter Sorted Elements:\n");

    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }

    printf("Enter Element to Search: ");
    scanf("%d",&item);

    low=0;
    high=n-1;

    while(low<=high)
    {
        mid=(low+high)/2;

        if(arr[mid]==item)
        {
            found=1;

            printf("Element Found at Position %d",mid+1);

            break;
        }

        else if(arr[mid]<item)
        {
            low=mid+1;
        }

        else
        {
            high=mid-1;
        }
    }

    if(found==0)
    {
        printf("Element Not Found");
    }

    getch();
}
```

---

# Difference Between Sequential and Binary Search

| Sequential Search | Binary Search |
|---|---|
| Works on unsorted data | Requires sorted data |
| Slow | Fast |
| O(n) complexity | O(log n) complexity |

---

# SORTING

# Introduction to Sorting

Sorting means arranging data in:
- Ascending order
OR
- Descending order

---

# Importance of Sorting

Sorting improves:
- Searching speed
- Data organization
- Processing efficiency

---

# Types of Sorting Techniques

1. Bubble Sort
2. Selection Sort
3. Insertion Sort
4. Quick Sort
5. Merge Sort

---

# Bubble Sort

# Introduction

Bubble sort repeatedly compares adjacent elements and swaps them if needed.

Largest element "bubbles up" to end.

---

# Working of Bubble Sort

1. Compare adjacent elements
2. Swap if incorrect order
3. Repeat passes

---

# Real Life Example

Like bubbles rising in water:
- Larger elements move upward

---

# Image Representation

```md
![Bubble Sort](images/bubble-sort.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif

---

# Advantages

- Simple implementation

---

# Disadvantages

- Slow for large data

---

# Time Complexity

```text
O(n²)
```

---

# C Program for Bubble Sort

```c
#include<stdio.h>
#include<conio.h>

void main()
{
    int arr[10],n,i,j,temp;

    clrscr();

    printf("Enter Number of Elements: ");
    scanf("%d",&n);

    printf("Enter Elements:\n");

    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }

    for(i=0;i<n-1;i++)
    {
        for(j=0;j<n-1-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    printf("Sorted Array:\n");

    for(i=0;i<n;i++)
    {
        printf("%d ",arr[i]);
    }

    getch();
}
```

---

# Selection Sort

# Introduction

Selection sort repeatedly selects smallest element and places it correctly.

---

# Working

1. Find smallest element
2. Swap with first unsorted element
3. Repeat

---

# Advantages

- Fewer swaps

---

# Disadvantages

- Slow for large arrays

---

# Image Representation

```md
![Selection Sort](images/selection-sort.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif

---

# C Program for Selection Sort

```c
#include<stdio.h>
#include<conio.h>

void main()
{
    int arr[10],n,i,j,min,temp;

    clrscr();

    printf("Enter Number of Elements: ");
    scanf("%d",&n);

    printf("Enter Elements:\n");

    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }

    for(i=0;i<n-1;i++)
    {
        min=i;

        for(j=i+1;j<n;j++)
        {
            if(arr[j]<arr[min])
            {
                min=j;
            }
        }

        temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }

    printf("Sorted Array:\n");

    for(i=0;i<n;i++)
    {
        printf("%d ",arr[i]);
    }

    getch();
}
```

---

# Insertion Sort

# Introduction

Insertion sort inserts elements at proper position.

Works similar to arranging playing cards.

---

# Real Life Example

While arranging cards:
- Each new card inserted correctly

---

# Working

1. Take one element
2. Compare previous elements
3. Insert correctly

---

# Advantages

- Efficient for small arrays

---

# Disadvantages

- Slow for large arrays

---

# Image Representation

```md
![Insertion Sort](images/insertion-sort.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif

---

# C Program for Insertion Sort

```c
#include<stdio.h>
#include<conio.h>

void main()
{
    int arr[10],n,i,j,temp;

    clrscr();

    printf("Enter Number of Elements: ");
    scanf("%d",&n);

    printf("Enter Elements:\n");

    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }

    for(i=1;i<n;i++)
    {
        temp=arr[i];
        j=i-1;

        while(j>=0 && arr[j]>temp)
        {
            arr[j+1]=arr[j];
            j--;
        }

        arr[j+1]=temp;
    }

    printf("Sorted Array:\n");

    for(i=0;i<n;i++)
    {
        printf("%d ",arr[i]);
    }

    getch();
}
```

---

# Quick Sort

# Introduction

Quick sort is a fast divide-and-conquer sorting algorithm.

Uses:
```text
Pivot element
```

---

# Working

1. Select pivot
2. Divide array
3. Sort recursively

---

# Advantages

- Very fast
- Efficient for large data

---

# Disadvantages

- Complex implementation

---

# Time Complexity

```text
Average: O(n log n)
```

---

# Image Representation

```md
![Quick Sort](images/quick-sort.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif

---

# C Program for Quick Sort

```c
#include<stdio.h>
#include<conio.h>

void quicksort(int arr[],int first,int last)
{
    int i,j,pivot,temp;

    if(first<last)
    {
        pivot=first;

        i=first;
        j=last;

        while(i<j)
        {
            while(arr[i]<=arr[pivot] && i<last)
                i++;

            while(arr[j]>arr[pivot])
                j--;

            if(i<j)
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }

        temp=arr[pivot];
        arr[pivot]=arr[j];
        arr[j]=temp;

        quicksort(arr,first,j-1);
        quicksort(arr,j+1,last);
    }
}

void main()
{
    int arr[10],n,i;

    clrscr();

    printf("Enter Number of Elements: ");
    scanf("%d",&n);

    printf("Enter Elements:\n");

    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }

    quicksort(arr,0,n-1);

    printf("Sorted Array:\n");

    for(i=0;i<n;i++)
    {
        printf("%d ",arr[i]);
    }

    getch();
}
```

---

# Merge Sort

# Introduction

Merge sort divides array into smaller parts and merges them after sorting.

Uses:
```text
Divide and Conquer
```

---

# Working

1. Divide array
2. Sort recursively
3. Merge sorted arrays

---

# Advantages

- Stable sorting
- Efficient

---

# Disadvantages

- Requires extra memory

---

# Image Representation

```md
![Merge Sort](images/merge-sort.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif

---

# HASHING

# Introduction to Hashing

Hashing is a technique used to store and retrieve data quickly.

It converts:
```text
Key → Index
```

using:
```text
Hash Function
```

---

# Real Life Example

Suppose library stores books using:
- Book ID

Book ID directly gives storage location.

This is hashing concept.

---

# Hash Function

A mathematical function used to generate index.

Example:
```text
Index = Key % Size
```

---

# Example

```text
Key = 25
Size = 10

25 % 10 = 5
```

Data stored at:
```text
Index 5
```

---

# Hash Table

Hash table stores data using indexes generated by hash function.

---

# Image Representation

```md
![Hash Table](images/hash-table.png)
```

Suggested Image Link:
https://upload.wikimedia.org/wikipedia/commons/3/36/Hash_table_5_0_1_1_1_1_0_SP.svg

---

# Advantages of Hashing

- Very fast searching
- Efficient retrieval

---

# Disadvantages

- Collision problems

---

# Collision in Hashing

Collision occurs when:
- Two keys generate same index

---

# Applications of Hashing

Hashing used in:
- Password storage
- Databases
- Caching
- Search engines

---

# Difference Between Sorting Techniques

| Sort | Complexity |
|---|---|
| Bubble Sort | O(n²) |
| Selection Sort | O(n²) |
| Insertion Sort | O(n²) |
| Quick Sort | O(n log n) |
| Merge Sort | O(n log n) |

---

# Important Points to Remember

- Searching finds elements.
- Sorting arranges elements.
- Sequential search works linearly.
- Binary search requires sorted array.
- Bubble sort swaps adjacent elements.
- Selection sort selects minimum element.
- Insertion sort inserts elements properly.
- Quick sort uses pivot.
- Merge sort uses divide-and-conquer.
- Hashing provides fast retrieval.

---

# Conclusion

Searching, sorting, and hashing are extremely important concepts in data structures and algorithms. Searching helps locate data efficiently, sorting organizes data properly, and hashing provides extremely fast access using indexes.

These techniques are heavily used in databases, operating systems, web applications, search engines, and modern software systems. Understanding these algorithms forms the foundation of efficient programming and advanced computer science concepts.
