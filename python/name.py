
with open("hello.txt") as file:
    lines = file.readlines()
    for line in lines:
        for word in line.split():
            print(word)