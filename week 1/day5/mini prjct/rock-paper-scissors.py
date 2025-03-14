from game import Game

def get_user_menu_choice():
    print("\nChoose an option:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    
    # Ensure valid input
    while True:
        choice = input("Choose (1/2/3): ").strip()
        if choice in ['1', '2', '3']:
            return choice
        else:
            print("Invalid input, please try again.")

def print_results(results):
    print("\nGame results:")
    print(f"Wins: {results['win']}, Losses: {results['loss']}, Draws: {results['draw']}")
    print("Thank you for playing!")

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    
    while True:
        user_choice = get_user_menu_choice()

        if user_choice == '1':
            # Start a new game
            game = Game()
            result = game.play()
            
            if result == 'win':
                results['win'] += 1
            elif result == 'loss':
                results['loss'] += 1
            elif result == 'draw':
                results['draw'] += 1

        elif user_choice == '2':
            # Show the results
            print_results(results)

        elif user_choice == '3':
            # Exit the program
            print_results(results)
            break

if __name__ == "__main__":
    main()
