import sys
import os
import glob

arg = sys.argv[1]
path = '.'
if arg == "-f":
    files = glob.glob('/home/tigran/*.txt')
    print(files)
elif arg == '-d':
    dir = os.getcwd()
    print(dir)
    
