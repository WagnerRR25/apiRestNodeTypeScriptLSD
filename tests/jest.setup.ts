import { server } from "../src/server/Server";
import supertest from "supertest";


export const testServer = supertest(server) 