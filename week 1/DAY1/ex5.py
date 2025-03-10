#exercise 5

# Create a set with your favorite numbers
my_fav_numbers = {7, 14, 21, 42}

# Add two new numbers to the set
my_fav_numbers.add(99)
my_fav_numbers.add(11)

# Remove the last number (removes an arbitrary element since sets are unordered)
my_fav_numbers.pop()

# Create a set with your friend's favorite numbers
friend_fav_numbers = {3, 6, 9, 12}

# Concatenate the two sets into a new set
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# Print the final result
print(our_fav_numbers)

