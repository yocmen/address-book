import { render, screen } from "@testing-library/react";
import UsersListItem from "../Components/usersListItem";
import { generateUsers } from "./Factories/users";

describe("User list item", () => {
  it("shows the avatar", () => {
    const users = generateUsers(1, 1);
    render(<UsersListItem user={users[0]} />);

    expect(
      screen.getByRole("img", { name: `${users[0].login.username}_avatar` })
    ).toBeInTheDocument();
  });

  it("shows the first name", () => {
    const [user] = generateUsers(1, 1);

    render(<UsersListItem user={user} />);

    expect(screen.getByText(user.name.first)).toBeInTheDocument();
  });

  it("shows the last name", () => {
    const [user] = generateUsers(1, 1);

    render(<UsersListItem user={user} />);

    expect(screen.getByText(user.name.last)).toBeInTheDocument();
  });

  it("shows the username", () => {
    const [user] = generateUsers(1, 1);

    render(<UsersListItem user={user} />);

    expect(screen.getByText(user.login.username)).toBeInTheDocument();
  });

  it("shows the email", () => {
    const [user] = generateUsers(1, 1);

    render(<UsersListItem user={user} />);

    expect(screen.getByText(user.email)).toBeInTheDocument();
  });
});
