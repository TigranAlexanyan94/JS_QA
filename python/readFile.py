with open('index.txt') as f:
    lines = len(f.readlines())
    print(lines)
    
      
      
with open("index.txt", "r") as input:
    with open("file.txt", "w") as output:
        for line in input:
            if line[0:5] == "Hello":
                    output.write(line)      
        
        