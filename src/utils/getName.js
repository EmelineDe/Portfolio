import Resume from "../settings/resume.json";

const names = Resume.basics.name.split(" ");

export const FirstName = names[0];

export const GetLastName = names[names.length - 1];
export const LastName = GetLastName[GetLastName.length - 7];

export const Initials = FirstName.charAt(0)
  .toUpperCase()
  .concat(LastName.charAt(0).toUpperCase());
