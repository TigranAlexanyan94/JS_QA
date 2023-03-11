from abc import ABCMeta, abstractmethod

class ISubject(metaclass=ABCMeta):
    @staticmethod
    @abstractmethod
    def request():
        "A method to implement"

class RealSubject(ISubject):
    def __init__(self):
        self.enormous_data = [1, 2, 3]

    def request(self):
        return self.enormous_data

class Proxy(ISubject):
    def __init__(self):
        self.enormous_data = []
        self.real_subject = RealSubject()

    def request(self):
        if self.enormous_data == []:
            print("pulling data from RealSubject")
            self.enormous_data = self.real_subject.request()
            return self.enormous_data
        print("pulling data from Proxy cache")
        return self.enormous_data

if __name__ == "__main__":
    SUBJECT = Proxy()
    print(id(SUBJECT))
    print(SUBJECT.request())
    print(SUBJECT.request())