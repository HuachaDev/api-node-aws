
import AWS from 'aws-sdk';
import { generateUUID } from '../helpers/helpers.js';


const dynamoDb = new AWS.DynamoDB.DocumentClient();

class PersonModel {

    constructor(){
        this.tableName = 'PeopleTable';
    }

    async create(person){
        const id = generateUUID();
        await dynamoDb.put({
            TableName: this.tableName,
            Item: {
                id,
                ...person
            }
        }).promise();
        return this.findById(id);
    }

    async findById(id){
        const result = await dynamoDb.get({
            TableName: this.tableName,
            Key: { id }
        }).promise();

        if (!result.Item) {
            throw new Error('Person not found');
        }
        return result.Item;
    }

    async showPersons(){
        const result = await dynamoDb.scan({
            TableName: this.tableName,
        }).promise();

        if (result.Items.length === 0) {
            throw new Error('There are no records');
        }
        
        return result.Items;
    }

}

export default new PersonModel();