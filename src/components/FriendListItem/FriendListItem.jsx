import css from './FriendListItem.module.css';



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