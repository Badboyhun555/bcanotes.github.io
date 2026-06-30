# Q1. Explain Searching Techniques in Data Structures. Discuss Sequential Search and Binary Search with Algorithms, C Programs, Advantages, Disadvantages, and Time Complexity Analysis. Compare Both Methods.

# Introduction

Data Structures me searching ek bahut important operation hota hai. Searching ka matlab hota hai kisi given element ko ek collection (array, list, file, database etc.) me find karna. Real life me bhi searching ka use har jagah hota hai jaise mobile contacts me naam dhundhna, Google search, database query, ya kisi file system me file locate karna.

Computer Science me searching techniques ko mainly do categories me divide kiya jata hai:

1. Sequential Search (Linear Search)
2. Binary Search

Dono techniques ka purpose same hota hai lekin working approach completely different hoti hai. Linear search simple hota hai jabki binary search efficient hota hai lekin sorted data ki requirement hoti hai.

---

# 1. Sequential Search (Linear Search)

## Concept

Sequential search me array ke elements ko ek-ek karke starting index se last index tak check kiya jata hai jab tak required element mil na jaye.

Ye method simplest searching technique hai aur isme kisi sorting ki requirement nahi hoti.

---

## Working Principle

- Start from index 0
- Compare each element with key
- If match found → stop
- Else continue till end

---

## Algorithm

```
Step 1: Start
Step 2: Input array and key
Step 3: i = 0
Step 4: Repeat while i < n
Step 5: If a[i] == key → print "Found"
Step 6: Else i = i + 1
Step 7: If not found → print "Not Found"
Step 8: Stop
```

---

## C Program

```c
#include<stdio.h>

int main()
{
    int a[50], n, i, key;

    printf("Enter size: ");
    scanf("%d",&n);

    printf("Enter elements:\n");
    for(i=0;i<n;i++)
        scanf("%d",&a[i]);

    printf("Enter key: ");
    scanf("%d",&key);

    for(i=0;i<n;i++)
    {
        if(a[i] == key)
        {
            printf("Element found at index %d", i);
            return 0;
        }
    }

    printf("Element not found");
    return 0;
}
```

---

## Time Complexity

- Best Case: O(1) → element first position par ho
- Worst Case: O(n) → last ya absent ho
- Average Case: O(n)

---

## Advantages

- Very simple method
- No sorting required
- Small datasets ke liye useful

---

## Disadvantages

- Large data ke liye slow
- Inefficient for repeated searching

---

# 2. Binary Search

## Concept

Binary search ek fast searching technique hai jo sorted array par work karti hai. Isme array ko repeatedly half me divide karke element search kiya jata hai.

---

## Working Principle

- Compare middle element
- If equal → found
- If key smaller → left half
- If key larger → right half
- Repeat process

---

## Algorithm

```
Step 1: Start
Step 2: Input sorted array
Step 3: low = 0, high = n-1
Step 4: While low <= high
Step 5: mid = (low + high)/2
Step 6: If a[mid] == key → Found
Step 7: If key < a[mid] → high = mid - 1
Step 8: Else low = mid + 1
Step 9: Stop
```

---

## C Program

```c
#include<stdio.h>

int main()
{
    int a[50], n, i, key, low, high, mid;

    printf("Enter size: ");
    scanf("%d",&n);

    printf("Enter sorted elements:\n");
    for(i=0;i<n;i++)
        scanf("%d",&a[i]);

    printf("Enter key: ");
    scanf("%d",&key);

    low = 0;
    high = n - 1;

    while(low <= high)
    {
        mid = (low + high)/2;

        if(a[mid] == key)
        {
            printf("Element found at index %d", mid);
            return 0;
        }
        else if(key < a[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }

    printf("Element not found");
    return 0;
}
```

---

## Time Complexity

- Best Case: O(1)
- Worst Case: O(log n)
- Average Case: O(log n)

---

## Advantages

- Very fast searching
- Efficient for large datasets
- Reduces comparisons drastically

---

## Disadvantages

