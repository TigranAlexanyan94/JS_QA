from abc import ABC, abstractmethod

class Creator(ABC):
    @abstractmethod
    def factory_method(self):
        pass

    def some_operation(self) -> str:
        product = self.factory_method()
        result = f"{product.operation()}"
        return result


class Language(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass

class CreatorJavascript(Creator):
    def factory_method(self) -> Language:
        return Javascript()

class CreatorPython(Creator):
    def factory_method(self) -> Language:
        return Python()


class Javascript(Language):
    def operation(self) -> str:
        return "Javascript"

class Python(Language):
    def operation(self) -> str:
        return "Python"

def client_code(creator: Creator) -> None:
    print(f"{creator.some_operation()}", end="")


if __name__ == "__main__":
    client_code(CreatorJavascript())
    print("\n")
    client_code(CreatorPython())
    print("\n")
