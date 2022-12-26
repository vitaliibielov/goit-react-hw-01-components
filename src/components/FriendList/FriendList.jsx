import css from './FriendList.module.css';

import FriendListItems from '../FriendListItem/FriendListItem';

import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    return (
        // <div className={css.containerTwo}></div>
        <ul className={css.List}>
            {friends.map(({id, avatar, name, isOnline}) => <FriendListItems id={id} isOnline={isOnline} name={name} avatar={avatar}/>)}
            
            {/* <!-- Довільна кіл-сть FriendListItem --> */}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }).isRequired
    ).isRequired,
  };
  