
class Zoo:
    
    def __init__(self, zoo_name):
        self.name = zoo_name    
        self.animals = []      
    
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:         
            self.animals.append(new_animal)  
        else:
            print(f"{new_animal} is already in the zoo!")  

    def get_animals(self):
        print(f"Animals in {self.name}:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:  
            self.animals.remove(animal_sold)  
            print(f"{animal_sold} has been sold!")
        else:
            print(f"{animal_sold} is not in the zoo!")

    def sort_animals(self):
        grouped = {}
        for animal in self.animals:
            first_letter = animal[0].upper()  
            if first_letter not in grouped:
                grouped[first_letter] = []
            grouped[first_letter].append(animal)
        
        for letter in grouped:
            grouped[letter].sort()
        return grouped

    
    def get_groups(self):
        groups = self.sort_animals()
        for letter, animals in groups.items():
            print(f"{letter}: {', '.join(animals)}")

new_york_zoo = Zoo("New York Zoo")

new_york_zoo.add_animal("Lion")
new_york_zoo.add_animal("Zebra")
new_york_zoo.add_animal("Elephant")
new_york_zoo.add_animal("Giraffe")

new_york_zoo.get_animals()

new_york_zoo.sell_animal("Zebra")

new_york_zoo.get_animals()

new_york_zoo.get_groups()