- Data must be sorted
- Complex compared to linear search
- Not suitable for dynamic unsorted data

---

# Comparison Between Linear Search and Binary Search

| Feature | Linear Search | Binary Search |
|----------|--------------|---------------|
| Requirement | No sorting | Sorted array required |
| Method | Sequential check | Divide and conquer |
| Time Complexity | O(n) | O(log n) |
| Speed | Slow | Fast |
| Best Use | Small data | Large sorted data |
| Implementation | Easy | Moderate |

---

# Real Life Example

### Linear Search Example:
Contact list me naam ek-ek karke dhoondhna.

### Binary Search Example:
Dictionary me word search karna (alphabetically sorted).

---

# Conclusion

Searching data structures ka ek fundamental operation hai jo kisi bhi system me data locate karne ke liye use hota hai. Sequential search simple aur unsorted data ke liye useful hai, lekin large datasets me slow hota hai. Binary search highly efficient hai lekin sorted data ki requirement hoti hai. Modern systems me binary search zyada use hota hai kyunki iska time complexity O(log n) hota hai jo large datasets ke liye extremely fast hai.



# Q2. Discuss Bubble Sort, Selection Sort, and Insertion Sort. Explain Their Working Principles with Suitable Examples. Write Algorithms and C Programs for Each Sorting Technique and Compare Their Efficiencies.

# Introduction

Sorting ek important operation hai data structures me jiska purpose hota hai data ko ek specific order (generally ascending ya descending) me arrange karna. Sorting ka use almost har software system me hota hai jaise database systems, searching algorithms, ranking systems, file organization, and operating systems.

Sorting ke bina searching slow ho jati hai aur data management difficult ho jata hai. Isliye sorting algorithms computer science ka ek fundamental part hain.

Is question me hum 3 basic sorting techniques study karenge:

1. Bubble Sort  
2. Selection Sort  
3. Insertion Sort  

Ye teeno algorithms simple hote hain aur beginners ke liye best hote hain.

---

# 1. Bubble Sort

## Concept

Bubble Sort ek simple sorting algorithm hai jisme adjacent elements ko compare karke swap kiya jata hai. Har pass ke baad largest element end me “bubble” ki tarah move ho jata hai, isliye isko Bubble Sort kehte hain.

---

## Working Principle

- Adjacent elements compare hote hain
- Agar order galat ho to swap hota hai
- Har pass me largest element last me chala jata hai
- Process repeat hota hai

---

## Example

Array:
```
5 1 4 2
```

Step-by-step:

```
1 5 4 2
1 4 5 2
1 4 2 5
1 2 4 5
```

Sorted array mil gaya.

---

## Algorithm

```
Step 1: Start
Step 2: Input array
Step 3: for i = 0 to n-1
Step 4: for j = 0 to n-i-1
Step 5: if a[j] > a[j+1] swap
Step 6: Repeat
Step 7: Stop
```

---

## C Program

```c
#include<stdio.h>

int main()
{
    int a[50], n, i, j, temp;

    printf("Enter size: ");
    scanf("%d",&n);

    printf("Enter elements:\n");
    for(i=0;i<n;i++)
        scanf("%d",&a[i]);

    for(i=0;i<n-1;i++)
    {
        for(j=0;j<n-i-1;j++)
        {
            if(a[j] > a[j+1])
            {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }

    printf("Sorted array: ");
    for(i=0;i<n;i++)
        printf("%d ",a[i]);

    return 0;
}
```

---

## Time Complexity

- Best Case: O(n)
- Worst Case: O(n²)
- Average Case: O(n²)

---

## Advantages

- Simple implementation
- Easy to understand
- No extra memory required

---

## Disadvantages

- Very slow for large data
- Too many swaps

---

# 2. Selection Sort

## Concept

Selection Sort me har step par minimum element find karke starting position par place kiya jata hai.

---

## Working Principle

- Find minimum element
- Swap with first unsorted element
- Move boundary forward
- Repeat process

---

## Example

