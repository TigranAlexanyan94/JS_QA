import sys
import os
import glob

arg = sys.argv[1]

if arg == "-f":
    files = glob.glob('/home/tigran/*.txt')
    findFile = "tnayin.txt"
    res = []
    for file in files:
        res.append(file.split('/')[3])
    for file in res:
        if file == findFile:
            print(file)
   
elif arg == '-d':
    res = []
    rootdir = '/home/tigran'
    findDir = 'Downloads'
    for file in os.listdir(rootdir):
        d = os.path.join(rootdir, file)
        if os.path.isdir(d):
            res.append(d.split('/')[3])

    for directory in res:
        if directory == findDir:
            print(directory) 
