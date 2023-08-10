import { Answer } from "../entities/answer"

export interface AnswersRepo {
	create(answer: Answer): Promise<void>
}
