from __future__ import annotations
from abc import ABC, abstractmethod

class Logistic(ABC):
    @abstractmethod
    def factory_method(self):
        pass
    def some_operation(self) -> str:
        product = self.factory_method()
        result = f"Creator: The same creator's code has just worked with {product.operation()}"
        return result
    
class Road(Logistic):
    def factory_method(self) -> Product:
        return Road()
    
class Sea(Logistic):
    def factory_method(self) -> Product:
        return Sea()
    
class Product(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass

class Road(Product):
    def operation(self) -> str:
        return "Transport"
    
class Sea(Product):
    def operation(self) -> str:
        return "Navy"

if __name__ == "__main__":
    print("App: Launched with the ConcreteCreator1.")
    ob = Road()
    ob1=  Sea()
    print(ob.operation())
    print(ob1.operation())
   