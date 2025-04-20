#include <stdio.h>
#include <stdlib.h>

int main() {
    int a,b;
    system("clear");
    printf("Enter your age: ");
    scanf("%d",&a);
    a >= 18 ? printf("you are elegible.") : printf("Ypu are not elegible.");
}