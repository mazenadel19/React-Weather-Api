import React, { FC } from 'react';

// Interface
export interface ITable {
    headers: string[];
    body: any[];
    color?: string;
    caption: string;
}

const Table: FC<ITable> = ({  body, color, caption }) => {

    const Handler = ({ data, caption,color }: any) => {
        const body = data && data;
        const heads: string[] = body && Object.keys(body[0]);

        return <table style={{ border: `2px double ${color || 'black'}`, textAlign: 'center' }}>
            <caption>{caption}</caption>
            <thead>
                <tr>
                    {heads?.map((head: any, index: number) => <th key={index} style={{ border: `2px double ${color || 'black'}`}}>{head}</th>)}
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
                                        <Handler data={body[head]} color={color}/>
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
            <Handler data={body} caption={caption} color={color}/>
        </React.Fragment>
    );
};

export default Table;