#based on their age tell the price of their ticket.

a = int(input("Enter your age: "))
if a < 5:
    print("Free")
elif a >= 5 and a <= 55:
    print("$20")
else:
    print("$15")