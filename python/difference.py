import difflib
 
with open('diff1.txt') as diff1:
    diffText1 = diff1.readlines()
 
with open('diff2.txt') as diff2:
    diffText2 = diff2.readlines()
 

for line in difflib.unified_diff(diffText1, diffText2):
    print(line)
    