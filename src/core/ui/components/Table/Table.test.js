import React from 'react';
import renderer from 'react-test-renderer';
import { Table } from './Table';
import '../../../config/tests/setup';

describe('Table', () => {
    it('should render empty table correctly', () => {
        const table = renderer.create(<Table />).toJSON();

        expect(table).toMatchSnapshot();
    });

    it('should render table with data correctly', () => {
        const className = 'arbitrary-class-name';
        const headings = [
            <tr key={0}>
                <th key={0}>City</th>
                <th key={1}>Street</th>
            </tr>,
        ];

        const rows = [{ city: 'Athens', street: 'Venizelou' }, { city: 'Berlin', street: 'Freistr' }];

        const table = renderer
            .create(
                <Table headings={headings} className={className}>
                    {rows.map(({ city, street }, key) => (
                        <tr key={key}>
                            <td>{city}</td>
                            <td>{street}</td>
                        </tr>
                    ))}
                </Table>,
            )
            .toJSON();
        expect(table).toMatchSnapshot();
    });

    it('should render table with secondary class correctly', () => {
        const table = renderer.create(<Table secondary={true} />).toJSON();

        expect(table).toMatchSnapshot();
    });

    it('should render table cellData correctly', () => {
        const cellData = [{ city: 'Athens', street: 'Venizelou' }, { city: 'Berlin', street: 'Freistr' }];

        const table = renderer.create(<Table cellData={cellData} />).toJSON();
        expect(table).toMatchSnapshot();
    });

    it('should render table with heading array correctly', () => {
        const headings = ['City', 'Street'];

        const table = renderer.create(<Table headings={headings} />).toJSON();
        expect(table).toMatchSnapshot();
    });
});
