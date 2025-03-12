
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def ask_questions():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

   
    for question_data in data:
        question = question_data["question"]
        correct_answer = question_data["answer"]

       
        user_answer = input(f"{question} ")

        
        if user_answer.lower() == correct_answer.lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append({
                "question": question,
                "user_answer": user_answer,
                "correct_answer": correct_answer
            })

    return correct_answers, incorrect_answers, wrong_answers


def display_results(correct_answers, incorrect_answers, wrong_answers):
    print(f"\nYou got {correct_answers} correct answer(s) and {incorrect_answers} incorrect answer(s).")

    
    if incorrect_answers > 0:
        print("\nYou got the following questions wrong:")
        for wrong_answer in wrong_answers:
            print(f"Question: {wrong_answer['question']}")
            print(f"Your answer: {wrong_answer['user_answer']}")
            print(f"Correct answer: {wrong_answer['correct_answer']}\n")


def main():
    correct_answers, incorrect_answers, wrong_answers = ask_questions()
    display_results(correct_answers, incorrect_answers, wrong_answers)

    
    if incorrect_answers > 3:
        print("\nYou got more than 3 wrong answers. Let's try again!")
        main() 


main()
