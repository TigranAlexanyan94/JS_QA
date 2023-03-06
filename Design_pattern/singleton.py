class Database:
    __instance = None
    def __new__(cls,*args,**kwargs):
        if cls.__instance is None:
            cls.__instance = super().__new__(cls)
        return cls.__instance
    def connect(self):
        print("Hello World")


        
db = Database()
db1 = Database()
print(id(db),id(db1))