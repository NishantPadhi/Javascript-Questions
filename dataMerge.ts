/**
 *
Each session has the following fields:

user: User ID of the session's user.
duration: Duration of the session, in minutes.
equipment: Array of equipment used during the sessions, in alphabetical order. There are only 5 different equipments.
Implement a method mergeData, which is used to return a unified view of each user's activities by 
merging data from each user. It has the interface mergeData(sessions). Sessions from the same user should be 
merged into one object. When merging:

Sum up the duration fields.
Combine all the equipment used, de-duplicating the values and sorting alphabetically.
The order of the results should always remain unchanged from the original set, and in the case of 
merging sessions with the same users, the row should take the place of the earliest occurrence of that user. 
The input objects should not be modified.
*/

/**
 * Examples
mergeData(sessions);
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];

*/

/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @return {Array<{user: number, duration: number, equipment: Array<string>}>}
 */
export default function mergeData(sessions) {
  const results = [];
  const sessionsForUser = new Map();

  sessions.forEach((session) => {
    if (sessionsForUser.has(session.user)) {
      const userSession = sessionsForUser.get(session.user);
      userSession.duration += session.duration;
      session.equipment.forEach((equipment) => {
        userSession.equipment.add(equipment);
      });
    } else {
      const clonedSession = {
        ...session,
        equipment: new Set(session.equipment),
      };
      sessionsForUser.set(session.user, clonedSession);
      results.push(clonedSession);
    }
  });

  // Sort equipment of each session and convert back into array.
  return results.map((session) => ({
    ...session,
    equipment: Array.from(session.equipment).sort(),
  }));
}
