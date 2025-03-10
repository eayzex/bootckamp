 # Given sandwich_orders list
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# Use a while loop to remove all occurrences of Pastrami sandwich
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# Create an empty list for finished sandwiches
finished_sandwiches = []

# Move each sandwich to the finished_sandwiches list
while sandwich_orders:
    sandwich = sandwich_orders.pop(0)  # Remove the first item
    finished_sandwiches.append(sandwich)  # Add it to finished_sandwiches list
    print(f"I made your {sandwich.lower()}")
