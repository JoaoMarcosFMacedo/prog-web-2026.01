
export function Amigos(){
        const pesso = [{
                'Elidiane: Advogada',
                'Jamily: Enfermeira',
                'João Marcos: Programador.',
                'Márcio: Estudante',
                'Melissa: Médica',
        }];
        const AListAmg = pesso.map(person => <li>{ person }</li>);
        return <ul>{ AListAmg }</ul>;
}


export function FilterPro(){
        const pesssoas = [{
                id: 0,
                nome: 'Elidiane',
                profisson: 'Advogada',
        },{
                id: 1,
                nome: 'Jamilly',
                profisson: 'Enfermeira',
        },{
                id: 2,
                nome: 'João Marcos',
                profisson: 'Programador',
        },{
                id: 3,
                nome:'Márcio',
                profisson:'programador',
        },{
                id: 4,
                nome: 'melisa',
                profisson:' Médica',
}];
}