/*
Необходимо написать функцию сортировки любых
объектов, которые имеют id по убыванию и по возрастанию

const data = [

{ id: 2, name: 'Петя' },

{ id: 1, name: 'Вася' },

{ id: 3, name: 'Надя' },

];*/

const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];

interface ID {
    id: number
}

function sortArray<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
    return data.sort((a, b) => {
        switch (type) {
            case "asc":
                return a.id - b.id
            case "desc":
                return b.id - a.id
        }
    })
}
