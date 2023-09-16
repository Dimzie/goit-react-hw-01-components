import { Img, ItemName, ListItem, SpanStatus } from './FriendsList.styled';

const FriendsItem = ({ friend }) => {
  return (
    <ListItem>
      <SpanStatus selected={friend.isOnline}/>
        <Img src={friend.avatar} alt={friend.name} width="48" />
        <ItemName>{friend.name}</ItemName>
    </ListItem>
  );
};

export default FriendsItem;
