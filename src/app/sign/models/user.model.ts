export class User {
    public id: number;
    public firstname: string;
    public lastname: string;
    public username: string;
    public password: string;
    public cep: string;

    constructor()
    constructor( id?: number, firstname?: string, lastname?: string,
                username?: string, password?: string , cep?: string) {
        this.id = id || 0;
        this.firstname = firstname || '';
        this.lastname = lastname || '';
        this.username = username || '';
        this.password = password || '';
        this.cep = cep || '';
    }
}