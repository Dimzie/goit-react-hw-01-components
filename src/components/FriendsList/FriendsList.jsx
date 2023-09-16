import FriendsItem from "./FriendsItem";
import { List, Section } from "./FriendsList.styled";

const FriendsList = ({friends}) => {
  return (
    <Section>
      <List>
        {friends.map(friendItem => {
          return <FriendsItem key={friendItem.id} friend={friendItem}/>
        })}
      </List>
    </Section>
  );
};

export default FriendsList;
