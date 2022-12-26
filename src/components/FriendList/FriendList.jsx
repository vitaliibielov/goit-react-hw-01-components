import css from './FriendList.module.css';

import FriendListItems from '../FriendListItem/FriendListItem';

// import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    return (
        // <div className={css.containerTwo}></div>
        <ul className={css.List}>
            {friends.map(friend => <FriendListItems id={friend.id} isOnline={friend.isOnline} name={friend.name} avatar={friend.avatar}/>)}
            
            {/* <!-- Довільна кіл-сть FriendListItem --> */}
        </ul>
    )
}