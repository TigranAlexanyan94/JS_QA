from functools import wraps
import time

def timeit(func):
    @wraps(func)
    def timeit_wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        total_time = end_time - start_time
        print(f'Function {total_time:.4f} seconds')
        return result
    return timeit_wrapper


@timeit
def calculate_something(num):
    total = sum((x for x in range(0, num**2)))
    return total

if __name__ == '__main__':
    calculate_something(10)
    calculate_something(100)
    calculate_something(1000)
    calculate_something(5000)
    calculate_something(10000)
    