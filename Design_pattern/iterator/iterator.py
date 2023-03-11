class Number:
    def __init__(self):
        self.index = 0

    def next(self):
        self.index = self.index + 1
        return self.index
    

if __name__ == "__main__":
    num = Number()
    obj = num.next()
    print(obj)