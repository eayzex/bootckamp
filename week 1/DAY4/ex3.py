import random

# Importing the Dog class from the previous exercise (assuming it's in a file named dog.py)
# from dog import Dog  # Uncomment this line if Dog class is in a separate file

class Dog:
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


class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)  # Initialize the parent Dog class
        self.trained = trained  # Default value for trained is False

    # Train the dog: Prints the dog's bark and sets trained to True
    def train(self):
        print(self.bark())  # Dog barks
        self.trained = True  # Mark the dog as trained

    # Play with other dogs: Accepts *args and prints that all dogs are playing together
    def play(self, *args):
        dog_names = [dog.name for dog in args]  # Get the names of the dogs
        print(f"{', '.join(dog_names)} all play together.")

    # If the dog is trained, they can do a trick
    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))  # Randomly select and print a trick
        else:
            print(f"{self.name} is not trained to do a trick yet!")

# Example usage
if __name__ == "__main__":
    # Create some dog instances
    dog1 = PetDog('Rex', 3, 15)
    dog2 = PetDog('Buddy', 5, 20)
    dog3 = PetDog('Max', 4, 18)

    # Train a dog
    dog1.train()

    # Make the dogs play together
    dog1.play(dog2, dog3)

    # Make the trained dog do a trick
    dog1.do_a_trick()

    # Try to make an untrained dog do a trick
    dog2.do_a_trick()
