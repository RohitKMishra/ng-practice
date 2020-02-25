export class Recipe{
    public name: string;  // assigning type in typescript
    public description: string;
    public imagePath: string;

    constructor (name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath; 
    }
}