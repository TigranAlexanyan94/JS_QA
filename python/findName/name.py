arrWord = []
arr = []
res = {}

with open("hello.txt") as file:
    lines = file.readlines()
    for line in lines:
        for word in line.split():
            if word == word.capitalize() or word == word.upper():
                arrWord.append(word)

for elem in arrWord:
    if elem not in arr:
        arr.append(elem)
    else:
        res[elem] = arrWord.count(elem)
        
for k, v in res.items():
    print(k, ':', v)