```
64 25 12 22
```

Step-by-step:

```
12 25 64 22
12 22 64 25
12 22 25 64
```

---

## Algorithm

```
Step 1: Start
Step 2: for i = 0 to n-1
Step 3: min = i
Step 4: for j = i+1 to n
Step 5: if a[j] < a[min]
Step 6: min = j
Step 7: swap a[i], a[min]
Step 8: Repeat
Step 9: Stop
```

---

## C Program

```c
#include<stdio.h>

int main()
{
    int a[50], n, i, j, min, temp;

    printf("Enter size: ");
    scanf("%d",&n);

    for(i=0;i<n;i++)
        scanf("%d",&a[i]);

    for(i=0;i<n-1;i++)
    {
        min = i;

        for(j=i+1;j<n;j++)
        {
            if(a[j] < a[min])
                min = j;
        }

        temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }

    printf("Sorted array: ");
    for(i=0;i<n;i++)
        printf("%d ",a[i]);

    return 0;
}
```

---

## Time Complexity

- Best: O(n²)
- Worst: O(n²)
- Average: O(n²)

---

## Advantages

- Fewer swaps than bubble sort
- Simple logic

---

## Disadvantages

- Slow for large datasets
- Not adaptive

---

# 3. Insertion Sort

## Concept

Insertion Sort me elements ko ek-ek karke correct position par insert kiya jata hai. Ye technique cards arrange karne jaisi hoti hai.

---

## Working Principle

- Assume first element sorted hai
- Next element ko correct position me insert karo
- Left side sorted part maintain hota hai
- Repeat

---

## Example

```
5 2 4 6
```

Steps:

```
2 5 4 6
2 4 5 6
2 4 5 6
```

---

## Algorithm

```
Step 1: Start
Step 2: for i = 1 to n-1
Step 3: key = a[i]
Step 4: j = i-1
Step 5: while j >= 0 and a[j] > key
Step 6: shift elements
Step 7: insert key
Step 8: Repeat
Step 9: Stop
```

---

## C Program

```c
#include<stdio.h>

int main()
{
    int a[50], n, i, j, key;

    printf("Enter size: ");
    scanf("%d",&n);

    for(i=0;i<n;i++)
        scanf("%d",&a[i]);

    for(i=1;i<n;i++)
    {
        key = a[i];
        j = i - 1;

        while(j >= 0 && a[j] > key)
        {
            a[j+1] = a[j];
            j--;
        }

        a[j+1] = key;
    }

    printf("Sorted array: ");
    for(i=0;i<n;i++)
        printf("%d ",a[i]);

    return 0;
}
```

---

## Time Complexity

- Best: O(n)
- Worst: O(n²)
- Average: O(n²)

---

## Advantages

- Efficient for small data
- Adaptive (already sorted data me fast)
- Stable algorithm

---

## Disadvantages

- Large data ke liye slow
- Shifting operations costly

---

# Comparison of Sorting Algorithms

| Feature | Bubble Sort | Selection Sort | Insertion Sort |
|----------|------------|---------------|----------------|
| Best Case | O(n) | O(n²) | O(n) |
| Worst Case | O(n²) | O(n²) | O(n²) |
| Swaps | High | Low | Medium |
| Efficiency | Low | Low | Medium |
| Best Use | Learning | Small datasets | Nearly sorted data |

---

# Conclusion

Sorting data structures ka ek essential operation hai jo data ko organized form me arrange karta hai. Bubble sort simple hai lekin inefficient hai, selection sort swaps kam karta hai lekin time complexity same rehti hai, aur insertion sort relatively efficient hota hai especially jab data partially sorted ho.

In teeno algorithms ka time complexity mostly O(n²) hota hai isliye ye large datasets ke liye suitable nahi hain, lekin ye foundational algorithms hain jo advanced sorting techniques jaise merge sort aur quick sort ko samajhne ke liye important base provide karte hain.



# Q3. Explain the Divide and Conquer Approach. Discuss Quick Sort Algorithm with Partitioning Technique. Write the Algorithm and C Program for Quick Sort and Analyze its Time Complexity.

