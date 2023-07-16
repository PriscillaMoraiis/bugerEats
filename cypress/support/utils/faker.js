import { faker} from  '@faker-js/faker';

export function randomName(){
    const randomName = faker.name.fullName();
    return randomName;
}

export function randomFirstName(){
    const randomFirstName = faker.name.firstName();
    return randomFirstName;
}

export function randomLastName(){
    const randomLastName = faker.name.lastName();
    return randomLastName;
}

export function randomEmail(){
    const randomEmail = faker.internet.email();
    return randomEmail;
}


