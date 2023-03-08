import copy

class Prototype:
    _type = None

    def clone():
       pass

    def getType(self):
      return self._type

    def getValue(self):
      return self._value

class Type1(Prototype):
    def __init__(self):
      self._type = "Type1"

    def clone(self):
      return copy.copy(self._type)
   

class Type2(Prototype):
    def __init__(self):
      self._type = "Type2"

    def clone(self):
      return copy.copy(self._type)   

if __name__ == "__main__":
    objType1 = Type1()
    obj1 = objType1.clone()
    print(obj1)
    objType2 = Type2()
    obj1 = objType2.clone()
    print(obj1)
   
