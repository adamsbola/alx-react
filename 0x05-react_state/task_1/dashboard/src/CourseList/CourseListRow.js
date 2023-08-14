import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css} from 'aphrodite';



export default function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
    const rowStyle =  {
        backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    };
    return (
        <table className={css(styles.table1)}>
            <tr className={css(styles.tr)} style={rowStyle}>
                {isHeader ? (
                    textSecondCell === null ? (
                        <th colSpan={2}>{textFirstCell}</th>
                    ) : (
                        <>
                            <th>{textFirstCell}</th>
                            <th>{textSecondCell}</th>
                        </>
                    )
                ) : (
                    <>
                        <td>{textFirstCell}</td>
                        <td>{textSecondCell}</td>
                    </>
                )}
            </tr>

        </table>
        
    );
}

const styles = StyleSheet.create({
    table1: {
        marginTop: '2em',
        width: '100%',
        border: '1px solid #ddd',
        fontSize: '1.2rem',
        marginBottom: '15em',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    td: {
        borderBottom: '1px solid #ddd',
        width: '80%',

    },
    tr: {
        textAlign: 'left',
        border: '1px solid #ddd',
    },
    th: {
        width: '80%',
    }
})

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};