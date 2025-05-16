---
title: The Engineer diary
description: A beginner’s journey into C programming, debugging disasters, and hard-earned lessons in an engineer’s diary entry.
slug: the-engineer-diary
date: 02/03/2025
author: Sarthak
image: eng-life.jpeg
---

Welcome to the engineer's diary—a place where bugs are brutal, semicolons are sneaky, and every compilation error has a story. Today, we dive into how a simple C programming tutorial turned into a full-blown character-building exercise.

## The Brave Start

It began with noble intentions. I wanted to revisit C, the language that laid the foundation for many others like C++, Java, and even Python. With its efficiency and close-to-hardware control, C is perfect for understanding the guts of programming.

### Why Even C?

- **Solid Foundation**: Understanding C gives you deep insight into how programs run under the hood.
- **Performance**: It’s lightning fast—if you write it right.
- **Memory Control**: Few languages give you the kind of control C does. But it comes at a price—responsibility.

## The Setup That Set Me Up

Things started simple:

1. Installed **GCC**.
2. Picked **VS Code** as the IDE.
3. Ran `gcc --version` to check the compiler.

So far, so good. Then I typed out a classic `printf` hello world and hit compile. Boom. Error.

## The Silly Mistake

It was this:

```c
#include <stdio.h>

int main() {
    printf("Hello, world!") // ← Missing semicolon
    return 0;
}
And there I was… scrolling Stack Overflow like it owed me answers.

Back to Basics
When I finally found the culprit, I revisited the basics to clear my head:

Variables and Data Types
c
Copy
Edit
int age = 25;
float height = 5.9;
char initial = 'A';
Control Structures
c
Copy
Edit
if (age >= 18) {
    printf("Adult detected.\n");
}
Functions
c
Copy
Edit
void greet(char name[]) {
    printf("Hello, %s!\n", name);
}
It all felt familiar and manageable again. Until I reached...

Intermediate Chaos
Pointers. Memory. Files.

Arrays and Pointers
c
Copy
Edit
int numbers[5] = {1, 2, 3, 4, 5};
int *ptr = numbers;
File I/O
c
Copy
Edit
FILE *file = fopen("debug.txt", "w");
Dynamic Memory
c
Copy
Edit
arr = (int*) malloc(size * sizeof(int));
Freeing memory felt oddly poetic—like freeing my brain from the debugging loop.

Into the Deep End
With confidence restored, I tackled the advanced concepts.

Structures
c
Copy
Edit
struct Student {
    char name[50];
    int age;
    float grade;
};
Function Pointers
c
Copy
Edit
void (*func_ptr)(int, int) = &add;
Now it was less about syntax and more about thinking in C.

What I Learned
Missing semicolons are silent villains.

Debugging is a test of patience and perspective.

C doesn’t hold your hand—but it teaches you to think like a true developer.

Final Thoughts
This wasn’t just a tutorial—it was a journey through frustration, reflection, and growth. And if I’m being honest, I’d do it again.

Because every bug teaches something. And sometimes, that “bug” is the beginning of a better version of you.