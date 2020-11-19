class HelloWord {
    constructor() { }

    sayHello(name: string): string {
        return `Hello ${name}`
    }
}

export default new HelloWord()