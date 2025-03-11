import random

def compare_numbers(user_number):
    random_number = random.randint(1, 100)    
    
    if user_number == random_number:
        print("Success! The numbers match.")
    else:
        print(f"Fail! The numbers don't match. Your number: {user_number}, Random number: {random_number}")
