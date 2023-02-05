class Figure:
    def __init__(self, title, step):
        self.step = step
        self.title = title

    def Pawn(self, title):
        return title

    def Knight(self, title):
        return title

    def Bishop(self, title):
        return title

    def Rook(self, title):
        return title

    def Queen(self, title):
        return title

    def King(self, title):
        return title


class Board(Figure):
    def __init__(self, n, k):
        self.n = n
        self.k = k
        super().__init__(n, k)

    def chessBoard(self, name):
        print(name)
        matrix = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]
        for i in range(len(matrix)):
            for j in range(len(matrix)):
                if self.King("king") == name:
                    matrix[self.n][self.k] = 1
                    matrix[self.n+1][self.k-1] = 2
                    matrix[self.n-1][self.k+1] = 2
                    matrix[self.n+1][self.k+1] = 2
                    matrix[self.n-1][self.k-1] = 2
                    matrix[self.n][self.k-1] = 2
                    matrix[self.n-1][self.k] = 2
                    matrix[self.n][self.k+1] = 2
                    matrix[self.n+1][self.k] = 2    
                print(matrix[i][j], end=' ')
            print()


board = Board(1,1 )
board.chessBoard("king")
