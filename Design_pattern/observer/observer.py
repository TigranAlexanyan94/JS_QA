from abc import ABCMeta, abstractmethod

class IObservable(metaclass=ABCMeta):
    @staticmethod
    @abstractmethod
    def subscribe(observer):
        "The subscribe method"

    @staticmethod
    @abstractmethod
    def unsubscribe(observer):
        "The unsubscribe method"

    @staticmethod
    @abstractmethod
    def notify(observer):
        "The notify method"

class Subject(IObservable):
    def __init__(self):
        self._observers = set()

    def subscribe(self, observer):
        self._observers.add(observer)

    def unsubscribe(self, observer):
        self._observers.remove(observer)

    def notify(self, *args):
        for observer in self._observers:
            observer.notify(*args)

class IObserver(metaclass=ABCMeta):
    @staticmethod
    @abstractmethod
    def notify(observable, *args):
        "Receive notifications"

class Observer(IObserver):
    def __init__(self, observable):
        observable.subscribe(self)

    def notify(self, *args):
        print(f"Observer id:{id(self)} received {args}")


if __name__ == "__main__":
    SUBJECT = Subject()
    OBSERVER_A = Observer(SUBJECT)
    OBSERVER_B = Observer(SUBJECT)
    SUBJECT.notify("First Notification", [1, 2, 3])
    SUBJECT.unsubscribe(OBSERVER_B)
    SUBJECT.notify("Second Notification", {"A": 1, "B": 2, "C": 3})