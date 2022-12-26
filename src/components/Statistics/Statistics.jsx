import css from './Statistics.module.css';
import getRandomColor from 'utils/randomColors';
import PropTypes from 'prop-types';


export default function Statistics({ title, stats }) {
  return (
    <div className={css.containerTwo}>
      <section className={css.statistics}>
      {/* <h2 className={css.title}>Upload stats</h2> */}
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stats => (
          <li key={stats.id} className={css.item} style={ {backgroundColor: getRandomColor()}}>
            <span className={css.label}>{stats.label}</span>
            <span className={css.percent}>{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
