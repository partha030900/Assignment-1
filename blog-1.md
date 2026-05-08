# How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code **DRY** (Don't Repeat Yourself).


## Pick allows us to choose the properties we need from the master interface and Omit allows to remove the property which we don't need and keeps the rest. So if we had a master interface with lots of properties, there is no need of copy and pasting the properties again in a new type which helps to keep our code DRY.    


```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
type User1 = Pick<User, "id" | "name">;

const picked: User1 = {
  id: 1,
  name: "Partha"
};
type User2 = Omit<User, "password">;

const omitted: User2 = {
  id: 1,
  name: "Partha",
  email: "partha@gmail.com"
};
