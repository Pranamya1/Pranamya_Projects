//Enter the distance and time then tell the speed.

#include <stdio.h>
 
int main() {
    int d,t,s;
    printf("Enter the distance and time: ");
    scanf("%d%d",&d,&t);
    s = d * t;
    printf("Speed is %d",s);
}