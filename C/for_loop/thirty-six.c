//Take a number and print its table upto 10.

#include <stdio.h>
#include <stdlib.h>

int main() {
    int n,i,t;
    system("clear");
    printf("Enter the number you want the table of: ");
    scanf("%d",&n);
    printf("Table of %d.\n",n);
    t = n;
    printf("%d\n",n);
    for ( i = 1; i < 10; i++)
    {
        t += n;
        printf("%d\n",t);
    }
}