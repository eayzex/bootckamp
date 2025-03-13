class farm:
    def __init__(self , farm_name ):
        self.farm_name = farm_name
        self.animals = {}

    def add_animal (self, animal_name, count =1): 
        if animal_name in self.animals:
            self.animals[animal_name] += count 

        else:
            self.animals[animal_name] = count



    def get_info(self):
        info = f"{self.farm_name}'s farm\n\n"

        for animal, count in sorted(self.animals.items()):
            info += f"{animal}: {count}\n"


            info += "\n      E-I-E-I-0!" 
            return info
        
macdonald = farm("macdonald")
macdonald.add_animal("cow", 5)
macdonald.add_animal("sheep")   
macdonald.add_animal("sheep")
macdonald.add_animal("goat", 12)    

print(macdonald.get_info()) 
        





     
        