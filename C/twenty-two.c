#include <stdio.h>
#include <stdlib.h>

int main() {
    int y;
    system("clear");
    printf("Enter the year: ");
    scanf("%d",&y);
    (y % 4 == 0) ? printf("Leap Year") : printf("This is not the Leap Year.");
}