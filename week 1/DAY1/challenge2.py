
def remove_conscutive_duplicates(word):
    # Remove consecutive duplicates from a word
    result = [] #list to store chara without consecutive duplicates
    for i in range(len(word)):
        if i == 0 or word[i] != word[i - 1]:
            result.append(word[i])
    return "".join(result) 
#ask the user for input 
user_word = input("Enter a word: ")

#print the word after removing consecutive duplicates 
print(remove_conscutive_duplicates(user_word))  
