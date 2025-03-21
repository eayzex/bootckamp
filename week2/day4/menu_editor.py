from menu_item import MenuItem  # Importing the MenuItem class
from menu_manager import MenuManager  # Importing the MenuManager class

def show_user_menu():
    """
    Display the user menu with different options for managing the restaurant menu.
    The user can choose to view, add, delete, update, or show all menu items.
    """
    while True:
        print("\n--- Restaurant Management Menu ---")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Full Menu")
        print("E - Exit")
        
        choice = input("Enter your choice: ").upper()        
        if choice == 'V':
            view_items()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            print("Thank you for using the system! Goodbye!")
            break  
        else:
            print("Invalid choice, please try again.")

def add_item_to_menu():
    """
    Ask the user for item name and price, then add it to the database.
    """
    name = input("Enter the item name: ")
    price = int(input("Enter the item price: "))  # Convert input to an integer
    item = MenuItem(name, price)  # Create a new MenuItem object
    item.save()  # Save the item to the database
    print(f" Item '{name}' added successfully.")

def remove_item_from_menu():
    """
    Ask the user for the name of the item they want to delete, then remove it.
    """
    name = input("Enter the name of the item to delete: ")
    item = MenuItem(name, 0)  # Create a MenuItem object (price is irrelevant here)
    
    if item.delete():  # If deletion is successful
        print(f" Item '{name}' deleted successfully.")
    else:
        print(" Error: Item not found or could not be deleted.")

def update_item_from_menu():
    """
    Ask the user for the name of the item to update and its new values,
    then update it in the database.
    """
    name = input("Enter the current item name: ")
    new_name = input("Enter the new name: ")
    new_price = int(input("Enter the new price: "))
    
    item = MenuItem(name, 0)  
    
    if item.update(new_name, new_price):  
        print(f" Item '{name}' updated to '{new_name}' with price {new_price}.")
    else:
        print(" Error: Item not found or could not be updated.")

def show_restaurant_menu():
    """
    Display all menu items from the database.
    """
    items = MenuManager.all_items()  
    
    print("\n--- Restaurant Menu ---")
    for item in items:
        print(f"{item[0]} - {item[1]}: {item[2]} MAD") 

def view_items(): 
    name = input( "enter the name of the item to view ")
    item = MenuManager.get_by_name(name) 
    if item : 
        print(f" item found: {item[1]} - {item[2]} MAD" )
    else :
        print( "error : item not found")


if __name__ == "__main__":
    show_user_menu()
    
