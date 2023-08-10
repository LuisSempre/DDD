import { Answer } from "../entities/answer"
import { AnswerRepo } from "../repo/answer-repo"

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
	constructor(
		private answersRepo: AnswersRepo
	) {}
  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
			content, 
			authorId: instructorId, 
			questionId
		})
    return answer
  }
}
