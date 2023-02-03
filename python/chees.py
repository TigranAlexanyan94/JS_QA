class Figure:
    def __init__(self, step):
        self.step = step

    def Pawn(self):
        print(self.step)

    def Knight(self):
        print(self.step)

    def Bishop(self):
        print(self.step)    

    def Rook(self):
        print(self.step)      
    
    def Queen(self):
        print(self.step)   

    def King(self):
        print(self.step)       



class Board(Figure):
    def __init__(self):
        super().__init__()

    def Pawn(self):
        super().Pawn()   

    def Knight(self):
        super().Pawn()  


pawn = Figure(2)
pawn.Pawn()
knight = Figure(3)
knight.Knight()