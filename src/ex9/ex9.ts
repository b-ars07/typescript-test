/*
Необходимо написать функцию группировки, которая принимает массив объектов и его ключ,
производит группировку по указанному ключу и возвращает сгруппированный объект.

Пример:
[
{ group: 1, name: 'a' },
{ group: 1, name: 'b' },
{ group: 2, name: 'c' },
];

{
'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
'2': [ { group: 2, name: 'c' } ]
}
*/

function groupObj<T>(array: T[], key: keyof T): Record<string, T[]> {
    let groups: Record<string, T[]> = {}

    for (let obj of array) {
        let keyName = `${obj[key]}`
        let group = groups[keyName]

        if (group) {
            group.push(obj)
        } else {
            groups[keyName] = [obj]
        }
    }

    return groups
}
