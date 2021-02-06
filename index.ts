import { Server } from "http";
import { initServer } from "./init"

export class ezyserver {
    private port: number;
    private message: string;

    constructor(port: number, message?: string) {
        this.port = port;
        if(message) this.message = message;
    }

    start() {
        if(this.message) {
            return initServer(this.port, this.message)
        } else {
            return initServer(this.port)
        }
    }
}