class xplayer:
    def __init__(self, name, age, height):
        self.name = name
        self.age = age
        self.height = height
         
    def player_info(self):
        print(f"Player {self.name} is {self.age} years old and {self.height} cm tall")
    
xplayer1 = xplayer("Messi", 33, 170)
xplayer2 = xplayer("Ronaldo", 35, 185)
xplayer1.player_info()
xplayer2.player_info()

    
    
         