import { KeyboardTypeOptions } from "react-native";

export type BusinessCardInformation = {
  name: string;
  email: string | null;
  phoneOne: string | null;
  phoneTwo: string | null;
  website: string | null;
  linkedIn: string | null;
  instagram: string | null;
  twitter: string | null;
  facebook: string | null;
  address: string | null;
  title: string | null;
  company: string | null;
};

// export enum BusinessCardInformationField {
//   name = 'name',
//   email = 'email',
//   phoneOne = 'phoneOne',
//   phoneTwo = 'phoneTwo',
//   website = 'website',
//   linkedIn = 'linkedIn',
//   instagram = 'instagram',
//   twitter = 'twitter',
//   facebook = 'facebook',
//   address = 'address',
//   title = 'title',
//   company = 'company',
// }

export type BusinessCardConfiguration = {
  color: string;
};

export type BusinessCardType = {
  info: InputFieldValues;
  config: BusinessCardConfiguration;
}

export type User = {
  email: string;
  firstName: string;
  lastName: string;
}

type Field = {
  isWanted: boolean;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
}

export type SelectionFields = {
  [key: string]: Field
}

export type InputFieldValues = {
  [key: string]: string;
}