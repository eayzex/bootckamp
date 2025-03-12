def create_letter_index_dict(word):
    letter_index_dict = {}  
    
    
    for index, letter in enumerate(word):
        
        if letter not in letter_index_dict:
            letter_index_dict[letter] = []
       
        letter_index_dict[letter].append(index)
    
    return letter_index_dict


word = input("Enter a word: ")


result = create_letter_index_dict(word)


print(result)
