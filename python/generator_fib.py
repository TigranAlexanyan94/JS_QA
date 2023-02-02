def fib(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
        
gen = fib(7)
gen = fib(7)
gen = fib(7)


print(next(gen))
print(next(gen))
print(next(gen))

