import random

class Game:
    
    def get_user_item(self):
        # Keep asking for user input until valid input (rock, paper, or scissors) is given
        while True:
            user_item = input("Choose (rock, paper, scissors): ").lower()
            if user_item in ['rock', 'paper', 'scissors']:
                return user_item
            else:
                print("Invalid input. Please try again.")

    def get_computer_item(self):
        # Randomly select an item for the computer
        return random.choice(['rock', 'paper', 'scissors'])

    def get_game_result(self, user_item, computer_item):
        # Compare user and computer's choices to determine the result
        if user_item == computer_item:
            return 'draw'
        elif (user_item == 'rock' and computer_item == 'scissors') or \
             (user_item == 'paper' and computer_item == 'rock') or \
             (user_item == 'scissors' and computer_item == 'paper'):
            return 'win'
        else:
            return 'loss'

    def play(self):
        # Play a single round of the game
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        
        # Print choices
        print(f"You selected: {user_item}. The computer selected: {computer_item}.")
        
        # Determine the result
        result = self.get_game_result(user_item, computer_item)
        
        # Print the result
        if result == 'win':
            print("You win!")
        elif result == 'draw':
            print("It's a draw!")
        else:
            print("You lose!")
        
        return result
