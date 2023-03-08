import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  currentItem = '';
  items: string[] = ['add another item to to-do list', 'complete the quiz']
  constructor() {}
  add() {
    this.items.push(this.currentItem)
  }
  remove(index:number) {
    this.items.splice(index, 1)
  }

  ngOnInit(): void {

  }

  questions = [
    {
      question: 'What year was this page made?',
      answer: '2023'
    },
    {
      question: 'What type of house pet was worshiped in ancient Egypt? (singular)',
      answer: 'cat'
    },
    {
      question: 'What do you call floating H2O in the sky? (plural)',
      answer: 'clouds'
    },
    {
      question: 'What number question are you on?',
      answer: '4'
    },
    {
      question: 'What was the answer to the first question?',
      answer: '2023'
    },
  ]
  answerText = ''
  questionIndex = 0;

  get currentQuestion() {
    return this.questions[this.questionIndex]
  }
  answer() {
    if(this.answerText === this.currentQuestion.answer && this.questionIndex === 4) {
      alert(`Congratulations! You passed the quiz`)
      this.questionIndex = 0
    } else if (this.answerText === this.currentQuestion.answer) {
      this.questionIndex++
    } else {
      alert('Sorry, Try again')
      this.questionIndex = 0
    }
  }

}


