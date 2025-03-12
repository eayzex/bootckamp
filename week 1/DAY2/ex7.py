import random

def get_random_temp(season):
    if season == 'winter':
        temp = random.uniform(-10, 16) 
    elif season == 'spring':
        temp = random.uniform(0, 20)  
    elif season == 'summer':
        temp = random.uniform(20, 40)  
    elif season == 'autumn' or season == 'fall':
        temp = random.uniform(0, 20) 
    else:
        temp = random.uniform(-10, 40) 
    return temp

# Step 2: Create the main() function
def main():
    
    season = input("Please enter the season (winter, spring, summer, autumn/fall): ").lower()

   
    temperature = get_random_temp(season)

    
    print(f"The temperature right now is {temperature:.2f} degrees Celsius.")

    # Provide friendly advice based on the temperature
    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temperature <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temperature <= 23:
        print("Nice and cool. A light jacket will do.")
    elif 24 <= temperature <= 32:
        print("Warm and pleasant. Enjoy the weather!")
    elif 32 < temperature <= 40:
        print("Hot! Stay hydrated and wear something light.")


def main_bonus():
    month = int(input("Please enter the number of the month (1-12): "))
    
    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    elif month in [9, 10, 11]:
        season = "autumn"  
    else:
        print("Invalid month number. Please enter a number between 1 and 12.")
        return
    
    
    print(f"Based on the month {month}, the season is {season}.")
    main()  


main_bonus()
