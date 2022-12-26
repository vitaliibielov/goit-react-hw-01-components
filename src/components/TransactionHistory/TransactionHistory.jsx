import css from './TransactionHistory.module.css';
import PropTypes from "prop-types"
export default function TransactionHistory ({transactions}) {

    return (
        <div className={css.sectionFour}>
            <table className={css.transactionHistory}>
                <thead>
                    <tr className={css.mainRow}>
                        <th className={css.mainText}>Type</th>
                        <th className={css.mainText}>Amount</th>
                        <th className={css.mainText}>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(({id, type, amount, currency}) => (
                        <tr key={id} className={css.row}>
                            <td className={css.type}>{type}</td>
                            <td className={css.text}>{amount}</td>
                            <td className={css.text}>{currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

TransactionHistory.propTypes = {
	transactions: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
}