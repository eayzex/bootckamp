 
def generate_multiples(number, length):
    return [number * i for i in range(1, length + 1)]

# Ask the user for input
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

# Generate and print the list of multiples
multiples_list = generate_multiples(number, length)
print(multiples_list)
