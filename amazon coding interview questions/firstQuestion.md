**Problem Statement: Minimum Cost of Merging Files**

Amazon has a cloud music application. When the user subscribes to it, music files are encoded and then transfer it to the user's smartphone. The encoder takes each music file and merges them all into a single file. This single file will be sent to the user's smartphone.

At a time, the encoder can only merge two files. The cost of merging two files is the same as the size of those two files. Find the minimum cost to merge all files into one.

**Input format:**

-   numOfSubFiles- number of files to be compressed
-   files- array/list which contains the size of each file

**Output format:**

Write a function to the return minimum cost required to compress files.

#### Example:

Input: [14, 25, 5, 8 ]
Output: 92

**Explanation:**

First, two files of size 5 and 8 will be merged. It will cost 13 (5+8). The updated files on the list are [14, 25, 13].

In the next turn, two files of size 13 and 14 will be merged. It will cost 27 (13+14)
- The updated files in the list are [25, 27]
- Finally, 25 and 27 will merge to [52], it will cost 52.
- The total cost to merge all the files is 92 (13+27+52).