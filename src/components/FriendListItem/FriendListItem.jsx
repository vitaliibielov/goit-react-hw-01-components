import css from './FriendListItem.module.css';

import PropTypes from "prop-types";


export default function FriendListItem({ id, avatar, isOnline, name }) {
    const status = isOnline ? 'online' : 'offline';
    return (
        <li key={id} className={css.item}>
            <span className={css[status]}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.number,
}