# Introduction

Divide and Conquer ek important algorithm design technique hai jisme kisi large problem ko chhote-chhote subproblems me divide kiya jata hai, un subproblems ko solve kiya jata hai, aur finally unke results ko combine karke final solution banaya jata hai.

Ye technique computer science me bahut powerful hai aur sorting, searching, matrix operations, and optimization problems me use hoti hai.

Divide and Conquer ke 3 main steps hote hain:

1. Divide (problem ko divide karna)
2. Conquer (subproblem solve karna)
3. Combine (results ko merge karna)

Quick Sort bhi isi principle par based ek highly efficient sorting algorithm hai.

---

# Quick Sort

## Concept

Quick Sort ek comparison-based sorting algorithm hai jo pivot element choose karke array ko partition karta hai.

- Pivot ke left side me smaller elements hote hain
- Pivot ke right side me larger elements hote hain
- Phir same process recursively apply hota hai

Isliye ise Divide and Conquer algorithm bhi kehte hain.

---

# Working Principle

Quick Sort me ek important step hota hai:

### Partitioning

Partitioning ka matlab hota hai array ko aise arrange karna ki pivot ke left me smaller elements aur right me larger elements aa jayein.

---

# Example

Array:
```
10 80 30 90 40 50 70
```

Pivot = 70

After partition:

```
10 30 40 50 70 90 80
```

Ab left aur right parts recursively sort hote hain.

---

# Partition Technique

Partition me ek pointer use hota hai jo smaller elements ko left side me shift karta hai.

---

# Algorithm (Quick Sort)

```
Step 1: Start
Step 2: Choose pivot element
Step 3: Partition array
Step 4: Place pivot at correct position
Step 5: Apply quicksort on left part
Step 6: Apply quicksort on right part
Step 7: Stop
```

---

# Partition Algorithm

```
Step 1: pivot = last element
Step 2: i = low - 1
Step 3: for j = low to high-1
Step 4: if a[j] < pivot
Step 5: i++
Step 6: swap a[i], a[j]
Step 7: swap pivot with a[i+1]
```

---

# C Program for Quick Sort

```c
#include<stdio.h>

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

int partition(int a[], int low, int high)
{
    int pivot = a[high];
    int i = low - 1;
    int j;

    for(j = low; j < high; j++)
    {
        if(a[j] < pivot)
        {
            i++;
            swap(&a[i], &a[j]);
        }
    }

    swap(&a[i+1], &a[high]);
    return i + 1;
}

void quickSort(int a[], int low, int high)
{
    if(low < high)
    {
        int pi = partition(a, low, high);

        quickSort(a, low, pi - 1);
        quickSort(a, pi + 1, high);
    }
}

int main()
{
    int a[50], n, i;

    printf("Enter size: ");
    scanf("%d",&n);

    printf("Enter elements:\n");

    for(i = 0; i < n; i++)
        scanf("%d",&a[i]);

    quickSort(a, 0, n - 1);

    printf("Sorted array: ");

    for(i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}
```

---

# Dry Run Example

Array:
```
5 3 8 4 2
```

Step 1: pivot = 2  
Step 2: partition → smallest at left

Result:
```
2 3 8 4 5
```

Then recursive sorting:

```
3 4 5 8
```

Final sorted array:
```
2 3 4 5 8
```

---

# Time Complexity Analysis

## Best Case

When pivot always divides array into equal halves:

```
O(n log n)
```

---

## Average Case

```
O(n log n)
```

---

## Worst Case

When array already sorted or reverse sorted:

```
O(n²)
```

---

# Space Complexity

```
O(log n)
```

(recursive stack space)

---

# Advantages of Quick Sort

- Very fast in practical use
- In-place sorting (no extra array)
- Cache friendly
- Better performance than most O(n²) algorithms

---

# Disadvantages of Quick Sort

- Worst case O(n²)
- Recursive (stack overhead)
- Pivot selection critical

