import { Profile } from '../Profile/Profile';
import { ListPilots, PilotCard } from './PilotsList.styled';

export const PilotsList = ({ pilots }) => {
  return (
    <ListPilots>
      {pilots.map(pilot => {
        return (
          <PilotCard key={pilot.id}>
            <Profile pilot={pilot} />
            {/* <Profile image={pilot.avatar} username={pilot.name} email={pilot.email} agq={pilot.age} /> */}
          </PilotCard>
        );
      })}
    </ListPilots>
  );
};
