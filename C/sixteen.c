//Bitwis "&"

#include <stdio.h>
#include <stdlib.h>

int main() {
    int a,b;
    system("clear");
    printf("Enter a number: ");
    scanf("%d", &a);
    b = a & 1;
    if (b == 0)
    {
        printf("Even");
    }
    else{
        printf("Odd");
    }
}