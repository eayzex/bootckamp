# Function to display the Tic-Tac-Toe board
def display_board(board):
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("-----------")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("-----------")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")

# Function to get the player's input for placing their mark (X or O)
def player_input(player, board):
    while True:
        try:
            position = int(input(f"Player {player}, enter a position (1-9): "))
            if position < 1 or position > 9:
                print("Invalid position. Please choose a number between 1 and 9.")
            elif board[position - 1] != " ":
                print("This spot is already taken. Try again.")
            else:
                board[position - 1] = player
                break
        except ValueError:
            print("Invalid input. Please enter a number.")

# Function to check if there's a winner
def check_win(board):
    winning_combinations = [
        [0, 1, 2],  # Row 1
        [3, 4, 5],  # Row 2
        [6, 7, 8],  # Row 3
        [0, 3, 6],  # Column 1
        [1, 4, 7],  # Column 2
        [2, 5, 8],  # Column 3
        [0, 4, 8],  # Diagonal 1
        [2, 4, 6]   # Diagonal 2
    ]
    
    for combo in winning_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] and board[combo[0]] != " ":
            return board[combo[0]]  # Return the winner ('X' or 'O')
    
    return None  # No winner yet

# Function to play the game
def play():
    board = [" " for _ in range(9)]  # Initialize the board with empty spaces
    players = ["X", "O"]  # Players are X and O
    turn = 0  # Start with player X
    
    while True:
        display_board(board)  # Display the current state of the board
        current_player = players[turn % 2]  # Switch between players X and O
        
        player_input(current_player, board)  # Get the player's move
        
        winner = check_win(board)  # Check if there's a winner
        if winner:
            display_board(board)
            print(f"Player {winner} wins!")  # Announce the winner
            break
        
        if " " not in board:  # Check if the board is full and it's a tie
            display_board(board)
            print("It's a tie!")
            break
        
        turn += 1  # Switch to the other player

# Run the game
if __name__ == "__main__":
    play()
