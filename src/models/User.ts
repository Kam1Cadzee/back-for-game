import { objectType } from "nexus";

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.name();
  }
});
export default User;
