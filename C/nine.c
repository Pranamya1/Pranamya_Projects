//A student scored 40 marks in math. Add 35 marks science using +=.                                                                                                                                                 

#include <stdio.h>

int main() {
    int score,m,sci;
    printf("enter your marks of Math and Science: ");
    scanf("%d %d",&m, &sci);
    score = m;
    score += sci;
    printf("%d",score);
}