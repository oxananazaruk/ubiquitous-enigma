import { Profile } from "./Profile"

export const PilotsList = ({pilots}) => {
  return (
      <ul>
          {pilots.map(pilot => {
              return (<li key={pilot.id}>
                   <Profile pilot={pilot} />
                  {/* <Profile image={pilot.avatar} username={pilot.name} email={pilot.email} agq={pilot.age} /> */}
                  </li>)
      })}
    </ul>
  )
}
