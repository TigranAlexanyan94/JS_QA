def perfect_number(n):
    sum = 0
    for x in range(1, n):
        if n % x == 0:
            sum += x
    return sum == n


def fibonacci(n):
    a = 0
    b = 1
    if n < 0:
        print("Incorrect input")
    elif n == 0:
        return a
    elif n == 1:
        return b
    else:
        for i in range(2, n):
            c = a + b
            a = b
            b = c
        return b
 
def pascal_triangle(n):
    list1 = []
    for i in range(n):
        temp = []
        for j in range(i+1):
            if j==0 or j==i:
                temp.append(1)
            else:
                temp.append(list1[i-1][j-1] + list1[i-1][j])    
        list1.append(temp)        
