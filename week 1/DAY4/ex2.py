class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        my_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight
        if my_score > other_score:
            return f'{self.name} wins the fight'
        elif my_score < other_score:
            return f'{other_dog.name} wins the fight'
        else:
            return 'It\'s a tie'

# Create 3 dogs
dog1 = Dog('Rex', 3, 15)
dog2 = Dog('Buddy', 5, 20)
dog3 = Dog('Max', 4, 18)

# Test the methods
print(dog1.bark())  # Dog 1 barking
print(dog2.bark())  # Dog 2 barking
print(dog3.bark())  # Dog 3 barking

# Calculate run speed
print(f'{dog1.name} run speed: {dog1.run_speed()}')
print(f'{dog2.name} run speed: {dog2.run_speed()}')
print(f'{dog3.name} run speed: {dog3.run_speed()}')

# Fight between dogs
print(dog1.fight(dog2))  # Fight between dog 1 and dog 2
print(dog2.fight(dog3))  # Fight between dog 2 and dog 3
print(dog1.fight(dog3))  # Fight between dog 1 and dog 3