---

# Applications

- Large dataset sorting
- Database systems
- System-level sorting functions
- File system organization

---

# Comparison with Other Sorting Algorithms

| Feature | Quick Sort | Bubble Sort | Merge Sort |
|----------|------------|-------------|------------|
| Average Time | O(n log n) | O(n²) | O(n log n) |
| Worst Case | O(n²) | O(n²) | O(n log n) |
| Space | O(log n) | O(1) | O(n) |
| Efficiency | High | Low | High |
| Method | Divide & Conquer | Swapping | Merge |

---

# Conclusion

Quick Sort ek highly efficient divide and conquer based sorting algorithm hai jo pivot selection aur partitioning technique par work karta hai. Iska average time complexity O(n log n) hota hai jo isse large datasets ke liye ideal banata hai.

Halanki worst case me performance O(n² ho sakti hai, lekin practical scenarios me Quick Sort bahut fast aur widely used algorithm hai. Isliye ye real-world systems aur programming libraries me default sorting method ke roop me use hota hai.



# Q4. What is Merge Sort? Explain its Working Using Divide and Conquer Strategy. Write Suitable Algorithm and C Program. Compare Merge Sort with Quick Sort Based on Performance and Applications.

# Introduction

Merge Sort ek efficient sorting algorithm hai jo Divide and Conquer technique par based hota hai. Is algorithm me array ko repeatedly divide kiya jata hai jab tak har sub-array single element ka na ho jaye, aur phir un sub-arrays ko sorted order me merge kiya jata hai.

Merge Sort ka main idea hai:

> “Divide the problem into smaller parts, solve them separately, and then merge the results.”

Ye algorithm stable sorting algorithm hai aur large datasets ke liye highly reliable mana jata hai.

---

# Divide and Conquer Approach in Merge Sort

Merge Sort me 3 main steps hote hain:

1. **Divide** → Array ko 2 halves me divide karo  
2. **Conquer** → Har half ko recursively sort karo  
3. **Combine** → Sorted halves ko merge karo  

---

# Working Principle

Merge Sort ka working bottom-up approach follow karta hai:

- Array ko repeatedly split kiya jata hai
- Single element arrays naturally sorted hote hain
- Fir unko merge karke larger sorted arrays banaye jate hain

---

# Example

Array:
```
38 27 43 3 9 82 10
```

### Step 1: Divide
```
38 27 43 3     +     9 82 10
```

### Step 2: Further division
```
38 27   43 3   +   9 82   10
```

### Step 3: Single elements
```
38 27 43 3 9 82 10
```

---

### Step 4: Merge process

```
27 38   3 43   9 82   10
```

Then:

```
3 27 38 43   +   9 10 82
```

Final:

```
3 9 10 27 38 43 82
```

---

# Algorithm (Merge Sort)

```
Step 1: Start
Step 2: If array size > 1
Step 3: Divide array into two halves
Step 4: Recursively sort left half
Step 5: Recursively sort right half
Step 6: Merge both sorted halves
Step 7: Stop
```

---

# Merge Procedure Algorithm

```
Step 1: Create temporary array
Step 2: Compare elements of both halves
Step 3: Copy smaller element into temp array
Step 4: Copy remaining elements
Step 5: Copy temp array back to original array
```

---

# C Program for Merge Sort

```c
#include<stdio.h>

void merge(int a[], int l, int m, int r)
{
    int i = l;
    int j = m + 1;
    int k = l;
    int temp[50];

    while(i <= m && j <= r)
    {
        if(a[i] <= a[j])
            temp[k++] = a[i++];
        else
            temp[k++] = a[j++];
    }

    while(i <= m)
        temp[k++] = a[i++];

    while(j <= r)
        temp[k++] = a[j++];

    for(i = l; i <= r; i++)
        a[i] = temp[i];
}

void mergeSort(int a[], int l, int r)
{
    if(l < r)
    {
        int m = (l + r) / 2;

        mergeSort(a, l, m);
        mergeSort(a, m + 1, r);

        merge(a, l, m, r);
    }
}

int main()
{
    int a[50], n, i;

    printf("Enter size: ");
    scanf("%d",&n);

    printf("Enter elements:\n");

    for(i = 0; i < n; i++)
        scanf("%d",&a[i]);

    mergeSort(a, 0, n - 1);

    printf("Sorted array: ");

    for(i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}
```

---

# Time Complexity

## Best Case
```
O(n log n)
```

## Average Case
```
O(n log n)
```

## Worst Case
```
O(n log n)
```

Merge Sort ka biggest advantage ye hai ki iska worst case bhi stable hota hai.

---

# Space Complexity

```
O(n)
```

(extra temporary array ki wajah se)

---

# Advantages of Merge Sort

- Stable sorting algorithm
- Predictable time complexity O(n log n)
- Works well for large datasets
- Suitable for linked lists
- External sorting me useful

---

# Disadvantages of Merge Sort

- Extra memory requirement
- In-place sorting nahi hai
- Small datasets ke liye slow ho sakta hai

---

# Merge Sort vs Quick Sort

| Feature | Merge Sort | Quick Sort |
|----------|------------|------------|
| Approach | Divide & Merge | Partition |
| Time Complexity (Best) | O(n log n) | O(n log n) |
| Time Complexity (Worst) | O(n log n) | O(n²) |
| Space | O(n) | O(log n) |
| Stability | Stable | Not Stable |
| Performance | Consistent | Faster in practice |
| Use Case | Large stable sorting | General-purpose fast sorting |

---

# Key Differences Explained

- Merge Sort stable hota hai, Quick Sort stable nahi hota  
- Merge Sort consistent performance deta hai, Quick Sort worst case me slow ho jata hai  
- Quick Sort in-place hota hai, Merge Sort extra memory use karta hai  

---

# Applications of Merge Sort

- Large dataset sorting
- External sorting (disk-based systems)
- Linked list sorting
- Database systems
- Financial data processing

---

# Conclusion

Merge Sort ek highly efficient and stable sorting algorithm hai jo Divide and Conquer approach follow karta hai. Iska time complexity har case me O(n log n) hota hai, jo ise predictable aur reliable banata hai.

Halanki iska space usage zyada hota hai, lekin stability aur consistent performance ki wajah se ye large-scale applications me widely use hota hai. Quick Sort se compare karne par Merge Sort zyada stable hota hai, jabki Quick Sort practical scenarios me faster hota hai.

Isliye dono algorithms ka use situation ke according kiya jata hai.



# Q5. Define Hashing and Explain Its Importance in Data Retrieval. Discuss Hash Functions, Hash Tables, Collisions, and Collision Resolution Techniques. Write a C Program for Implementing a Simple Hash Table and Analyze Its Performance.

# Introduction

Hashing ek advanced data structure technique hai jo data ko extremely fast access karne ke liye use hoti hai. Iska main purpose hota hai kisi bhi data ko directly memory location (index) par store karna using a special function called hash function.

Normal searching techniques (linear ya binary search) me time lagta hai, lekin hashing me average case me data O(1) time me access ho jata hai, jo ise bahut powerful banata hai.

Hashing ka use databases, compilers, caches, password storage, and indexing systems me extensively hota hai.

---

# Definition of Hashing

Hashing ek technique hai jisme key ko ek mathematical function (hash function) ke through convert karke ek index generate kiya jata hai jahan data store hota hai.

```
Key → Hash Function → Index → Storage Location
```

---

# Importance of Hashing in Data Retrieval

Hashing ka main advantage fast retrieval hota hai. Jab data bahut large ho jata hai (lakhs ya millions records), tab searching slow ho jati hai.

Hashing ke benefits:

- Fast search (O(1) average time)
- Efficient memory usage
- Direct access to data
- Useful in real-time systems
- Used in indexing and databases

---

# Hash Function

## Definition

Hash function ek mathematical function hota hai jo input key ko fixed range ke index me convert karta hai.

Example:

```
h(key) = key % table_size
```

---

## Good Hash Function Properties

- Easy to compute
- Uniform distribution
- Less collision
- Fast execution

---

## Example

If:

```
key = 25
table size = 10
```

Then:

```
h(25) = 25 % 10 = 5
```

So data index 5 par store hoga.

---

# Hash Table

Hash table ek array hota hai jisme data directly hash function ke index par store hota hai.

Example:

```
Index:  0 1 2 3 4 5 6 7 8 9
Data :  - - - - - 25 - - - -
```

---

# Collision in Hashing

## Definition

Collision tab hota hai jab 2 different keys same index generate karte hain.

Example:

```
h(25) = 5
h(35) = 5
```

Dono same location par store nahi ho sakte → collision.

---

# Collision Resolution Techniques

## 1. Chaining

- Har index par linked list store hoti hai
- Multiple values ek index par store ho sakte hain

Example:
```
Index 5 → 25 → 35 → 45
```

---

## 2. Open Addressing

Collision hone par next available slot find kiya jata hai.

Types:

### (a) Linear Probing
```
h(x), h(x)+1, h(x)+2...
```

### (b) Quadratic Probing
```
h(x) + 1², h(x) + 2²...
```

### (c) Double Hashing
Second hash function use hota hai

---

# Simple Hash Table Program (C)

```c
#include<stdio.h>

#define SIZE 10

int table[SIZE];

int hashFunction(int key)
{
    return key % SIZE;
}

void insert(int key)
{
    int index = hashFunction(key);

    while(table[index] != -1)
    {
        index = (index + 1) % SIZE;  // Linear Probing
    }

    table[index] = key;
}

void display()
{
    int i;

    printf("\nHash Table:\n");

    for(i = 0; i < SIZE; i++)
    {
        printf("Index %d : %d\n", i, table[i]);
    }
}

int main()
{
    int i, n, key;

    for(i = 0; i < SIZE; i++)
        table[i] = -1;

    printf("Enter number of elements: ");
    scanf("%d",&n);

    printf("Enter elements:\n");

    for(i = 0; i < n; i++)
    {
        scanf("%d",&key);
        insert(key);
    }

    display();

    return 0;
}
```

---

# Example Input

```
Enter elements:
12 22 32 42
```

---

# Output (Example)

```
Index 2 : 12
Index 3 : 22
Index 4 : 32
Index 5 : 42
```

---

# Time Complexity Analysis

## Best Case

```
O(1)
```

When no collision occurs.

---

## Average Case

```
O(1)
```

With good hash function and uniform distribution.

---

## Worst Case

```
O(n)
```

When all keys collide and behave like linear search.

---

# Space Complexity

```
O(n)
```

(for hash table storage)

---

# Advantages of Hashing

- Extremely fast searching
- Direct access to data
- Efficient for large datasets
- Used in real-time systems
- Reduces comparison operations

---

# Disadvantages of Hashing

- Collision problem
- Poor hash function reduces performance
- Memory wastage (empty slots)
- Worst case becomes slow

---

# Applications of Hashing

- Database indexing
- Password storage (encryption systems)
- Compiler symbol tables
- Cache memory
- Dictionary implementation
- Network routing tables

---

# Comparison with Other Searching Methods

| Method | Time Complexity | Requirement | Efficiency |
|--------|----------------|------------|------------|
| Linear Search | O(n) | No sorting | Slow |
| Binary Search | O(log n) | Sorted data | Fast |
| Hashing | O(1) avg | Hash function | Very Fast |

---

# Conclusion

Hashing ek powerful data retrieval technique hai jo direct indexing concept par based hoti hai. Isme data ko hash function ke through memory location assign ki jati hai, jisse searching extremely fast ho jati hai.

Halanki collisions ek major problem hai, lekin chaining aur open addressing techniques se ise handle kiya jata hai. Overall hashing modern computing systems me fastest searching technique mani jati hai aur databases, security systems, aur caching me widely use hoti hai.
