class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Create a list with three cats: one Bengal, one Chartreux, and one Siamese
all_cats = [Bengal('Tom', 2), Chartreux('Leo', 3), Siamese('Mia', 1)]

# Create an instance of the Pets class, passing the list of all cats
sara_pets = Pets(all_cats)

# Take all the cats for a walk
sara_pets.walk()
