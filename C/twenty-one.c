#include <stdio.h>
#include <stdlib.h>

int main() {
    int c,f,a = 9/5;
    system("clear");
    printf("Enter the temperature in celcius: ");
    scanf("%d",&c);
    f = (c * a);
    f += 32;
    c >= 0 ? printf("%d F",f) : printf("Too Cold");
}