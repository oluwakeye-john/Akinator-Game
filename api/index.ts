import { Aki } from 'aki-api'
const region = 'en'

export interface Akinator {
  question: string
  answers: string[]
  progress: number
  currentStep: number

  start: Function
  win: Function
  step: Function
  back: Function
}

class AkinatorInstance {
  public aki: Akinator
  constructor() {
    this.aki = new Aki(region)
  }

  async start() {
    try {
      await this.aki.start()
      console.log(this.aki)
      return this.aki
    } catch (err) {
      console.log(err)
      return (): any => ({})
    }
  }

  async step(ans: number) {
    try {
      await this.aki.step(ans)
      console.log(this.aki)
      return this.aki
    } catch (err) {
      console.log(err)
      return (): any => ({})
    }
  }

  async back() {
    try {
      await this.aki.back()
      return this.aki
    } catch {
      return (): any => ({})
    }
  }

  async win() {
    try {
      await this.aki.win()
      return this.aki.answers[0]
    } catch {
      return (): any => ({})
    }
  }
}

const akinator = new AkinatorInstance()
export default akinator
