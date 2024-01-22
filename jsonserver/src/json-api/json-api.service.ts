import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { JsonApi } from 'src/json-api/interfaces/json-api/json-api.interface';
import { error } from 'console';
import { JsonApiDto } from './dto/json-api.dto/json-api.dto';


@Injectable()
export class JsonApiService {
    async fetchAPI() {
        try {
            const response = await fetch('http://localhost:3001/users')
            if (!response) {
                throw new error(error)
            }
            return response.json();
        } catch (error) {
            throw new error(error)
        }
    }

    async getUsers() {
        try {
            const users = await this.fetchAPI()
            return users;
        } catch (error) {
            throw new Error(error)
        }
    }

    async getUsersById(id: number): Promise<JsonApi> {
        const users = await this.fetchAPI()
        const userFound = users.find((user: JsonApi) => user.id == id)
        if (userFound) {
            return userFound;
        } else {
            throw new NotFoundException(`The user with the id ${id} wasn't found`)
        }
    }

    async create(user: JsonApiDto): Promise<JsonApi> {
        const { id, firstName, lastName, age, email, phone, address, city, state, postalCode } = user;
        const newUser = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            phone: phone,
            address: address,
            city: city,
            state: state,
            postalCode: postalCode
        };
        try {
            await fetch(`http://localhost:3000/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser),
            });           

        } catch (error) {
            throw new Error('Post request error' + error);
        }
        return newUser;
    }    
}



