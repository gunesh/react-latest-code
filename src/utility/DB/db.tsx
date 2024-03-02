import Dexie, { Table } from 'dexie';

export interface Friend {
    id?: number;
    name: string;
    age: number;
}
export interface tableTest {
    idd?: number;
    named: string;
    aged: number;
}

export interface TodoList {
    id?: number;
    title: string;
}

export interface TodoItem {
    id?: number;
    todoListId: number;
    title: string;
    done?: boolean;
}

export class MySubClassedDexie extends Dexie {
    // 'friends' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    friends!: Table<Friend>;
    tableTest!: Table<any>;

    constructor() {
        super('myAppDB');
        this.version(1).stores({
            friends: '++id, name, age',
            tableTest: '++idd, named, aged',
            todoLists: '++id',
            todoItems: '++id, todoListId'
        });
    }
}

export const db = new MySubClassedDexie();

export const addNewFriend = async (name: any, age: any) => {
    const id = await db.friends.add({
        name,
        age
    });
    await db.tableTest.add({
        named: name,
        aged: age
    });
    return id
}


export const getFriendList = async (minAge: any, maxAge: any) => {
    const friends = await db.friends
        .where('age')
        .between(minAge, maxAge)
        .toArray();
    return friends
}