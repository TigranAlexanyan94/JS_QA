class Languages:
   __javascript = ""

   def __init__(self, javascript):
      self.__javascript = javascript
   
   def getJavascript(self):
      return self.__javascript
   

class GetLanguageJs(Languages):
   def __init__(self):
      Languages.__init__(self, "Javascript")


class Factory:
   def getJavascript(self): pass


class LanguageFactory(Factory):
   def getJavascript(self):
      return GetLanguageJs()


if __name__ == "__main__":
    lang = LanguageFactory()
    js = lang.getJavascript()
    print(js.getJavascript())





