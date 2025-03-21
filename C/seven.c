//Take the input from user for two radius of circle calculate their aeas and subtract their area.

#include <stdio.h>
#include <stdlib.h>

int main() {
    int a,b,r1,r2;
    float f,g,h;
    printf("Enter the value of radius of two circle: ");
    scanf("%d%d",&r1,&r2);
    f = 3.14*r1*r1;
    g = 3.14*r2*r2;
    h = g - f;
    printf("\nArea of first circle is %.2f",f);
    printf("\nArea of second circle is %.2f",g);
    printf("\nSubtracted area from two circle %.2f",h);
}