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