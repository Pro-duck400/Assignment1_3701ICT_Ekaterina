export default class Todo {
    constructor(title, description) {
        this.id = Date.now().toString() + Math.random().toString(36).substring(2, 9);
        this.title = title;
        this.description = description;
        this.finished = false;
    }
}