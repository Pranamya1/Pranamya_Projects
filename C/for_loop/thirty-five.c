//Print number from 1 to n (n is input from user).

#include <stdio.h>
#include <stdlib.h>

int main() {
    int i,n;
    system("clear");
    printf("Enter a number: ");
    scanf("%d",&n);
    for ( i = 1; i <= n; i++)
    {
        printf("%d\n",i);
    }
} 