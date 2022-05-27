import React, { FC } from 'react';

// Interface
export interface ITable {
    headers: string[];
    body: any[];
    color?: string;
    caption: string;
}

const Table: FC<ITable> = ({ headers, body, color, caption }) => {

    const Handler = ({ data }: any) => {
        const body = data && data;
        const heads: string[] = body && Object.keys(body[0]);

        return <table style={{ border: "1px double rebeccapurple", textAlign: 'center' }}>
            <thead>
                <tr>
                    {heads?.map((head: any, index: number) => <th key={index} style={{ border: "3px double rebeccapurple" }}>{head}</th>)}
                </tr>
            </thead>
            <tbody>
                {body?.map((body: any, I: number) => {
                    return <tr key={I}>
                        {heads?.map((head: any, J: number) => {
                            return (typeof body[head] === 'string')
                                ? <td key={J}>{body[head]}</td>
                                : (
                                    (body[head][0].value)
                                    ? <td key={J}>{(body[head][0].value).startsWith('http') ? <img src={body[head][0].value} alt="weather" /> : body[head][0].value}</td>
                                    : <td key={J} >
                                        <Handler data={body[head]} />
                                    </td>
                                  )
                        })}
                    </tr>;
                })}
            </tbody>
        </table>;

    };

    return (
        <React.Fragment>
            <section className="table">
                <table style={{ border: `3px double ${color || 'black'}`, textAlign: 'center' }}>
                    <caption>{caption}</caption>
                    <thead>
                        <tr>
                            {headers?.map((head: any, index: number) => <th key={index} style={{ border: `3px double ${color || 'black'}` }}>{head}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {body?.map((row: any, I: number) => {
                            return <tr key={I}>
                                {headers?.map((head: any, J: number) => {
                                    return typeof row[head] === 'string'
                                        ? <td key={J}>{row[head]}</td>
                                        : (
                                            (row[head][0].value)
                                            ? <td key={J}>{(row[head][0].value).startsWith('http') ? <img src={row[head][0].value} alt="weather" /> : row[head][0].value}</td>
                                            : <td key={J} >
                                                <Handler data={row[head]} />
                                             </td>
                                          );
                                })}
                            </tr>;
                        })}
                    </tbody>
                </table>
            </section>
        </React.Fragment>
    );
};

export default Table;