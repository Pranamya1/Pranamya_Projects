#include <stdio.h>
#include <stdlib.h>

int main() {
    int a,b;
    system("clear");
    printf("Enter a number: ");
    scanf("%d",&a);
    a % 2 == 0 ? printf("Even") : printf("Odd");
}